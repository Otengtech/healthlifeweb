import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaTint,
  FaBed,
  FaAppleAlt,
  FaTimes,
} from "react-icons/fa";

const BMItool = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calcBmi = () => {
    if (weight && height) {
      const value = (weight / (height / 100) ** 2).toFixed(1);
      setBmi(value);
    }
  };

  return (
    <div className="text-center space-y-4">
      <input
        type="number"
        placeholder="Weight (kg)"
        className="p-2 w-full rounded bg-gray-700 text-white outline-none"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        className="p-2 w-full rounded bg-gray-700 text-white outline-none"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button
        onClick={calcBmi}
        className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-600 transition"
      >
        Calculate
      </button>
      {bmi && (
        <p className="text-lg mt-4">
          Your BMI: <span className="text-green-400 font-bold">{bmi}</span>
        </p>
      )}
    </div>
  );
};
const WaterTool = () => {
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calcWater = () => {
    if (weight) {
      const liters = (weight * 0.033).toFixed(2);
      setResult(liters);
    }
  };

  return (
    <div className="text-center space-y-4">
      <input
        type="number"
        placeholder="Weight (kg)"
        className="p-2 w-full rounded bg-gray-700 text-white outline-none"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button
        onClick={calcWater}
        className="px-4 py-2 bg-blue-500 text-gray-900 font-semibold rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      {result && (
        <p className="text-lg mt-4">
          You should drink about{" "}
          <span className="text-blue-400 font-bold">{result} L</span> of water
          daily.
        </p>
      )}
    </div>
  );
};

const SleepTool = () => {
  const [hours, setHours] = useState("");
  const [message, setMessage] = useState("");

  const checkSleep = () => {
    if (hours) {
      if (hours >= 7 && hours <= 9)
        setMessage("Perfect! You’re getting healthy sleep.");
      else if (hours < 7)
        setMessage("Try to get a bit more rest for better recovery.");
      else
        setMessage("That’s a lot! Make sure your sleep quality is good too.");
    }
  };

  return (
    <div className="text-center space-y-4">
      <input
        type="number"
        placeholder="Hours slept last night"
        className="p-2 w-full rounded bg-gray-700 text-white outline-none"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button
        onClick={checkSleep}
        className="px-4 py-2 bg-purple-500 text-gray-900 font-semibold rounded hover:bg-purple-600 transition"
      >
        Check
      </button>
      {message && <p className="text-lg mt-4 text-purple-300">{message}</p>}
    </div>
  );
};

const CalorieTool = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState(null);

  const calcCalories = () => {
    if (weight) {
      const base = weight * 24;
      const multiplier =
        activity === "low" ? 1.2 : activity === "moderate" ? 1.55 : 1.9;
      setResult((base * multiplier).toFixed(0));
    }
  };

  return (
    <div className="text-center space-y-4">
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
      <button
        onClick={calcCalories}
        className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-600 transition"
      >
        Calculate
      </button>
      {result && (
        <p className="text-lg mt-4">
          Estimated daily calories:{" "}
          <span className="text-green-400 font-bold">{result}</span> kcal
        </p>
      )}
    </div>
  );
};
// ---------- TOOLS DATA ----------
const tools = [
  {
    id: 1,
    title: "BMI Calculator",
    description:
      "Check your Body Mass Index and see if your weight is healthy.",
    icon: <FaHeartbeat className="text-red-500 text-5xl" />,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    component: <BMItool />,
  },
  {
    id: 2,
    title: "Water Intake Tracker",
    description:
      "Find out how much water you should drink daily based on your weight.",
    icon: <FaTint className="text-blue-400 text-5xl" />,
    image:
      "https://images.unsplash.com/photo-1613470204439-d31d6a3cc3fa?auto=format&fit=crop&w=800&q=80",
    component: <WaterTool />,
  },
  {
    id: 3,
    title: "Sleep Quality Check",
    description: "Assess your sleep quality and get improvement tips.",
    icon: <FaBed className="text-purple-400 text-5xl" />,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    component: <SleepTool />,
  },
  {
    id: 4,
    title: "Calorie Needs Estimator",
    description:
      "Estimate how many calories you need daily based on your activity level.",
    icon: <FaAppleAlt className="text-green-400 text-5xl" />,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    component: <CalorieTool />,
  },
];

// ---------- TOOLS COMPONENTS ----------

// ---------- MAIN PAGE ----------
const HealthTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-400 mb-10">
        Health Tools
      </h1>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-green-500/20 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedTool(tool)}
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-5 flex flex-col items-center text-center space-y-3">
              {tool.icon}
              <h2 className="text-lg font-bold text-green-400">{tool.title}</h2>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-lg relative text-center shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-green-400"
              >
                <FaTimes size={22} />
              </button>

              <h2 className="text-2xl font-bold text-green-400 mb-6">
                {selectedTool.title}
              </h2>
              {selectedTool.component}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HealthTools;
