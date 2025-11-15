import React, { useState, useEffect } from "react";
import { 
  FaAppleAlt, 
  FaBed, 
  FaDumbbell, 
  FaTint, 
  FaHeart, 
  FaBrain, 
  FaRunning, 
  FaSeedling,
  FaArrowRight,
  FaPlay,
  FaStar
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);

  const healthFeatures = [
    { 
      label: "Nutrition", 
      icon: <FaAppleAlt />, 
      color: "from-red-400 to-orange-400",
      description: "Personalized meal plans and nutritional guidance"
    },
    { 
      label: "Fitness", 
      icon: <FaDumbbell />, 
      color: "from-blue-400 to-cyan-400",
      description: "Custom workout routines for all fitness levels"
    },
    { 
      label: "Hydration", 
      icon: <FaTint />, 
      color: "from-blue-300 to-blue-500",
      description: "Track and optimize your daily water intake"
    },
    { 
      label: "Sleep", 
      icon: <FaBed />, 
      color: "from-purple-400 to-indigo-400",
      description: "Improve sleep quality with smart tracking"
    },
    { 
      label: "Mental Health", 
      icon: <FaBrain />, 
      color: "from-green-400 to-teal-400",
      description: "Mindfulness and stress management techniques"
    },
    { 
      label: "Cardio", 
      icon: <FaRunning />, 
      color: "from-pink-400 to-rose-400",
      description: "Heart-healthy cardio exercises and plans"
    },
    { 
      label: "Wellness", 
      icon: <FaHeart />, 
      color: "from-rose-400 to-pink-400",
      description: "Holistic approaches to overall wellbeing"
    },
    { 
      label: "Natural Living", 
      icon: <FaSeedling />, 
      color: "from-lime-400 to-green-400",
      description: "Embrace natural remedies and clean living"
    },
  ];

  const orbitIcons = healthFeatures.slice(0, 6);
  const additionalFeatures = healthFeatures.slice(6);

  const rotationDuration = hovered ? 6 : 20;

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % healthFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [healthFeatures.length]);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamic welcome message based on time
  useEffect(() => {
    const hour = new Date().getHours();
    let message = "Welcome";
    if (hour >= 5 && hour < 12) message = "Good Morning";
    else if (hour >= 12 && hour < 17) message = "Good Afternoon";
    else if (hour >= 17 && hour < 22) message = "Good Evening";
    else message = "Hello";
    setWelcomeMessage(message);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-800 to-emerald-500">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-2xl text-left lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Discover Your
              <span className="block bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                Health Potential
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Unlock balance and vitality through mindful living. Our comprehensive platform helps you master <span className="text-green-300 font-semibold">8 key health dimensions</span> to create your healthiest, most vibrant self.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/get-started"
                  className="flex items-center gap-2 py-4 px-8 font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all rounded-xl shadow-lg shadow-green-500/25"
                >
                  Start Your Journey <FaArrowRight />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/demo"
                  className="flex items-center gap-2 py-4 px-8 font-bold bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all rounded-xl border border-white/20"
                >
                  <FaPlay className="text-sm" /> Contact Us
                </Link>
              </motion.div>
            </div>

          </motion.div>

          {/* RIGHT: Enhanced Orbiting / Bouncing Icons */}
          <div
            className="relative mt-14 lg:mt-0 flex-1 flex justify-center items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered((s) => !s)}
          >
            {isMobile ? (
              <div className="flex flex-wrap justify-center gap-4 max-w-md">
                {orbitIcons.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                    style={{ minWidth: 100 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white text-2xl mb-2 shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className="text-white text-sm font-semibold text-center">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
                {/* Central Element */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
                >
                  {orbitIcons.map((item, idx) => {
                    const angle = (idx * 360) / orbitIcons.length;
                    const radius = 140;
                    return (
                      <div
                        key={item.label}
                        className="absolute"
                        style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}
                      >
                        <motion.div
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg space-y-2"
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5, ease: "easeInOut" }}
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white text-2xl shadow-lg`}>
                            {item.icon}
                          </div>
                          <span className="text-white text-xs font-semibold whitespace-nowrap">{item.label}</span>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
                
                {/* Central glowing orb */}
                <motion.div
                  className="absolute w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-2xl shadow-green-400/50 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <span className="text-white font-bold text-lg text-center px-4">Health Hub</span>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;