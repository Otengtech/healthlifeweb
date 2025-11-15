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
  FaStar,
  FaCheckCircle,
  FaRunning,
  FaSeedling,
} from "react-icons/fa";

const questions = [
  {
    id: "exercise",
    question: "How often do you exercise per week?",
    options: ["Never", "1–2 times", "3–5 times", "Every day"],
    icon: <FaRunning className="text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "sleep",
    question: "How many hours of sleep do you get on average?",
    options: ["Less than 5", "5–7", "7–9", "More than 9"],
    icon: <FaBed className="text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
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
    icon: <FaAppleAlt className="text-green-400" />,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "hydration",
    question: "How much water do you drink daily?",
    options: ["Less than 3 cups", "3–6 cups", "6–8 cups", "More than 8 cups"],
    icon: <FaTint className="text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "stress",
    question: "How often do you feel stressed?",
    options: ["Always", "Often", "Sometimes", "Rarely"],
    icon: <FaSmile className="text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

const tips = {
  Excellent: [
    "Maintain your consistent exercise routine",
    "Keep prioritizing quality sleep and nutrition",
    "Continue practicing stress management techniques",
    "Stay hydrated and listen to your body's needs",
  ],
  Good: [
    "Add one more workout session per week",
    "Aim for 7-9 hours of sleep consistently",
    "Incorporate more whole foods into your diet",
    "Practice daily mindfulness or meditation",
  ],
  "Needs Improvement": [
    "Start with 15-minute daily walks",
    "Replace one processed meal with fresh options",
    "Set a consistent bedtime routine",
    "Try breathing exercises for stress relief",
  ],
};

const HealthQuiz = () => {
  const [step, setStep] = useState(-1);
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

  const resultIcons = [
    { icon: <FaRunning className="text-blue-400" />, label: "Exercise" },
    { icon: <FaBed className="text-purple-400" />, label: "Sleep" },
    { icon: <FaAppleAlt className="text-green-400" />, label: "Diet" },
    { icon: <FaTint className="text-cyan-400" />, label: "Hydration" },
    { icon: <FaSmile className="text-yellow-400" />, label: "Stress" },
  ];

  const getHealthGradient = (level) => {
    switch (level) {
      case "Excellent": return "from-emerald-500 to-cyan-500";
      case "Good": return "from-blue-500 to-purple-500";
      case "Needs Improvement": return "from-orange-500 to-red-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-16 md:28 lg:px-28 py-8">
      {/* Modern Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-200 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
            Health Assessment
          </h1>
          <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Discover your wellness level and get personalized recommendations
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {/* Introduction Screen */}
          {step === -1 && !showResults && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50"
            >
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl mb-4">
                  <FaHeartbeat className="text-white text-3xl" />
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Wellness Check
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  Take this quick 5-question assessment to evaluate your current health habits 
                  and receive personalized tips for improvement.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  {[{ icon: FaCheckCircle, text: "5 Quick Questions" }, { icon: FaStar, text: "Instant Results" }, { icon: FaSeedling, text: "Personalized Tips" }].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4">
                      <item.icon className="text-emerald-400 text-xl" />
                      <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(0)}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                >
                  Start Assessment
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Quiz Questions */}
          {step >= 0 && !showResults && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50"
            >
              {/* Progress Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${questions[step].color}`}>
                    {questions[step].icon}
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">Question {step + 1} of {questions.length}</span>
                    <h3 className="text-slate-200 font-semibold">{questions[step].id}</h3>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">
                {questions[step].question}
              </h2>

              {/* Options */}
              <div className="grid gap-3 mb-8">
                {questions[step].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                      answers[step] === option
                        ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 text-emerald-100 shadow-lg shadow-emerald-500/10"
                        : "bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[step] === option 
                          ? "bg-emerald-500 border-emerald-500" 
                          : "border-slate-500"
                      }`}>
                        {answers[step] === option && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 text-slate-400 rounded-xl hover:bg-slate-700/50 disabled:opacity-30 transition-all border border-slate-700/50"
                  whileHover={{ scale: step === 0 ? 1 : 1.05 }}
                >
                  <FaArrowLeft /> Previous
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 disabled:opacity-30 transition-all shadow-lg shadow-emerald-500/25"
                  whileHover={{ scale: !answers[step] ? 1 : 1.05 }}
                >
                  {step === questions.length - 1 ? "See Results" : "Next"}
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Results Screen */}
          {showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50"
            >
              {/* Results Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${getHealthGradient(healthLevel)} rounded-3xl mb-6 shadow-lg`}
                >
                  <FaHeartbeat className="text-white text-4xl" />
                </motion.div>
                
                <h2 className="text-4xl font-bold text-slate-100 mb-3">
                  Your Wellness Score
                </h2>
                
                <div className={`inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${getHealthGradient(healthLevel)} rounded-full text-white font-semibold text-lg mb-4`}>
                  {healthLevel}
                </div>
                
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  {healthLevel === "Excellent"
                    ? "Outstanding! Your health habits are exemplary and worth maintaining."
                    : healthLevel === "Good"
                    ? "Great foundation! A few adjustments can elevate your wellness to the next level."
                    : "Every journey begins with a single step. Small changes can make a big difference!"}
                </p>
              </div>

              {/* Score Visualization */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {resultIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <span className="text-slate-300 text-sm font-medium text-center">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  <FaSeedling className="text-emerald-400" />
                  Personalized Recommendations
                </h3>
                <div className="grid gap-3">
                  {tips[healthLevel].map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                    >
                      <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center mt-8"
              >
                <motion.button
                  onClick={restartQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <FaRedo />
                  Take Assessment Again
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HealthQuiz;