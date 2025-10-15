import React from "react";
import hero from "../../assets/hero.jpg";
import { FaAppleAlt, FaDumbbell, FaBrain, FaBed, FaTint } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-[500px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <section className="relative z-10 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 text-white py-10 md:py-0">
        <motion.div
          className="max-w-2xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-300 mb-4 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to HealthLife
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your journey to a healthier life starts here. Discover and explore
            everything you need to live your best, most vibrant self.
          </motion.p>

          {/* Health Aspects Icons */}
          <div className="sm:flex md:flex flex-wrap flex sm:flex-wrap md:flex-wrap justify-start gap-4 sm:gap-6 mb-8">
            {[
              { label: "Nutrition", icon: <FaAppleAlt size={28} /> },
              { label: "Fitness", icon: <FaDumbbell size={28} /> },
              { label: "Mental", icon: <FaBrain size={28} /> },
              { label: "Sleep", icon: <FaBed size={28} /> },
              { label: "Hydration", icon: <FaTint size={28} /> },
            ].map((aspect, idx) => (
              <motion.div
                key={aspect.label}
                className="flex flex-col items-center text-green-300 justify-center text-sm sm:text-base cursor-pointer hover:text-green-200 transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4 + idx * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="mb-1">{aspect.icon}</span>
                <span className="">{aspect.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a
              href="#services"
              className="py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none bg-green-300 text-gray-700"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="#about"
              className="py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none bg-green-300 text-gray-700"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              About Us
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
