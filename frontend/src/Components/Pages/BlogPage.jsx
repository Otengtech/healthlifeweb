import React from "react";
import { motion } from "framer-motion";
import { FaAppleAlt, FaCarrot, FaLemon, FaHeart, FaLeaf, FaRunning, FaDumbbell, FaSpa, FaHandSparkles } from "react-icons/fa";

const BlogPage = () => {
  // Left Section: 10 Benefits of Fruits
  const fruits = [
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Apples",
      benefit: "Rich in fiber and antioxidants, apples support digestion and lower cholesterol, promoting heart health.",
    },
    {
      icon: <FaCarrot className="text-green-600 text-3xl" />,
      name: "Carrots",
      benefit: "High in beta-carotene, carrots improve eyesight, protect the skin, and boost the immune system.",
    },
    {
      icon: <FaLemon className="text-green-600 text-3xl" />,
      name: "Lemons",
      benefit: "Lemons detoxify the body, enhance hydration, and strengthen immunity with vitamin C.",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      name: "Spinach",
      benefit: "Packed with iron, magnesium, and calcium, spinach aids in bone health and energy metabolism.",
    },
    {
      icon: <FaHeart className="text-green-600 text-3xl" />,
      name: "Strawberries",
      benefit: "Loaded with antioxidants, strawberries help fight inflammation and improve heart function.",
    },
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Watermelon",
      benefit: "Hydrating and rich in lycopene, watermelon supports skin health and reduces muscle soreness.",
    },
    {
      icon: <FaCarrot className="text-green-600 text-3xl" />,
      name: "Oranges",
      benefit: "Oranges improve skin glow, support immunity, and help in collagen production for healthy joints.",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      name: "Avocado",
      benefit: "Avocados contain healthy fats that improve heart health and support hormone balance.",
    },
    {
      icon: <FaLemon className="text-green-600 text-3xl" />,
      name: "Banana",
      benefit: "Bananas restore electrolytes, boost energy, and improve mood through natural serotonin.",
    },
    {
      icon: <FaAppleAlt className="text-green-600 text-3xl" />,
      name: "Berries Mix",
      benefit: "Blueberries, raspberries, and blackberries enhance brain health and slow down aging.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-6 md:px-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Health & Wellness Blogs
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section: 10 Benefits of Fruits */}
        <motion.div
          className="p-8"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-green-700 flex items-center gap-2">
            10 Benefits of Fruits
          </h2>

          <div className="grid sm:grid-cols-2 cursor-pointer gap-6">
            {fruits.map((fruit, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-4 rounded-xl hover:shadow-lg transition bg-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {fruit.icon}
                  <h3 className="font-semibold text-lg text-gray-700">{fruit.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{fruit.benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Hair Repair + Exercise Life */}
        <motion.div
          className="space-y-10"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hair Repair Section */}
          <div className="border border-gray-200 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center gap-2">
              <FaHandSparkles className="text-green-700" /> How to Repair Your Hair
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Hair damage can occur due to excessive heat, chemical treatments, or poor diet. 
              To repair your hair naturally:
              <br />
              <br /> <h1 className="mb-2 font-bold">Hydration</h1> Drink enough water and use moisturizing hair masks weekly.
              <br /> <h1 className="my-2 font-bold">Healthy Diet</h1> Include biotin-rich foods like eggs, nuts, and avocados.
              <br /> <h1 className="my-2 font-bold">Avoid Heat</h1> Reduce frequent straightening or blow-drying.
              <br /> <h1 className="my-2 font-bold">Use Natural Oils</h1> Coconut oil, argan oil, and aloe vera strengthen hair from roots.
              <br />
              Consistency is key — within 4–6 weeks, you’ll notice stronger, shinier, and thicker hair growth.
            </p>
          </div>

          {/* Healthy Life by Exercising Section */}
          <div className="border border-gray-200 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center gap-2">
              <FaRunning className="text-green-700" /> Healthy Life by Exercising
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Exercise is the foundation of physical and mental well-being. 
              A consistent routine helps reduce stress, improve cardiovascular health, 
              and strengthen muscles. 
              <br /><br />
               <h1 className="my-2 font-bold">Strength Training:</h1> Builds lean muscle and burns fat efficiently.  
              <br /> <h1 className="my-2 font-bold">Walking & Jogging:</h1> Boosts metabolism and heart function.  
              <br /> <h1 className="my-2 font-bold">Yoga & Meditation:</h1> Enhance flexibility and reduce anxiety.  
              <br /> <h1 className="my-2 font-bold">Improved Sleep:</h1> Physical activity regulates hormones and helps deep rest.  
              <br /><br />
              Just 30 minutes a day can transform your lifestyle — promoting happiness, confidence, and longevity.
            </p>
            <div className="flex gap-4 mt-4 text-green-600">
              <FaDumbbell />
              <FaHeart />
              <FaLeaf />
              <FaSpa />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
