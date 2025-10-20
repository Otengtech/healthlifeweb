import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAppleAlt,
  FaCarrot,
  FaCoffee,
  FaFish,
  FaLeaf,
} from "react-icons/fa";

const categories = [
  {
    id: "vegetables",
    name: "Vegetables",
    color: "from-green-400 to-emerald-600",
    icon: <FaCarrot className="text-4xl text-white" />,
    image:
      "https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Vegetables are packed with essential nutrients, fiber, and antioxidants that boost immunity, improve digestion, and reduce chronic disease risk.",
    link: "/vegepage",
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
  },
  {
    id: "fruits",
    name: "Fruits",
    color: "from-yellow-400 to-orange-500",
    icon: <FaAppleAlt className="text-4xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Fruits are nature’s candy — sweet, hydrating, and rich in vitamins, fiber, and antioxidants for better skin and overall health.",
    link: "/fruitpage",
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
  },
  {
    id: "beverages",
    name: "Beverages",
    color: "from-sky-400 to-blue-600",
    icon: <FaCoffee className="text-4xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Healthy beverages help maintain hydration, energy levels, and nutrient balance throughout the day.",
    link: "/bevpage",
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
  },
  {
    id: "proteins",
    name: "Proteins",
    color: "from-red-400 to-pink-600",
    icon: <FaFish className="text-4xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1626697556426-8a55a8af4999?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Proteins are the building blocks of life — vital for muscle repair, hormone regulation, and energy.",
    link: "/proteinpage",
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
  },
  {
    id: "herbs",
    name: "Herbs & Spices",
    color: "from-green-500 to-lime-600",
    icon: <FaLeaf className="text-4xl text-white" />,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    description:
      "Herbs and spices add flavor and aroma to meals while offering healing and anti-inflammatory properties.",
    link: "/herbpage",
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
  },
];

const FoodPage = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-green-400 mb-10 text-center"
      >
        Explore Healthy Foods
      </motion.h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(cat)}
            className={`px-5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all bg-gradient-to-r ${cat.color} ${
              selected.id === cat.id ? "scale-105 shadow-lg" : "opacity-70"
            }`}
          >
            <div className="flex items-center gap-2">
              {cat.icon}
              {cat.name}
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
          className="w-full max-w-5xl"
        >
          {/* Image and Description */}
          <div className="flex flex-col lg:flex-row gap-8">
            <Link to={selected.link} className="w-full lg:w-1/2">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={selected.image}
                alt={selected.name}
                className="rounded-2xl w-full object-cover shadow-lg cursor-pointer"
              />
            </Link>

            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-green-400">
                {selected.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {selected.description}
              </p>
              <Link to={selected.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition"
                >
                  View {selected.name} Products →
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-10 text-gray-300">
            {Object.entries(selected.details).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800/60 p-5 rounded-xl hover:bg-gray-800 transition"
              >
                <h3 className="text-green-400 font-semibold text-lg capitalize mb-2">
                  {key.replace(/([A-Z])/g, " $1")}
                </h3>
                <p className="text-sm sm:text-base">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FoodPage;
