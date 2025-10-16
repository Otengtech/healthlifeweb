import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaDrumstickBite, FaFireAlt } from "react-icons/fa";
import avocadotoast from "../../assets/avocado-toast.webp";
import recipe2 from "../../assets/wall8.webp";
import recipe3 from "../../assets/berry-smoothie.webp";

const recipes = [
  {
    name: "Avocado Salad Bowl",
    img: avocadotoast,
    desc: "A refreshing mix of avocados, lettuce, and olive oil that boosts heart health and aids digestion. Perfect for a light lunch or dinner.",
  },
  {
    name: "Grilled Chicken & Veggies",
    img: recipe2,
    desc: "A balanced combination of grilled chicken and colorful vegetables packed with protein and antioxidants for muscle recovery.",
  },
  {
    name: "Berry Smoothie Blast",
    img: recipe3,
    desc: "A nutrient-rich smoothie made with fresh berries, yogurt, and chia seeds — keeps you full and energized throughout the day.",
  },
];

const RecipeSection = () => {
  return (
    <section className="w-full py-20 bg-green-50 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-green-700 mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Healthy Recipes
      </motion.h2>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl px-6">
        {recipes.map((recipe, index) => (
          <motion.div
            key={recipe.name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Image */}
            <img
              src={recipe.img}
              alt={recipe.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h1 className="text-2xl font-semibold text-green-700 mb-4">
                {recipe.name}
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-start flex-grow">
                {recipe.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="/recipepage"
          className="bg-green-500 text-gray-700 px-6 py-3 text-lg hover:bg-green-400 transition-all duration-300"
        >
          Go to Recipe →
        </a>
      </motion.div>
    </section>
  );
};

export default RecipeSection;
