import React, { useState, useEffect } from "react";
import leftwindow from "../../assets/leftwindow.jpg";
import Avocado from "../../assets/avocado.webp";
import Spinach from "../../assets/spinach.webp";
import Salmon from "../../assets/salmon.webp";
import Greek_Yogurt from "../../assets/greek-yogurt.webp";
import Blueberry from "../../assets/blueberries.webp";
import MiddleSec from "./MiddleSec";
import DietBoost from "../../assets/baked-salmon.webp";
import Exercise from "../../assets/strength.webp";
import Vitamin from "../../assets/sports-nutrition.webp";
import Gut from "../../assets/lean-protein.webp";
import Sleep from "../../assets/sleep.webp";
import Hydration from "../../assets/hydration.webp";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeartbeat, FaBrain, FaRunning, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopSec = () => {
  const healthyProducts = [
    {
      name: "Avocado",
      image: Avocado,
      nutrients: ["Healthy fats", "Fiber", "Potassium", "Vitamin E", "Vitamin C"],
      importance:
        "Avocados support heart health, improve skin elasticity, and aid digestion. Their potassium helps regulate blood pressure.",
    },
    {
      name: "Spinach",
      image: Spinach,
      nutrients: ["Iron", "Calcium", "Vitamin A", "Vitamin K", "Folate"],
      importance:
        "Spinach boosts blood health, strengthens bones, and protects cells from aging.",
    },
    {
      name: "Salmon",
      image: Salmon,
      nutrients: ["Omega-3", "Protein", "Vitamin D", "B12", "Selenium"],
      importance:
        "Salmon improves brain function, reduces inflammation, and supports heart health.",
    },
    {
      name: "Greek Yogurt",
      image: Greek_Yogurt,
      nutrients: ["Protein", "Calcium", "Probiotics"],
      importance:
        "Greek yogurt promotes gut health and supports muscle recovery with high protein.",
    },
    {
      name: "Blueberries",
      image: Blueberry,
      nutrients: ["Antioxidants", "Vitamin C", "Fiber"],
      importance:
        "Blueberries protect against disease, boost memory, and support skin health.",
    },
  ];

  const healthNews = [
    {
      image: DietBoost,
      title: "Mediterranean Diet Boosts Heart Health",
      summary:
        "Following a Mediterranean diet can reduce the risk of heart disease and improve longevity.",
    },
    {
      image: Exercise,
      title: "Daily Exercise Boosts Mental Health",
      summary:
        "Just 30 minutes of physical activity helps reduce stress and enhance mood.",
    },
    {
      image: Vitamin,
      title: "Vitamin D Deficiency Rising",
      summary:
        "Experts warn of increasing vitamin D deficiency due to poor diet and low sunlight exposure.",
    },
    {
      image: Gut,
      title: "Probiotics Improve Gut Function",
      summary:
        "Research highlights probiotics' role in better digestion and immune support.",
    },
    {
      image: Sleep,
      title: "Sleep Boosts Immunity",
      summary:
        "Adequate rest strengthens the immune system and helps the body recover effectively.",
    },
    {
      image: Hydration,
      title: "Hydration Affects Brain Focus",
      summary:
        "Staying hydrated improves focus, memory, and productivity throughout the day.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= healthyProducts.length ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleNews = healthNews.slice(currentNewsIndex, currentNewsIndex + 2);
  const totalPages = Math.ceil(healthNews.length / 2);

  return (
    <>
      {/* ✅ HEALTHY FOODS + HEALTH NEWS SECTION */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center py-16 bg-gray-100 gap-10 lg:gap-16 px-4 sm:px-6 lg:px-10">
        {/* LEFT - Healthy Foods */}
        <div className="w-full lg:w-6/12 flex flex-col items-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Healthy Foods
          </motion.h2>

          <div className="relative w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
                    {healthyProducts[currentIndex].name}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                    {healthyProducts[currentIndex].importance}
                  </p>
                  <p className="font-medium text-green-500 mb-1">Nutrients:</p>
                  <ul className="list-disc list-inside text-gray-800 text-sm grid grid-cols-2 gap-x-2">
                    {healthyProducts[currentIndex].nutrients.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:w-1/2 w-full h-64 md:h-auto">
                  <img
                    src={healthyProducts[currentIndex].image}
                    alt={healthyProducts[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {healthyProducts.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-green-600 scale-110" : "bg-green-300"
                } transition-all duration-300`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Health News */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-start border-t-2 lg:border-t-0 lg:border-l-2 border-green-200 pt-10 lg:pt-0 lg:pl-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
            Health News
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentNewsIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 w-full"
            >
              {visibleNews.map((news, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {news.title}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{news.summary}</p>
                  <div className="text-right mt-2">
                    <Link
                      to="/newspage"
                      className="text-green-600 hover:underline text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentNewsIndex(i * 2)}
                className={`w-3 h-3 rounded-full ${
                  i * 2 === currentNewsIndex
                    ? "bg-green-600 scale-110"
                    : "bg-green-300"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Middle Section */}
      <MiddleSec />

      {/* ✅ What is Good Health Section */}
      <section className="py-16 bg-green-50 text-center px-4 sm:px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What is Good Health?
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10 text-sm sm:text-base leading-relaxed">
          Good health is more than the absence of disease — it's a state of
          physical, mental, and emotional well-being supported by proper
          nutrition, sleep, exercise, and strong relationships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "What is Health?",
              text: "Health means complete well-being — feeling good physically, mentally, and emotionally.",
            },
            {
              title: "Factors for Good Health",
              text: "Balanced diet, exercise, sleep, stress control, social connection, and medical care.",
            },
            {
              title: "Preserving Health",
              text: "Maintain healthy habits daily to prevent illness and improve quality of life.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ The Need for Good Health */}
      <section
        className="relative w-full min-h-[550px] bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${leftwindow})` }}
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
          <div className="md:w-1/2" />
          <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-green-700 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The Need for Good Health
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaHeartbeat className="text-3xl text-green-600" />,
                  name: "Increases Life Expectancy",
                  desc: "Maintaining good health prevents diseases and promotes longevity.",
                },
                {
                  icon: <FaBrain className="text-3xl text-green-600" />,
                  name: "Improves Mental Well-being",
                  desc: "A healthy body supports a sound and happy mind.",
                },
                {
                  icon: <FaRunning className="text-3xl text-green-600" />,
                  name: "Boosts Energy & Focus",
                  desc: "Healthy habits enhance stamina and productivity.",
                },
                {
                  icon: <FaUsers className="text-3xl text-green-600" />,
                  name: "Strengthens Social Life",
                  desc: "Feeling well boosts confidence and social interaction.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-3 rounded-lg hover:bg-green-50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {item.icon}
                  <h4 className="text-lg font-semibold text-green-700 mt-2 mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSec;
