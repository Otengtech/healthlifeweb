import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaComments } from "react-icons/fa";

// Extended response knowledge base
const responses = {
  hello: "Hello! I’m your HealthLife Assistant. How can I help you today?",
  good: "That's nice, how can I help you?",
  well: "That's nice, how can I help you?",
  fine: "That's nice, how can I help you?",
  great: "That's nice, how can I help you?",
  hi: "Hello! How are you feeling today?",
  thank: "You're welcome! Let me know if you have any other questions.",
  hey: "Hey there! Need some advice on fitness or nutrition?",
  about: "I’m here to help you with health tips, nutrition advice, fitness motivation, and more. Ask me anything related to a healthy lifestyle!",
  advantages: "Using a chatbot like me can provide instant answers, personalized advice, and 24/7 support for your health and wellness journey.",
  exercise:
    "Regular exercise improves strength, endurance, and mood. Try at least 150 minutes of moderate activity per week.",
  workout:
    "A good workout combines strength, cardio, and flexibility. Start small and increase gradually.",
  fitness:
    "Fitness is about consistency. Even 20 minutes of activity daily makes a big difference over time.",
  running:
    "Running strengthens your heart and lungs. Warm up first and stay hydrated before and after.",
  walking:
    "Walking is one of the best low-impact exercises. Aim for 8,000–10,000 steps a day.",
  stretching:
    "Stretching improves flexibility and reduces soreness. Stretch major muscles after every workout.",
  gym: "The gym can help you build strength safely. Focus on proper form, not just heavy weights.",
  yoga: "Yoga improves flexibility, balance, and stress control. Even 10 minutes a day can help.",
  diet: "A balanced diet includes lean protein, whole grains, vegetables, fruits, and healthy fats. Avoid extreme restrictions.",
  nutrition:
    "Nutrition is about balance and variety. Include fiber, vitamins, and adequate water daily.",
  protein:
    "Protein builds muscles and repairs tissue. Great sources: chicken, beans, eggs, tofu, and lentils.",
  carbs:
    "Carbohydrates are your main energy source. Choose complex carbs like oats, brown rice, and quinoa.",
  fats: "Healthy fats support your brain and hormones. Choose avocados, olive oil, nuts, and fish.",
  vitamins:
    "Vitamins like A, C, D, E, and B-complex support immune and metabolic functions. Eat colorful foods to get them.",
  hydration:
    "Staying hydrated supports every body function. Aim for about 2–3 liters of water per day.",
  water:
    "Drinking enough water helps regulate temperature and energy. Keep a bottle nearby throughout your day.",
  sleep:
    "Adults need 7–9 hours of quality sleep. Maintain a regular sleep schedule and avoid screens before bed.",
  stress:
    "Stress is normal, but managing it matters. Try breathing exercises, stretching, or short walks to reset your mind.",
  mental:
    "Mental health matters. Journaling, talking to someone, and relaxation techniques can help.",
  food: "Healthy eating means balance. Choose real foods, limit processed items, and listen to your hunger signals.",
  weight:
    "Weight management is about consistency: eat balanced meals and stay active regularly.",
  loss: "For healthy weight loss, combine moderate calorie reduction with regular physical activity and adequate sleep.",
  gain: "To gain weight healthily, increase calories with nutritious foods like nuts, avocados, eggs, and whole grains.",
  breakfast:
    "Breakfast kick-starts your metabolism. Choose whole grains, fruit, and protein for sustained energy.",
  lunch:
    "A balanced lunch could include lean protein, whole grains, and vegetables to keep your energy steady.",
  dinner:
    "Keep dinner light but nourishing. Include veggies, a lean protein, and avoid heavy carbs close to bedtime.",
  sugar:
    "Too much sugar increases fatigue and cravings. Opt for fruits or natural sweeteners in moderation.",
  junk: "Junk food is fine occasionally, but limit it. Focus on nutritious meals most of the time.",
  smoking:
    "Quitting smoking improves heart and lung health, energy levels, and overall lifespan.",
  alcohol:
    "Moderate alcohol intake if you drink. Too much can affect sleep, hydration, and organ health.",
  motivation:
    "Start small and celebrate progress. Fitness and wellness are built on daily habits, not perfection.",
  default:
    "I'm not sure about that yet, but I can help with exercise, nutrition, stress, sleep, hydration, or healthy habits.",
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Load chat history on mount
  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          sender: "bot",
          text: "Hello! I’m your HealthLife Assistant. How can I help you today?",
        },
      ]);
    }
  }, []);

  // Save to localStorage on every update
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI delay
    setTimeout(() => {
      const msg = text.toLowerCase();
      const key = Object.keys(responses).find((k) => msg.includes(k));
      const botReply = responses[key] || responses.default;
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setLoading(false);
    }, 700);
  };

  const handleClearChat = () => {
    localStorage.removeItem("chatMessages");
    setMessages([
      { sender: "bot", text: "Chat cleared. How can I help you now?" },
    ]);
  };

  return (
    <>
      {/* Floating chat icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-16 right-16 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
        >
          <FaComments size={26} />
        </button>
      )}

      {/* Chat box */}
      {isOpen && (
        <div className="fixed bottom-6 right-1 w-95 mx-2 sm:w-96 max-h-[500px] flex flex-col rounded-2xl shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 flex justify-between items-center">
            <h1 className="font-bold text-lg">HealthLife Assistant</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="text-sm px-2 py-1 bg-gray-700 hover:bg-green-800 rounded transition"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl bg-gray-700 px-2 py-1 font-bold leading-none hover:text-gray-200 transition"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-300 scroll-smooth">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] text-sm shadow-sm transition-transform transform hover:scale-[1.02] ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm italic animate-pulse">
                Typing...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 bg-gray-900 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about health, food, or fitness..."
              className="flex-1 px-4 py-2 text-sm bg-gray-900 border border-green-500 rounded-full text-white placeholder:text-gray-200 focus:outline-none transition"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition shadow-md hover:shadow-lg"
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
