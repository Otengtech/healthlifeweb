import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDumbbell,
  FaRandom,
  FaPlay,
  FaPause,
  FaTimes,
  FaClock,
  FaListUl,
  FaFire,
  FaHeart,
  FaStar,
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaStepForward,
  FaCheckCircle,
} from "react-icons/fa";
import Yoga from "../../assets/yoga.webp";
import Morning from "../../assets/morning-workout.webp";
import Cone from "../../assets/cone.jfif";

const WorkoutsPage = () => {
  const categories = [
    { name: "All", icon: "💪", count: 8 },
    { name: "Cardio", icon: "🏃", count: 2 },
    { name: "Strength", icon: "🏋️", count: 2 },
    { name: "Flexibility", icon: "🧘", iconComponent: <FaHeart className="text-pink-400" />, count: 2 },
    { name: "HIIT", icon: "⚡", count: 1 },
    { name: "Core", icon: "🔥", count: 1 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [randomWorkout, setRandomWorkout] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const timerRef = useRef(null);

  const workouts = [
    {
      id: 1,
      name: "Morning Cardio Burn",
      type: "Cardio",
      duration: 25,
      calories: 300,
      level: "Beginner",
      intensity: "Medium",
      rating: 4.8,
      completed: 1250,
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=60",
      steps: [
        { text: "Warm up with light jogging in place for 3 minutes", duration: 180 },
        { text: "Do 30 seconds of high knees followed by 30 seconds rest", duration: 60 },
        { text: "Perform 30 seconds of jumping jacks", duration: 30 },
        { text: "Do 30 seconds of butt kicks, rest for 1 minute", duration: 90 },
        { text: "Finish with a brisk walk or light jog for 5 minutes", duration: 300 },
      ],
      equipment: ["None"],
      focus: ["Endurance", "Fat Burning"],
    },
    {
      id: 2,
      name: "Full Body Strength",
      type: "Strength",
      duration: 40,
      calories: 450,
      level: "Intermediate",
      intensity: "High",
      rating: 4.9,
      completed: 890,
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=60",
      steps: [
        { text: "Start with 10 squats using bodyweight or dumbbells", duration: 60 },
        { text: "Do 10 push-ups (knee or standard)", duration: 60 },
        { text: "Perform 10 lunges per leg", duration: 90 },
        { text: "Do 15 dumbbell shoulder presses", duration: 60 },
        { text: "Rest for 60 seconds and repeat the circuit 3–4 times", duration: 180 },
      ],
      equipment: ["Dumbbells", "Mat"],
      focus: ["Muscle Building", "Strength"],
    },
    {
      id: 3,
      name: "Yoga Flex Flow",
      type: "Flexibility",
      duration: 30,
      calories: 200,
      level: "All Levels",
      intensity: "Low",
      rating: 4.7,
      completed: 2100,
      image: Yoga,
      steps: [
        { text: "Begin in Mountain Pose, focusing on deep breathing", duration: 60 },
        { text: "Move into Downward Dog and hold for 30 seconds", duration: 30 },
        { text: "Flow into Cobra Pose, stretching your spine", duration: 45 },
        { text: "Shift to Child's Pose to relax your back", duration: 60 },
        { text: "End with 5 minutes of mindful breathing", duration: 300 },
      ],
      equipment: ["Yoga Mat"],
      focus: ["Flexibility", "Relaxation"],
    },
    {
      id: 4,
      name: "HIIT Madness",
      type: "HIIT",
      duration: 20,
      calories: 500,
      level: "Advanced",
      intensity: "Very High",
      rating: 4.6,
      completed: 670,
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=60",
      steps: [
        { text: "Perform 40 seconds of burpees, rest 20 seconds", duration: 60 },
        { text: "Do 40 seconds of jump squats, rest 20 seconds", duration: 60 },
        { text: "Sprint in place for 40 seconds, rest 20 seconds", duration: 60 },
        { text: "Do 40 seconds of mountain climbers, rest 20 seconds", duration: 60 },
        { text: "Repeat 4 rounds with 1 minute rest between rounds", duration: 240 },
      ],
      equipment: ["None"],
      focus: ["Fat Burning", "Endurance"],
    },
    {
      id: 5,
      name: "Core Crusher",
      type: "Core",
      duration: 15,
      calories: 250,
      level: "Intermediate",
      intensity: "Medium",
      rating: 4.5,
      completed: 1500,
      image: Cone,
      steps: [
        { text: "Do 20 crunches", duration: 45 },
        { text: "Perform 15 leg raises", duration: 45 },
        { text: "Hold a plank for 45 seconds", duration: 45 },
        { text: "Do 20 Russian twists per side", duration: 60 },
        { text: "Rest 30 seconds and repeat 3 rounds", duration: 90 },
      ],
      equipment: ["Mat"],
      focus: ["Core Strength", "Stability"],
    },
    {
      id: 6,
      name: "Evening Power Run",
      type: "Cardio",
      duration: 35,
      calories: 400,
      level: "Intermediate",
      intensity: "High",
      rating: 4.8,
      completed: 1100,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=60",
      steps: [
        { text: "Start with a 5-minute warm-up walk", duration: 300 },
        { text: "Run at a steady pace for 20 minutes", duration: 1200 },
        { text: "Include short sprints every 3 minutes", duration: 600 },
        { text: "Cool down with 5 minutes of walking", duration: 300 },
        { text: "Finish with stretching to relax your muscles", duration: 180 },
      ],
      equipment: ["Running Shoes"],
      focus: ["Endurance", "Cardiovascular Health"],
    },
    {
      id: 7,
      name: "Dumbbell Pump",
      type: "Strength",
      duration: 30,
      calories: 350,
      level: "Beginner",
      intensity: "Medium",
      rating: 4.4,
      completed: 950,
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=60",
      steps: [
        { text: "Do 10 bicep curls per arm", duration: 60 },
        { text: "Perform 10 tricep extensions", duration: 60 },
        { text: "Do 10 bent-over rows", duration: 60 },
        { text: "Complete 10 shoulder presses", duration: 60 },
        { text: "Repeat 3 sets with 1-minute rest between", duration: 180 },
      ],
      equipment: ["Dumbbells"],
      focus: ["Upper Body", "Strength"],
    },
    {
      id: 8,
      name: "Stretch & Reset",
      type: "Flexibility",
      duration: 20,
      calories: 150,
      level: "All Levels",
      intensity: "Low",
      rating: 4.9,
      completed: 1800,
      image: Morning,
      steps: [
        { text: "Neck rolls – 30 seconds each direction", duration: 60 },
        { text: "Shoulder rolls – 20 repetitions", duration: 60 },
        { text: "Hamstring stretch – hold 30 seconds each leg", duration: 60 },
        { text: "Side bends – 15 reps each side", duration: 60 },
        { text: "Finish with deep breathing and posture hold", duration: 120 },
      ],
      equipment: ["Mat"],
      focus: ["Mobility", "Relaxation"],
    },
  ];

  const filteredWorkouts = workouts.filter(workout => {
    const matchesCategory = selectedCategory === "All" || workout.type === selectedCategory;
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === "All" || workout.level === difficultyFilter;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const generateRandomWorkout = () => {
    const random = workouts[Math.floor(Math.random() * workouts.length)];
    setRandomWorkout(random);
  };

  const startWorkout = (workout) => {
    setSelectedWorkout(workout);
    setCountdown(5);
    setTimeElapsed(0);
    setCurrentStep(0);
    setCompletedSteps([]);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const nextStep = () => {
    if (currentStep < selectedWorkout.steps.length - 1) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    } else {
      // Workout completed
      setCompletedSteps(prev => [...prev, currentStep]);
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (selectedWorkout && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (selectedWorkout && countdown === 0) {
      setIsActive(true);
    }
  }, [countdown, selectedWorkout]);

  useEffect(() => {
    if (isActive && currentStep < selectedWorkout?.steps.length) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, currentStep, selectedWorkout]);

  const handlePauseResume = () => setIsActive((prev) => !prev);

  const closeModal = () => {
    setSelectedWorkout(null);
    setCountdown(5);
    setTimeElapsed(0);
    setCurrentStep(0);
    setCompletedSteps([]);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-gray-400 text-sm ml-1">({rating})</span>
      </div>
    );
  };

  const IntensityBadge = ({ intensity }) => {
    const colors = {
      "Low": "from-green-500 to-green-600",
      "Medium": "from-yellow-500 to-yellow-600",
      "High": "from-orange-500 to-orange-600",
      "Very High": "from-red-500 to-red-600"
    };

    return (
      <span className={`bg-gradient-to-r ${colors[intensity]} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
        {intensity}
      </span>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-gray-200 py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Explore Workouts
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover personalized workout routines for every fitness level and goal
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        className="max-w-6xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search workouts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-4">
            <FaFilter className="text-green-400" />
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-6 py-3 rounded-xl border transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-gray-900 border-transparent"
                  : "border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="font-semibold">{cat.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === cat.name ? "bg-gray-900/30" : "bg-gray-700"
              }`}>
                {cat.count}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Workout Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredWorkouts.map((workout) => (
            <motion.div
              key={workout.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-300 border border-gray-700 hover:border-green-400 group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <IntensityBadge intensity={workout.intensity} />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {workout.name}
                  </h3>
                  <StarRating rating={workout.rating} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    {workout.type}
                  </span>
                  <span className="text-green-400 font-semibold">
                    {workout.duration} min
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Level</span>
                    <span className="text-gray-300 font-semibold">{workout.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Calories</span>
                    <span className="text-orange-400 font-semibold flex items-center space-x-1">
                      <FaFire />
                      <span>{workout.calories}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Completed</span>
                    <span className="text-gray-300">{workout.completed}+</span>
                  </div>
                </div>

                {/* Equipment Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {workout.equipment.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => startWorkout(workout)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-gray-900 font-semibold py-3 rounded-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Start Workout</span>
                  <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Random Workout Generator */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 border border-green-400/20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 flex items-center justify-center space-x-3">
            <FaRandom className="text-2xl" />
            <span>Can't Decide? Try a Random Workout!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Let us choose your next workout adventure
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateRandomWorkout}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-gray-900 font-semibold px-8 py-4 rounded-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 text-lg"
          >
            Generate Random Workout
          </motion.button>

          <AnimatePresence>
            {randomWorkout && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-6 bg-gray-900 rounded-xl border border-green-400/30"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={randomWorkout.image}
                    alt={randomWorkout.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-400">
                      {randomWorkout.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {randomWorkout.type} • {randomWorkout.duration} min • {randomWorkout.level}
                    </p>
                    <StarRating rating={randomWorkout.rating} />
                  </div>
                  <button
                    onClick={() => startWorkout(randomWorkout)}
                    className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                  >
                    Start
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Workout Modal */}
      <AnimatePresence>
        {selectedWorkout && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-gray-700">
                <button
                  onClick={closeModal}
                  className="absolute right-6 top-6 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedWorkout.image}
                    alt={selectedWorkout.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-green-400">
                      {selectedWorkout.name}
                    </h2>
                    <p className="text-gray-300">
                      {selectedWorkout.type} • {selectedWorkout.duration} min • {selectedWorkout.level}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {countdown > 0 ? (
                  <div className="text-center py-12">
                    <motion.div
                      key={countdown}
                      className="text-8xl font-bold text-green-500 mb-4"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      {countdown}
                    </motion.div>
                    <p className="text-gray-400 text-lg">Get ready to start!</p>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Current Step */}
                    <div className="space-y-6">
                      <div className="bg-gray-900 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center space-x-2">
                          <FaPlay />
                          <span>Current Step</span>
                        </h3>
                        
                        <div className="text-center space-y-4">
                          <div className="text-4xl font-bold text-green-400">
                            {formatTime(timeElapsed)}
                          </div>
                          <div className="text-lg text-gray-300">
                            Step {currentStep + 1} of {selectedWorkout.steps.length}
                          </div>
                          <p className="text-xl text-white">
                            {selectedWorkout.steps[currentStep].text}
                          </p>
                          
                          <div className="flex justify-center space-x-4 mt-6">
                            <button
                              onClick={handlePauseResume}
                              className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-xl flex items-center space-x-2 hover:bg-green-400 transition-colors"
                            >
                              {isActive ? <FaPause /> : <FaPlay />}
                              <span>{isActive ? "Pause" : "Resume"}</span>
                            </button>
                            
                            {currentStep < selectedWorkout.steps.length - 1 && (
                              <button
                                onClick={nextStep}
                                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl flex items-center space-x-2 hover:bg-blue-400 transition-colors"
                              >
                                <FaStepForward />
                                <span>Next Step</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="bg-gray-900 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-green-400 mb-4">
                          Workout Progress
                        </h4>
                        <div className="space-y-2">
                          {selectedWorkout.steps.map((step, index) => (
                            <div
                              key={index}
                              className={`flex items-center space-x-3 p-3 rounded-lg ${
                                completedSteps.includes(index)
                                  ? "bg-green-500/20 border border-green-500/30"
                                  : index === currentStep
                                  ? "bg-blue-500/20 border border-blue-500/30"
                                  : "bg-gray-800"
                              }`}
                            >
                              {completedSteps.includes(index) ? (
                                <FaCheckCircle className="text-green-400 text-xl" />
                              ) : (
                                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <span className="text-xs text-gray-400">{index + 1}</span>
                                </div>
                              )}
                              <span className={`flex-1 ${
                                completedSteps.includes(index) ? "text-green-300" : 
                                index === currentStep ? "text-blue-300" : "text-gray-300"
                              }`}>
                                {step.text}
                              </span>
                              <span className="text-gray-400 text-sm">
                                {formatTime(step.duration)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Workout Details */}
                    <div className="space-y-6">
                      <div className="bg-gray-900 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4">
                          Workout Details
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-gray-800 rounded-lg">
                            <FaClock className="text-green-400 text-2xl mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">{selectedWorkout.duration}</div>
                            <div className="text-gray-400 text-sm">Minutes</div>
                          </div>
                          <div className="text-center p-4 bg-gray-800 rounded-lg">
                            <FaFire className="text-orange-400 text-2xl mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">{selectedWorkout.calories}</div>
                            <div className="text-gray-400 text-sm">Calories</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4">
                          Focus Areas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedWorkout.focus.map((area, index) => (
                            <span
                              key={index}
                              className="px-3 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={closeModal}
                        className="w-full py-3 bg-gray-700 text-gray-200 font-semibold rounded-xl hover:bg-gray-600 transition-colors"
                      >
                        Exit Workout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkoutsPage;