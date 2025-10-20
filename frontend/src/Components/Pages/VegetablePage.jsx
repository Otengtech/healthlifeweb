import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

// ✅ Extended vegetable data (10 items)
const vegetables = [
  {
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in Vitamin A, fiber, and antioxidants.",
    uses: "Used in salads, soups, and stews. Can be eaten raw or cooked.",
    planting: "Grows well in loose, sandy soil. Requires full sun and regular watering.",
    cooking: "Steam or roast for maximum sweetness and nutrient retention.",
  },
  {
    name: "Spinach",
    image: "https://images.unsplash.com/photo-1580910365203-91ea9115a319?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "High in iron, calcium, and vitamins A, C, and K.",
    uses: "Used in smoothies, soups, stews, and as a side dish.",
    planting: "Thrives in cool weather. Plant in moist, well-drained soil with partial sunlight.",
    cooking: "Lightly sauté or steam to retain nutrients.",
  },
  {
    name: "Tomato",
    image: "https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in lycopene, vitamin C, and potassium.",
    uses: "Used in sauces, salads, soups, and stews.",
    planting: "Requires warm weather, full sunlight, and nutrient-rich soil. Stake for support.",
    cooking: "Cook into sauces or roast to intensify flavor.",
  },
  {
    name: "Cabbage",
    image: "https://images.unsplash.com/photo-1652860213441-6622f9fec77f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "High in vitamin C, K, and dietary fiber.",
    uses: "Used in coleslaw, soups, stews, and stir-fries.",
    planting: "Grows well in cool climates. Needs well-drained, fertile soil.",
    cooking: "Steam or sauté lightly. Avoid overcooking.",
  },
  {
    name: "Pepper",
    image: "https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in vitamin C and antioxidants.",
    uses: "Used in salads, stews, and sauces. Adds flavor and color.",
    planting: "Grows in warm conditions with plenty of sunlight.",
    cooking: "Roast, grill, or stir-fry to enhance flavor.",
  },
  {
    name: "Onion",
    image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25pb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Contains antioxidants and supports heart health.",
    uses: "Used as a base for sauces, soups, and stews.",
    planting: "Prefers loose, well-drained soil and full sunlight.",
    cooking: "Sauté until golden brown for sweetness.",
  },
  {
    name: "Lettuce",
    image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Low in calories, rich in water, and vitamin A.",
    uses: "Used in salads and wraps.",
    planting: "Prefers cool weather and moist, well-drained soil.",
    cooking: "Best eaten raw to retain crunch.",
  },
  {
    name: "Broccoli",
    image: "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Packed with vitamin C, K, and folate.",
    uses: "Used in stir-fries, soups, and salads.",
    planting: "Thrives in cool weather and fertile soil.",
    cooking: "Steam or roast to keep its crunch and nutrients.",
  },
  {
    name: "Cauliflower",
    image: "https://plus.unsplash.com/premium_photo-1711684803510-6f05fa515378?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in vitamin C and low in carbs.",
    uses: "Used in soups, roasted dishes, and as a rice substitute.",
    planting: "Requires cool temperatures and moist soil.",
    cooking: "Roast or mash for a healthy substitute for potatoes.",
  },
  {
    name: "Eggplant",
    image: "https://plus.unsplash.com/premium_photo-1666270423836-864dfa7071e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Contains fiber and antioxidants that promote heart health.",
    uses: "Used in stews, curries, and grilled dishes.",
    planting: "Needs warm conditions and rich, moist soil.",
    cooking: "Grill or roast to bring out its smoky flavor.",
  },
];

const VegetablePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVegetables = vegetables.filter((veg) =>
    veg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-gray-950 to-gray-900 text-gray-100 py-12 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-8"
      >
        Explore Nature’s Green Power
      </motion.h1>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-14"
      >
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a vegetable..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800/70 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </motion.div>

      {/* Vegetable List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {filteredVegetables.length > 0 ? (
          filteredVegetables.map((veg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className={`flex flex-col lg:flex-row items-center gap-8 rounded-3xl p-6 lg:p-10 bg-gray-800/40 backdrop-blur-md border border-green-800/40 hover:border-green-400/50 transition`}
            >
              <img
                src={veg.image}
                alt={veg.name}
                className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="w-full lg:w-2/3 space-y-3">
                <h2 className="text-3xl font-semibold text-green-400">{veg.name}</h2>
                <p><span className="text-green-300 font-medium">Nutrition:</span> {veg.nutrition}</p>
                <p><span className="text-green-300 font-medium">Uses:</span> {veg.uses}</p>
                <p><span className="text-green-300 font-medium">Planting:</span> {veg.planting}</p>
                <p><span className="text-green-300 font-medium">Cooking:</span> {veg.cooking}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">No vegetables found matching “{searchTerm}”.</p>
        )}
      </div>
    </div>
  );
};

export default VegetablePage;
