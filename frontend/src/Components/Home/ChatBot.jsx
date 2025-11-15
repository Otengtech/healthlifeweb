import React, { useState, useEffect, useRef } from "react";
import { 
  FaPaperPlane, 
  FaComments, 
  FaRobot, 
  FaUser, 
  FaTrash, 
  FaTimes,
  FaLightbulb,
  FaHeart,
  FaDumbbell,
  FaAppleAlt,
  FaBed,
  FaTint
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced response knowledge base with categories
const responses = {
  greeting: {
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    responses: [
      "Hello! I'm your HealthLife Assistant. How can I help you today? 🌟",
      "Hi there! Ready to work on your health goals? 💪",
      "Hey! Great to see you. What health topic can we explore today?"
    ]
  },
  nutrition: {
    patterns: ["diet", "nutrition", "food", "eat", "meal", "breakfast", "lunch", "dinner", "protein", "carbs", "vitamins", "sugar", "junk"],
    responses: [
      "A balanced diet includes lean protein, whole grains, vegetables, fruits, and healthy fats. 🥗",
      "Focus on whole foods and avoid processed items. Colorful plates usually mean balanced nutrition! 🌈",
      "Remember to stay hydrated and include fiber-rich foods for better digestion. 💧"
    ]
  },
  fitness: {
    patterns: ["exercise", "workout", "fitness", "running", "walking", "gym", "yoga", "stretching"],
    responses: [
      "Regular exercise boosts energy and mood! Aim for 150 minutes of moderate activity weekly. 🏃‍♂️",
      "Consistency is key. Even 20-30 minutes daily can transform your fitness journey! ⏱️",
      "Mix cardio, strength training, and flexibility exercises for best results. 🔄"
    ]
  },
  wellness: {
    patterns: ["sleep", "stress", "mental", "hydration", "water", "motivation", "weight"],
    responses: [
      "Quality sleep (7-9 hours) is crucial for recovery and mental clarity. 😴",
      "Manage stress with breathing exercises, meditation, or short walks. 🧘‍♀️",
      "Stay hydrated! Water supports every function in your body. 💦"
    ]
  },
  general: {
    patterns: ["about", "help", "what can you do", "advantages"],
    responses: [
      "I can help with nutrition advice, workout tips, sleep optimization, stress management, and overall wellness guidance! 🌱",
      "I'm here to support your health journey with evidence-based advice and motivation. 💫",
      "Ask me about exercise routines, meal planning, hydration, sleep quality, or mental wellness! 🎯"
    ]
  },
  default: {
    responses: [
      "I'm learning more about health topics every day! For now, I can help with nutrition, exercise, sleep, or stress management. 🌟",
      "That's an interesting question! I specialize in fitness, nutrition, hydration, and wellness topics. 💡",
      "I'm still expanding my knowledge in that area. Try asking about workout routines, healthy eating, or sleep improvement! 📚"
    ]
  }
};

// Quick action buttons for common questions
const quickActions = [
  { icon: <FaAppleAlt />, text: "Nutrition tips", query: "What should I eat for better health?" },
  { icon: <FaDumbbell />, text: "Workout ideas", query: "Suggest a quick workout routine" },
  { icon: <FaBed />, text: "Sleep quality", query: "How can I improve my sleep?" },
  { icon: <FaTint />, text: "Hydration", query: "How much water should I drink daily?" },
  { icon: <FaHeart />, text: "Stress relief", query: "Ways to reduce stress" },
  { icon: <FaLightbulb />, text: "Wellness advice", query: "General wellness tips" }
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Load chat history on mount
  useEffect(() => {
    const saved = localStorage.getItem("healthChatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          sender: "bot",
          text: "Hello! I'm your HealthLife Assistant. I can help with nutrition, fitness, sleep, and wellness advice. What would you like to know? 🌟",
          timestamp: new Date().toISOString()
        },
      ]);
    }
  }, []);

  // Save to localStorage and scroll to bottom
  useEffect(() => {
    localStorage.setItem("healthChatMessages", JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Find matching response category
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(responses)) {
      if (category === 'default') continue;
      
      const hasMatch = data.patterns.some(pattern => msg.includes(pattern));
      if (hasMatch) {
        const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
        return randomResponse;
      }
    }
    
    // Default response
    const defaultResponses = responses.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const text = input.trim();
    const userMessage = { 
      sender: "user", 
      text,
      timestamp: new Date().toISOString()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const botReply = getBotResponse(text);
      setIsTyping(false);
      
      setTimeout(() => {
        setMessages((prev) => [...prev, { 
          sender: "bot", 
          text: botReply,
          timestamp: new Date().toISOString()
        }]);
        setLoading(false);
      }, 500);
    }, 1000);
  };

  const handleQuickAction = (query) => {
    setInput(query);
  };

  const handleClearChat = () => {
    localStorage.removeItem("healthChatMessages");
    setMessages([
      { 
        sender: "bot", 
        text: "Chat cleared! I'm here to help with your health journey. What would you like to know? 💫",
        timestamp: new Date().toISOString()
      },
    ]);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl z-50 group"
          >
            <FaComments size={24} />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
              💬
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] max-h-[80vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden z-50 border border-white/20 backdrop-blur-lg"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <FaRobot className="text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">HealthLife Assistant</h1>
                  <p className="text-xs text-green-200 opacity-90">
                    {isTyping ? "Typing..." : "Online • Ready to help"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClearChat}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                  title="Clear chat"
                >
                  <FaTrash size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition"
                  title="Close chat"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.sender === "user" 
                        ? "bg-gradient-to-r from-green-500 to-emerald-600" 
                        : "bg-gradient-to-r from-gray-400 to-gray-500"
                    }`}>
                      {msg.sender === "user" ? <FaUser size={14} /> : <FaRobot size={14} />}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === "user" ? "text-green-200" : "text-gray-500"
                      }`}>
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-500">
                      <FaRobot size={14} className="text-white" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-white border border-gray-200 rounded-bl-none">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 2 && (
              <div className="p-3 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-medium">Quick questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickAction(action.query)}
                      className="flex items-center gap-2 p-2 text-xs bg-gray-100 hover:bg-green-100 text-gray-700 rounded-lg transition-colors border border-gray-200"
                    >
                      <span className="text-green-600">{action.icon}</span>
                      <span className="truncate">{action.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about health, fitness, nutrition..."
                  className="flex-1 px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={loading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className={`p-3 rounded-full shadow-md transition ${
                    loading || !input.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  } text-white`}
                >
                  <FaPaperPlane size={16} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                I can help with exercise, nutrition, sleep, and wellness advice
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;