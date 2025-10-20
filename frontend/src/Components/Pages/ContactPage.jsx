import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-gray-950 to-gray-900 text-gray-100 py-16 px-6">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-10"
      >
        Get in Touch
      </motion.h1>

      {/* Intro Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg mb-14"
      >
        Whether you’re passionate about healthy living, need assistance with our
        wellness tools, or want to collaborate, we’re here to connect. Learn
        more about our mission, our community, and how to reach us below.
      </motion.p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 bg-gray-800/40 backdrop-blur-md border border-emerald-800/40 rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-emerald-400 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’re a team of nutrition enthusiasts, wellness experts, and
            developers dedicated to helping people make better health decisions.
            Our goal is to make fitness and nutrition information interactive,
            accurate, and accessible to everyone.
          </p>

          <h3 className="text-2xl font-semibold text-emerald-300">
            Our Location
          </h3>
          <p className="text-gray-400">
            Visit our office or reach out anytime — we’d love to meet you.
          </p>

          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-emerald-400 text-lg" />
              <span>Ghacem Estates, Spintex-Sakumono GH</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-emerald-400 text-lg" />
              <span>+233 593 957 373</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-400 text-lg" />
              <span>otengebenezer326@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-emerald-400 text-lg" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image and Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900"
            alt="Wellness Office"
            className="rounded-3xl shadow-lg w-full object-cover h-72 lg:h-96"
          />

          <div className="rounded-3xl overflow-hidden shadow-lg border border-emerald-800/40">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8460062799094!2d-0.1963063255411884!3d5.603716533050802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1c3d4cb4d5%3A0xe6a2680e1986d02!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1697058441522!5m2!1sen!2sgh"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-emerald-400 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our mission is to create a holistic platform that empowers users to
          manage their physical and mental wellness. We believe in the balance
          of nature, nutrition, and technology — promoting a healthy lifestyle
          through awareness, education, and daily guidance.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
