import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

// ✅ 8 popular herbs (with accurate Unsplash image URLs)
const herbs = [
  {
    name: "Basil",
    image:
      "https://images.unsplash.com/photo-1629157247277-48f870757026?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in vitamin K, manganese, and antioxidants that support heart and skin health.",
    uses:
      "Used in Italian dishes, sauces like pesto, salads, and as a garnish for soups.",
    planting:
      "Prefers warm weather, full sun, and well-drained soil. Water regularly.",
    preservation:
      "Store fresh basil in a jar of water at room temperature or dry leaves for long-term use.",
  },
  {
    name: "Mint",
    image:
      "https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWludHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Contains vitamin A and antioxidants; helps in digestion and provides cooling relief.",
    uses:
      "Used in teas, salads, desserts, and beverages for freshness and aroma.",
    planting:
      "Thrives in moist, rich soil and partial sunlight. Spreads quickly — grow in pots if needed.",
    preservation:
      "Refrigerate fresh leaves wrapped in damp paper towels or freeze for later use.",
  },
  {
    name: "Rosemary",
    image:
      "https://plus.unsplash.com/premium_photo-1725669195586-f056535699f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZW1hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Good source of iron, calcium, and antioxidants; boosts memory and reduces inflammation.",
    uses:
      "Used in roasted meats, soups, and herbal oils for a strong, aromatic flavor.",
    planting:
      "Needs full sunlight and well-drained soil. Avoid overwatering.",
    preservation:
      "Air-dry sprigs and store in airtight containers; keeps its flavor for months.",
  },
  {
    name: "Thyme",
    image:
      "https://plus.unsplash.com/premium_photo-1726138617688-e6bfd9f0de5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGh5bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in vitamin C, fiber, and antibacterial compounds that support immunity.",
    uses:
      "Common in stews, sauces, marinades, and baked dishes for a subtle earthy taste.",
    planting:
      "Grows well in dry, sandy soil with full sunlight. Prune regularly for bushy growth.",
    preservation:
      "Dry in bunches upside down; store in glass jars for long-term flavor retention.",
  },
  {
    name: "Parsley",
    image:
      "https://images.unsplash.com/photo-1588879460618-9249e7d947d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyc2xleXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "High in vitamin C and K; supports kidney function and freshens breath.",
    uses:
      "Used as a garnish, in soups, stews, salads, and sauces like chimichurri.",
    planting:
      "Prefers full sun to partial shade and moist, fertile soil. Water evenly.",
    preservation:
      "Chop and freeze with olive oil in ice cube trays or dry for long use.",
  },
];

const HerbsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHerbs = herbs.filter((herb) =>
    herb.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-gray-950 to-gray-900 text-gray-100 py-12 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-8"
      >
        Explore Healing Herbs
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
            placeholder="Search for a herb..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800/70 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </motion.div>

      {/* Herb List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {filteredHerbs.length > 0 ? (
          filteredHerbs.map((herb, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex flex-col lg:flex-row items-center gap-8 rounded-3xl p-6 lg:p-10 bg-gray-800/40 backdrop-blur-md border border-emerald-800/40 hover:border-emerald-400/50 transition"
            >
              <img
                src={herb.image}
                alt={herb.name}
                className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="w-full lg:w-2/3 space-y-3">
                <h2 className="text-3xl font-semibold text-emerald-400">
                  {herb.name}
                </h2>
                <p>
                  <span className="text-emerald-300 font-medium">Nutrition:</span>{" "}
                  {herb.nutrition}
                </p>
                <p>
                  <span className="text-emerald-300 font-medium">Uses:</span>{" "}
                  {herb.uses}
                </p>
                <p>
                  <span className="text-emerald-300 font-medium">Planting:</span>{" "}
                  {herb.planting}
                </p>
                <p>
                  <span className="text-emerald-300 font-medium">
                    Preservation:
                  </span>{" "}
                  {herb.preservation}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No herbs found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default HerbsPage;
