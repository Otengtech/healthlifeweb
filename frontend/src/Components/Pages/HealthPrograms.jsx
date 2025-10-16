import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cardio from "../../assets/cardio.webp";
import Yoga from "../../assets/yoga.webp";
import Strength from "../../assets/strength.webp";
import Weight from "../../assets/weight-management.webp";
import Progress from "../../assets/progress.webp";
import Hydration from "../../assets/hydration.webp";
import Meditation from "../../assets/meditation.webp";
import Sleep from "../../assets/sleep.webp";
import {
  GiLotus,
  GiHeartBeats,
  GiAppleCore,
  GiMuscleUp,
  GiMeditation,
  GiSleepy,
  GiWeight,
  GiRunningShoe,
  GiWaterBottle,
  GiHamburgerMenu,
} from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const HealthPrograms = () => {
  const [activeProgram, setActiveProgram] = useState("Yoga");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const programs = {
    Yoga: {
      icon: <GiLotus className="text-6xl text-green-400 mb-4" />,
      title: "Beginner Yoga",
      image: Yoga,
      description: `
Yoga helps you connect your mind, body, and spirit through movement and breath. This beginner course teaches simple poses to enhance balance, posture, and calmness.

Highlights:
- Focus on breathing and alignment
- Simple poses: Mountain, Cat-Cow, Child’s Pose
- Daily practice for flexibility and calm

Benefits:
- Reduces stress and anxiety
- Improves flexibility and balance
- Enhances focus and inner peace
- Supports better sleep

Tip: Begin with 15–20 minutes a day in a peaceful environment.
      `,
    },
    Nutrition: {
      icon: <GiAppleCore className="text-6xl text-green-400 mb-4" />,
      title: "Healthy Eating Plan",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      description: `
A proper diet fuels your body and mind. Learn how to eat balanced meals that support long-term health, energy, and focus.

Meal Plan Example:
- Breakfast: Oatmeal with fruits
- Lunch: Brown rice with grilled fish
- Snack: Greek yogurt and nuts
- Dinner: Quinoa with steamed veggies

Benefits:
- Boosts metabolism and immunity
- Aids in healthy weight management
- Reduces the risk of chronic disease

Tip: Eat slowly and drink plenty of water daily.
      `,
    },
    Cardio: {
      icon: <GiHeartBeats className="text-6xl text-green-400 mb-4" />,
      title: "Cardio Challenge",
      image: Cardio,
      description: `
Improve endurance, burn calories, and strengthen your heart with this progressive cardio challenge.

30-Day Plan:
- Week 1: Brisk walk 20 mins daily
- Week 2: Add cycling/jump rope
- Week 3: Include burpees and lunges
- Week 4: Mix all for 40 minutes

Benefits:
- Builds stamina
- Boosts heart and lung health
- Enhances sleep and energy
      `,
    },
    Strength: {
      icon: <GiMuscleUp className="text-6xl text-green-400 mb-4" />,
      title: "Strength Training",
      image: Strength,
      description: `
Build muscle, tone your body, and improve overall strength using bodyweight and dumbbell workouts.

Beginner Routine:
- Push-ups: 3 sets of 10
- Squats: 3 sets of 15
- Plank: 30 seconds hold
- Dumbbell curls: 3 sets of 12

Benefits:
- Improves posture
- Enhances metabolism
- Builds core stability
- Prevents muscle loss

Tip: Focus on form before increasing weight.
      `,
    },
    Meditation: {
      icon: <GiMeditation className="text-6xl text-green-400 mb-4" />,
      title: "Mindfulness Meditation",
      image: Meditation,
      description: `
Train your mind to stay calm and focused through mindfulness and deep breathing.

Practices:
- 10 mins daily breathing focus
- Gratitude journaling
- Guided meditation sessions

Benefits:
- Improves emotional health
- Enhances concentration
- Reduces stress and tension
      `,
    },
    Sleep: {
      icon: <GiSleepy className="text-6xl text-green-400 mb-4" />,
      title: "Better Sleep Routine",
      image: Sleep,
      description: `
Develop a bedtime routine that enhances deep, restful sleep and rejuvenation.

Tips:
- Maintain a fixed bedtime
- Avoid screens before bed
- Try herbal tea or warm baths

Benefits:
- Boosts energy and mood
- Enhances memory and focus
- Regulates hormones and metabolism
      `,
    },
    WeightLoss: {
      icon: <GiWeight className="text-6xl text-green-400 mb-4" />,
      title: "Weight Loss Journey",
      image: Weight,
      description: `
A sustainable approach to losing weight through healthy eating, movement, and self-discipline.

Approach:
- Calorie control and portion balance
- Daily 30-min physical activity
- Hydration and sleep monitoring

Benefits:
- Maintains healthy BMI
- Improves confidence and energy
- Reduces lifestyle diseases
      `,
    },
    Running: {
      icon: <GiRunningShoe className="text-6xl text-green-400 mb-4" />,
      title: "Running Program",
      image: Progress,
      description: `
Build stamina, endurance, and a stronger heart through guided running techniques.

Plan:
- Start with walk-run intervals
- Gradually increase pace
- Practice breathing rhythm

Benefits:
- Strengthens heart health
- Burns calories efficiently
- Relieves stress naturally
      `,
    },
    Hydration: {
      icon: <GiWaterBottle className="text-6xl text-green-400 mb-4" />,
      title: "Hydration & Wellness",
      image: Hydration,
      description: `
Water is essential for life. Learn how hydration impacts every aspect of your health and performance.

Tips:
- Drink a glass of water every 2 hours
- Eat water-rich foods like cucumber and oranges
- Avoid excess caffeine or soda

Benefits:
- Boosts digestion and detox
- Improves skin glow
- Enhances energy and focus
      `,
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row relative text-gray-200">
      {/* Hamburger Toggle - Small Screens Only */}
      <button
        className={`md:hidden fixed top-20 left-5 text-green-300 z-20 transition-all ${
          sidebarOpen ? "hidden" : "block"
        }`}
        onClick={() => setSidebarOpen(true)}
      >
        <GiHamburgerMenu className="text-3xl" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 768) && (
          <motion.aside
            key="sidebar"
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:w-1/4 w-full bg-gray-900 fixed md:relative h-screen md:h-auto shadow-lg z-20 p-6 border-r border-gray-700"
          >
            {/* Close Button (Small Screens Only) */}
            <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="text-xl font-bold text-green-400">Programs</h2>
              <button
                className="text-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes size={22} />
              </button>
            </div>

            <h2 className="hidden md:block text-2xl font-bold text-green-400 mb-6 text-center">
              Health Programs
            </h2>

            <div className="flex flex-col gap-3">
              {Object.keys(programs).map((key) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveProgram(key);
                    setSidebarOpen(false);
                  }}
                  className={`text-left px-6 py-3 rounded-full font-medium transition-all ${
                    activeProgram === key
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {programs[key].title}
                </motion.button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 mt-12 md:mt-0 px-4 sm:p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mt-6 mx-auto"
          >
            <div className="flex flex-col items-start text-start">
              <img
                src={programs[activeProgram].image}
                alt={programs[activeProgram].title}
                className="rounded-xl w-full max-h-80 object-cover mb-6 shadow-md"
              />
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                {programs[activeProgram].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HealthPrograms;
