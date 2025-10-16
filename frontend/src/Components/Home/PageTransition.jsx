// src/components/PageTransition.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show a quick transition animation
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 600); // adjust duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={location.pathname}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex justify-center items-center pointer-events-none z-[9999]"
        >
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
