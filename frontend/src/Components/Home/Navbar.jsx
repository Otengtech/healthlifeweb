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
  FaInfo,
  FaBookOpen,
  FaPhone,
  FaVoicemail,
  FaLightbulb,
  FaTools,
  FaCookieBite,
  FaLink,
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
      { name: "homehomepage", path: "/" },
      { name: "programsshows,", path: "/programspage" },
      { name: "trendingtopicsfoodsupdatenewnow", path: "/trendingpage" },
      { name: "newsupdatesviralnow", path: "/newspage" },
      { name: "blogdaily", path: "/blogpage" },
      { name: "contactcall", path: "/contact" },
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
    } else {
      setError("No matching topics found.");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
      {/* <p className="p-2 bg-gray-200 text-gray-800 text-end flex justify-end items-center text-sm font-bold">Hotline: +233593957373</p> */}
      <div className="flex justify-between items-center px-3 md:px-12 py-5">
        <div className="flex items-center gap-3">
          {/* Brand */}
          <Link
            to="/"
            className="text-green-300 text-lg font-extrabold tracking-wide"
          >
            <h1 className="flex items-center mr-6">HEALTHLIFE<FaLightbulb/></h1>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            <Link
              to="/"
              className="hover:text-gray-200 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>

            {/* Dropdown - Programs */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("programs")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-gray-200">
                <FaDumbbell /> <Link to="/programspage">Programs</Link>
              </button>
            </div>

            {/* Dropdown - News/Blog */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("articles")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-gray-300">
                <FaLink /> Links <FaChevronDown size={12} />
              </button>
              <AnimatePresence>
                {dropdown === "articles" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-gray-900 shadow-lg rounded-lg py-3 mt-2 w-44"
                  >
                    <Link
                      to="/newspage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Health News
                    </Link>
                    <Link
                      to="/blogpage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Blog Posts
                    </Link>
                    <Link
                      to="/trendingpage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Trending
                    </Link>
                    <Link
                      to="/foodpage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Healthy Foods
                    </Link>
                    <Link
                      to="/contactpage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/aboutpage"
                      className="block px-4 py-2 hover:bg-gray-700 transition"
                    >
                      About Us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
          className="md:hidden text-green-300 focus:outline-none"
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
              className="fixed top-0 right-0 h-screen w-full sm:w-[80%] md:w-[60%] bg-gray-900 z-50 py-10 px-6 flex flex-col overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-green-500 text-xl font-bold">Menu</h2>
                <FaTimes
                  className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setMenuOpen(false)}
                  size={24}
                />
              </div>

              {/* Search Section */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-100 rounded-full py-3 px-6 mb-6"
              >
                <form
                  onSubmit={handleSearch}
                  className="flex items-center"
                >
                  <FaSearch className="text-gray-700 ml-2" />
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
                className="flex flex-col space-y-5 text-gray-300 font-medium text-lg"
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
                  { label: "Healthy Foods", to: "/foodpage", icon: <FaCookieBite /> },
                  { label: "Blog", to: "/blogpage", icon: <FaBlog /> },
                  {
                    label: "Trending",
                    to: "/trendingpage",
                    icon: <FaDumbbell />,
                  },
                  { label: "Reviews", to: "/reviewpage", icon: <FaBookOpen/> },
                  { label: "Quiz", to: "/quizpage", icon: <FaLightbulb/> },
                  { label: "Health Tools", to: "/toolpage", icon: <FaTools/> },
                  { label: "Contact Us", to: "/contactpage", icon: <FaEnvelope/> },
                  { label: "About Us", to: "/aboutpage", icon: <FaInfo/> },
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
                      <span className="text-green-500">{item.icon}</span>
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
