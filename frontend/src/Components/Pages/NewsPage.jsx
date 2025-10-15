import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaHeartbeat, FaLeaf } from "react-icons/fa";

// Example image imports (replace these with your actual assets)
import DietBoost from "../../assets/balanced-diet.webp";
import Exercise from "../../assets/functional-training.webp";
import Vitamin from "../../assets/vegetables.webp";
import Gut from "../../assets/mindful-eating-nutrition.webp";
import Sleep from "../../assets/sleep.webp";
import Hydration from "../../assets/hydration.webp";
import Tech from "../../assets/meal-timing.webp";
import Immunity from "../../assets/mango.webp";
import Yoga from "../../assets/yoga.webp";

const NewsPage = () => {
 const healthNews = [
  {
    image: DietBoost,
    title: "New Study: Mediterranean Diet Boosts Heart Health",
    date: "2024-06-01",
    summary: `
      Researchers have confirmed that the Mediterranean diet — rich in fruits, vegetables, olive oil, and fish — 
      lowers cholesterol, reduces inflammation, and improves overall heart health. 
      The study found that people following this diet had a 25% lower risk of heart disease. 
      Experts recommend adopting it gradually by replacing red meat with lean proteins and using olive oil instead of butter.
    `,
  },
  {
    image: Exercise,
    title: "Daily Exercise Linked to Improved Mental Well-being",
    date: "2024-06-02",
    summary: `
      Regular exercise, even light activities like brisk walking or stretching, has been shown to reduce anxiety and depression. 
      Scientists say movement releases endorphins — the “feel-good” hormones — that enhance mood and self-esteem. 
      Consistency, not intensity, is key. Just 30 minutes a day can help keep stress at bay and improve mental clarity.
    `,
  },
  {
    image: Vitamin,
    title: "Vitamin D Deficiency on the Rise",
    date: "2024-06-03",
    summary: `
      Doctors warn that insufficient exposure to sunlight and poor diet are causing a global spike in vitamin D deficiency. 
      Low levels can lead to fatigue, bone pain, and weakened immunity. 
      Experts advise 10–15 minutes of sun exposure daily and consuming foods like eggs, mushrooms, and fortified milk for better health.
    `,
  },
  {
    image: Gut,
    title: "Gut Health: Probiotics Show Promising Results",
    date: "2024-06-04",
    summary: `
      A healthy gut means a healthy body. Recent studies reveal that probiotics — found in yogurt, kefir, and fermented foods — 
      improve digestion, strengthen immunity, and even influence mood regulation. 
      Maintaining gut balance can also reduce the risk of obesity and type 2 diabetes.
    `,
  },
  {
    image: Sleep,
    title: "Sleep Quality Found to Boost Immune System",
    date: "2024-06-05",
    summary: `
      Researchers discovered that people who sleep 7–8 hours nightly have stronger immune systems and fewer illnesses. 
      Sleep allows the body to repair tissues, balance hormones, and produce infection-fighting proteins. 
      Lack of quality rest can weaken defenses and increase inflammation levels.
    `,
  },
  {
    image: Hydration,
    title: "Hydration Key to Better Brain Performance",
    date: "2024-06-06",
    summary: `
      Staying hydrated enhances brain function, improves focus, and prevents headaches. 
      Dehydration, even mild, can impair memory and concentration. 
      Health experts recommend drinking at least 2–3 liters of water daily and eating water-rich foods like cucumber and watermelon.
    `,
  },
  {
    image: Tech,
    title: "AI in Healthcare: Revolutionizing Patient Care",
    date: "2024-06-08",
    summary: `
      Artificial intelligence is transforming modern healthcare — from diagnosing diseases faster to predicting outbreaks. 
      AI tools help doctors detect early signs of cancer, heart disease, and diabetes with higher accuracy. 
      This technology ensures better treatment plans and personalized patient monitoring.
    `,
  },
  {
    image: Immunity,
    title: "Superfoods That Strengthen Your Immunity",
    date: "2024-06-09",
    summary: `
      Superfoods like turmeric, spinach, ginger, and garlic are packed with antioxidants and anti-inflammatory compounds. 
      These nutrients protect cells from damage and strengthen the immune response against infections. 
      Nutritionists recommend adding them to daily meals for long-term health.
    `,
  },
  {
    image: Yoga,
    title: "Morning Yoga Enhances Flexibility and Focus",
    date: "2024-06-10",
    summary: `
      Starting your day with yoga can help relieve tension, boost flexibility, and sharpen focus. 
      Controlled breathing techniques improve oxygen flow and calm the nervous system, 
      making yoga not only a physical but also a mental therapy for stress management.
    `,
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-20 px-6 md:px-16">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <FaHeartbeat className="inline-block text-green-700 mr-3" />
        Health & Wellness News
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Stay informed with the latest updates in nutrition, fitness, and overall
        well-being. Explore recent studies, expert advice, and wellness tips.
      </motion.p>

      {/* News Cards */}
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-10">
          {healthNews.map((news, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={news.image}
                alt={news.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 transition">
                  {news.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <FaCalendarAlt className="text-green-500" />
                  <span>{news.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{news.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default NewsPage;
