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
} from "react-icons/fa";
import Yoga from "../../assets/yoga.webp";
import Morning from "../../assets/morning-workout.webp";
import Cone from "../../assets/cone.jfif";

const WorkoutsPage = () => {
  const categories = [
    "All",
    "Cardio",
    "Strength",
    "Flexibility",
    "HIIT",
    "Core",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [randomWorkout, setRandomWorkout] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);

  const workouts = [
    {
      id: 1,
      name: "Morning Cardio Burn",
      type: "Cardio",
      duration: 25,
      calories: 300,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=60",
      steps: [
        "Warm up with light jogging in place for 3 minutes.",
        "Do 30 seconds of high knees followed by 30 seconds rest.",
        "Perform 30 seconds of jumping jacks.",
        "Do 30 seconds of butt kicks, rest for 1 minute.",
        "Finish with a brisk walk or light jog for 5 minutes.",
      ],
    },
    {
      id: 2,
      name: "Full Body Strength",
      type: "Strength",
      duration: 40,
      calories: 450,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=60",
      steps: [
        "Start with 10 squats using bodyweight or dumbbells.",
        "Do 10 push-ups (knee or standard).",
        "Perform 10 lunges per leg.",
        "Do 15 dumbbell shoulder presses.",
        "Rest for 60 seconds and repeat the circuit 3–4 times.",
      ],
    },
    {
      id: 3,
      name: "Yoga Flex Flow",
      type: "Flexibility",
      duration: 30,
      calories: 200,
      level: "All Levels",
      image: Yoga,
      steps: [
        "Begin in Mountain Pose, focusing on deep breathing.",
        "Move into Downward Dog and hold for 30 seconds.",
        "Flow into Cobra Pose, stretching your spine.",
        "Shift to Child’s Pose to relax your back.",
        "End with 5 minutes of mindful breathing.",
      ],
    },
    {
      id: 4,
      name: "HIIT Madness",
      type: "HIIT",
      duration: 20,
      calories: 500,
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=60",
      steps: [
        "Perform 40 seconds of burpees, rest 20 seconds.",
        "Do 40 seconds of jump squats, rest 20 seconds.",
        "Sprint in place for 40 seconds, rest 20 seconds.",
        "Do 40 seconds of mountain climbers, rest 20 seconds.",
        "Repeat 4 rounds with 1 minute rest between rounds.",
      ],
    },
    {
      id: 5,
      name: "Core Crusher",
      type: "Core",
      duration: 15,
      calories: 250,
      level: "Intermediate",
      image: Cone,
      steps: [
        "Do 20 crunches.",
        "Perform 15 leg raises.",
        "Hold a plank for 45 seconds.",
        "Do 20 Russian twists per side.",
        "Rest 30 seconds and repeat 3 rounds.",
      ],
    },
    {
      id: 6,
      name: "Evening Power Run",
      type: "Cardio",
      duration: 35,
      calories: 400,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=60",
      steps: [
        "Start with a 5-minute warm-up walk.",
        "Run at a steady pace for 20 minutes.",
        "Include short sprints every 3 minutes.",
        "Cool down with 5 minutes of walking.",
        "Finish with stretching to relax your muscles.",
      ],
    },
    {
      id: 7,
      name: "Dumbbell Pump",
      type: "Strength",
      duration: 30,
      calories: 350,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=60",
      steps: [
        "Do 10 bicep curls per arm.",
        "Perform 10 tricep extensions.",
        "Do 10 bent-over rows.",
        "Complete 10 shoulder presses.",
        "Repeat 3 sets with 1-minute rest between.",
      ],
    },
    {
      id: 8,
      name: "Stretch & Reset",
      type: "Flexibility",
      duration: 20,
      calories: 150,
      level: "All Levels",
      image: Morning,
      steps: [
        "Neck rolls – 30 seconds each direction.",
        "Shoulder rolls – 20 repetitions.",
        "Hamstring stretch – hold 30 seconds each leg.",
        "Side bends – 15 reps each side.",
        "Finish with deep breathing and posture hold.",
      ],
    },
  ];

  const filteredWorkouts =
    selectedCategory === "All"
      ? workouts
      : workouts.filter((w) => w.type === selectedCategory);

  const generateRandomWorkout = () => {
    const random = workouts[Math.floor(Math.random() * workouts.length)];
    setRandomWorkout(random);
  };

  const startWorkout = (workout) => {
    setSelectedWorkout(workout);
    setCountdown(5);
    setTimeElapsed(0);
    setIsActive(false);
    clearInterval(timerRef.current);
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
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive]);

  const handlePauseResume = () => setIsActive((prev) => !prev);

  const closeModal = () => {
    setSelectedWorkout(null);
    setCountdown(5);
    setTimeElapsed(0);
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

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-12 px-6 md:px-12 space-y-16">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Explore Workouts
      </motion.h1>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition duration-300 ${
              selectedCategory === cat
                ? "bg-green-500 text-gray-900 border-green-500"
                : "border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Workout Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredWorkouts.map((workout) => (
          <motion.div
            key={workout.id}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-green-400">
                {workout.name}
              </h3>
              <FaDumbbell className="text-green-400 text-2xl" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {workout.type} • {workout.duration} min • {workout.level}
            </p>
            <button
              onClick={() => startWorkout(workout)}
              className="px-4 py-2 text-sm bg-green-500 rounded-full hover:bg-green-400 text-gray-800 transition"
            >
              Start Workout
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Random Workout Generator */}
      <motion.div
        className="bg-gray-800 rounded-xl p-8 text-center border border-green-500 max-w-3xl mx-auto"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex justify-center items-center gap-2">
          <FaRandom /> Random Workout Generator
        </h2>
        <button
          onClick={generateRandomWorkout}
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition mb-4"
        >
          Generate
        </button>

        {randomWorkout && (
          <motion.div
            key={randomWorkout.id}
            className="mt-4 p-4 border border-green-500 rounded-lg bg-gray-900"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg text-green-300 font-semibold">
              {randomWorkout.name}
            </p>
            <p className="text-gray-300 text-sm mt-1">
              {randomWorkout.type} • {randomWorkout.duration} min •{" "}
              {randomWorkout.level}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Workout Modal */}
      <AnimatePresence>
        {selectedWorkout && (
          <motion.div
            className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-90  overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            
          >
            <motion.div
              className="bg-gray-800 p-6 sm:p-8 w-full max-w-5xl text-center relative shadow-lg flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              layout
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-green-400"
              >
                <FaTimes size={22} />
              </button>

              {/* Left Section — Image */}
              <div className="w-full pt-20 sm:pt-0 lg:w-1/2 flex justify-center items-center">
                <img
                  src={selectedWorkout.image}
                  alt={selectedWorkout.name}
                  className="w-full max-h-72 sm:max-h-96 object-cover rounded-lg"
                />
              </div>

              {/* Right Section — Info */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {selectedWorkout.name}
                </h2>
                <p className="text-gray-300 mb-4">
                  {selectedWorkout.type} • {selectedWorkout.duration} min •{" "}
                  {selectedWorkout.level}
                </p>

                {/* Countdown / Timer + Steps */}
                {countdown > 0 ? (
                  <motion.div
                    key={countdown}
                    className="text-6xl font-bold text-green-500 mb-4"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    {countdown}
                  </motion.div>
                ) : (
                  <>
                    {/* Timer */}
                    <div className="text-green-400 flex flex-col items-center lg:items-start gap-2 mb-6">
                      <FaClock className="text-3xl" />
                      <p className="text-3xl font-bold">
                        {formatTime(timeElapsed)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Duration: {selectedWorkout.duration} min
                      </p>
                    </div>

                    {/* Steps */}
                    <div className="text-left mt-4 mb-6 w-full">
                      <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                        <FaListUl /> Steps:
                      </h3>
                      <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                        {selectedWorkout.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center lg:justify-start gap-4 mt-4">
                      <button
                        onClick={handlePauseResume}
                        className="px-5 py-2 bg-green-500 text-gray-900 font-semibold rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
                      >
                        {isActive ? <FaPause /> : <FaPlay />}{" "}
                        {isActive ? "Pause" : "Resume"}
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-5 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg hover:bg-gray-600 transition"
                      >
                        Exit
                      </button>
                    </div>
                  </>
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
