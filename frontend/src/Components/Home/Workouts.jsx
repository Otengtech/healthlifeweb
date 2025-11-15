import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaFire, FaHeart, FaLeaf, FaRunning, FaDumbbell, FaClock } from "react-icons/fa";
import tricepdips from "../../assets/tricepdips.webp";
import Yoga from "../../assets/yoga.webp";
import Lunges from "../../assets/lunges.webp";
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
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
      delay: 0.8
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
const WorkoutButton = ({ children, to, className = "", ...props }) => (
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

// Workout data with additional metadata
const WORKOUTS = [
  {
    title: "Full Body Blast",
    description: "A high-intensity workout targeting all major muscle groups. Perfect for burning calories and building strength.",
    image: tricepdips,
    duration: "30-45 mins",
    intensity: "High",
    type: "Strength",
    calories: "300-400",
    icon: FaDumbbell,
    gradient: "from-red-500 to-orange-500",
    features: ["Full body engagement", "Strength building", "Calorie burn"]
  },
  {
    title: "Yoga Flow",
    description: "Improve flexibility and reduce stress with this calming yoga routine. Suitable for all levels.",
    image: Yoga,
    duration: "45-60 mins",
    intensity: "Low",
    type: "Flexibility",
    calories: "150-200",
    icon: FaLeaf,
    gradient: "from-green-500 to-teal-500",
    features: ["Stress reduction", "Flexibility", "Mindfulness"]
  },
  {
    title: "Cardio Burn",
    description: "Boost your heart rate and endurance with this fun cardio session. No equipment needed!",
    image: Lunges,
    duration: "25-35 mins",
    intensity: "Medium",
    type: "Cardio",
    calories: "250-350",
    icon: FaRunning,
    gradient: "from-blue-500 to-purple-500",
    features: ["Heart health", "Endurance", "Fat burning"]
  }
];

// Intensity badge component
const IntensityBadge = ({ intensity, className = "" }) => {
  const intensityConfig = {
    High: { color: "bg-red-500 text-white", icon: FaFire },
    Medium: { color: "bg-yellow-500 text-gray-900", icon: FaRunning },
    Low: { color: "bg-green-500 text-white", icon: FaLeaf }
  };

  const config = intensityConfig[intensity] || intensityConfig.Medium;
  const IconComponent = config.icon;

  return (
    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${config.color} ${className}`}>
      <IconComponent size={10} />
      <span>{intensity}</span>
    </div>
  );
};

const Workouts = () => {
  return (
    <section className="py-16 px-6 sm:px-10 bg-gradient-to-br from-gray-900 to-gray-800 md:px-16 lg:px-24 xl:px-28">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Workout Programs",
            "description": "Professional workout programs for all fitness levels",
            "numberOfItems": WORKOUTS.length,
            "itemListElement": WORKOUTS.map((workout, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "ExercisePlan",
                "name": workout.title,
                "description": workout.description,
                "timeRequired": workout.duration,
                "intensity": workout.intensity,
                "calories": workout.calories
              }
            }))
          })
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
          Transform Your Fitness Journey
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover expertly crafted workout programs designed to help you achieve your fitness goals, 
          whether you're building strength, improving flexibility, or boosting cardiovascular health.
        </p>
      </motion.div>

      {/* Workout Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
      >
        <AnimatePresence>
          {WORKOUTS.map((workout, idx) => (
            <motion.article
              key={workout.title}
              variants={cardVariants}
              whileHover="hover"
              className="group flex flex-col bg-gray-800 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={`${workout.title} workout demonstration`}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <IntensityBadge intensity={workout.intensity} />
                  <div className="flex items-center gap-1 px-3 py-1 bg-gray-900 bg-opacity-80 rounded-full text-xs text-white font-semibold">
                    <FaClock size={10} />
                    <span>{workout.duration}</span>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gray-900 bg-opacity-80 rounded-full text-xs text-white font-semibold">
                    <workout.icon size={12} />
                    <span>{workout.type}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {workout.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                  {workout.description}
                </p>

                {/* Features List */}
                <ul className="mb-4 space-y-2">
                  {workout.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${workout.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Calories and Additional Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaFire className="text-orange-500" />
                    <span>{workout.calories} calories</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-green-500 hover:text-green-400 transition-colors duration-200"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Start Your Fitness Journey?
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of users who have transformed their lives with our workout programs.
          </p>
        </div>
        
        <WorkoutButton to="/workoutspage">
          Explore All Workouts
        </WorkoutButton>

        {/* Additional Stats */}
        <div className="flex justify-center gap-8 mt-8 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">50+</div>
            <div className="text-sm">Workout Programs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">10k+</div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">4.9★</div>
            <div className="text-sm">User Rating</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Workouts;