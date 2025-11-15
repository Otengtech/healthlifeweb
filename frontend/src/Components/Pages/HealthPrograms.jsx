import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cardio from "../../assets/cardio.webp";
import Yoga from "../../assets/yoga.webp";
import Strength from "../../assets/strength.webp";
import Weight from "../../assets/weight-management.webp";
import Progress from "../../assets/progress.webp";
import Hydration from "../../assets/hydration.webp";
import Meditation from "../../assets/meditation.webp";
import Sleep from "../../assets/sleep.webp";
import {
  GiLotus,
  GiHeartBeats,
  GiAppleCore,
  GiMuscleUp,
  GiMeditation,
  GiSleepy,
  GiWeight,
  GiRunningShoe,
  GiWaterBottle,
  GiHamburgerMenu,
  GiDuration,
  GiProgression,
} from "react-icons/gi";
import { FaTimes, FaStar, FaFire, FaHeart, FaClock, FaSeedling } from "react-icons/fa";

const HealthPrograms = () => {
  const [activeProgram, setActiveProgram] = useState("Yoga");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState(["Yoga", "Meditation"]);
  const [viewMode, setViewMode] = useState("detailed"); // 'detailed' or 'compact'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const programs = {
    Yoga: {
      icon: <GiLotus className="text-4xl text-green-400" />,
      title: "Beginner Yoga",
      image: Yoga,
      duration: "4 weeks",
      difficulty: "Beginner",
      calories: "180-240",
      favorite: true,
      description: `
Yoga helps you connect your mind, body, and spirit through movement and breath. This beginner course teaches simple poses to enhance balance, posture, and calmness.

Highlights:
- Focus on breathing and alignment
- Simple poses: Mountain, Cat-Cow, Child's Pose
- Daily practice for flexibility and calm

Benefits:
- Reduces stress and anxiety
- Improves flexibility and balance
- Enhances focus and inner peace
- Supports better sleep

Tip: Begin with 15–20 minutes a day in a peaceful environment.
      `,
      weeklyPlan: [
        "Week 1: Basic poses & breathing techniques",
        "Week 2: Flow sequences & balance poses",
        "Week 3: Longer holds & deeper stretches",
        "Week 4: Full 30-minute yoga flow"
      ],
      equipment: ["Yoga mat", "Comfortable clothing", "Optional blocks"],
    },
    Nutrition: {
      icon: <GiAppleCore className="text-4xl text-green-400" />,
      title: "Healthy Eating Plan",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      duration: "8 weeks",
      difficulty: "Beginner",
      calories: "N/A",
      favorite: false,
      description: `
A proper diet fuels your body and mind. Learn how to eat balanced meals that support long-term health, energy, and focus.

Meal Plan Example:
- Breakfast: Oatmeal with fruits
- Lunch: Brown rice with grilled fish
- Snack: Greek yogurt and nuts
- Dinner: Quinoa with steamed veggies

Benefits:
- Boosts metabolism and immunity
- Aids in healthy weight management
- Reduces the risk of chronic disease

Tip: Eat slowly and drink plenty of water daily.
      `,
      weeklyPlan: [
        "Week 1-2: Foundation & meal planning",
        "Week 3-4: Portion control & macros",
        "Week 5-6: Healthy substitutions",
        "Week 7-8: Sustainable habits"
      ],
      equipment: ["Food scale", "Meal prep containers", "Recipe book"],
    },
    Cardio: {
      icon: <GiHeartBeats className="text-4xl text-green-400" />,
      title: "Cardio Challenge",
      image: Cardio,
      duration: "30 days",
      difficulty: "Intermediate",
      calories: "400-600",
      favorite: true,
      description: `
Improve endurance, burn calories, and strengthen your heart with this progressive cardio challenge.

30-Day Plan:
- Week 1: Brisk walk 20 mins daily
- Week 2: Add cycling/jump rope
- Week 3: Include burpees and lunges
- Week 4: Mix all for 40 minutes

Benefits:
- Builds stamina
- Boosts heart and lung health
- Enhances sleep and energy
      `,
      weeklyPlan: [
        "Week 1: Foundation building",
        "Week 2: Intensity increase",
        "Week 3: HIIT incorporation",
        "Week 4: Endurance challenge"
      ],
      equipment: ["Running shoes", "Water bottle", "Heart rate monitor"],
    },
    Strength: {
      icon: <GiMuscleUp className="text-4xl text-green-400" />,
      title: "Strength Training",
      image: Strength,
      duration: "6 weeks",
      difficulty: "Intermediate",
      calories: "300-500",
      favorite: false,
      description: `
Build muscle, tone your body, and improve overall strength using bodyweight and dumbbell workouts.

Beginner Routine:
- Push-ups: 3 sets of 10
- Squats: 3 sets of 15
- Plank: 30 seconds hold
- Dumbbell curls: 3 sets of 12

Benefits:
- Improves posture
- Enhances metabolism
- Builds core stability
- Prevents muscle loss

Tip: Focus on form before increasing weight.
      `,
      weeklyPlan: [
        "Week 1-2: Basic movements & form",
        "Week 3-4: Progressive overload",
        "Week 5-6: Strength peaks"
      ],
      equipment: ["Dumbbells", "Resistance bands", "Workout mat"],
    },
    Meditation: {
      icon: <GiMeditation className="text-4xl text-green-400" />,
      title: "Mindfulness Meditation",
      image: Meditation,
      duration: "4 weeks",
      difficulty: "Beginner",
      calories: "N/A",
      favorite: true,
      description: `
Train your mind to stay calm and focused through mindfulness and deep breathing.

Practices:
- 10 mins daily breathing focus
- Gratitude journaling
- Guided meditation sessions

Benefits:
- Improves emotional health
- Enhances concentration
- Reduces stress and tension
      `,
      weeklyPlan: [
        "Week 1: Breathing awareness",
        "Week 2: Body scan meditation",
        "Week 3: Loving-kindness practice",
        "Week 4: Integrated daily practice"
      ],
      equipment: ["Meditation cushion", "Journal", "Quiet space"],
    },
    Sleep: {
      icon: <GiSleepy className="text-4xl text-green-400" />,
      title: "Better Sleep Routine",
      image: Sleep,
      duration: "3 weeks",
      difficulty: "Beginner",
      calories: "N/A",
      favorite: false,
      description: `
Develop a bedtime routine that enhances deep, restful sleep and rejuvenation.

Tips:
- Maintain a fixed bedtime
- Avoid screens before bed
- Try herbal tea or warm baths

Benefits:
- Boosts energy and mood
- Enhances memory and focus
- Regulates hormones and metabolism
      `,
      weeklyPlan: [
        "Week 1: Sleep schedule establishment",
        "Week 2: Environment optimization",
        "Week 3: Habit consolidation"
      ],
      equipment: ["Comfortable bedding", "Sleep mask", "White noise machine"],
    },
    WeightLoss: {
      icon: <GiWeight className="text-4xl text-green-400" />,
      title: "Weight Loss Journey",
      image: Weight,
      duration: "12 weeks",
      difficulty: "Intermediate",
      calories: "500-800",
      favorite: false,
      description: `
A sustainable approach to losing weight through healthy eating, movement, and self-discipline.

Approach:
- Calorie control and portion balance
- Daily 30-min physical activity
- Hydration and sleep monitoring

Benefits:
- Maintains healthy BMI
- Improves confidence and energy
- Reduces lifestyle diseases
      `,
      weeklyPlan: [
        "Week 1-4: Foundation & habit building",
        "Week 5-8: Intensity & consistency",
        "Week 9-12: Maintenance & lifestyle"
      ],
      equipment: ["Scale", "Measuring tape", "Food journal"],
    },
    Running: {
      icon: <GiRunningShoe className="text-4xl text-green-400" />,
      title: "Running Program",
      image: Progress,
      duration: "8 weeks",
      difficulty: "Beginner",
      calories: "400-700",
      favorite: true,
      description: `
Build stamina, endurance, and a stronger heart through guided running techniques.

Plan:
- Start with walk-run intervals
- Gradually increase pace
- Practice breathing rhythm

Benefits:
- Strengthens heart health
- Burns calories efficiently
- Relieves stress naturally
      `,
      weeklyPlan: [
        "Week 1-2: Walk-run intervals",
        "Week 3-4: Continuous running",
        "Week 5-6: Distance building",
        "Week 7-8: Speed improvement"
      ],
      equipment: ["Running shoes", "Moisture-wicking clothes", "GPS watch"],
    },
    Hydration: {
      icon: <GiWaterBottle className="text-4xl text-green-400" />,
      title: "Hydration & Wellness",
      image: Hydration,
      duration: "2 weeks",
      difficulty: "Beginner",
      calories: "N/A",
      favorite: false,
      description: `
Water is essential for life. Learn how hydration impacts every aspect of your health and performance.

Tips:
- Drink a glass of water every 2 hours
- Eat water-rich foods like cucumber and oranges
- Avoid excess caffeine or soda

Benefits:
- Boosts digestion and detox
- Improves skin glow
- Enhances energy and focus
      `,
      weeklyPlan: [
        "Week 1: Hydration awareness & tracking",
        "Week 2: Habit formation & optimization"
      ],
      equipment: ["Water bottle", "Tracking app", "Infuser for flavor"],
    },
  };

  const toggleFavorite = (programKey) => {
    setFavorites(prev =>
      prev.includes(programKey)
        ? prev.filter(key => key !== programKey)
        : [...prev, programKey]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "from-green-400 to-emerald-600";
      case "Intermediate": return "from-yellow-400 to-orange-500";
      case "Advanced": return "from-red-400 to-pink-600";
      default: return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-200 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Health & Wellness Programs
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose from our curated programs designed to transform your health and well-being
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 relative">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden fixed top-32 left-5 z-50 bg-green-500 p-3 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaTimes className="text-white" /> : <GiHamburgerMenu className="text-white" />}
        </button>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop for mobile */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              
              <motion.aside
                key="sidebar"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4, type: "spring", damping: 25 }}
                className="w-80 bg-gray-800/80 backdrop-blur-lg fixed md:relative h-screen md:h-auto z-40 p-6 border-r border-gray-700/50 shadow-2xl rounded-r-3xl md:rounded-3xl m-4"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-green-400">Programs</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setViewMode(viewMode === "detailed" ? "compact" : "detailed")}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                        title="Toggle view mode"
                      >
                        {viewMode === "detailed" ? "Compact" : "Detailed"}
                      </button>
                    </div>
                  </div>

                  {/* Program List */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-3">
                      {Object.keys(programs).map((key) => (
                        <motion.button
                          key={key}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setActiveProgram(key);
                            if (window.innerWidth < 768) setSidebarOpen(false);
                          }}
                          className={`text-left p-4 rounded-2xl font-medium transition-all border ${
                            activeProgram === key
                              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg border-green-400"
                              : "bg-gray-700/50 text-gray-300 hover:bg-gray-700 border-gray-600"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {programs[key].icon}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold truncate">{programs[key].title}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(key);
                                  }}
                                  className="p-1 hover:scale-110 transition"
                                >
                                  <FaHeart 
                                    className={`${
                                      favorites.includes(key) 
                                        ? "text-red-500 fill-red-500" 
                                        : "text-gray-400"
                                    }`} 
                                  />
                                </button>
                              </div>
                              {viewMode === "detailed" && (
                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <GiDuration />
                                    <span>{programs[key].duration}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <FaFire />
                                    <span>{programs[key].calories}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Favorites Section */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      Favorite Programs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {favorites.map(favKey => (
                        <span
                          key={favKey}
                          className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                        >
                          {programs[favKey].title}
                        </span>
                      ))}
                      {favorites.length === 0 && (
                        <span className="text-gray-500 text-sm">No favorites yet</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 md:ml-6 mt-4 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-6 md:p-8 shadow-2xl"
            >
              {/* Program Header */}
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="lg:w-2/5">
                  <div className="relative group">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      src={programs[activeProgram].image}
                      alt={programs[activeProgram].title}
                      className="rounded-2xl w-full h-64 object-cover shadow-lg"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleFavorite(activeProgram)}
                        className="p-2 bg-gray-900/80 rounded-full backdrop-blur-sm"
                      >
                        <FaHeart 
                          className={`text-lg ${
                            favorites.includes(activeProgram) 
                              ? "text-red-500 fill-red-500" 
                              : "text-white"
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-green-400 mb-2">
                        {programs[activeProgram].title}
                      </h2>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getDifficultyColor(programs[activeProgram].difficulty)}`}>
                          {programs[activeProgram].difficulty}
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium flex items-center gap-1">
                          <GiDuration />
                          {programs[activeProgram].duration}
                        </span>
                        {programs[activeProgram].calories !== "N/A" && (
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium flex items-center gap-1">
                            <FaFire />
                            {programs[activeProgram].calories} cal/session
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-4xl">
                      {programs[activeProgram].icon}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {programs[activeProgram].description.split('\n')[0]}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                      <GiDuration className="text-blue-400 mx-auto mb-1 text-xl" />
                      <p className="text-sm text-gray-300">Duration</p>
                      <p className="font-semibold">{programs[activeProgram].duration}</p>
                    </div>
                    <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                      <FaSeedling className="text-green-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-300">Level</p>
                      <p className="font-semibold">{programs[activeProgram].difficulty}</p>
                    </div>
                    {programs[activeProgram].calories !== "N/A" && (
                      <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                        <FaFire className="text-orange-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Calories</p>
                        <p className="font-semibold">{programs[activeProgram].calories}</p>
                      </div>
                    )}
                    <div className="bg-gray-700/50 p-3 rounded-xl text-center">
                      <GiProgression className="text-purple-400 mx-auto mb-1 text-xl" />
                      <p className="text-sm text-gray-300">Progress</p>
                      <p className="font-semibold">Trackable</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Program Details */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Weekly Plan */}
                <div className="bg-gray-700/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <FaClock className="text-blue-400" />
                    Weekly Plan
                  </h3>
                  <ul className="space-y-3">
                    {programs[activeProgram].weeklyPlan.map((week, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm font-medium mt-1">
                          {index + 1}
                        </span>
                        <span>{week}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment & Requirements */}
                <div className="bg-gray-700/30 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                    <GiLotus className="text-yellow-400" />
                    Equipment Needed
                  </h3>
                  <ul className="space-y-2">
                    {programs[activeProgram].equipment.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Description */}
              <div className="mt-8 bg-gray-700/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Program Details</h3>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {programs[activeProgram].description}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  <GiProgression className="text-xl" />
                  Start This Program
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-2xl transition"
                >
                  Save for Later
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HealthPrograms;