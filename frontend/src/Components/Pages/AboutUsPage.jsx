import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaUsers,
  FaHeartbeat,
  FaSeedling,
  FaSmileBeam,
  FaAward,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";
import image from "../../assets/therapy.webp";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

// Data constants
const MISSION_CARDS = [
  {
    icon: <FaHeartbeat className="text-4xl mb-4" />,
    title: "Our Mission",
    desc: "To inspire and empower individuals to live healthier and happier lives through natural food and mindful living.",
    gradient: "from-red-500 to-pink-500",
    features: ["Empowerment", "Mindfulness", "Natural Living"]
  },
  {
    icon: <FaSeedling className="text-4xl mb-4" />,
    title: "Our Vision",
    desc: "To become a global leader in promoting wellness, nutrition, and a sustainable lifestyle for all.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Global Impact", "Sustainability", "Innovation"]
  },
  {
    icon: <FaSmileBeam className="text-4xl mb-4" />,
    title: "Our Values",
    desc: "We believe in honesty, sustainability, compassion, and innovation in everything we do.",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Honesty", "Compassion", "Excellence"]
  }
];

const TEAM_STATS = [
  { number: "50+", label: "Experts", icon: FaUsers },
  { number: "10k+", label: "Users Helped", icon: FaHeartbeat },
  { number: "5+", label: "Years Experience", icon: FaAward },
  { number: "24/7", label: "Support", icon: FaShieldAlt }
];

const TEAM_PRINCIPLES = [
  {
    icon: FaHandHoldingHeart,
    title: "Compassionate Care",
    desc: "We treat every individual with empathy and understanding"
  },
  {
    icon: FaRocket,
    title: "Innovation Driven",
    desc: "Constantly evolving with the latest health research"
  },
  {
    icon: FaGlobeAmericas,
    title: "Global Perspective",
    desc: "Incorporating wellness practices from around the world"
  },
  {
    icon: FaStar,
    title: "Excellence Focused",
    desc: "Committed to delivering the highest quality guidance"
  }
];

const AboutUsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-800/10" />
          <div className="relative max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We are dedicated to promoting a healthy lifestyle through fitness,
              balanced diets, and positive living. Our mission is to help you
              discover the best version of yourself — inside and out.
            </motion.p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Foundation</span>
            </motion.h2>
            
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {MISSION_CARDS.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-400/30 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full filter blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`text-gradient bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600 group-hover:border-green-400/30 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {TEAM_STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6"
                >
                  <stat.icon className="text-4xl text-green-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">We Are</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are a passionate team of fitness coaches, nutritionists, and lifestyle
                experts who believe health is the real wealth. Our goal is to help people
                make small, consistent changes for long-term well-being.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With years of experience in fitness training, diet planning, and holistic
                wellness, our mission is to guide individuals toward a balanced and
                sustainable lifestyle. We understand that true health is not just about
                physical strength — it's about mental clarity, emotional balance, and
                self-care.
              </p>
              
              <div className="space-y-4">
                {[
                  "Certified health professionals",
                  "Evidence-based approaches",
                  "Personalized wellness plans",
                  "Continuous support system"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl opacity-20 blur-xl" />
              <img
                src={image}
                alt="Healthy Lifestyle"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Team Principles */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Principles</span>
            </motion.h2>
            
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {TEAM_PRINCIPLES.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 group cursor-pointer"
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <principle.icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Dedicated Team</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our team members come from diverse health and wellness
                backgrounds — including nutrition, fitness training, mental
                health, and holistic healing. Each one shares a common mission:
                helping people live better, healthier, and more fulfilling
                lives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                From creating personalized nutrition plans to offering practical
                mental wellness strategies, our team works together to empower
                communities to take control of their well-being. We are
                committed to continuous learning, innovation, and providing
                reliable information that inspires healthier choices every day.
              </p>

              <motion.div
                className="flex space-x-6 text-green-400 text-3xl mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[FaLeaf, FaUsers, FaHeartbeat, FaAward].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, color: "#4ADE80" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Wellness Journey</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Join thousands of others who have transformed their lives with our guidance and support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUsPage;