import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Available topics/pages
  const topics = [
    { name: "home", path: "/" },
    { name: "about", path: "/aboutpage" },
    { name: "recipes", path: "/recipes" },
    { name: "workouts", path: "/workouts" },
    { name: "newspage", path: "/newspage" },
    { name: "health programs", path: "/programspage" },
    { name: "blogpage", path: "/blogpage" },
    { name: "trending page", path: "/trendingpage" },
    { name: "contact", path: "/contact" },
    { name: "superfoods", path: "/superfoods" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");

    const result = topics.find((t) =>
      t.name.toLowerCase().includes(query.toLowerCase())
    );

    if (result) {
      navigate(result.path);
      setQuery("");
      setMenuOpen(false);
    } else {
      setError("No matching topics found.");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-md sticky top-0 flex flex-col md:flex-row md:items-center justify-between shadow-md px-4 sm:px-6 md:px-10 lg:px-16 py-4 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Brand + Hamburger */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link
          to="/"
          className="text-green-700 text-xl sm:text-2xl font-extrabold tracking-wider"
        >
          <h3>HEALTHLIFE</h3>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none active:scale-95 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Search (Desktop + Large Tablets) */}
      <motion.form
        onSubmit={handleSearch}
        className="hidden md:flex bg-gray-200 rounded-full overflow-hidden shadow-sm mt-4 md:mt-0 md:mx-6 lg:mx-10"
        whileHover={{ scale: 1.02 }}
      >
        <input
          type="text"
          placeholder="Search e.g. Recipes, Workouts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 sm:px-6 py-2 w-40 sm:w-56 md:w-64 lg:w-72 text-gray-700 bg-transparent outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="pl-4 pr-5 flex items-center justify-center text-gray-700 hover:text-green-700"
        >
          <FaSearch size={16} />
        </button>
      </motion.form>

      {/* Error message */}
      {error && (
        <motion.div
          className="text-red-500 text-sm mt-2 md:mt-0 md:absolute md:right-10 lg:right-16 bg-red-50 border border-red-200 px-3 py-1 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-wrap justify-center md:justify-end space-x-5 lg:space-x-8 mt-4 md:mt-0 text-gray-700 font-semibold text-sm sm:text-base">
        <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
        <li><Link to="/programspage" className="hover:text-green-600 transition">Programs</Link></li>
        <li><Link to="/trendingpage" className="hover:text-green-600 transition">Trending</Link></li>
        <li><Link to="/newspage" className="hover:text-green-600 transition">News</Link></li>
        <li><Link to="/blogpage" className="hover:text-green-600 transition">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
      </ul>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center bg-white/95 backdrop-blur-md mt-4 py-6 space-y-4 text-gray-700 font-semibold w-full rounded-lg shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="flex bg-gray-200 rounded-full overflow-hidden shadow-sm w-11/12 sm:w-4/5 md:w-3/5"
            >
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-2 w-full text-gray-700 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="px-4 text-gray-700 flex items-center justify-center hover:text-green-700"
              >
                <FaSearch size={16} />
              </button>
            </form>

            {/* Mobile Links */}
            {[
              { label: "Home", to: "/" },
              { label: "Programs", to: "/programspage" },
              { label: "Trending", to: "/trendingpage" },
              { label: "News", to: "/newspage" },
              { label: "Blog", to: "/blogpage" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-600 transition text-base sm:text-lg"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
