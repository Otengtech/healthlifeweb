import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BicycleEx from "../../assets/bicyclecrunches.webp";
import { Link } from "react-router-dom";

const MiddleSec = () => {
  const [activeTab, setActiveTab] = useState("trending");

  const trendingReads = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      category: "Nutrition",
      title: "10 Benefits of Fruits",
      description:
        "Discover the top health benefits of adding more fruits to your daily diet.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      category: "Hair Care",
      title: "How to Repair Your Hair",
      description:
        "Learn effective tips and tricks to restore your hair's natural shine and strength.",
    },
    {
      id: 3,
      image: BicycleEx,
      category: "Fitness",
      title: "Healthy Life by Exercising",
      description:
        "Explore how regular exercise can transform your health and wellbeing.",
    },
  ];

  const healthPrograms = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      category: "Program",
      title: "Beginner Yoga",
      description:
        "Start your wellness journey with our beginner-friendly yoga program.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      category: "Program",
      title: "Healthy Eating Plan",
      description:
        "Personalized meal plans to help you eat healthier every day.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      category: "Program",
      title: "Cardio Challenge",
      description: "Boost your stamina with our 30-day cardio challenge.",
    },
  ];

  const tabs = [
    { key: "trending", label: "Health Blogs" },
    { key: "programs", label: "Health Programs" },
  ];

  return (
    <div className="w-full bg-gray-900 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-500 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Health
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 sm:gap-10 border-b-2 border-green-100 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative pb-2 text-base sm:text-lg md:text-lg font-semibold transition-colors ${
                activeTab === tab.key ? "text-green-500" : "text-gray-300"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-1 w-full bg-green-600 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <AnimatePresence mode="wait">
          {activeTab === "trending" && (
            <motion.div
              key="trending"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {trendingReads.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                  className="bg-gray-800 cursor-pointer rounded-2xl overflow-hidden shadow-md flex flex-col transition-transform"
                >
                  <div className="relative">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-60 sm:h-72 md:h-64 object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="absolute top-3 left-3 bg-green-400 text-gray-900 text-xs sm:text-sm px-3 py-1 rounded-full shadow">
                      {card.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h1 className="font-bold text-lg sm:text-xl mb-2 text-green-500">
                      {card.title}
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                      {card.description}
                    </p>
                    <Link
                      to="/blogpage"
                      className="mt-auto bg-green-500 text-gray-900 text-sm sm:text-base px-4 py-3 rounded hover:bg-green-400 transition font-medium text-center"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "programs" && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {healthPrograms.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
                >
                  <div className="relative">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-60 sm:h-72 md:h-64 object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="absolute top-3 left-3 bg-green-500 text-gray-900 text-xs sm:text-sm px-3 py-1 rounded-full shadow">
                      {card.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h1 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">
                      {card.title}
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                      {card.description}
                    </p>
                    <button className="mt-auto bg-green-500 text-gray-900 text-sm sm:text-base px-4 py-3 hover:bg-green-400 transition font-medium">
                      <Link to="/programspage">Read More</Link>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MiddleSec;
