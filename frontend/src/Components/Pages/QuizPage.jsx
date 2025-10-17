import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaRedo } from "react-icons/fa";

const questions = [
  {
    question: "How often do you exercise per week?",
    options: ["Never", "1–2 times", "3–5 times", "Every day"],
  },
  {
    question: "How many hours of sleep do you get on average?",
    options: ["Less than 5", "5–7", "7–9", "More than 9"],
  },
  {
    question: "How would you describe your daily diet?",
    options: [
      "Mostly fast food or snacks",
      "Somewhat balanced",
      "Very healthy and home-cooked",
      "I follow a strict diet plan",
    ],
  },
  {
    question: "How much water do you drink daily?",
    options: ["Less than 3 cups", "3–6 cups", "6–8 cups", "More than 8 cups"],
  },
  {
    question: "How often do you feel stressed?",
    options: ["Always", "Often", "Sometimes", "Rarely"],
  },
];

const HealthQuiz = () => {
  const [step, setStep] = useState(0);
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
    setStep(0);
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
      <motion.div
        className="bg-gray-800 rounded-2xl p-6 sm:p-10 max-w-xl w-full shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {!showResults ? (
          <>
            {/* Progress */}
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
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-green-400">
                  {questions[step].question}
                </h2>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(option)}
                      className={`p-3 rounded-lg text-left border ${
                        answers[step] === option
                          ? "bg-green-500 text-gray-900 border-green-400"
                          : "bg-gray-700 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

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
          </>
        ) : (
          // Results
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              Your Health Level: {healthLevel}
            </h2>
            <p className="text-gray-300 mb-6">
              {healthLevel === "Excellent"
                ? "You’re doing fantastic! Keep up your great habits."
                : healthLevel === "Good"
                ? "You’re on the right path — a few small improvements will get you to the next level!"
                : "It’s never too late to start improving. Try moving more, eating better, and getting good sleep!"}
            </p>

            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg flex items-center gap-2 mx-auto hover:bg-green-600 transition"
            >
              <FaRedo /> Retake Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HealthQuiz;
