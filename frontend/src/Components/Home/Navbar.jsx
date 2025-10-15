import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
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
} from "react-icons/fa";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const pages = [
      { name: "home", path: "/" },
      { name: "programs", path: "/programspage" },
      { name: "trending", path: "/trendingpage" },
      { name: "news", path: "/newspage" },
      { name: "blog", path: "/blogpage" },
      { name: "contact", path: "/contact" },
    ];

    const result = pages.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
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
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <div className="flex items-center gap-10">
          {/* Brand */}
          <Link
            to="/"
            className="text-green-700 text-lg font-extrabold tracking-wide"
          >
            <h3>HEALTHLIFE</h3>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <Link
              to="/"
              className="hover:text-green-600 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>

            {/* Dropdown - Programs */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("programs")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-green-600">
                <FaDumbbell /> Programs <FaChevronDown size={12} />
              </button>
              <AnimatePresence>
                {dropdown === "programs" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-white shadow-lg rounded-lg py-3 mt-2 w-44"
                  >
                    <Link
                      to="/programspage"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Beginner Yoga
                    </Link>
                    <Link
                      to="/workouts"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Cardio Challenge
                    </Link>
                    <Link
                      to="/recipes"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Healthy Eating
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown - News/Blog */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("articles")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-green-600">
                <FaNewspaper /> News <FaChevronDown size={12} />
              </button>
              <AnimatePresence>
                {dropdown === "articles" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-white shadow-lg rounded-lg py-3 mt-2 w-44"
                  >
                    <Link
                      to="/newspage"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Health News
                    </Link>
                    <Link
                      to="/blogpage"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Blog Posts
                    </Link>
                    <Link
                      to="/trendingpage"
                      className="block px-4 py-2 hover:bg-green-100 transition"
                    >
                      Trending
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="hover:text-green-600 flex items-center gap-1"
            >
              <FaEnvelope /> Contact
            </Link>
          </div>
        </div>

        {/* Search bar (desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex bg-gray-200 rounded-full overflow-hidden shadow-sm"
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 w-52 text-gray-700 bg-transparent outline-none"
          />
          <button
            type="submit"
            className="px-4 text-gray-700 hover:text-green-700"
          >
            <FaSearch size={16} />
          </button>
        </form>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          className="text-center text-red-500 text-sm bg-red-50 py-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      {/* Mobile Menu (slide from right with blur and icons) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[80%] md:w-[60%] bg-white/80 backdrop-blur-lg shadow-2xl z-50 p-6 flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-green-700 text-xl font-bold">Menu</h2>
                <FaTimes
                  className="text-gray-700 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setMenuOpen(false)}
                  size={24}
                />
              </div>

              {/* Search Section */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-100 rounded-2xl p-4 mb-6"
              >
                <form
                  onSubmit={handleSearch}
                  className="flex items-center"
                >
                  <FaSearch className="text-gray-500 ml-2" />
                  <input
                    type="text"
                    placeholder="Search for health tips, recipes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-3 py-2 w-full text-gray-700 bg-transparent outline-none"
                  />
                </form>
              </motion.div>

              {/* Navigation Links with Icons */}
              <motion.div
                className="flex flex-col space-y-5 text-gray-700 font-medium text-lg"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {[
                  { label: "Home", to: "/", icon: <FaHome /> },
                  { label: "Programs", to: "/programspage", icon: <FaBars /> },
                  { label: "News", to: "/newspage", icon: <FaNewspaper /> },
                  { label: "Blog", to: "/blogpage", icon: <FaBlog /> },
                  {
                    label: "Trending",
                    to: "/trendingpage",
                    icon: <FaDumbbell />,
                  },
                  { label: "Contact", to: "/contact", icon: <FaEnvelope/> },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center space-x-3 hover:text-green-700 transition-all"
                    >
                      <span className="text-green-600">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
