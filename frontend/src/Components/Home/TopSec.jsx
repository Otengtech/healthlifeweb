import React, { useState, useEffect } from "react";
import leftwindow from "../../assets/leftwindow.jpg";
import Avocado from "../../assets/avocado.webp";
import Spinach from "../../assets/spinach.webp";
import Salmon from "../../assets/salmon.webp";
import Greek_Yogurt from "../../assets/greek-yogurt.webp";
import Blueberry from "../../assets/blueberries.webp";
import MiddleSec from "./MiddleSec";
import DietBoost from "../../assets/baked-salmon.webp";
import Exercise from "../../assets/strength.webp";
import Vitamin from "../../assets/sports-nutrition.webp";
import Gut from "../../assets/lean-protein.webp";
import Sleep from "../../assets/sleep.webp";
import Hydration from "../../assets/hydration.webp";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHeartbeat, 
  FaBrain, 
  FaRunning, 
  FaUsers, 
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaLeaf,
  FaFire,
  FaHeart
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopSec = () => {
  const healthyProducts = [
    {
      name: "Avocado",
      image: Avocado,
      nutrients: ["Healthy fats", "Fiber", "Potassium", "Vitamin E", "Vitamin C"],
      importance: "Avocados support heart health, improve skin elasticity, and aid digestion. Their potassium helps regulate blood pressure.",
      benefits: ["Heart Health", "Skin Elasticity", "Digestion"],
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Spinach",
      image: Spinach,
      nutrients: ["Iron", "Calcium", "Vitamin A", "Vitamin K", "Folate"],
      importance: "Spinach boosts blood health, strengthens bones, and protects cells from aging.",
      benefits: ["Blood Health", "Bone Strength", "Anti-Aging"],
      color: "from-green-500 to-lime-400"
    },
    {
      name: "Salmon",
      image: Salmon,
      nutrients: ["Omega-3", "Protein", "Vitamin D", "B12", "Selenium"],
      importance: "Salmon improves brain function, reduces inflammation, and supports heart health.",
      benefits: ["Brain Function", "Anti-Inflammatory", "Heart Health"],
      color: "from-orange-400 to-pink-500"
    },
    {
      name: "Greek Yogurt",
      image: Greek_Yogurt,
      nutrients: ["Protein", "Calcium", "Probiotics"],
      importance: "Greek yogurt promotes gut health and supports muscle recovery with high protein.",
      benefits: ["Gut Health", "Muscle Recovery", "Bone Strength"],
      color: "from-blue-100 to-blue-300"
    },
    {
      name: "Blueberries",
      image: Blueberry,
      nutrients: ["Antioxidants", "Vitamin C", "Fiber"],
      importance: "Blueberries protect against disease, boost memory, and support skin health.",
      benefits: ["Disease Prevention", "Memory Boost", "Skin Health"],
      color: "from-purple-400 to-blue-500"
    },
  ];

  const healthNews = [
    {
      image: DietBoost,
      title: "Mediterranean Diet Boosts Heart Health",
      summary: "Following a Mediterranean diet can reduce the risk of heart disease and improve longevity.",
      category: "Nutrition",
      readTime: "3 min read"
    },
    {
      image: Exercise,
      title: "Daily Exercise Boosts Mental Health",
      summary: "Just 30 minutes of physical activity helps reduce stress and enhance mood.",
      category: "Fitness",
      readTime: "2 min read"
    },
    {
      image: Vitamin,
      title: "Vitamin D Deficiency Rising",
      summary: "Experts warn of increasing vitamin D deficiency due to poor diet and low sunlight exposure.",
      category: "Wellness",
      readTime: "4 min read"
    },
    {
      image: Gut,
      title: "Probiotics Improve Gut Function",
      summary: "Research highlights probiotics' role in better digestion and immune support.",
      category: "Gut Health",
      readTime: "3 min read"
    },
    {
      image: Sleep,
      title: "Sleep Boosts Immunity",
      summary: "Adequate rest strengthens the immune system and helps the body recover effectively.",
      category: "Sleep",
      readTime: "2 min read"
    },
    {
      image: Hydration,
      title: "Hydration Affects Brain Focus",
      summary: "Staying hydrated improves focus, memory, and productivity throughout the day.",
      category: "Hydration",
      readTime: "2 min read"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-rotate healthy foods
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % healthyProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, healthyProducts.length]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % healthyProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + healthyProducts.length) % healthyProducts.length);
  };

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 2) % healthNews.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 2 + healthNews.length) % healthNews.length);
  };

  const visibleNews = healthNews.slice(currentNewsIndex, currentNewsIndex + 2);
  const totalPages = Math.ceil(healthNews.length / 2);

  return (
    <>
      {/* 🥑 HEALTHY FOODS + HEALTH NEWS SECTION */}
      <div className="w-full bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 py-20 px-6 sm:px-12 lg:px-20 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          
          {/* LEFT - Healthy Foods Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <motion.div
              className="text-center mb-10"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full mb-3">
                <FaLeaf className="text-green-300" />
                <span className="text-green-300 text-sm font-semibold">Superfoods Spotlight</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-4">
                Healthy Foods
              </h2>
              <p className="text-gray-300 text-lg">Discover the power of nutrient-rich superfoods</p>
            </motion.div>

            <div 
              className="relative w-full max-w-2xl"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <Link to="/foodpage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: -100, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 100, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-500"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${healthyProducts[currentIndex].color} opacity-10`} />
                    
                    <div className="relative flex flex-col md:flex-row min-h-[400px]">
                      {/* Text Content */}
                      <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${healthyProducts[currentIndex].color}`} />
                          <span className="text-green-600 font-semibold text-sm">Superfood</span>
                        </div>
                        
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                          {healthyProducts[currentIndex].name}
                        </h1>
                        
                        <p className="text-gray-600 text-base mb-4 leading-relaxed">
                          {healthyProducts[currentIndex].importance}
                        </p>

                        {/* Benefits Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {healthyProducts[currentIndex].benefits.map((benefit, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>

                        <div className="mt-2">
                          <h3 className="font-semibold text-green-700 mb-2 text-sm">Key Nutrients:</h3>
                          <div className="grid grid-cols-2 gap-1">
                            {healthyProducts[currentIndex].nutrients.map((nutrient, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <FaStar className="text-yellow-500 text-xs" />
                                <span className="text-gray-700 text-sm">{nutrient}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="md:w-1/2 relative">
                        {/* <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent z-10 md:hidden" /> */}
                        <img
                          src={healthyProducts[currentIndex].image}
                          alt={healthyProducts[currentIndex].name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                          <FaArrowRight className="text-green-600" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Link>

              {/* Navigation Arrows */}
              <button
                onClick={prevProduct}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-20"
              >
                <FaArrowLeft className="text-green-600" />
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-20"
              >
                <FaArrowRight className="text-green-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-3">
              {healthyProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50' 
                      : 'bg-green-300/50 hover:bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - Health News */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start border-t-2 lg:border-t-0 lg:border-l-2 border-green-700/30 pt-12 lg:pt-0 lg:pl-12">
            <motion.div
              className="text-center mb-10"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full mb-3">
                <FaFire className="text-blue-300" />
                <span className="text-blue-300 text-sm font-semibold">Latest Updates</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent mb-4">
                Health News
              </h2>
              <p className="text-gray-300 text-lg">Stay updated with the latest health research</p>
            </motion.div>

            <div className="relative w-full min-h-[400px] flex flex-col items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNewsIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col gap-6 w-full"
                >
                  {visibleNews.map((news, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                      className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="h-16 w-16 rounded-xl object-cover shadow-lg"
                          />
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                            {news.category}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-white text-lg leading-tight group-hover:text-green-200 transition-colors">
                              {news.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                            {news.summary}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs">{news.readTime}</span>
                            <Link
                              to="/newspage"
                              className="inline-flex items-center gap-1 text-green-300 hover:text-green-200 text-sm font-semibold group-hover:gap-2 transition-all"
                            >
                              Read More
                              <FaArrowRight className="text-xs" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* News Navigation */}
            <div className="flex items-center justify-between w-full mt-8">
              <button
                onClick={prevNews}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
              >
                <FaArrowLeft className="text-sm" />
                <span className="text-sm">Previous</span>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentNewsIndex(i * 2)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i * 2 === currentNewsIndex
                        ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextNews}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all"
              >
                <span className="text-sm">Next</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <MiddleSec />

      {/* 🎯 What is Good Health Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-green-800/50 px-6 py-3 rounded-full mb-6">
            <FaHeart className="text-green-300" />
            <span className="text-green-300 font-semibold">Understanding Wellness</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8">
            What is Good Health?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12 leading-relaxed">
            Good health is more than the absence of disease — it's a vibrant state of 
            physical, mental, and emotional well-being supported by proper nutrition, 
            quality sleep, regular exercise, and meaningful relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "What is Health?",
              text: "Health is not just the absence of disease or weakness—it's a complete state of physical, mental, and emotional well-being. It's the balance between your body, mind, and lifestyle that enables you to thrive in daily life.",
              icon: "🌿",
              gradient: "from-green-500 to-emerald-600"
            },
            {
              title: "Factors for Good Health",
              text: "Good health depends on many factors working together in harmony. A balanced diet fuels your body with essential nutrients, while regular physical activity strengthens your muscles, heart, and immune system.",
              icon: "💪",
              gradient: "from-blue-500 to-cyan-600"
            },
            {
              title: "Preserving Health",
              text: "Preserving your health means making conscious choices every day. Eat whole foods, stay active, drink enough water, and get enough rest. Avoid harmful habits like smoking or excessive alcohol.",
              icon: "🛡️",
              gradient: "from-purple-500 to-pink-600"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              {/* <div className="text-4xl mb-4">{item.icon}</div> */}
              <h2 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-300 text-left leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ❤️ The Need for Good Health */}
      <section
        className="relative w-full min-h-[600px] bg-cover bg-fixed bg-center flex items-center justify-center sm:px-6 py-20"
        style={{ backgroundImage: `url(${leftwindow})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-2/5">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-full mb-4">
                <FaHeart className="text-green-300" />
                <span className="text-green-300 text-sm font-semibold">Why It Matters</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Need for <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Good Health</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Investing in your health today pays dividends for a lifetime. Discover how good health transforms every aspect of your life.
              </p>
              <Link
                to="/benefits"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:gap-3 hover:shadow-lg"
              >
                Explore Benefits
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>

          <div className="md:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaHeartbeat className="text-3xl" />,
                  name: 'Increases Life Expectancy',
                  desc: 'Maintaining good health prevents diseases and promotes longevity through better lifestyle choices.',
                  color: 'from-red-500 to-pink-500'
                },
                {
                  icon: <FaBrain className="text-3xl" />,
                  name: 'Improves Mental Well-being',
                  desc: 'A healthy body supports a sound and happy mind, reducing anxiety and depression risks.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <FaRunning className="text-3xl" />,
                  name: 'Boosts Energy & Focus',
                  desc: 'Healthy habits enhance stamina, productivity, and mental clarity throughout the day.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <FaUsers className="text-3xl" />,
                  name: 'Strengthens Social Life',
                  desc: 'Feeling well boosts confidence, energy, and meaningful social interactions.',
                  color: 'from-purple-500 to-indigo-500'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  <div className={`text-3xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSec;