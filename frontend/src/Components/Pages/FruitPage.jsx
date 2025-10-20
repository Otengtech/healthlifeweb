import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

// ✅ Fruit data (10 items)
const fruits = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=60&w=600",
    nutrition: "Rich in fiber, vitamin C, and antioxidants.",
    uses: "Eaten raw, in pies, juices, or salads.",
    planting: "Grows best in temperate climates with full sunlight and well-drained soil.",
    cooking: "Bake or stew for desserts; preserves well as jams or dried slices.",
  },
  {
    name: "Banana",
    image: "https://images.unsplash.com/photo-1523667864248-fc55f5bad7e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "High in potassium, fiber, and vitamin B6.",
    uses: "Eaten raw, blended in smoothies, or used in baking.",
    planting: "Thrives in tropical regions with rich, moist soil and full sun.",
    cooking: "Used in banana bread, pancakes, or dried as chips.",
  },
  {
    name: "Mango",
    image: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition: "Packed with vitamin A, C, and natural sugars.",
    uses: "Used in smoothies, desserts, and chutneys.",
    planting: "Grows in warm, tropical climates with well-drained soil.",
    cooking: "Enjoy fresh, blend for smoothies, or dry to make fruit leather.",
  },
  {
    name: "Pineapple",
    image: "https://images.unsplash.com/photo-1517260911058-0fcfd733702f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbmVhcHBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Contains vitamin C, manganese, and digestive enzymes (bromelain).",
    uses: "Used in juices, fruit salads, and tropical dishes.",
    planting: "Propagated from the top crown. Requires full sun and sandy soil.",
    cooking: "Grill, juice, or caramelize for desserts.",
  },
  {
    name: "Orange",
    image: "https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Excellent source of vitamin C and hydration.",
    uses: "Used for juice, snacks, and desserts.",
    planting: "Needs warm climates, well-drained soil, and consistent watering.",
    cooking: "Used in marmalades, glazes, and sauces.",
  },
  {
    name: "Strawberry",
    image: "https://images.unsplash.com/photo-1594282241894-4da286138f44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "High in antioxidants, vitamin C, and manganese.",
    uses: "Eaten fresh, in jams, desserts, or smoothies.",
    planting: "Thrives in well-drained soil with full sun. Keep soil moist but not soggy.",
    cooking: "Use in jams, cakes, or freeze for later use.",
  },
  {
    name: "Watermelon",
    image: "https://images.unsplash.com/photo-1708982553355-794739c6693e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdhdGVybWVsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Hydrating fruit rich in lycopene and vitamins A & C.",
    uses: "Eaten fresh, in salads, or blended into juice.",
    planting: "Requires warm weather, rich soil, and full sun.",
    cooking: "Best served fresh or chilled; can also be grilled.",
  },
  {
    name: "Papaya",
    image: "https://images.unsplash.com/photo-1541472596887-494ee5c0fe30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in vitamin C, A, and digestive enzymes (papain).",
    uses: "Used in smoothies, salads, and tropical dishes.",
    planting: "Grows best in tropical climates with rich, moist soil.",
    cooking: "Eat ripe or use green papaya for salads and curries.",
  },
  {
    name: "Grapes",
    image: "https://images.unsplash.com/photo-1541472596887-494ee5c0fe30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Contains antioxidants and vitamins C & K.",
    uses: "Eaten fresh, dried as raisins, or fermented into wine.",
    planting: "Grows in temperate regions with well-drained soil.",
    cooking: "Use in salads, jams, and desserts.",
  },
  {
    name: "Avocado",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition: "Rich in healthy fats, potassium, and fiber.",
    uses: "Used in salads, sandwiches, and guacamole.",
    planting: "Requires warm weather, loose soil, and good drainage.",
    cooking: "Blend for smoothies or spread on toast.",
  },
];

const FruitPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-red-950 to-gray-900 text-gray-100 py-12 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-orange-400 mb-8"
      >
        Discover Nature’s Sweet Treasures 🍊
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
            placeholder="Search for a fruit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800/70 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </motion.div>

      {/* Fruit List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex flex-col lg:flex-row items-center gap-8 rounded-3xl p-6 lg:p-10 bg-gray-800/40 backdrop-blur-md border border-orange-800/40 hover:border-orange-400/50 transition"
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="w-full lg:w-2/3 space-y-3">
                <h2 className="text-3xl font-semibold text-orange-400">{fruit.name}</h2>
                <p><span className="text-orange-300 font-medium">Nutrition:</span> {fruit.nutrition}</p>
                <p><span className="text-orange-300 font-medium">Uses:</span> {fruit.uses}</p>
                <p><span className="text-orange-300 font-medium">Planting:</span> {fruit.planting}</p>
                <p><span className="text-orange-300 font-medium">Cooking / Preservation:</span> {fruit.cooking}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No fruits found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default FruitPage;
