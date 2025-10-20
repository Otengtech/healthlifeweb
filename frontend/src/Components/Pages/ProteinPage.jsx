import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

// ✅ Protein-rich foods (5 accurate items)
const proteins = [
  {
    name: "Chicken Breast",
    image:
      "https://plus.unsplash.com/premium_photo-1664391929657-f901ee7f1414?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW5icmVhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "High in lean protein, low in fat, and an excellent source of B vitamins.",
    uses:
      "Used in grilled dishes, soups, salads, and stir-fries. Great for muscle growth.",
    preparation:
      "Marinate and grill or bake until internal temperature reaches 165°F (74°C).",
    storage:
      "Refrigerate raw chicken up to 2 days or freeze for longer preservation.",
  },
  {
    name: "Salmon",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21va2VkJTIwc2FsbW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in omega-3 fatty acids, protein, and vitamin D. Promotes heart and brain health.",
    uses:
      "Used in grilled, baked, or smoked dishes; pairs well with veggies and rice.",
    preparation:
      "Season lightly and grill, bake, or pan-sear until tender and flaky.",
    storage:
      "Keep refrigerated up to 2 days; freeze raw salmon for up to 3 months.",
  },
  {
    name: "Eggs",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "High-quality protein, rich in choline, and contains all nine essential amino acids.",
    uses:
      "Used in baking, breakfast dishes, and as a protein boost for salads or rice bowls.",
    preparation:
      "Boil, fry, scramble, or bake — versatile in nearly every cuisine.",
    storage:
      "Store in refrigerator for up to 3–4 weeks in their original carton.",
  },
  {
    name: "Lentils",
    image:
      "https://images.unsplash.com/photo-1708436477916-f97964f3ccf1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in plant-based protein, fiber, iron, and folate. Great for vegetarians.",
    uses:
      "Used in soups, stews, curries, and salads. Ideal meat substitute.",
    preparation:
      "Rinse, then boil for 15–20 minutes until tender. Can be seasoned or pureed.",
    storage:
      "Store dried lentils in airtight containers; cooked lentils last 3–5 days refrigerated.",
  },
  {
    name: "Tofu",
    image:
      "https://images.unsplash.com/photo-1690949237809-3f0336b9ba33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvZnV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Excellent plant protein made from soybeans. Low in calories and rich in calcium.",
    uses:
      "Used in stir-fries, soups, salads, and vegan dishes. Absorbs flavors well.",
    preparation:
      "Press to remove excess water, then fry, grill, or bake to desired texture.",
    storage:
      "Keep in water in fridge for up to 1 week; change water daily for freshness.",
  },
];

const ProteinPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProteins = proteins.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-900 via-gray-950 to-gray-900 text-gray-100 py-12 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-8"
      >
        Power Up with Protein
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
            placeholder="Search for a protein source..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800/70 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>
      </motion.div>

      {/* Protein List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {filteredProteins.length > 0 ? (
          filteredProteins.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex flex-col lg:flex-row items-center gap-8 rounded-3xl p-6 lg:p-10 bg-gray-800/40 backdrop-blur-md border border-rose-800/40 hover:border-rose-400/50 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="w-full lg:w-2/3 space-y-3">
                <h2 className="text-3xl font-semibold text-rose-400">{item.name}</h2>
                <p>
                  <span className="text-rose-300 font-medium">Nutrition:</span>{" "}
                  {item.nutrition}
                </p>
                <p>
                  <span className="text-rose-300 font-medium">Uses:</span>{" "}
                  {item.uses}
                </p>
                <p>
                  <span className="text-rose-300 font-medium">Preparation:</span>{" "}
                  {item.preparation}
                </p>
                <p>
                  <span className="text-rose-300 font-medium">Storage:</span>{" "}
                  {item.storage}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No protein sources found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProteinPage;
