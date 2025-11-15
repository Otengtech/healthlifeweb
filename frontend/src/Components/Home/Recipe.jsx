import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaDrumstickBite, FaFireAlt, FaClock, FaHeart, FaSeedling, FaArrowRight } from "react-icons/fa";
import avocadotoast from "../../assets/avocado-toast.webp";
import recipe2 from "../../assets/wall8.webp";
import recipe3 from "../../assets/berry-smoothie.webp";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#4ADE80",
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

// Reusable Button Component
const RecipeButton = ({ children, to, className = "", ...props }) => (
  <motion.button
    variants={buttonVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    whileTap="tap"
    className={`flex items-center gap-3 px-8 py-4 bg-green-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    {...props}
  >
    {to ? <Link to={to}>{children}</Link> : children}
    <motion.div
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaArrowRight />
    </motion.div>
  </motion.button>
);

// Recipe data with enhanced metadata
const RECIPES = [
  {
    name: "Avocado Salad Bowl",
    img: avocadotoast,
    desc: "A refreshing mix of avocados, lettuce, and olive oil that boosts heart health and aids digestion. Perfect for a light lunch or dinner.",
    prepTime: "15 mins",
    calories: "320",
    difficulty: "Easy",
    category: "Vegan",
    icon: FaLeaf,
    gradient: "from-green-500 to-emerald-500",
    benefits: ["Heart Health", "Digestion", "Hydration"],
    ingredients: 8,
    tags: ["Gluten-Free", "Low-Carb", "High-Fiber"]
  },
  {
    name: "Grilled Chicken & Veggies",
    img: recipe2,
    desc: "A balanced combination of grilled chicken and colorful vegetables packed with protein and antioxidants for muscle recovery.",
    prepTime: "25 mins",
    calories: "420",
    difficulty: "Medium",
    category: "High-Protein",
    icon: FaDrumstickBite,
    gradient: "from-orange-500 to-red-500",
    benefits: ["Muscle Recovery", "Protein Boost", "Antioxidants"],
    ingredients: 12,
    tags: ["High-Protein", "Balanced", "Post-Workout"]
  },
  {
    name: "Berry Smoothie Blast",
    img: recipe3,
    desc: "A nutrient-rich smoothie made with fresh berries, yogurt, and chia seeds — keeps you full and energized throughout the day.",
    prepTime: "10 mins",
    calories: "280",
    difficulty: "Easy",
    category: "Breakfast",
    icon: FaFireAlt,
    gradient: "from-purple-500 to-pink-500",
    benefits: ["Energy Boost", "Antioxidants", "Hydration"],
    ingredients: 6,
    tags: ["Quick", "Refreshing", "Nutrient-Dense"]
  }
];

// Difficulty Badge Component
const DifficultyBadge = ({ difficulty, className = "" }) => {
  const difficultyConfig = {
    Easy: { color: "bg-green-100 text-green-800 border-green-200", icon: FaLeaf },
    Medium: { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: FaFireAlt },
    Hard: { color: "bg-red-100 text-red-800 border-red-200", icon: FaFireAlt }
  };

  const config = difficultyConfig[difficulty] || difficultyConfig.Easy;
  const IconComponent = config.icon;

  return (
    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${config.color} ${className}`}>
      <IconComponent size={10} />
      <span>{difficulty}</span>
    </div>
  );
};

// Nutrition Badge Component
const NutritionBadge = ({ icon: Icon, value, label, className = "" }) => (
  <div className={`flex flex-col items-center text-center ${className}`}>
    <div className="flex items-center gap-1 text-gray-600 mb-1">
      <Icon size={14} className="text-green-600" />
      <span className="text-sm font-semibold">{value}</span>
    </div>
    <span className="text-xs text-gray-500">{label}</span>
  </div>
);

const RecipeSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col items-center">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Healthy Recipes",
            "description": "Nutritious and delicious recipes for healthy living",
            "numberOfItems": RECIPES.length,
            "itemListElement": RECIPES.map((recipe, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Recipe",
                "name": recipe.name,
                "description": recipe.desc,
                "prepTime": recipe.prepTime,
                "nutrition": {
                  "@type": "NutritionInformation",
                  "calories": recipe.calories
                },
                "recipeCategory": recipe.category,
                "recipeDifficulty": recipe.difficulty
              }
            }))
          })
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
          Nourish Your Body
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Discover delicious, nutrient-packed recipes designed to fuel your body and support your wellness journey. 
          Each recipe is carefully crafted for both taste and health benefits.
        </p>
      </motion.div>

      {/* Recipe Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-6"
      >
        {RECIPES.map((recipe, index) => (
          <motion.article
            key={recipe.name}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-green-100 group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={recipe.img}
                alt={`Healthy ${recipe.name} recipe`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-green-700">
                  <recipe.icon size={14} />
                  <span>{recipe.category}</span>
                </div>
              </div>

              {/* Difficulty Badge */}
              <div className="absolute top-4 right-4">
                <DifficultyBadge difficulty={recipe.difficulty} />
              </div>

              {/* Prep Time */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-black/70 backdrop-blur-sm rounded-full text-sm text-white">
                  <FaClock size={12} />
                  <span>{recipe.prepTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {recipe.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {recipe.desc}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">KEY BENEFITS</h4>
                <div className="flex flex-wrap gap-2">
                  {recipe.benefits.map((benefit, benefitIndex) => (
                    <span
                      key={benefitIndex}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition Info */}
              <div className="flex justify-between items-center py-4 border-t border-gray-100">
                <NutritionBadge
                  icon={FaFireAlt}
                  value={recipe.calories}
                  label="Calories"
                />
                <NutritionBadge
                  icon={FaLeaf}
                  value={recipe.ingredients}
                  label="Ingredients"
                />
                <NutritionBadge
                  icon={FaHeart}
                  value={recipe.difficulty}
                  label="Level"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-4">
                {recipe.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Cook Healthy?
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our full collection of 100+ recipes designed for every dietary need and taste preference.
          </p>
        </div>

        <RecipeButton to="/recipepage" className="justify-center text-center">
          Explore All Recipes
        </RecipeButton>

        {/* Additional Stats */}
        <div className="flex justify-center gap-8 mt-12 text-gray-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">100+</div>
            <div className="text-sm">Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">15-30</div>
            <div className="text-sm">Avg Prep Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4.8★</div>
            <div className="text-sm">User Rating</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RecipeSection;