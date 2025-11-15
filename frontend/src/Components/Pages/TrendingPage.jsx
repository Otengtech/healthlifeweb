import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaEye, FaHeart, FaCommentDots, FaShareAlt, FaCalendar, FaFire } from "react-icons/fa";
import PlantBased from "../../assets/gcs.webp";
import FitnessTech from "../../assets/jumpsquats.webp";
import SleepApp from "../../assets/sleep.webp";
import WaterIntake from "../../assets/hydration.webp";
import SkinCare from "../../assets/supplements.webp";
import MentalBreak from "../../assets/relaxation.webp";
import HerbalTea from "../../assets/tea.avif";
import HealthAI from "../../assets/strength.webp";

const trendingHealthNews = [
  {
    image: PlantBased,
    title: "Plant-Based Diets Continue to Trend Worldwide",
    date: "2025-07-03",
    views: 67800,
    likes: 1200,
    comments: 340,
    shares: 510,
    summary: "With sustainability in focus, more people are adopting plant-based meals. Nutritionists highlight their benefits: lower cholesterol, improved digestion, and reduced cancer risk.",
    category: "Nutrition",
    trendLevel: 95,
  },
  {
    image: FitnessTech,
    title: "Fitness Tech Gadgets Revolutionize Workouts",
    date: "2025-09-04",
    views: 95500,
    likes: 1540,
    comments: 415,
    shares: 750,
    summary: "Smartwatches and AI-powered fitness trackers are changing how we exercise. These devices monitor heart rate, sleep, calories, and even hydration.",
    category: "Technology",
    trendLevel: 98,
  },
  {
    image: SleepApp,
    title: "Sleep Apps Are Helping Millions Rest Better",
    date: "2025-02-05",
    views: 30100,
    likes: 640,
    comments: 129,
    shares: 250,
    summary: "Apps that track sleep cycles and play calming sounds are on the rise. Scientists say monitoring sleep patterns helps users identify stress triggers.",
    category: "Wellness",
    trendLevel: 85,
  },
  {
    image: WaterIntake,
    title: "Tracking Water Intake Leads to Healthier Habits",
    date: "2025-04-04",
    views: 25400,
    likes: 580,
    comments: 102,
    shares: 198,
    summary: "Staying hydrated is essential for kidney and brain function. Apps that remind users to drink water help prevent fatigue and poor concentration.",
    category: "Hydration",
    trendLevel: 82,
  },
  {
    image: SkinCare,
    title: "Dermatologists Warn Against Overusing Skin Products",
    date: "2025-03-07",
    views: 73100,
    likes: 980,
    comments: 302,
    shares: 440,
    summary: "Over-cleansing and excessive product use can damage the skin barrier. Dermatologists recommend a simple 3-step routine.",
    category: "Skincare",
    trendLevel: 88,
  },
  {
    image: MentalBreak,
    title: "The Science Behind Taking Mental Breaks at Work",
    date: "2025-07-08",
    views: 41100,
    likes: 790,
    comments: 154,
    shares: 280,
    summary: "Research shows that short breaks during work improve creativity and productivity. Stepping away from screens helps the brain reset.",
    category: "Mental Health",
    trendLevel: 90,
  },
  {
    image: HerbalTea,
    title: "Herbal Teas Gain Popularity as Natural Remedies",
    date: "2025-07-10",
    views: 52600,
    likes: 990,
    comments: 188,
    shares: 360,
    summary: "Herbal teas like chamomile, ginger, and green tea are trending for their calming and healing properties. They promote digestion and reduce stress.",
    category: "Natural Remedies",
    trendLevel: 87,
  },
  {
    image: HealthAI,
    title: "AI-Powered Diagnostics Making Early Detection Easier",
    date: "2025-07-12",
    views: 134500,
    likes: 3100,
    comments: 630,
    shares: 1200,
    summary: "Artificial Intelligence is improving early disease detection accuracy in hospitals. Machine learning models analyze scans faster.",
    category: "Technology",
    trendLevel: 99,
  },
];

const TrendingPage = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(trendingHealthNews);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(trendingHealthNews.map(news => news.category))];

  const handleSearch = (e) => {
    e.preventDefault();
    const results = trendingHealthNews.filter((news) =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.summary.toLowerCase().includes(query.toLowerCase()) ||
      news.category.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results.length ? results : []);
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFiltered(trendingHealthNews);
    } else {
      const results = trendingHealthNews.filter(news => news.category === category);
      setFiltered(results);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-8">
      {/* Modern Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-200 via-red-200 to-slate-100 bg-clip-text text-transparent">
            Trending Now
          </h1>
          <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-orange-400 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Discover the latest health trends and breakthroughs shaping wellness worldwide
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.form
        onSubmit={handleSearch}
        className="max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search health trends, topics, categories..."
            className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 pl-14 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30 transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </motion.form>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* No Results */}
      {filtered.length === 0 ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-slate-300 mb-2">No trends found</h3>
          <p className="text-slate-400">No topics found for "{query}" in {activeCategory}</p>
        </motion.div>
      ) : (
        /* Trending Cards Grid */
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((news, index) => (
              <motion.article
                key={news.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Trend Indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <FaFire className="text-orange-400 text-sm" />
                    <span className="text-xs font-bold text-orange-300">{news.trendLevel}%</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-slate-800/90 backdrop-blur-sm text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <FaCalendar className="text-slate-500" />
                    {news.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-200 transition-colors">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.summary}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <FaEye className="text-blue-400" />
                        <span>{formatNumber(news.views)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-rose-400" />
                        <span>{formatNumber(news.likes)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCommentDots className="text-emerald-400" />
                        <span>{formatNumber(news.comments)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-slate-400">
                      <FaShareAlt className="text-cyan-400" />
                      <span className="text-sm">{formatNumber(news.shares)}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Results Count */}
      <motion.div
        className="text-center mt-12 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>
          Showing {filtered.length} of {trendingHealthNews.length} trending topics
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>
      </motion.div>
    </div>
  );
};

export default TrendingPage;