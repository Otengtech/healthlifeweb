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
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

const BlogPage = () => {
  const fruits = [
    {
      icon: <FaAppleAlt className="text-emerald-400 text-2xl" />,
      name: "Apples",
      benefit: "Rich in fiber and antioxidants, apples support digestion and lower cholesterol, promoting heart health.",
      image: Apple,
      color: "from-emerald-500/20 to-emerald-600/10",
    },
    {
      icon: <FaCarrot className="text-orange-400 text-2xl" />,
      name: "Carrots",
      benefit: "High in beta-carotene, carrots improve eyesight, protect the skin, and boost the immune system.",
      image: Carrot,
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      icon: <FaLemon className="text-yellow-400 text-2xl" />,
      name: "Lemons",
      benefit: "Lemons detoxify the body, enhance hydration, and strengthen immunity with vitamin C.",
      image: Lemon,
      color: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      icon: <FaLeaf className="text-green-400 text-2xl" />,
      name: "Spinach",
      benefit: "Packed with iron, magnesium, and calcium, spinach aids in bone health and energy metabolism.",
      image: Spinach,
      color: "from-green-500/20 to-green-600/10",
    },
    {
      icon: <FaHeart className="text-rose-400 text-2xl" />,
      name: "Strawberries",
      benefit: "Loaded with antioxidants, strawberries help fight inflammation and improve heart function.",
      image: Strawberry,
      color: "from-rose-500/20 to-rose-600/10",
    },
  ];

  const [page] = useState(1);
  const fruitsPerPage = 5;
  const totalPages = Math.ceil(fruits.length / fruitsPerPage);

  const start = (page - 1) * fruitsPerPage;
  const currentFruits = fruits.slice(start, start + fruitsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-28 px-4 sm:px-6 lg:px-8">
      {/* Modern Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-200 via-cyan-200 to-slate-100 bg-clip-text text-transparent">
            Health & Wellness
          </h1>
          <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Discover the power of natural nutrition and holistic health practices
        </p>
      </motion.div>

      {/* Fruits Section - Modern Cards */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-2">
              Nutritional Powerhouses
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-sm font-medium">5 Essential Fruits & Vegetables</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatePresence mode="wait">
            {currentFruits.map((fruit, index) => (
              <motion.div
                key={fruit.name}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-1 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${fruit.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative bg-slate-800/40 rounded-xl h-full backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-2">
                      {fruit.icon}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-white mb-3 group-hover:text-emerald-200 transition-colors">
                      {fruit.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {fruit.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modern Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-xl hover:bg-slate-700/50 disabled:opacity-30 disabled:hover:bg-slate-800/50 transition-all border border-slate-700/50"
            >
              <FaArrowLeft className="text-sm" />
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    page === i + 1
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-300 rounded-xl hover:bg-slate-700/50 disabled:opacity-30 disabled:hover:bg-slate-800/50 transition-all border border-slate-700/50"
            >
              Next
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        )}
      </section>

      {/* Health Articles Section - Modern Layout */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hair Repair Card */}
          <motion.article 
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-1 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30"
            whileHover={{ y: -5 }}
          >
            <div className="relative bg-slate-800/40 rounded-xl h-full backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <FaSpa className="text-cyan-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-slate-200 bg-clip-text text-transparent">
                  Natural Hair Repair
                </h2>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Hair damage can occur due to heat, chemicals, or poor nutrition. 
                  Repair it naturally with these proven methods:
                </p>
                
                <div className="grid gap-3 mt-6">
                  {[
                    { icon: "💧", title: "Hydration", desc: "Drink more water and use moisturizing masks weekly" },
                    { icon: "🥑", title: "Biotin-rich foods", desc: "Eggs, nuts, and avocados for stronger hair" },
                    { icon: "🔥", title: "Less heat", desc: "Limit straightening and blow-drying" },
                    { icon: "🌿", title: "Natural oils", desc: "Coconut, argan, and aloe vera treatments" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                      {/* <span className="text-lg">{item.icon}</span> */}
                      <div>
                        <h4 className="font-semibold text-cyan-200 text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-cyan-200 font-medium mt-6 text-sm">
                  With consistency, you'll notice shinier and stronger hair in weeks.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Exercise Card */}
          <motion.article 
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-1 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/30"
            whileHover={{ y: -5 }}
          >
            <div className="relative bg-slate-800/40 rounded-xl h-full backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <FaDumbbell className="text-emerald-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-slate-200 bg-clip-text text-transparent">
                  Active Lifestyle
                </h2>
              </div>

              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Exercise is the key to physical and mental strength. Regular movement 
                  improves heart health, mood, and energy levels.
                </p>

                <div className="grid gap-3 mt-6">
                  {[
                    { icon: "💪", title: "Strength Training", desc: "Builds lean muscle and burns fat effectively" },
                    { icon: "🏃", title: "Walking & Jogging", desc: "Boosts metabolism and cardiovascular health" },
                    { icon: "🧘", title: "Yoga & Meditation", desc: "Improves flexibility, focus, and mental clarity" },
                    { icon: "😴", title: "Better Sleep", desc: "Regular exercise helps balance hormones and improve sleep" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                      {/* <span className="text-lg">{item.icon}</span> */}
                      <div>
                        <h4 className="font-semibold text-emerald-200 text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700/50">
                  <p className="text-emerald-200 font-medium text-sm">
                    Just 30 minutes daily can transform your life
                  </p>
                  <div className="flex gap-3 text-slate-400">
                    <FaDumbbell className="hover:text-emerald-400 transition-colors" />
                    <FaHeart className="hover:text-rose-400 transition-colors" />
                    <FaLeaf className="hover:text-green-400 transition-colors" />
                    <FaSpa className="hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;