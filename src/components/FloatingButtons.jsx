import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_NUMBER = "923335542877";

const WELCOME = {
  role: "assistant",
  content: "Hi! I'm the O.S Travel & Tours visa assistant. Ask me about visa fees, requirements, or processing times for any country we handle.",
};

export default function FloatingButtons() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.filter((m) => m !== WELCOME) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "Sorry, something went wrong." }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Connection issue — please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <div className="floating__buttons">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating__btn floating__btn--whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="floating__btn-pulse"></span>
          <i className="ri-whatsapp-fill"></i>
        </a>

        <button
          type="button"
          onClick={() => setChatOpen((o) => !o)}
          className="floating__btn floating__btn--chatbot"
          aria-label={chatOpen ? "Close chat" : "Chat with our bot"}
        >
          <i className={chatOpen ? "ri-close-line" : "ri-customer-service-2-fill"}></i>
        </button>
      </div>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="chatbot__window"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="chatbot__header">
              <p className="chatbot__title">Visa Assistant</p>
              <p className="chatbot__subtitle">O.S Travel &amp; Tours</p>
            </div>

            <div className="chatbot__messages" ref={scrollRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chatbot__bubble ${m.role}`}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="chatbot__bubble assistant chatbot__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>

            <div className="chatbot__input-row">
              <textarea
                rows={1}
                placeholder="Ask about a visa..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
              />
              <button onClick={send} disabled={loading || !input.trim()} aria-label="Send">
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
