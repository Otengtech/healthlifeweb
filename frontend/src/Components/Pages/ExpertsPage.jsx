import React from "react";
import { motion } from "framer-motion";
import Sarah from "../../assets/Sarah-Gray.webp";
import Gabbie from "../../assets/gabbie.webp";
import Sarah2 from "../../assets/Sarah Gray2.webp";
import Kate from "../../assets/Kate Agnew.webp";
import Simone from "../../assets/Simone.webp";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaQuoteLeft,
  FaStethoscope,
  FaHeart,
  FaBrain,
  FaDumbbell,
} from "react-icons/fa";

const ExpertsPage = () => {
  const experts = [
    {
      name: "Dr. Emily Carter",
      specialty: "Nutrition & Dietetics",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      description:
        "Certified nutritionist with 10+ years of experience helping clients achieve balanced diets for optimal health.",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Dr. Daniel Smith",
      specialty: "Cardiology",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
      description:
        "Heart specialist dedicated to promoting cardiovascular fitness and preventive lifestyle medicine.",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Kate Agnew",
      specialty: "Mental Health & Wellness",
      image: Kate,
      description:
        "Kate is passionate about innovation and problem-solving in health & nutrition. Her goal is to ultimately create a healthier environment for all Australians.",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Simone Austin",
      specialty: "Sports Medicine",
      image: Simone,
      description:
        "Expert in physical rehabilitation and performance training for athletes and fitness enthusiasts.",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ];

  const topics = [
    {
      icon: <FaHeart className="text-green-500 text-3xl" />,
      title: "Heart Health",
      description:
        "Discover ways to maintain a strong heart through nutrition, exercise, and preventive care.",
    },
    {
      icon: <FaBrain className="text-green-500 text-3xl" />,
      title: "Mental Wellness",
      description:
        "Learn strategies to manage stress, boost focus, and improve emotional resilience.",
    },
    {
      icon: <FaStethoscope className="text-green-500 text-3xl" />,
      title: "Nutrition Tips",
      description:
        "Explore meal plans, superfoods, and balanced diets recommended by experts.",
    },
    {
      icon: <FaDumbbell className="text-green-500 text-3xl" />,
      title: "Fitness & Recovery",
      description:
        "Stay active with safe workouts and recovery methods for a stronger body.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Meet Our Health Experts
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted voices in wellness, nutrition, fitness, and mental health —
          sharing knowledge to empower your lifestyle.
        </p>
      </motion.div>

      {/* Expert Profiles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl cursor-pointer overflow-hidden shadow-lg hover:shadow-green-500/20 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-1">
                {expert.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{expert.specialty}</p>
              <p className="text-gray-300 text-sm mb-4">{expert.description}</p>
              <div className="flex gap-3 text-green-500 text-lg">
                <a href={expert.socials.twitter}>
                  <FaTwitter />
                </a>
                <a href={expert.socials.linkedin}>
                  <FaLinkedin />
                </a>
                <a href={expert.socials.facebook}>
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expert Topics Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-green-400 mb-4">
          What Our Experts Cover
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Explore essential health topics and practical advice curated by our
          certified professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:shadow-green-400/20 transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-300 text-sm">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expert Quote Section */}
      <motion.div
        className="bg-green-900/20 border border-green-700 rounded-2xl p-10 text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaQuoteLeft className="text-green-400 text-4xl mx-auto mb-4" />
        <p className="text-gray-200 italic text-lg mb-4">
          “Health is not about weight loss or muscle gain alone — it’s about
          balance, happiness, and daily self-care.”
        </p>
        <p className="text-green-400 font-semibold">— Dr. Emily Carter</p>
      </motion.div>
    </div>
  );
};

export default ExpertsPage;
