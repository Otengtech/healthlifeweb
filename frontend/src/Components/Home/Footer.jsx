import React from "react";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaHeart,
  FaCode,
  FaShieldAlt,
  FaUserCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Picture1 from "../../assets/picture1.jpg";
import Picture2 from "../../assets/picture2.jpg";
import Picture3 from "../../assets/picture3.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Developer data
const developers = [
  {
    name: "Oteng Ebenezer",
    role: "Frontend Developer",
    image: Picture2,
    bio: "Focused on user interfaces with React, Tailwind CSS, and smooth animations.",
    skills: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/otengebenezer",
    linkedin: "https://linkedin.com/in/otengebenezer",
    portfolio: "https://otengebenezer.dev"
  },
  {
    name: "Jefferson Takyi",
    role: "UI/UX Designer",
    image: Picture3,
    bio: "Designs visually appealing and user-friendly layouts that bring ideas to life.",
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    github: "https://github.com/jeffersontakyi",
    linkedin: "https://linkedin.com/in/jeffersontakyi",
    portfolio: "https://jeffersontakyi.design"
  },
  {
    name: "Micheal Opare",
    role: "Backend Engineer",
    image: Picture1,
    bio: "Specializes in Node.js and MongoDB, ensuring performance and scalability.",
    skills: ["Node.js", "MongoDB", "API Design", "Cloud Services"],
    github: "https://github.com/michealopare",
    linkedin: "https://linkedin.com/in/michealopare",
    portfolio: "https://michealopare.dev"
  },
];

// Quick links data
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contactpage" },
  { name: "About Us", path: "/aboutpage" },
  { name: "Health News", path: "/newspage" },
  { name: "Workouts", path: "/workoutspage" },
  { name: "Recipes", path: "/recipepage" },
  { name: "Experts", path: "/expertpage" },
];

const policyLinks = [
  { name: "Privacy Policy", path: "/policypage" },
  { name: "Terms of Service", path: "/termspage" },
  { name: "Disclaimer", path: "/disclaimerpage" },
];

// Social media links
const socialLinks = [
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    color: "hover:text-red-500",
    label: "YouTube"
  },
  {
    icon: FaTiktok,
    href: "https://tiktok.com",
    color: "hover:text-black",
    label: "TikTok"
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    color: "hover:text-pink-500",
    label: "Instagram"
  },
];

// Reusable Developer Card Component
const DeveloperCard = ({ developer, index }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-700 group"
  >
    <div className="flex flex-col items-center text-center mb-4">
      <div className="relative mb-4">
        <img
          src={developer.image}
          alt={developer.name}
          className="w-20 h-20 object-cover rounded-full border-2 border-green-400 group-hover:border-green-300 transition-colors duration-300"
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <FaUserCheck className="text-white text-xs" />
        </div>
      </div>
      <h4 className="text-lg font-bold text-white mb-1">{developer.name}</h4>
      <p className="text-green-400 text-sm font-medium mb-2">{developer.role}</p>
    </div>
    
    <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">
      {developer.bio}
    </p>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      {developer.skills.map((skill, skillIndex) => (
        <span
          key={skillIndex}
          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Social Links */}
    <div className="flex justify-center gap-3 mb-4">
      <motion.a
        href={developer.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200"
        aria-label={`${developer.name} GitHub`}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href={developer.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        aria-label={`${developer.name} LinkedIn`}
      >
        <FaLinkedin />
      </motion.a>
    </div>

    <motion.a
      href={developer.portfolio}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200 group/btn"
    >
      View Portfolio
      <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
    </motion.a>
  </motion.div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            HealthLife
          </motion.h2>
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            Empowering you with evidence-based health tips, nutrition advice, and fitness 
            motivation to help you live a balanced and healthier lifestyle.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <motion.p 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-green-400 flex-shrink-0" />
              <a href="mailto:otengebenezer326@gmail.com" className="hover:text-green-400 transition-colors">
                otengebenezer326@gmail.com
              </a>
            </motion.p>
            <motion.p 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              <FaPhone className="text-green-400 flex-shrink-0" />
              <a href="tel:+233593957373" className="hover:text-green-400 transition-colors">
                +233 593 957 373
              </a>
            </motion.p>
            <motion.p 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-green-400 flex-shrink-0" />
              Accra, Ghana
            </motion.p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
            <FaCode className="text-sm" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ x: 5 }}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Policies */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
            <FaShieldAlt className="text-sm" />
            Policies
          </h3>
          <ul className="space-y-3">
            {policyLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ x: 5 }}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-green-400 mb-6">Follow Us</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Stay connected and join our online wellness community for daily health tips and updates.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300 p-3 bg-gray-800 rounded-lg hover:bg-gray-700`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Follow us on ${social.label}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Developer Team Section */}
      <div className="bg-gray-800/50 py-16 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developers and designers dedicated to creating exceptional health and wellness experiences.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {developers.map((developer, index) => (
              <DeveloperCard key={developer.name} developer={developer} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 py-6 px-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} HealthLife. All rights reserved.</span>
            <FaHeart className="text-red-500 text-xs" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {policyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 text-xs" />
            <span>by HealthLife Team</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;