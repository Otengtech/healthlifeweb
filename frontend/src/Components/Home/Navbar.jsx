import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaDumbbell,
  FaAppleAlt,
  FaNewspaper,
  FaBlog,
  FaHome,
  FaEnvelope,
  FaInfo,
  FaBookOpen,
  FaPhone,
  FaLightbulb,
  FaTools,
  FaCookieBite,
  FaHeartbeat,
  FaUserMd,
  FaChartLine,
  FaStar,
  FaShieldAlt,
  FaCog,
  FaFire,
  FaBookReader,
  FaClipboardList,
} from "react-icons/fa";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const pages = [
      { name: "homehomepage", path: "/" },
      { name: "programsshows", path: "/programspage" },
      { name: "trendingtopicsfoodsupdatenewnow", path: "/trendingpage" },
      { name: "newsupdatesviralnow", path: "/newspage" },
      { name: "blogdaily", path: "/blogpage" },
      { name: "contactcall", path: "/contactpage" },
      { name: "workoutsfitexercise", path: "/workoutspage" },
      { name: "aboutusinfo", path: "/aboutpage" },
      { name: "recipefoodhowtocookdishes30minscook", path: "/recipepage" },
      { name: "reviewsmessages", path: "/reviewpage" },
      { name: "quiz", path: "/quizpage" },
      { name: "tool", path: "/toolpage" },
      { name: "expertshelpconvo", path: "/expertspage" },
      { name: "Foodshealthyclean", path: "/foodpage" },
    ];

    const result = pages.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (result) {
      navigate(result.path);
      setQuery("");
      setMenuOpen(false);
      setSearchExpanded(false);
    } else {
      setError("No matching topics found. Try 'home', 'news', or 'programs'");
      setTimeout(() => setError(""), 3000);
    }
  };

  const quickSearches = ["Workouts", "Healthy Recipes", "Nutrition Tips", "Mental Health"];

  const navItems = [
    { label: "Home", to: "/", icon: <FaHome />, badge: null },
    { label: "Programs", to: "/programspage", icon: <FaDumbbell />, badge: "New" },
    { label: "News", to: "/newspage", icon: <FaNewspaper />, badge: null },
    { label: "Foods", to: "/foodpage", icon: <FaCookieBite />, badge: "Hot" },
    { label: "Blog", to: "/blogpage", icon: <FaBlog />, badge: null },
    { label: "Trending", to: "/trendingpage", icon: <FaFire />, badge: null },
    { label: "Tools", to: "/toolpage", icon: <FaTools />, badge: null },
    { label: "Quiz", to: "/quizpage", icon: <FaLightbulb />, badge: "Fun" },
  ];

  const dropdownItems = {
    programs: [
      { label: "Fitness Programs", to: "/programspage", icon: <FaDumbbell /> },
      { label: "Nutrition Plans", to: "/nutritionpage", icon: <FaAppleAlt /> },
      { label: "Mental Wellness", to: "/wellnesspage", icon: <FaHeartbeat /> },
      { label: "Sleep Optimization", to: "/sleeppage", icon: <FaBookOpen /> },
    ],
    resources: [
      { label: "Health News", to: "/newspage", icon: <FaNewspaper /> },
      { label: "Blog Articles", to: "/blogpage", icon: <FaBlog /> },
      { label: "Trending Topics", to: "/trendingpage", icon: <FaChartLine /> },
      { label: "Expert Advice", to: "/expertpage", icon: <FaUserMd /> },
      { label: "Health Tools", to: "/toolpage", icon: <FaTools /> },
      { label: "Recipes", to: "/recipepage", icon: <FaCookieBite /> },
    ],
    about: [
      { label: "About Us", to: "/aboutpage", icon: <FaInfo /> },
      { label: "Contact", to: "/contactpage", icon: <FaEnvelope /> },
      { label: "Reviews", to: "/reviewpage", icon: <FaStar /> },
      { label: "Privacy Policy", to: "/privacy", icon: <FaShieldAlt /> },
    ]
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-green-900/20 border-b border-green-700/30" 
        : "bg-gray-900/90 backdrop-blur-md"
    }`}>

      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-4">
        {/* Brand Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <FaLightbulb className="text-white text-lg" />
              </div>
              <div className="absolute -inset-1 bg-green-500 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                HEALTHLIFE
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Wellness Hub</p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                location.pathname === item.to
                  ? "text-green-300 bg-green-900/30"
                  : "text-gray-300 hover:text-green-300 hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}

          {/* Dropdown - More Resources */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("resources")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-green-300 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
              <span>Resources</span>
              <motion.div
                animate={{ rotate: dropdown === "resources" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </button>
            <AnimatePresence>
              {dropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-gray-800/95 backdrop-blur-lg border border-green-700/30 rounded-xl shadow-2xl py-3 w-64"
                >
                  {dropdownItems.resources.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-green-300 hover:bg-gray-700/50 transition-all group"
                    >
                      <span className="text-green-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dropdown - About */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("about")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-green-300 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
              <span>About</span>
              <motion.div
                animate={{ rotate: dropdown === "about" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </button>
            <AnimatePresence>
              {dropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 bg-gray-800/95 backdrop-blur-lg border border-green-700/30 rounded-xl shadow-2xl py-3 w-56"
                >
                  {dropdownItems.about.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-green-300 hover:bg-gray-700/50 transition-all group"
                    >
                      <span className="text-green-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Search Bar & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <motion.div
            className={`relative transition-all duration-300 ${
              searchExpanded ? "w-80" : "w-12"
            }`}
            animate={{ width: searchExpanded ? 320 : 48 }}
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search health topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchExpanded(true)}
                onBlur={() => !query && setSearchExpanded(false)}
                className={`w-full bg-gray-800 border border-green-700/30 rounded-full px-4 py-2.5 text-white placeholder-gray-400 outline-none transition-all duration-300 ${
                  searchExpanded ? "opacity-100 pr-12" : "opacity-0"
                }`}
              />
              <button
                type="button"
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-full transition-all duration-300 shadow-lg"
              >
                <FaSearch size={14} />
              </button>
            </form>
          </motion.div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/programspage"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <FaStar className="text-sm" />
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className="text-green-400 text-xl" />
          ) : (
            <FaBars className="text-green-400 text-xl" />
          )}
        </motion.button>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="text-center bg-red-500/90 text-white py-2 px-4 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 h-screen w-80 max-w-full bg-gray-900/95 backdrop-blur-lg border-l border-green-700/30 z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-lg">HEALTHLIFE</h2>
                      <p className="text-gray-400 text-xs">Wellness Hub</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-gray-400 hover:text-white" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search health topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-gray-800 border border-green-700/30 rounded-full px-4 py-3 text-white placeholder-gray-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                  >
                    <FaSearch size={14} />
                  </button>
                </form>

                {/* Quick Searches */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        setTimeout(() => handleSearch({ preventDefault: () => {} }), 100);
                      }}
                      className="px-3 py-1 bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white rounded-full text-xs transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-1 px-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                          location.pathname === item.to
                            ? "bg-green-600/20 text-green-300 border-l-4 border-green-400"
                            : "text-gray-300 hover:bg-gray-800 hover:text-green-300"
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="font-medium flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Links */}
                <div className="mt-8 px-4">
                  <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 px-4">
                    More Resources
                  </h3>
                  <div className="space-y-1">
                    {dropdownItems.resources.slice(0, 3).map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (navItems.length + index) * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-green-300 transition-all group"
                        >
                          <span className="text-sm group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-700">
                <Link
                  to="/programspage"
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3.5 rounded-xl font-semibold text-center block transition-all shadow-lg hover:shadow-green-500/25"
                >
                  Start Your Journey
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;