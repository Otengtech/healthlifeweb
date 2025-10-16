import React from "react";
import { motion } from "framer-motion";
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
  // Left Section: 10 Benefits of Fruits
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

  return (
    <div className="bg-gray-900 py-20 px-6 md:px-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Trending Reads
      </motion.h1>

      <div className="">
        {/* Left Section: 10 Benefits of Fruits */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-green-500 flex items-center gap-2">
            10 Benefits of Fruits
          </h2>

          <div className="grid grid-cols-4 gap-6">
            {fruits.map((fruit, index) => (
              <motion.div
                key={index}
                className="border border-gray-700 p-4 rounded-xl hover:shadow-lg bg-gray-800 transition"
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
          </div>
        </motion.div>

        {/* Right Section: Hair Repair + Exercise Life */}
        <motion.div
          className="space-y-10"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hair Repair Section */}
          <div className="flex items-center gap-10 mt-10">
            <div className="border border-gray-200 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-500 flex items-center gap-2">
                <FaHandSparkles className="text-green-500" /> How to Repair Your
                Hair
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Hair damage can occur due to excessive heat, chemical
                treatments, or poor diet. To repair your hair naturally:
                <br />
                <br />
                <strong>Hydration:</strong> Drink enough water and use
                moisturizing hair masks weekly.
                <br />
                <strong>Healthy Diet:</strong> Include biotin-rich foods like
                eggs, nuts, and avocados.
                <br />
                <strong>Avoid Heat:</strong> Reduce frequent straightening or
                blow-drying.
                <br />
                <strong>Use Natural Oils:</strong> Coconut oil, argan oil, and
                aloe vera strengthen hair from roots.
                <br />
                Consistency is key — within 4–6 weeks, you’ll notice stronger,
                shinier, and thicker hair growth.
              </p>
            </div>

            {/* Healthy Life by Exercising Section */}
            <div className="border border-gray-200 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-500 flex items-center gap-2">
                <FaRunning className="text-green-500" /> Healthy Life by
                Exercising
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Exercise is the foundation of physical and mental well-being. A
                consistent routine helps reduce stress, improve cardiovascular
                health, and strengthen muscles.
                <br />
                <br />
                <strong>Strength Training:</strong> Builds lean muscle and burns
                fat efficiently.
                <br />
                <strong>Walking & Jogging:</strong> Boosts metabolism and heart
                function.
                <br />
                <strong>Yoga & Meditation:</strong> Enhance flexibility and
                reduce anxiety.
                <br />
                <strong>Improved Sleep:</strong> Physical activity regulates
                hormones and helps deep rest.
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
