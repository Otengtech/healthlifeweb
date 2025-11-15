import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BicycleEx from "../../assets/bicyclecrunches.webp";
import { Link } from "react-router-dom";
import { 
  FaFire, 
  FaPlay, 
  FaClock, 
  FaStar, 
  FaHeart, 
  FaArrowRight,
  FaUser,
  FaChartLine,
  FaSeedling
} from "react-icons/fa";

const MiddleSec = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [hoveredCard, setHoveredCard] = useState(null);

  const trendingReads = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      category: "Nutrition",
      title: "5 Top Benefits of Fruits",
      description: "Discover the top health benefits of adding more fruits to your daily diet and how they can transform your wellbeing.",
      readTime: "5 min read",
      difficulty: "Beginner",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      category: "Hair Care",
      title: "How to Repair Your Hair Naturally",
      description: "Learn effective natural remedies and tips to restore your hair's natural shine, strength, and vitality.",
      readTime: "7 min read",
      difficulty: "Intermediate",
      rating: 4.5,
      featured: false
    },
    {
      id: 3,
      image: BicycleEx,
      category: "Fitness",
      title: "Healthy Life Through Exercise",
      description: "Explore how regular exercise can transform your physical and mental health with proven techniques.",
      readTime: "6 min read",
      difficulty: "Beginner",
      rating: 4.9,
      featured: true
    },
  ];

  const healthPrograms = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      category: "Yoga Program",
      title: "Beginner Yoga Journey",
      description: "Start your wellness journey with our 30-day beginner-friendly yoga program designed for all levels.",
      duration: "30 days",
      participants: "2.5k+",
      level: "Beginner",
      popular: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      category: "Nutrition Plan",
      title: "Healthy Eating Mastery",
      description: "Personalized meal plans and nutrition guidance to help you eat healthier and feel amazing every day.",
      duration: "28 days",
      participants: "1.8k+",
      level: "All Levels",
      popular: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      category: "Fitness Challenge",
      title: "Cardio Boost Challenge",
      description: "Boost your stamina and endurance with our intensive 30-day cardio challenge program.",
      duration: "30 days",
      participants: "3.2k+",
      level: "Intermediate",
      popular: false
    },
  ];

  const tabs = [
    { key: "trending", label: "Health Blogs", icon: <FaFire />, count: trendingReads.length },
    { key: "programs", label: "Health Programs", icon: <FaPlay />, count: healthPrograms.length },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-800/50 px-6 py-2 rounded-full mb-4">
            <FaSeedling className="text-green-300" />
            <span className="text-green-300 text-sm font-semibold">Explore Wellness</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-4">
            Discover Your Health
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our curated collection of health blogs and programs designed to transform your wellness journey
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 group ${
                activeTab === tab.key
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`transition-transform group-hover:scale-110 ${
                activeTab === tab.key ? "text-white" : "text-green-400"
              }`}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeTab === tab.key
                  ? "bg-white text-green-600"
                  : "bg-gray-700 text-gray-300"
              }`}>
                {tab.count}
              </span>
              
              {activeTab === tab.key && (
                <motion.div
                  className="absolute inset-0 border-2 border-green-400 rounded-2xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {activeTab === "trending" && (
            <motion.div
              key="trending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trendingReads.map((card, index) => (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-green-700/30 hover:border-green-500/50 transition-all duration-500 h-full flex flex-col"
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                            {card.category}
                          </span>
                          {card.featured && (
                            <span className="bg-yellow-500 text-gray-900 text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg flex items-center gap-1">
                              <FaStar className="text-xs" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <FaStar className="text-yellow-400" />
                          {card.rating}
                        </div>

                        {/* Read Time */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <FaClock className="text-green-400" />
                          {card.readTime}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors line-clamp-2">
                            {card.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {card.description}
                          </p>
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                            {card.difficulty}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <FaHeart className="text-red-400" />
                            <span className="text-xs">24 likes</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            to="/blogpage"
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold text-center block transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                          >
                            Read Article
                            <motion.span
                              animate={{ x: hoveredCard === card.id ? 4 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaArrowRight />
                            </motion.span>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "programs" && (
            <motion.div
              key="programs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {healthPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    variants={cardVariants}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(program.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col"
                      whileHover={{ 
                        y: -8,
                        scale: 1.02
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Popular Badge */}
                        {program.popular && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg flex items-center gap-1">
                            <FaFire className="text-xs" />
                            Popular
                          </div>
                        )}

                        {/* Category */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1.5 rounded-full font-semibold shadow">
                          {program.category}
                        </div>

                        {/* Level */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {program.level}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                            {program.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {program.description}
                          </p>
                        </div>

                        {/* Program Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaClock className="text-green-500" />
                            <span className="text-sm font-medium">{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FaUser className="text-blue-500" />
                            <span className="text-sm font-medium">{program.participants}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            to="/programspage"
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold text-center block transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-green-500/25"
                          >
                            Start Program
                            <motion.span
                              animate={{ x: hoveredCard === program.id ? 4 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaArrowRight />
                            </motion.span>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to={activeTab === "trending" ? "/blogpage" : "/programspage"}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-2xl font-semibold transition-all duration-300 border border-green-700/30 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
          >
            View All {activeTab === "trending" ? "Blogs" : "Programs"}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MiddleSec;