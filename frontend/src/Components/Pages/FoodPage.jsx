import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaAppleAlt,
  FaCarrot,
  FaCoffee,
  FaFish,
  FaLeaf,
  FaSearch,
  FaHeart,
  FaShare,
  FaUtensils,
  FaSeedling,
  FaClock,
  FaSnowflake,
  FaFire,
} from "react-icons/fa";

const categories = [
  {
    id: "vegetables",
    name: "Vegetables",
    color: "from-green-400 to-emerald-600",
    hoverColor: "hover:from-green-300 hover:to-emerald-500",
    icon: <FaCarrot className="text-2xl sm:text-3xl text-white" />,
    image:
      "https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Vegetables are packed with essential nutrients, fiber, and antioxidants that boost immunity, improve digestion, and reduce chronic disease risk.",
    link: "/vegepage",
    nutrition: {
      calories: "Low",
      fiber: "High",
      vitamins: "A, C, K",
      benefits: "Immunity, Digestion, Vision"
    },
    details: {
      functions:
        "Vegetables provide vitamins (A, C, K), minerals, and antioxidants that support vision, skin health, and metabolism.",
      planting:
        "Most vegetables thrive in well-drained soil with plenty of sunlight. Regular watering and natural compost enhance growth.",
      cooking:
        "Steam, stir-fry, or roast vegetables to preserve nutrients. Avoid overcooking to maintain their vibrant color and flavor.",
      preservation:
        "Store leafy greens in airtight containers. Root vegetables can be kept in a cool, dark, and dry place.",
      foodIdeas:
        "Use in soups, salads, stews, stir-fries, and smoothies for added color and nutrition.",
    },
    popularItems: ["Spinach", "Broccoli", "Carrots", "Bell Peppers"],
    season: "Year-round"
  },
  {
    id: "fruits",
    name: "Fruits",
    color: "from-yellow-400 to-orange-500",
    hoverColor: "hover:from-yellow-300 hover:to-orange-400",
    icon: <FaAppleAlt className="text-2xl sm:text-3xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Fruits are nature's candy — sweet, hydrating, and rich in vitamins, fiber, and antioxidants for better skin and overall health.",
    link: "/fruitpage",
    nutrition: {
      calories: "Medium",
      fiber: "High",
      vitamins: "C, A, Potassium",
      benefits: "Energy, Hydration, Skin Health"
    },
    details: {
      functions:
        "Provide natural sugars, vitamin C, and potassium for energy, hydration, and cellular repair.",
      planting:
        "Most fruit trees and plants need well-drained soil, full sunlight, and regular pruning for optimal yield.",
      cooking:
        "Fruits can be blended into smoothies, baked into desserts, or added to salads and cereals.",
      preservation:
        "Refrigerate ripe fruits and freeze extras for long-term storage. Drying also helps preserve flavor.",
      foodIdeas:
        "Perfect for fruit salads, juices, smoothies, or eaten fresh as healthy snacks.",
    },
    popularItems: ["Apples", "Bananas", "Berries", "Citrus"],
    season: "Seasonal"
  },
  {
    id: "beverages",
    name: "Beverages",
    color: "from-sky-400 to-blue-600",
    hoverColor: "hover:from-sky-300 hover:to-blue-500",
    icon: <FaCoffee className="text-2xl sm:text-3xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Healthy beverages help maintain hydration, energy levels, and nutrient balance throughout the day.",
    link: "/bevpage",
    nutrition: {
      calories: "Low to Medium",
      fiber: "Varies",
      vitamins: "Varies",
      benefits: "Hydration, Energy, Detox"
    },
    details: {
      functions:
        "Provide hydration, minerals, and sometimes antioxidants. Essential for body temperature regulation.",
      planting:
        "For natural beverages like tea, herbs and plants such as mint or lemongrass can be easily grown in pots or gardens.",
      cooking:
        "Boil water for teas, blend fruits for smoothies, or infuse herbs for refreshing homemade drinks.",
      preservation:
        "Store juices and teas in clean, sealed bottles. Refrigerate for freshness and avoid adding excess sugar.",
      foodIdeas:
        "Combine fruits and herbs to create detox water or energy drinks naturally.",
    },
    popularItems: ["Green Tea", "Smoothies", "Infused Water", "Herbal Tea"],
    season: "Year-round"
  },
  {
    id: "proteins",
    name: "Proteins",
    color: "from-red-400 to-pink-600",
    hoverColor: "hover:from-red-300 hover:to-pink-500",
    icon: <FaFish className="text-2xl sm:text-3xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1626697556426-8a55a8af4999?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Proteins are the building blocks of life — vital for muscle repair, hormone regulation, and energy.",
    link: "/proteinpage",
    nutrition: {
      calories: "Medium to High",
      fiber: "Low",
      vitamins: "B12, Iron, Zinc",
      benefits: "Muscle Repair, Energy, Hormones"
    },
    details: {
      functions:
        "Help build muscles, repair tissues, and produce enzymes and hormones.",
      planting:
        "Plant-based proteins like beans, lentils, and peas grow well in rich soil with moderate watering.",
      cooking:
        "Cook beans and legumes thoroughly to enhance digestibility. Grill or bake lean meats for healthy meals.",
      preservation:
        "Keep raw meat refrigerated and use airtight containers. Dry beans can last for months if stored properly.",
      foodIdeas:
        "Use proteins in soups, stews, salads, and smoothies to improve satiety and nutrition.",
    },
    popularItems: ["Chicken", "Fish", "Lentils", "Tofu"],
    season: "Year-round"
  },
  {
    id: "herbs",
    name: "Herbs & Spices",
    color: "from-green-500 to-lime-600",
    hoverColor: "hover:from-green-400 hover:to-lime-500",
    icon: <FaLeaf className="text-2xl sm:text-3xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Herbs and spices add flavor and aroma to meals while offering healing and anti-inflammatory properties.",
    link: "/herbpage",
    nutrition: {
      calories: "Low",
      fiber: "Medium",
      vitamins: "K, Iron, Calcium",
      benefits: "Immunity, Metabolism, Inflammation"
    },
    details: {
      functions:
        "Contain essential oils and antioxidants that boost immunity and enhance metabolism.",
      planting:
        "Herbs like basil, mint, and rosemary grow easily in pots with good sunlight and moderate watering.",
      cooking:
        "Add fresh herbs near the end of cooking to retain flavor. Dry herbs can be sprinkled for aroma.",
      preservation:
        "Dry herbs under shade and store in airtight jars. Avoid moisture exposure.",
      foodIdeas:
        "Use to season soups, sauces, teas, and marinades for a natural flavor boost.",
    },
    popularItems: ["Basil", "Mint", "Turmeric", "Ginger"],
    season: "Year-round"
  },
];

const FoodPage = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showNutrition, setShowNutrition] = useState(false);
  const location = useLocation();

  // Filter categories based on search query
  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.popularItems.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handle category selection from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryId = urlParams.get('category');
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      if (category) setSelected(category);
    }
  }, [location]);

  const toggleFavorite = (categoryId) => {
    setFavorites(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const shareCategory = async (category) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out ${category.name}`,
          text: category.description,
          url: `${window.location.origin}${category.link}`
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${window.location.origin}${category.link}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white px-4 bb-8 pt-8 md:pt-28">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Explore Healthy Foods
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the nutritional benefits, cooking tips, and health advantages of various food categories
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories, items, or benefits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-6xl mx-auto">
        {filteredCategories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(cat)}
            className={`px-4 py-3 rounded-xl text-white font-semibold transition-all bg-gray-900 ${
              selected.id === cat.id 
                ? "scale-105 shadow-2xl ring-2 ring-white ring-opacity-50" 
                : "opacity-80 hover:opacity-100"
            } ${cat.hoverColor}`}
          >
            <div className="flex items-center gap-2">
              {cat.icon}
              <span className="hidden sm:inline">{cat.name}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected Category Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-3xl p-6 mb-8 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-2/5">
                <div className="relative group">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={selected.image}
                    alt={selected.name}
                    className="rounded-2xl w-full h-64 lg:h-80 object-cover shadow-lg"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFavorite(selected.id)}
                      className="p-2 bg-gray-900/80 rounded-full backdrop-blur-sm"
                    >
                      <FaHeart 
                        className={`text-lg ${
                          favorites.includes(selected.id) 
                            ? "text-red-500 fill-red-500" 
                            : "text-white"
                        }`}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => shareCategory(selected)}
                      className="p-2 bg-gray-900/80 rounded-full backdrop-blur-sm"
                    >
                      <FaShare className="text-lg text-white" />
                    </motion.button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/50 p-3 rounded-xl text-center">
                    <FaSeedling className="text-green-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-300">Season</p>
                    <p className="font-semibold">{selected.season}</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-xl text-center">
                    <FaUtensils className="text-blue-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-300">Popular Items</p>
                    <p className="font-semibold">{selected.popularItems.length}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {selected.name}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNutrition(!showNutrition)}
                    className="px-4 py-2 bg-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-600 transition"
                  >
                    {showNutrition ? "Hide Nutrition" : "Show Nutrition"}
                  </motion.button>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {selected.description}
                </p>

                {/* Nutrition Info */}
                <AnimatePresence>
                  {showNutrition && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(selected.nutrition).map(([key, value]) => (
                          <div key={key} className="bg-gray-800/50 p-3 rounded-xl text-center">
                            <p className="text-sm text-gray-400 capitalize">{key}</p>
                            <p className="font-semibold text-green-400">{value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Popular Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">Popular Items</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.popularItems.map((item, index) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to={selected.link} className="flex-1 min-w-[200px]">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                    >
                      <FaUtensils />
                      View {selected.name} Products
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.entries(selected.details).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/30 transition group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    {key === 'functions' && <FaFire className="text-green-400" />}
                    {key === 'planting' && <FaSeedling className="text-green-400" />}
                    {key === 'cooking' && <FaUtensils className="text-green-400" />}
                    {key === 'preservation' && <FaSnowflake className="text-green-400" />}
                    {key === 'foodIdeas' && <FaCoffee className="text-green-400" />}
                  </div>
                  <h3 className="text-green-400 font-semibold text-lg capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              💡 Quick Tip
            </h3>
            <p className="text-gray-300">
              Always choose fresh, seasonal {selected.name.toLowerCase()} for maximum nutritional benefits and flavor!
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FoodPage;