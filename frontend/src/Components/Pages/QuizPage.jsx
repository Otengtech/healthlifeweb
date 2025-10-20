// src/pages/HealthQuiz.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaRedo,
  FaHeartbeat,
  FaAppleAlt,
  FaBed,
  FaTint,
  FaSmile,
} from "react-icons/fa";

const questions = [
  {
    id: "exercise",
    question: "How often do you exercise per week?",
    options: ["Never", "1–2 times", "3–5 times", "Every day"],
  },
  {
    id: "sleep",
    question: "How many hours of sleep do you get on average?",
    options: ["Less than 5", "5–7", "7–9", "More than 9"],
  },
  {
    id: "diet",
    question: "How would you describe your daily diet?",
    options: [
      "Mostly fast food or snacks",
      "Somewhat balanced",
      "Very healthy and home-cooked",
      "I follow a strict diet plan",
    ],
  },
  {
    id: "hydration",
    question: "How much water do you drink daily?",
    options: ["Less than 3 cups", "3–6 cups", "6–8 cups", "More than 8 cups"],
  },
  {
    id: "stress",
    question: "How often do you feel stressed?",
    options: ["Always", "Often", "Sometimes", "Rarely"],
  },
];

const tips = {
  Excellent: [
    "Keep maintaining your great habits! 🌟",
    "Continue your regular exercise and balanced meals.",
    "Remember to take time for rest and relaxation.",
  ],
  Good: [
    "Add an extra day of exercise each week.",
    "Try going to bed 30 minutes earlier.",
    "Drink at least one more cup of water daily.",
  ],
  "Needs Improvement": [
    "Start with small daily walks.",
    "Replace one junk meal with a healthy option.",
    "Reduce stress with mindfulness or journaling.",
  ],
};

const HealthQuiz = () => {
  const [step, setStep] = useState(-1); // intro step
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option) => {
    const updated = [...answers];
    updated[step] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(-1);
    setShowResults(false);
  };

  // Simple scoring logic
  const score = answers.filter(
    (a) =>
      a === "3–5 times" ||
      a === "Every day" ||
      a === "7–9" ||
      a === "Very healthy and home-cooked" ||
      a === "I follow a strict diet plan" ||
      a === "6–8 cups" ||
      a === "More than 8 cups" ||
      a === "Rarely"
  ).length;

  const healthLevel =
    score >= 4 ? "Excellent" : score >= 2 ? "Good" : "Needs Improvement";

  // Icons for results visualization
  const resultIcons = [
    { icon: <FaHeartbeat />, label: "Exercise" },
    { icon: <FaBed />, label: "Sleep" },
    { icon: <FaAppleAlt />, label: "Diet" },
    { icon: <FaTint />, label: "Hydration" },
    { icon: <FaSmile />, label: "Stress" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-10 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {step === -1 && !showResults && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 bg-gray-800/80 rounded-3xl p-8 shadow-xl"
            >
              <h1 className="text-4xl font-bold text-green-400">
                Welcome to Your Health Quiz 🌱
              </h1>
              <p className="text-gray-300 text-lg">
                In just a few questions, we’ll assess your overall wellness
                based on your lifestyle habits.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(0)}
                className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 transition"
              >
                Start Quiz
              </motion.button>
            </motion.div>
          )}

          {/* Main Quiz */}
          {step >= 0 && !showResults && (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/80 rounded-3xl p-8 shadow-xl"
            >
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((step + 1) / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold mb-6 text-green-400">
                {questions[step].question}
              </h2>

              <div className="flex flex-col gap-3">
                {questions[step].options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(option)}
                    className={`p-3 rounded-lg text-left border transition ${
                      answers[step] === option
                        ? "bg-green-500 text-gray-900 border-green-400"
                        : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50"
                >
                  <FaArrowLeft /> Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 disabled:opacity-50"
                >
                  {step === questions.length - 1 ? "Finish" : "Next"}{" "}
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* Results */}
          {showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/80 rounded-3xl p-8 shadow-xl text-center"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">
                Your Health Level: {healthLevel}
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                {healthLevel === "Excellent"
                  ? "🌟 You’re doing fantastic! Keep up your great habits."
                  : healthLevel === "Good"
                  ? "👍 You’re on the right path — a few small improvements will get you to the next level!"
                  : "💪 It’s never too late to start improving. Begin with small daily habits to boost your wellbeing!"}
              </p>

              {/* Visual Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {resultIcons.map((r, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-700/60 p-4 rounded-xl"
                  >
                    <div className="text-green-400 text-3xl mb-2">{r.icon}</div>
                    <span className="text-sm text-gray-300">{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Tips Section */}
              <div className="text-left mt-6 bg-gray-700/40 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  Recommendations:
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {tips[healthLevel].map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={restartQuiz}
                whileHover={{ scale: 1.1 }}
                className="mt-8 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg flex items-center gap-2 mx-auto hover:bg-green-600 transition"
              >
                <FaRedo /> Retake Quiz
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HealthQuiz;
