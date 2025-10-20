import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Apple from "../../assets/apple.webp";
import Carrot from "../../assets/carrot.webp";
import Lemon from "../../assets/balanced-diet.webp";
import Spinach from "../../assets/spinach.webp";
import Strawberry from "../../assets/strawberry.webp";

import {
  FaAppleAlt,
  FaCarrot,
  FaLemon,
  FaLeaf,
  FaHeart,
  FaDumbbell,
  FaSpa,
} from "react-icons/fa";

const BlogPage = () => {
  // ✅ Only 5 fruits now
  const fruits = [
    {
      icon: <FaAppleAlt className="text-green-500 text-3xl" />,
      name: "Apples",
      benefit:
        "Rich in fiber and antioxidants, apples support digestion and lower cholesterol, promoting heart health.",
      image: Apple,
    },
    {
      icon: <FaCarrot className="text-green-500 text-3xl" />,
      name: "Carrots",
      benefit:
        "High in beta-carotene, carrots improve eyesight, protect the skin, and boost the immune system.",
      image: Carrot,
    },
    {
      icon: <FaLemon className="text-green-500 text-3xl" />,
      name: "Lemons",
      benefit:
        "Lemons detoxify the body, enhance hydration, and strengthen immunity with vitamin C.",
      image: Lemon,
    },
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      name: "Spinach",
      benefit:
        "Packed with iron, magnesium, and calcium, spinach aids in bone health and energy metabolism.",
      image: Spinach,
    },
    {
      icon: <FaHeart className="text-green-500 text-3xl" />,
      name: "Strawberries",
      benefit:
        "Loaded with antioxidants, strawberries help fight inflammation and improve heart function.",
      image: Strawberry,
    },
  ];

  const [page, setPage] = useState(1);
  const fruitsPerPage = 5;
  const totalPages = Math.ceil(fruits.length / fruitsPerPage);

  const start = (page - 1) * fruitsPerPage;
  const currentFruits = fruits.slice(start, start + fruitsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 via-gray-950 to-black text-gray-100 py-14 px-6 md:px-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Health Blogs
      </motion.h1>

      {/* Fruits Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-2">
          Top 5 Benefits of Fruits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentFruits.map((fruit) => (
              <motion.div
                key={fruit.name}
                className="border border-green-800/40 bg-gray-800/40 backdrop-blur-md rounded-2xl p-5 hover:shadow-lg hover:border-green-500/60 transition-all"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="rounded-lg h-40 w-full object-cover mb-4 shadow-md"
                />
                <div className="flex items-center gap-3 mb-3">
                  {fruit.icon}
                  <h3 className="font-semibold text-lg text-green-400">
                    {fruit.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {fruit.benefit}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination (Optional) */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-300 font-semibold">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-green-700 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </motion.div>

      {/* Hair Repair + Exercise Sections */}
      <motion.div
        className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hair Repair Section */}
        <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            How to Repair Your Hair Naturally 
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hair damage can occur due to heat, chemicals, or poor nutrition.
            Repair it naturally with:
            <br />
            <br />
            <strong>Hydration:</strong> Drink more water and use moisturizing
            masks weekly. <br />
            <strong>Biotin-rich foods:</strong> Eggs, nuts, and avocados. <br />
            <strong>Less heat:</strong> Limit straightening and blow-drying.{" "}
            <br />
            <strong>Natural oils:</strong> Coconut, argan, and aloe vera. <br />
            <br />
            With consistency, you’ll notice shinier and stronger hair in weeks.
          </p>
        </motion.div>

        {/* Exercise Section */}
        <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Live Healthy Through Exercise 
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Exercise is the key to physical and mental strength. Regular
            movement improves heart health, mood, and energy.
            <br />
            <br />
            <strong>Strength Training:</strong> Builds lean muscle and burns fat.
            <br />
            <strong>Walking & Jogging:</strong> Boosts metabolism. <br />
            <strong>Yoga & Meditation:</strong> Improves flexibility and focus.
            <br />
            <strong>Better Sleep:</strong> Keeps hormones balanced. <br />
            <br />
            Just 30 minutes daily can transform your life — enhancing confidence,
            strength, and happiness.
          </p>

          <div className="flex gap-4 mt-5 text-green-500 text-xl">
            <FaDumbbell />
            <FaHeart />
            <FaLeaf />
            <FaSpa />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;
