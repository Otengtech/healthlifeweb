// src/pages/HealthTools.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaTint,
  FaBed,
  FaAppleAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

// -------------------- BMI TOOL --------------------
const BMItool = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calcBmi = () => {
    if (!weight || !height) return;
    const result = (weight / (height / 100) ** 2).toFixed(1);
    setBmi(result);
    if (result < 18.5) setCategory("Underweight");
    else if (result < 24.9) setCategory("Normal weight");
    else if (result < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400 mb-3">
        Calculate your Body Mass Index (BMI) to understand your weight range.
      </p>
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-2 flex-1 rounded bg-gray-700 text-white outline-none"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="p-2 flex-1 rounded bg-gray-700 text-white outline-none"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        onClick={calcBmi}
        className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-600 transition"
      >
        Calculate BMI
      </button>

      {bmi && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 space-y-2"
        >
          <p className="text-lg">
            Your BMI: <span className="text-green-400 font-bold">{bmi}</span>
          </p>
          <p className="text-gray-300">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="text-sm text-gray-400 mt-3">
            🩺 Tip: A healthy lifestyle includes balanced meals and daily activity.
          </p>
        </motion.div>
      )}
    </div>
  );
};

// -------------------- WATER TOOL --------------------
const WaterTool = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState(null);

  const calcWater = () => {
    if (!weight) return;
    const base = weight * 0.033;
    const multiplier =
      activity === "low" ? 1 : activity === "moderate" ? 1.2 : 1.4;
    setResult((base * multiplier).toFixed(2));
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">
        Find out how much water you should drink daily 💧
      </p>
      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-2 w-full rounded bg-gray-700 text-white outline-none"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select
          className="p-2 w-full rounded bg-gray-700 text-white"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="low">Low Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="high">High Activity</option>
        </select>
      </div>
      <button
        onClick={calcWater}
        className="px-4 py-2 bg-blue-500 text-gray-900 font-semibold rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5"
        >
          <p className="text-lg">
            You should drink about{" "}
            <span className="text-blue-400 font-bold">{result} L</span> daily.
          </p>
          <ul className="text-left text-gray-400 text-sm mt-3 list-disc list-inside space-y-1">
            <li>Drink a glass before each meal.</li>
            <li>Carry a water bottle when active.</li>
            <li>Stay hydrated during hot days.</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

// -------------------- SLEEP TOOL --------------------
const SleepTool = () => {
  const [hours, setHours] = useState("");
  const [msg, setMsg] = useState("");
  const [tip, setTip] = useState("");

  const check = () => {
    if (!hours) return;
    if (hours < 7) {
      setMsg("You might not be getting enough sleep 😴");
      setTip("Try relaxing 1 hour before bed — avoid screens & caffeine.");
    } else if (hours <= 9) {
      setMsg("Perfect! You’re getting healthy sleep 🌙");
      setTip("Keep a consistent sleep schedule for best results.");
    } else {
      setMsg("Too much sleep can make you sluggish 💤");
      setTip("Try staying active and getting sunlight during the day.");
    }
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">Check your sleep quality and tips 🛏️</p>
      <input
        type="number"
        placeholder="Hours slept last night"
        className="p-2 w-full rounded bg-gray-700 text-white outline-none"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button
        onClick={check}
        className="px-4 py-2 bg-purple-500 text-gray-900 font-semibold rounded hover:bg-purple-600 transition"
      >
        Analyze
      </button>
      {msg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5 space-y-2"
        >
          <p className="text-lg text-purple-300">{msg}</p>
          <p className="text-sm text-gray-400">{tip}</p>
        </motion.div>
      )}
    </div>
  );
};

// -------------------- CALORIE TOOL --------------------
const CalorieTool = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [result, setResult] = useState(null);

  const calcCalories = () => {
    if (!weight) return;
    const base = weight * 24;
    const mult =
      activity === "low" ? 1.2 : activity === "moderate" ? 1.55 : 1.9;
    let total = base * mult;

    if (goal === "lose") total -= 500;
    else if (goal === "gain") total += 500;

    setResult(total.toFixed(0));
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">
        Estimate your daily calorie needs 🔥
      </p>
      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-2 w-full rounded bg-gray-700 text-white outline-none"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <select
          className="p-2 w-full rounded bg-gray-700 text-white"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="low">Low Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="high">High Activity</option>
        </select>
        <select
          className="p-2 w-full rounded bg-gray-700 text-white"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
      </div>

      <button
        onClick={calcCalories}
        className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-600 transition"
      >
        Calculate
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-5"
        >
          <p className="text-lg">
            Estimated calories:{" "}
            <span className="text-green-400 font-bold">{result}</span> kcal/day
          </p>
          <p className="text-sm text-gray-400 mt-3">
            🍽️ For best results, track your meals and include whole foods.
          </p>
        </motion.div>
      )}
    </div>
  );
};

// -------------------- MAIN TOOLS CONFIG --------------------
const tools = [
  {
    id: 1,
    title: "BMI Calculator",
    color: "from-green-400 to-emerald-600",
    icon: <FaHeartbeat className="text-5xl" />,
    component: <BMItool />,
  },
  {
    id: 2,
    title: "Water Tracker",
    color: "from-blue-400 to-blue-600",
    icon: <FaTint className="text-5xl" />,
    component: <WaterTool />,
  },
  {
    id: 3,
    title: "Sleep Check",
    color: "from-purple-400 to-purple-600",
    icon: <FaBed className="text-5xl" />,
    component: <SleepTool />,
  },
  {
    id: 4,
    title: "Calorie Estimator",
    color: "from-lime-400 to-green-600",
    icon: <FaAppleAlt className="text-5xl" />,
    component: <CalorieTool />,
  },
];

// -------------------- MAIN PAGE --------------------
const HealthTools = () => {
  const [current, setCurrent] = useState(0);
  const [showTool, setShowTool] = useState(false);

  const nextTool = () => setCurrent((prev) => (prev + 1) % tools.length);
  const prevTool = () =>
    setCurrent((prev) => (prev - 1 + tools.length) % tools.length);

  const tool = tools[current];

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400"
      >
        Explore Your Health Tools
      </motion.h1>

      <div className="relative w-full max-w-3xl flex items-center justify-center">
        <button
          onClick={prevTool}
          className="absolute left-0 text-green-400 hover:text-green-300"
        >
          <FaChevronLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full bg-gradient-to-br ${tool.color} rounded-3xl p-10 text-center shadow-xl cursor-pointer`}
            onClick={() => setShowTool(true)}
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-gray-900/30 rounded-full"
              >
                {tool.icon}
              </motion.div>
              <h2 className="text-3xl font-bold">{tool.title}</h2>
              <p className="text-white/90 text-sm sm:text-base">
                Tap to open this tool and start exploring.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextTool}
          className="absolute right-0 text-green-400 hover:text-green-300"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showTool && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 w-full max-w-lg relative shadow-2xl overflow-y-auto max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setShowTool(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-green-400"
              >
                <FaTimes size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-green-400">
                {tool.title}
              </h2>
              {tool.component}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HealthTools;
