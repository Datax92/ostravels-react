import { buildKnowledgeBase } from "../src/data/knowledgeBase.js";

// Build the knowledge base once when the serverless container starts
const knowledgeBase = buildKnowledgeBase();

const SYSTEM_PROMPT = `You are the visa assistant for O.S Travel & Tours, a travel agency in Islamabad, Pakistan.

Answer ONLY using the DATA below. This is the complete and only source of truth.
- Never invent fees, requirements, processing times, or embassy details not in DATA.
- If the answer isn't in DATA, say you don't have that info and suggest contacting O.S Travel & Tours directly at 0309 1111311.
- Keep answers short and direct. Use bullet points for requirements/fees.
- If asked about a country not in DATA, say O.S Travel & Tours doesn't currently list that country and suggest contacting them.

DATA:
${knowledgeBase}`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY in environment variables");
      return res.status(500).json({ error: "Gemini API key is not configured" });
    }

    // Format messages for Gemini API
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const model = "gemini-2.5-flash";
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.2 },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errText);
      return res.status(502).json({ error: "Upstream chat service failed" });
    }

    const data = await geminiRes.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Vercel Serverless Function Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
