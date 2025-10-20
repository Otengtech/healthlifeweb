import React, { useState, useEffect } from "react";
import { FaAppleAlt, FaBed, FaDumbbell, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const orbitIcons = [
    { label: "Nutrition", icon: <FaAppleAlt /> },
    { label: "Fitness", icon: <FaDumbbell /> },
    { label: "Hydration", icon: <FaTint /> },
    { label: "Sleep", icon: <FaBed /> },
  ];

  const rotationDuration = hovered ? 6 : 20;

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-green-700 to-emerald-400">
        <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-xl text-left lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight text-green-300 drop-shadow-lg"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to HealthLife
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-lg text-gray-200 mb-8 leading-relaxed"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Discover balance and vitality through mindful living — nutrition,
              fitness, hydration, and rest working together to create your
              healthiest self. Explore more to discover the right ways to a
              healthy life. You will find all the answers to your health
              questions.
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-start lg:justify-start">
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to="/contactpage"
                  className="py-3 px-6 mr-3 font-semibold bg-gray-900 text-green-300 hover:bg-gray-800 transition-transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  to="/aboutpage"
                  className="py-3 px-6 font-semibold bg-gray-900 text-green-300 hover:bg-gray-800 transition-transform hover:scale-105"
                >
                  About Us
                </Link>
              </motion.p>
            </div>
          </motion.div>

          {/* RIGHT: Orbiting / Bouncing Icons */}
          <div
            className="relative mt-14 lg:mt-0 flex-1 flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered((s) => !s)}
          >
            {isMobile ? (
              // 📱 MOBILE: Horizontal bouncing icons
              <div className="flex gap-4">
                {orbitIcons.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center justify-center rounded-full backdrop-sm text-green-300 bg-gray-900 shadow-lg"
                    style={{
                      width: 60,
                      height: 60,
                      fontSize: "1.8rem",
                    }}
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: idx * 0.3,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.6 }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            ) : (
              // 🖥️ DESKTOP: Orbiting animation
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: rotationDuration,
                    ease: "linear",
                  }}
                >
                  {orbitIcons.map((item, idx) => {
                    const angle = (idx * 360) / orbitIcons.length;
                    const radius = 100;
                    return (
                      <div
                        key={item.label}
                        className="absolute"
                        style={{
                          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                        }}
                      >
                        <motion.div
                          className="flex items-center justify-center rounded-full text-green-300 bg-gray-900 shadow-lg"
                          style={{
                            width: 84,
                            height: 84,
                            fontSize: "2rem",
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: idx * 0.5,
                            ease: "easeInOut",
                          }}
                          whileHover={{ scale: 1.4 }}
                        >
                          {item.icon}
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
