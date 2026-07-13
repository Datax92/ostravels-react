import "dotenv/config";
import express from "express";
import cors from "cors";
import { buildKnowledgeBase } from "../src/data/knowledgeBase.js";

const app = express();
app.use(cors());
app.use(express.json());

const knowledgeBase = buildKnowledgeBase(); // built once at startup

const SYSTEM_PROMPT = `You are the visa assistant for O.S Travel & Tours, a travel agency in Islamabad, Pakistan.

Answer ONLY using the DATA below. This is the complete and only source of truth.
- Never invent fees, requirements, processing times, or embassy details not in DATA.
- If the answer isn't in DATA, say you don't have that info and suggest contacting O.S Travel & Tours directly at 051-2120701.
- Keep answers short and direct. Use bullet points for requirements/fees.
- If asked about a country not in DATA, say O.S Travel & Tours doesn't currently list that country and suggest contacting them.

DATA:
${knowledgeBase}`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("Missing GEMINI_API_KEY in server/.env");
      return res.status(500).json({ error: "Server not configured with an API key" });
    }

    // Gemini uses role "model" instead of "assistant", and wraps text in a "parts" array
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const model = "gemini-2.5-flash"; // free-tier model
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
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
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't generate a reply.";
    res.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Chat server running on http://localhost:${PORT}`));
