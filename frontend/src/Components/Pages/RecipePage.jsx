import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import avocadotoast from "../../assets/avocado-toast.webp";
// import wall8 from "../../assets/wall8.webp";
import smoothie from "../../assets/berry-smoothie.webp";
import superfood from "../../assets/superfoods.webp";
import spag from "../../assets/zucchini-noodles.webp";
import {
  FaUtensils,
  FaRandom,
  FaClock,
  FaPlay,
  FaPause,
  FaTimes,
  FaListUl,
} from "react-icons/fa";

const RecipePage = () => {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);

  const recipes = [
    {
      id: 1,
      name: "Fluffy Pancakes",
      type: "Breakfast",
      time: 20,
      calories: 350,
      level: "Easy",
      image: "https://media.istockphoto.com/id/1223834793/photo/fresh-homemade-pancakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=2TEymFOg3irymcv_sWpCeBte48mTps0Bo_cdW_AsKhI=",
      steps: [
        "Mix flour, sugar, baking powder, and salt in a bowl.",
        "Add milk, eggs, and melted butter, whisk until smooth.",
        "Heat a pan and pour batter to form pancakes.",
        "Cook until bubbles form, then flip and cook golden.",
        "Serve warm with syrup or fruit.",
      ],
    },
    {
      id: 2,
      name: "Chicken Caesar Salad",
      type: "Lunch",
      time: 15,
      calories: 420,
      level: "Medium",
      image: "https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=XqKwFLWfpdjWD4r_TnyVjUqZkcM8y22W8-K9bplWOtM=",
      steps: [
        "Grill or pan-sear chicken breasts until cooked.",
        "Chop lettuce, tomatoes, and cucumbers.",
        "Slice chicken and add to salad bowl.",
        "Top with croutons, Parmesan, and Caesar dressing.",
        "Toss gently and serve chilled.",
      ],
    },
    {
      id: 3,
      name: "Spaghetti Bolognese",
      type: "Dinner",
      time: 40,
      calories: 600,
      level: "Intermediate",
      image: spag,
      steps: [
        "Sauté onions and garlic in olive oil.",
        "Add minced beef, cook until browned.",
        "Stir in tomato sauce, herbs, and simmer 20 mins.",
        "Boil spaghetti until al dente.",
        "Serve sauce over pasta with grated Parmesan.",
      ],
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      type: "Dessert",
      time: 25,
      calories: 450,
      level: "Advanced",
      image: "https://media.istockphoto.com/id/1130692246/photo/homemade-chocolate-brownies-shot-from-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=WlzAoNvVZjr-TUfC-q5swZDKgQ0UlcD5sG3rUTUI2Vo=",
      steps: [
        "Melt chocolate and butter together.",
        "Whisk in sugar and eggs until smooth.",
        "Fold in flour and cocoa powder gently.",
        "Pour into ramekins and bake 10–12 mins.",
        "Serve warm with vanilla ice cream.",
      ],
    },
    {
      id: 5,
      name: "Fruit Smoothie Bowl",
      type: "Snack",
      time: 10,
      calories: 250,
      level: "Easy",
      image: smoothie,
      steps: [
        "Blend banana, strawberries, yogurt, and milk.",
        "Pour into a bowl.",
        "Top with granola, coconut flakes, and berries.",
        "Drizzle with honey.",
        "Serve immediately chilled.",
      ],
    },
  ];

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((r) => r.type === selectedCategory);

  const generateRandomRecipe = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomRecipe(random);
  };

  const startRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCountdown(5);
    setTimeElapsed(0);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (selectedRecipe && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (selectedRecipe && countdown === 0) {
      setIsActive(true);
    }
  }, [countdown, selectedRecipe]);

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
    setSelectedRecipe(null);
    setCountdown(5);
    setTimeElapsed(0);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-12 px-6 md:px-12 space-y-16">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Delicious Recipes
      </motion.h1>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
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

      {/* Recipe Cards */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            className="bg-gray-800 border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-green-500/20 transition cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-green-400">
                {recipe.name}
              </h3>
              <FaUtensils className="text-green-400 text-2xl" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {recipe.type} • {recipe.time} min • {recipe.level}
            </p>
            <button
              onClick={() => startRecipe(recipe)}
              className="px-4 py-2 text-sm border border-green-400 rounded-lg hover:bg-green-500 hover:text-gray-900 transition"
            >
              Start Cooking
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Random Recipe Generator */}
      <motion.div
        className="bg-gray-800 rounded-xl p-8 text-center border border-green-500 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex justify-center items-center gap-2">
          <FaRandom /> Random Recipe Generator
        </h2>
        <button
          onClick={generateRandomRecipe}
          className="bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition mb-4"
        >
          Generate
        </button>

        {randomRecipe && (
          <motion.div
            key={randomRecipe.id}
            className="mt-4 p-4 border border-green-500 rounded-lg bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg text-green-300 font-semibold">
              {randomRecipe.name}
            </p>
            <p className="text-gray-300 text-sm mt-1">
              {randomRecipe.type} • {randomRecipe.time} min • {randomRecipe.level}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-6 sm:p-10 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 border border-green-500 rounded-2xl p-6 sm:p-10 w-full max-w-4xl text-center relative shadow-lg flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
              >
                <FaTimes size={22} />
              </button>

              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full max-h-72 object-cover rounded-lg border border-green-500 shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {selectedRecipe.name}
                </h2>
                <p className="text-gray-300 mb-4">
                  {selectedRecipe.type} • {selectedRecipe.time} min •{" "}
                  {selectedRecipe.level}
                </p>

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
                    <div className="text-green-400 flex flex-col items-center lg:items-start gap-2 mb-6">
                      <FaClock className="text-3xl" />
                      <p className="text-3xl font-bold">
                        {formatTime(timeElapsed)}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Total: {selectedRecipe.time} min
                      </p>
                    </div>

                    <div className="text-left mt-4 mb-6 w-full">
                      <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                        <FaListUl /> Steps:
                      </h3>
                      <ul className="text-gray-300 text-sm list-disc list-inside space-y-2">
                        {selectedRecipe.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

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

export default RecipePage;
