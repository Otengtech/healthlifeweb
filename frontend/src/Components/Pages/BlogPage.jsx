import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Apple from "../../assets/apple.webp";
import Carrot from "../../assets/carrot.webp";
import Lemon from "../../assets/balanced-diet.webp";
import Spinach from "../../assets/spinach.webp";
import Strawberry from "../../assets/strawberry.webp";
import Watermelon from "../../assets/watermelon.webp";
import Orange from "../../assets/orange.webp";
import Avocado from "../../assets/avocado.webp";
import Banana from "../../assets/banana.webp";
import Berries from "../../assets/berries.webp";

import {
  FaAppleAlt,
  FaCarrot,
  FaLemon,
  FaHeart,
  FaLeaf,
  FaRunning,
  FaDumbbell,
  FaSpa,
  FaHandSparkles,
} from "react-icons/fa";

const BlogPage = () => {
  const fruits = [
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Apples",
      benefit:
        "Rich in fiber and antioxidants, apples support digestion and lower cholesterol, promoting heart health.",
      image: Apple,
    },
    {
      icon: <FaCarrot className="text-green-600 text-3xl" />,
      name: "Carrots",
      benefit:
        "High in beta-carotene, carrots improve eyesight, protect the skin, and boost the immune system.",
      image: Carrot,
    },
    {
      icon: <FaLemon className="text-green-600 text-3xl" />,
      name: "Lemons",
      benefit:
        "Lemons detoxify the body, enhance hydration, and strengthen immunity with vitamin C.",
      image: Lemon,
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      name: "Spinach",
      benefit:
        "Packed with iron, magnesium, and calcium, spinach aids in bone health and energy metabolism.",
      image: Spinach,
    },
    {
      icon: <FaHeart className="text-green-600 text-3xl" />,
      name: "Strawberries",
      benefit:
        "Loaded with antioxidants, strawberries help fight inflammation and improve heart function.",
      image: Strawberry,
    },
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Watermelon",
      benefit:
        "Hydrating and rich in lycopene, watermelon supports skin health and reduces muscle soreness.",
      image: Watermelon,
    },
    {
      icon: <FaCarrot className="text-green-600 text-3xl" />,
      name: "Oranges",
      benefit:
        "Oranges improve skin glow, support immunity, and help in collagen production for healthy joints.",
      image: Orange,
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      name: "Avocado",
      benefit:
        "Avocados contain healthy fats that improve heart health and support hormone balance.",
      image: Avocado,
    },
    {
      icon: <FaLemon className="text-green-600 text-3xl" />,
      name: "Banana",
      benefit:
        "Bananas restore electrolytes, boost energy, and improve mood through natural serotonin.",
      image: Banana,
    },
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Berries Mix",
      benefit:
        "Blueberries, raspberries, and blackberries enhance brain health and slow down aging.",
      image: Berries,
    },
  ];

  const [page, setPage] = useState(1);
  const fruitsPerPage = 4;
  const totalPages = Math.ceil(fruits.length / fruitsPerPage);

  const start = (page - 1) * fruitsPerPage;
  const currentFruits = fruits.slice(start, start + fruitsPerPage);

  return (
    <div className="bg-gray-900 py-14 px-6 md:px-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Trending Reads
      </motion.h1>

      {/* Fruits Section with Pagination */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-green-500 flex items-center gap-2">
          10 Benefits of Fruits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {currentFruits.map((fruit) => (
              <motion.div
                key={fruit.name}
                className="border border-gray-700 p-4 cursor-pointer rounded-xl hover:shadow-lg bg-gray-800 transition"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="rounded-lg h-36 w-full object-cover mb-3"
                />
                <div className="flex items-center gap-3 mb-2">
                  {fruit.icon}
                  <h3 className="font-semibold text-lg text-green-500">
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 gap-4">
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
      </motion.div>

      {/* Hair Repair + Exercise Sections */}
      <motion.div
        className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-16"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hair Repair Section */}
        <motion.div
          className="flex-1"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-500 flex items-center gap-2">
             How to Repair Your Hair
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hair damage can occur due to excessive heat, chemical treatments, or
            poor diet. To repair your hair naturally:
            <br />
            <br />
            <strong>Hydration:</strong> Drink enough water and use moisturizing
            hair masks weekly.
            <br />
            <strong>Healthy Diet:</strong> Include biotin-rich foods like eggs,
            nuts, and avocados.
            <br />
            <strong>Avoid Heat:</strong> Reduce frequent straightening or
            blow-drying.
            <br />
            <strong>Use Natural Oils:</strong> Coconut oil, argan oil, and aloe
            vera strengthen hair from roots.
            <br />
            Consistency is key — within 4–6 weeks, you’ll notice stronger,
            shinier, and thicker hair growth.
          </p>
        </motion.div>

        {/* Healthy Life Section */}
        <motion.div
          className="flex-1"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-500 flex items-center gap-2">
            Healthy Life by Exercising
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Exercise is the foundation of physical and mental well-being. A
            consistent routine helps reduce stress, improve cardiovascular
            health, and strengthen muscles.
            <br />
            <br />
            <strong>Strength Training:</strong> Builds lean muscle and burns fat
            efficiently.
            <br />
            <strong>Walking & Jogging:</strong> Boosts metabolism and heart
            function.
            <br />
            <strong>Yoga & Meditation:</strong> Enhance flexibility and reduce
            anxiety.
            <br />
            <strong>Improved Sleep:</strong> Physical activity regulates hormones
            and helps deep rest.
            <br />
            <br />
            Just 30 minutes a day can transform your lifestyle — promoting
            happiness, confidence, and longevity.
          </p>
          <div className="flex gap-4 mt-4 text-green-600">
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
