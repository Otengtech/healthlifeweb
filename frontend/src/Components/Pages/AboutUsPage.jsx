import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaUsers,
  FaHeartbeat,
  FaSeedling,
  FaSmileBeam,
} from "react-icons/fa";
import image from "../../assets/therapy.webp";

const AboutUsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-gray-900 text-gray-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <section className="text-green-500 pt-12">
          <motion.h1
            className="text-4xl md:text-5xl text-center font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="">Us</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 text-start max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are dedicated to promoting a healthy lifestyle through fitness,
            balanced diets, and positive living. Our mission is to help you
            discover the best version of yourself — inside and out.
          </motion.p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-6 md:px-20 bg-gray-900">
          {/* <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Our Mission, Vision & Values</h2> */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeartbeat className="text-4xl text-green-500 mb-3" />,
                title: "Our Mission",
                desc: "To inspire and empower individuals to live healthier and happier lives through natural food and mindful living.",
              },
              {
                icon: <FaSeedling className="text-4xl text-green-500 mb-3" />,
                title: "Our Vision",
                desc: "To become a global leader in promoting wellness, nutrition, and a sustainable lifestyle for all.",
              },
              {
                icon: <FaSmileBeam className="text-4xl text-green-500 mb-3" />,
                title: "Our Values",
                desc: "We believe in honesty, sustainability, compassion, and innovation in everything we do.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-md border border-green-400 hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col text-gray-300 items-center text-start">
                  {item.icon}
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Left-Right Animated Sections */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-green-500 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-300">
  We are a passionate team of fitness coaches, nutritionists, and lifestyle
  experts who believe health is the real wealth. Our goal is to help people
  make small, consistent changes for long-term well-being. 
  <br /><br />
  With years of experience in fitness training, diet planning, and holistic
  wellness, our mission is to guide individuals toward a balanced and
  sustainable lifestyle. We understand that true health is not just about
  physical strength — it’s about mental clarity, emotional balance, and
  self-care.
</p>

            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={image} alt="Healthy Lifestyle" className="rounded-xl" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                alt="Our Team"
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-green-500 mb-4">
                Our Dedicated Team
              </h2>
              <p className="text-gray-300 mb-4">
                Our team members come from diverse health and wellness
                backgrounds — including nutrition, fitness training, mental
                health, and holistic healing. Each one shares a common mission:
                helping people live better, healthier, and more fulfilling
                lives.
                <br />
                
                <br />
                From creating personalized nutrition plans to offering practical
                mental wellness strategies, our team works together to empower
                communities to take control of their well-being. We are
                committed to continuous learning, innovation, and providing
                reliable information that inspires healthier choices every day.
              </p>

              <div className="flex space-x-6 text-green-400 text-3xl">
                <FaLeaf />
                <FaUsers />
                <FaHeartbeat />
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUsPage;
