import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import tricepdips from "../../assets/tricepdips.webp";
import Yoga from "../../assets/yoga.webp";
import Lunges from "../../assets/lunges.webp";

const Workouts = () => {
  const workouts = [
    {
      title: "Full Body Blast",
      description:
        "A high-intensity workout targeting all major muscle groups. Perfect for burning calories and building strength.",
      image: tricepdips,
    },
    {
      title: "Yoga Flow",
      description:
        "Improve flexibility and reduce stress with this calming yoga routine. Suitable for all levels.",
      image: Yoga,
    },
    {
      title: "Cardio Burn",
      description:
        "Boost your heart rate and endurance with this fun cardio session. No equipment needed!",
      image: Lunges,
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      {/* Section Title */}
      <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
        Workout Section
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {workouts.map((workout, idx) => (
            <motion.div
              key={workout.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-4 sm:p-5 md:p-6">
                <h1 className="text-lg sm:text-xl text-green-600 font-semibold my-2">
                  {workout.title}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  {workout.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="flex items-center mt-10 gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
          To Workouts <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Workouts;
