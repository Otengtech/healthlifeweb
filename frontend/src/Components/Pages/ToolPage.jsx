// src/pages/HealthTools.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaTint,
  FaBed,
  FaAppleAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExclamationTriangle,
  FaSave,
  FaHistory,
} from "react-icons/fa";

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [value, setStoredValue];
};

// Enhanced BMI Tool with better validation and history
const BMItool = () => {
  const [weight, setWeight] = useLocalStorage("bmiWeight", "");
  const [height, setHeight] = useLocalStorage("bmiHeight", "");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useLocalStorage("bmiHistory", []);

  const getBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) return { text: "Underweight", color: "text-yellow-400", advice: "Consider consulting a nutritionist for healthy weight gain strategies." };
    else if (bmiValue < 24.9) return { text: "Normal weight", color: "text-green-400", advice: "Great! Maintain your healthy lifestyle with balanced nutrition and regular exercise." };
    else if (bmiValue < 29.9) return { text: "Overweight", color: "text-orange-400", advice: "Focus on gradual weight loss through diet and exercise. Consult a healthcare provider." };
    else return { text: "Obese", color: "text-red-400", advice: "Please consult with a healthcare professional for personalized guidance." };
  };

  const calcBmi = async () => {
    setError("");
    
    if (!weight || !height) {
      setError("Please enter both weight and height");
      return;
    }
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (weightNum <= 0 || heightNum <= 0) {
      setError("Please enter valid positive numbers");
      return;
    }
    
    if (heightNum < 50 || heightNum > 300) {
      setError("Please enter a valid height between 50-300 cm");
      return;
    }
    
    if (weightNum < 20 || weightNum > 300) {
      setError("Please enter a valid weight between 20-300 kg");
      return;
    }

    setLoading(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const result = (weightNum / (heightNum / 100) ** 2).toFixed(1);
    const categoryInfo = getBmiCategory(parseFloat(result));
    
    setBmi(result);
    setCategory(categoryInfo);
    
    // Save to history
    const newRecord = {
      weight: weightNum,
      height: heightNum,
      bmi: result,
      category: categoryInfo.text,
      date: new Date().toLocaleDateString()
    };
    
    setHistory(prev => [newRecord, ...prev.slice(0, 9)]); // Keep last 10 records
    setLoading(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400 mb-3">
        Calculate your Body Mass Index (BMI) to understand your weight range.
      </p>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-900/50 border border-red-700 rounded-lg flex items-center gap-2 text-red-200 text-sm"
        >
          <FaExclamationTriangle />
          {error}
        </motion.div>
      )}

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-3 flex-1 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="20"
          max="300"
          step="0.1"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="p-3 flex-1 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="50"
          max="300"
          step="0.1"
        />
      </div>
      
      <button
        onClick={calcBmi}
        disabled={loading}
        className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 disabled:bg-green-800 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 w-full"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
            Calculating...
          </>
        ) : (
          "Calculate BMI"
        )}
      </button>

      {bmi && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 space-y-4 p-4 bg-gray-700/50 rounded-lg"
        >
          <div className="text-center">
            <p className="text-lg">
              Your BMI: <span className="text-green-400 font-bold text-xl">{bmi}</span>
            </p>
            <p className="text-gray-300">
              Category: <span className={`font-semibold ${category.color}`}>{category.text}</span>
            </p>
          </div>
          
          <div className="text-sm text-gray-300 bg-gray-800/50 p-3 rounded">
            <p className="font-semibold mb-2">💡 Professional Advice:</p>
            <p>{category.advice}</p>
          </div>

          <div className="text-sm text-gray-400 space-y-1">
            <p>🩺 BMI Ranges: Underweight (&lt;18.5) • Normal (18.5-24.9) • Overweight (25-29.9) • Obese (≥30)</p>
          </div>
        </motion.div>
      )}

      {history.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-gray-800/30 rounded-lg"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-green-400 flex items-center gap-2">
              <FaHistory />
              Recent Calculations
            </h4>
            <button
              onClick={clearHistory}
              className="text-xs text-red-400 hover:text-red-300 transition-colors"
            >
              Clear History
            </button>
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {history.map((record, index) => (
              <div key={index} className="flex justify-between text-xs p-2 bg-gray-700/30 rounded">
                <span>BMI: {record.bmi}</span>
                <span>{record.category}</span>
                <span className="text-gray-400">{record.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Enhanced Water Tool
const WaterTool = () => {
  const [weight, setWeight] = useLocalStorage("waterWeight", "");
  const [activity, setActivity] = useLocalStorage("waterActivity", "moderate");
  const [climate, setClimate] = useLocalStorage("waterClimate", "normal");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const calcWater = async () => {
    setError("");
    
    if (!weight) {
      setError("Please enter your weight");
      return;
    }
    
    const weightNum = parseFloat(weight);
    if (weightNum <= 0 || weightNum > 300) {
      setError("Please enter a valid weight between 1-300 kg");
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));

    const base = weightNum * 0.033;
    const activityMultiplier = activity === "low" ? 1 : activity === "moderate" ? 1.2 : 1.4;
    const climateMultiplier = climate === "hot" ? 1.2 : climate === "humid" ? 1.1 : 1;
    
    const calculated = (base * activityMultiplier * climateMultiplier).toFixed(2);
    setResult(calculated);
    setLoading(false);
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">
        Find out how much water you should drink daily 💧
      </p>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-900/50 border border-red-700 rounded-lg flex items-center gap-2 text-red-200 text-sm"
        >
          <FaExclamationTriangle />
          {error}
        </motion.div>
      )}

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="1"
          max="300"
          step="0.1"
        />
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-400 mb-1 text-left">Activity Level</label>
            <select
              className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="low">Low Activity</option>
              <option value="moderate">Moderate Activity</option>
              <option value="high">High Activity</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1 text-left">Climate</label>
            <select
              className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="hot">Hot/Dry</option>
              <option value="humid">Humid</option>
            </select>
          </div>
        </div>
      </div>
      
      <button
        onClick={calcWater}
        disabled={loading}
        className="px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded-lg hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 w-full"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
            Calculating...
          </>
        ) : (
          "Calculate Water Needs"
        )}
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-5 p-4 bg-gray-700/50 rounded-lg"
        >
          <p className="text-lg mb-4">
            You should drink about{" "}
            <span className="text-blue-400 font-bold text-xl">{result} L</span> daily.
          </p>
          
          <div className="text-left space-y-3">
            <h4 className="font-semibold text-blue-300">💧 Hydration Tips:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Drink a glass of water 30 minutes before each meal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Carry a reusable water bottle when active or outdoors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Increase intake during hot weather or intense exercise
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Monitor urine color - pale yellow indicates good hydration
              </li>
            </ul>
          </div>
          
          <div className="mt-4 p-3 bg-blue-900/20 rounded border border-blue-700/30">
            <p className="text-xs text-blue-300">
              💡 <strong>Note:</strong> Individual needs may vary based on health conditions, pregnancy, or breastfeeding.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Enhanced Sleep Tool
const SleepTool = () => {
  const [hours, setHours] = useLocalStorage("sleepHours", "");
  const [quality, setQuality] = useLocalStorage("sleepQuality", "average");
  const [msg, setMsg] = useState("");
  const [tip, setTip] = useState("");
  const [detailedTips, setDetailedTips] = useState([]);
  const [error, setError] = useState("");

  const check = () => {
    setError("");
    
    if (!hours) {
      setError("Please enter hours slept");
      return;
    }
    
    const hoursNum = parseFloat(hours);
    if (hoursNum <= 0 || hoursNum > 24) {
      setError("Please enter valid hours between 1-24");
      return;
    }

    let newTips = [];

    if (hoursNum < 7) {
      setMsg("You might not be getting enough sleep 😴");
      setTip("Consistent sleep deprivation can affect cognitive function and long-term health.");
      newTips = [
        "Aim for 7-9 hours of sleep nightly",
        "Establish a consistent sleep schedule",
        "Avoid caffeine and screens 1-2 hours before bed",
        "Create a dark, quiet, and cool sleep environment"
      ];
    } else if (hoursNum <= 9) {
      setMsg("Perfect! You're getting healthy sleep 🌙");
      setTip("Maintain this routine for optimal health and well-being.");
      newTips = [
        "Continue your consistent sleep schedule",
        "Keep up with relaxing pre-bed routines",
        "Maintain your sleep environment quality",
        "Regular exercise supports good sleep"
      ];
    } else {
      setMsg("Too much sleep can make you sluggish 💤");
      setTip("Oversleeping may indicate underlying health issues or poor sleep quality.");
      newTips = [
        "Try to limit sleep to 7-9 hours",
        "Get morning sunlight to regulate circadian rhythm",
        "Stay physically active during the day",
        "Consult a doctor if consistently needing excessive sleep"
      ];
    }

    // Add quality-based tips
    if (quality === "poor") {
      newTips.push("Consider a sleep study if poor quality persists");
      newTips.push("Reduce liquid intake before bedtime");
    } else if (quality === "excellent") {
      newTips.push("Your sleep quality is excellent - maintain your habits!");
    }

    setDetailedTips(newTips);
  };

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">Check your sleep quality and get personalized tips 🛏️</p>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-28 px-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center gap-2 text-red-200 text-sm"
        >
          <FaExclamationTriangle />
          {error}
        </motion.div>
      )}

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Hours slept last night"
          className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          min="1"
          max="24"
          step="0.5"
        />
        
        <div>
          <label className="block text-sm text-gray-400 mb-1 text-left">Sleep Quality</label>
          <select
            className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option value="poor">Poor (Frequent waking)</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent (Deep, restful)</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={check}
        className="px-6 py-3 bg-purple-500 text-gray-900 font-semibold rounded-lg hover:bg-purple-600 transition-all w-full"
      >
        Analyze Sleep
      </button>
      
      {msg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-5 p-4 bg-gray-700/50 rounded-lg space-y-4"
        >
          <div>
            <p className="text-lg text-purple-300 font-semibold">{msg}</p>
            <p className="text-sm text-gray-300 mt-2">{tip}</p>
          </div>
          
          <div className="text-left">
            <h4 className="font-semibold text-purple-300 mb-3">🎯 Actionable Tips:</h4>
            <ul className="space-y-2">
              {detailedTips.map((detailedTip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-purple-400 mt-1">•</span>
                  {detailedTip}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-3 bg-purple-900/20 rounded border border-purple-700/30">
            <p className="text-xs text-purple-300">
              💡 <strong>Remember:</strong> Sleep needs vary by age, lifestyle, and individual factors. Listen to your body!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Enhanced Calorie Tool
const CalorieTool = () => {
  const [weight, setWeight] = useLocalStorage("calorieWeight", "");
  const [height, setHeight] = useLocalStorage("calorieHeight", "");
  const [age, setAge] = useLocalStorage("calorieAge", "");
  const [gender, setGender] = useLocalStorage("calorieGender", "male");
  const [activity, setActivity] = useLocalStorage("calorieActivity", "moderate");
  const [goal, setGoal] = useLocalStorage("calorieGoal", "maintain");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const calcCalories = async () => {
    setError("");
    
    if (!weight || !height || !age) {
      setError("Please fill in all required fields");
      return;
    }
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseFloat(age);
    
    if (weightNum <= 0 || heightNum <= 0 || ageNum <= 0) {
      setError("Please enter valid positive numbers");
      return;
    }
    
    if (ageNum < 15 || ageNum > 120) {
      setError("Please enter a valid age between 15-120");
      return;
    }

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));

    // Enhanced Harris-Benedict equation
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weightNum) + (4.799 * heightNum) - (5.677 * ageNum);
    } else {
      bmr = 447.593 + (9.247 * weightNum) + (3.098 * heightNum) - (4.330 * ageNum);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    let total = bmr * (activityMultipliers[activity] || 1.55);

    // Adjust for goal
    if (goal === "lose") total -= 500;
    else if (goal === "gain") total += 500;

    setResult(Math.round(total));
    setLoading(false);
  };

  const getMacroBreakdown = (calories) => {
    const protein = Math.round((calories * 0.3) / 4); // 30% protein
    const carbs = Math.round((calories * 0.45) / 4);  // 45% carbs
    const fats = Math.round((calories * 0.25) / 9);   // 25% fats
    
    return { protein, carbs, fats };
  };

  const macros = result ? getMacroBreakdown(result) : null;

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm text-gray-400">
        Estimate your daily calorie needs using enhanced calculations 🔥
      </p>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-red-900/50 border border-red-700 rounded-lg flex items-center gap-2 text-red-200 text-sm"
        >
          <FaExclamationTriangle />
          {error}
        </motion.div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="30"
          max="300"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="100"
          max="250"
        />
        <input
          type="number"
          placeholder="Age"
          className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="15"
          max="120"
        />
        <select
          className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="space-y-3">
        <select
          className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="sedentary">Sedentary (little/no exercise)</option>
          <option value="light">Light (exercise 1-3 days/week)</option>
          <option value="moderate">Moderate (exercise 3-5 days/week)</option>
          <option value="active">Active (exercise 6-7 days/week)</option>
          <option value="veryActive">Very Active (intense exercise daily)</option>
        </select>
        
        <select
          className="p-3 w-full rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="lose">Lose Weight (-500 kcal)</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight (+500 kcal)</option>
        </select>
      </div>

      <button
        onClick={calcCalories}
        disabled={loading}
        className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-600 disabled:bg-green-800 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 w-full"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
            Calculating...
          </>
        ) : (
          "Calculate Calories"
        )}
      </button>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-5 p-4 bg-gray-700/50 rounded-lg space-y-4"
        >
          <div className="text-center">
            <p className="text-lg">
              Estimated Daily Calories:{" "}
              <span className="text-green-400 font-bold text-xl">{result}</span> kcal
            </p>
            <p className="text-sm text-gray-400 mt-1">
              For {goal === "lose" ? "weight loss" : goal === "gain" ? "weight gain" : "weight maintenance"}
            </p>
          </div>

          {macros && (
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h4 className="font-semibold text-green-300 mb-2">🍽️ Recommended Macros:</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-gray-700/30 rounded">
                  <div className="text-green-400 font-bold">{macros.protein}g</div>
                  <div className="text-gray-400 text-xs">Protein</div>
                </div>
                <div className="text-center p-2 bg-gray-700/30 rounded">
                  <div className="text-green-400 font-bold">{macros.carbs}g</div>
                  <div className="text-gray-400 text-xs">Carbs</div>
                </div>
                <div className="text-center p-2 bg-gray-700/30 rounded">
                  <div className="text-green-400 font-bold">{macros.fats}g</div>
                  <div className="text-gray-400 text-xs">Fats</div>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-300 space-y-2">
            <p className="font-semibold text-green-300">💡 Nutrition Tips:</p>
            <ul className="space-y-1 text-left">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Focus on whole foods: lean proteins, complex carbs, healthy fats
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Include plenty of vegetables and fruits for micronutrients
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Stay hydrated - water supports metabolism
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Consult a nutritionist for personalized plans
              </li>
            </ul>
          </div>

          <div className="p-3 bg-green-900/20 rounded border border-green-700/30">
            <p className="text-xs text-green-300">
              ⚠️ <strong>Disclaimer:</strong> This is an estimate. Individual needs vary based on metabolism, health conditions, and other factors.
            </p>
          </div>
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
    description: "Calculate your Body Mass Index and get personalized health advice"
  },
  {
    id: 2,
    title: "Water Tracker",
    color: "from-blue-400 to-blue-600",
    icon: <FaTint className="text-5xl" />,
    component: <WaterTool />,
    description: "Determine your optimal daily water intake based on multiple factors"
  },
  {
    id: 3,
    title: "Sleep Check",
    color: "from-purple-400 to-purple-600",
    icon: <FaBed className="text-5xl" />,
    component: <SleepTool />,
    description: "Analyze your sleep patterns and get improvement recommendations"
  },
  {
    id: 4,
    title: "Calorie Estimator",
    color: "from-lime-400 to-green-600",
    icon: <FaAppleAlt className="text-5xl" />,
    component: <CalorieTool />,
    description: "Calculate daily calorie needs with macro breakdown for your goals"
  },
];

// -------------------- MAIN PAGE --------------------
const HealthTools = () => {
  const [current, setCurrent] = useState(0);
  const [showTool, setShowTool] = useState(false);
  const modalRef = useRef(null);

  const nextTool = () => setCurrent((prev) => (prev + 1) % tools.length);
  const prevTool = () => setCurrent((prev) => (prev - 1 + tools.length) % tools.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevTool();
      if (e.key === 'ArrowRight') nextTool();
      if (e.key === 'Escape' && showTool) setShowTool(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showTool]);

  // Focus management for accessibility
  useEffect(() => {
    if (showTool) {
      modalRef.current?.focus();
    }
  }, [showTool]);

  const tool = tools[current];

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden px-4 py-28 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-400"
      >
        Explore Your Health Tools
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mb-12 max-w-2xl"
      >
        Comprehensive health calculators to help you understand and improve your wellbeing
      </motion.p>

      <div className="relative w-full max-w-4xl flex items-center justify-center mb-8">
        <button
          onClick={prevTool}
          className="absolute left-0 text-green-400 hover:text-green-300 transition-colors p-2 rounded-full hover:bg-gray-800 z-10"
          aria-label="Previous tool"
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
            className={`w-full bg-gradient-to-br ${tool.color} rounded-3xl p-8 text-center shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300`}
            onClick={() => setShowTool(true)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setShowTool(true)}
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
                {tool.description}
              </p>
              <div className="flex space-x-2">
                {tools.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === current ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextTool}
          className="absolute right-0 text-green-400 hover:text-green-300 transition-colors p-2 rounded-full hover:bg-gray-800 z-10"
          aria-label="Next tool"
        >
          <FaChevronRight size={28} />
        </button>
      </div>

      {/* Tool Navigation Dots */}
      <div className="flex space-x-3 mb-8">
        {tools.map((toolItem, index) => (
          <button
            key={toolItem.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current 
                ? 'bg-green-400 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to ${toolItem.title}`}
          />
        ))}
      </div>

      {/* Keyboard Shortcuts Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-500 text-sm text-center"
      >
        💡 Use arrow keys to navigate • Press ESC to close modals
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showTool && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTool(false)}
          >
            <motion.div
              ref={modalRef}
              className="bg-gray-800 rounded-2xl p-6 w-full max-w-2xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
            >
              <button
                onClick={() => setShowTool(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors p-1 rounded-full hover:bg-gray-700"
                aria-label="Close tool"
              >
                <FaTimes size={20} />
              </button>

              <h2 id="modal-title" className="text-2xl font-bold mb-6 text-green-400 pr-8">
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