import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "react-icons/gi";

const HealthPrograms = () => {
  const [activeProgram, setActiveProgram] = useState("Yoga");

  const programs = {
    Yoga: {
      icon: <GiLotus className="text-5xl text-green-600 mb-4" />,
      title: "Beginner Yoga",
      description: `
Yoga helps you connect your mind, body, and spirit through movement and breath. This beginner course teaches simple poses to enhance balance, posture, and calmness.

🧘‍♀️ **Highlights**
- Focus on breathing and alignment
- Simple poses: Mountain, Cat-Cow, Child’s Pose
- Daily practice for flexibility and calm

🌿 **Benefits**
- Reduces stress and anxiety
- Improves flexibility and balance
- Enhances focus and inner peace
- Supports better sleep

💡 **Tip:** Begin with 15–20 minutes a day in a peaceful environment.
      `,
      color: "from-green-100 to-green-50",
    },

    Nutrition: {
      icon: <GiAppleCore className="text-5xl text-green-600 mb-4" />,
      title: "Healthy Eating Plan",
      description: `
A proper diet fuels your body and mind. Learn how to eat balanced meals that support long-term health, energy, and focus.

🥗 **Meal Plan Example**
- **Breakfast:** Oatmeal with fruits
- **Lunch:** Brown rice with grilled fish
- **Snack:** Greek yogurt and nuts
- **Dinner:** Quinoa with steamed veggies

🧠 **Benefits**
- Boosts metabolism and immunity
- Aids in healthy weight management
- Reduces the risk of chronic disease

💡 **Tip:** Eat slowly and drink plenty of water daily.
      `,
      color: "from-green-50 to-green-100",
    },

    Cardio: {
      icon: <GiHeartBeats className="text-5xl text-green-600 mb-4" />,
      title: "Cardio Challenge",
      description: `
Improve endurance, burn calories, and strengthen your heart with this progressive cardio challenge.

🏃‍♂️ **30-Day Plan**
- Week 1: Brisk walk 20 mins daily
- Week 2: Add cycling/jump rope
- Week 3: Include burpees and lunges
- Week 4: Mix all for 40 minutes

🔥 **Benefits**
- Builds stamina
- Boosts heart and lung health
- Enhances sleep and energy
      `,
      color: "from-green-100 to-green-50",
    },

    Strength: {
      icon: <GiMuscleUp className="text-5xl text-green-600 mb-4" />,
      title: "Strength Training",
      description: `
Build muscle, tone your body, and improve overall strength using bodyweight and dumbbell workouts.

🏋️ **Beginner Routine**
- Push-ups: 3 sets of 10
- Squats: 3 sets of 15
- Plank: 30 seconds hold
- Dumbbell curls: 3 sets of 12

💪 **Benefits**
- Improves posture
- Enhances metabolism
- Builds core stability
- Prevents muscle loss

💡 **Tip:** Focus on form before increasing weight.
      `,
      color: "from-green-50 to-green-100",
    },

    Meditation: {
      icon: <GiMeditation className="text-5xl text-green-600 mb-4" />,
      title: "Mindfulness Meditation",
      description: `
Train your mind to stay calm and focused through mindfulness and deep breathing.

🧘 **Practices**
- 10 mins daily breathing focus
- Gratitude journaling
- Guided meditation sessions

🌼 **Benefits**
- Improves emotional health
- Enhances concentration
- Reduces stress and tension
      `,
      color: "from-green-100 to-green-50",
    },

    Sleep: {
      icon: <GiSleepy className="text-5xl text-green-600 mb-4" />,
      title: "Better Sleep Routine",
      description: `
Develop a bedtime routine that enhances deep, restful sleep and rejuvenation.

🌙 **Tips**
- Maintain a fixed bedtime
- Avoid screens before bed
- Try herbal tea or warm baths

💤 **Benefits**
- Boosts energy and mood
- Enhances memory and focus
- Regulates hormones and metabolism
      `,
      color: "from-green-50 to-green-100",
    },

    WeightLoss: {
      icon: <GiWeight className="text-5xl text-green-600 mb-4" />,
      title: "Weight Loss Journey",
      description: `
A sustainable approach to losing weight through healthy eating, movement, and self-discipline.

⚖️ **Approach**
- Calorie control and portion balance
- Daily 30-min physical activity
- Hydration and sleep monitoring

✨ **Benefits**
- Maintains healthy BMI
- Improves confidence and energy
- Reduces lifestyle diseases
      `,
      color: "from-green-100 to-green-50",
    },

    Running: {
      icon: <GiRunningShoe className="text-5xl text-green-600 mb-4" />,
      title: "Running Program",
      description: `
Build stamina, endurance, and a stronger heart through guided running techniques.

🏃‍♀️ **Plan**
- Start with walk-run intervals
- Gradually increase pace
- Practice breathing rhythm

❤️ **Benefits**
- Strengthens heart health
- Burns calories efficiently
- Relieves stress naturally
      `,
      color: "from-green-50 to-green-100",
    },

    Hydration: {
      icon: <GiWaterBottle className="text-5xl text-green-600 mb-4" />,
      title: "Hydration & Wellness",
      description: `
Water is essential for life. Learn how hydration impacts every aspect of your health and performance.

💧 **Tips**
- Drink a glass of water every 2 hours
- Eat water-rich foods like cucumber and oranges
- Avoid excess caffeine or soda

🌊 **Benefits**
- Boosts digestion and detox
- Improves skin glow
- Enhances energy and focus
      `,
      color: "from-green-100 to-green-50",
    },
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-16 flex flex-col md:flex-row gap-10">
      {/* Sidebar Navigation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/3 bg-white border-r-2 p-6 h-fit md:sticky top-10"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Health Programs
        </h2>
        <div className="flex flex-col gap-3">
          {Object.keys(programs).map((key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProgram(key)}
              className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
                activeProgram === key
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-green-100"
              }`}
            >
              {programs[key].title}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Active Program Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className={`p-10 rounded-2xl bg-gradient-to-b ${programs[activeProgram].color} shadow-xl`}
          >
            <div className="flex flex-col items-center text-center">
              {programs[activeProgram].icon}
              <h2 className="text-3xl font-bold mb-4 text-green-600">
                {programs[activeProgram].title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg text-justify">
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
