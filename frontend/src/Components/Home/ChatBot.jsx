import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaComments } from "react-icons/fa";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Load chat history
  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        { sender: "bot", text: "👋 Hi! I'm your HealthLife Assistant. How can I help you today?" },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // ✅ Handle send
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Send to backend API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      // Add AI reply
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Sorry, I couldn’t process that." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "There was a network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    localStorage.removeItem("chatMessages");
    setMessages([
      { sender: "bot", text: "Chat cleared! How can I help you now?" },
    ]);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        >
          <FaComments size={16} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">HealthLife Assistant 💬</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="text-sm px-2 py-1 bg-green-700 hover:bg-green-800 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-bold leading-none"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-sm italic">Thinking...</div>
            )}
          </div>

          <div className="p-3 bg-white border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about health, food, or fitness..."
              className="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
              disabled={loading}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
