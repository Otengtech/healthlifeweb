import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaStar,
  FaCalendarAlt,
  FaBookOpen,
  FaPlay,
} from "react-icons/fa";

const ExpertsPage = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Nutrition & Dietetics",
      experience: "12 years",
      rating: 4.9,
      patients: "2.5k+",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      description: "Certified nutritionist with 10+ years of experience helping clients achieve balanced diets for optimal health.",
      fullBio: "Dr. Emily Carter is a board-certified nutritionist specializing in preventive medicine and holistic wellness. She holds a PhD in Nutritional Sciences and has published numerous research papers on gut health and metabolic disorders.",
      education: "PhD in Nutritional Sciences, Harvard University",
      achievements: ["Published 30+ research papers", "Board Certified Nutritionist", "Speaker at International Health Conferences"],
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Daniel Smith",
      specialty: "Cardiology",
      experience: "15 years",
      rating: 4.8,
      patients: "3.2k+",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
      description: "Heart specialist dedicated to promoting cardiovascular fitness and preventive lifestyle medicine.",
      fullBio: "Dr. Daniel Smith is a renowned cardiologist with over 15 years of experience in cardiovascular health. He specializes in preventive cardiology and has helped thousands of patients improve their heart health through lifestyle modifications.",
      education: "MD in Cardiology, Johns Hopkins University",
      achievements: ["Fellow of American College of Cardiology", "Pioneer in Preventive Cardiology", "Author of 'Heart Healthy Living'"],
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 3,
      name: "Kate Agnew",
      specialty: "Mental Health & Wellness",
      experience: "8 years",
      rating: 4.9,
      patients: "1.8k+",
      image: Kate,
      description: "Kate is passionate about innovation and problem-solving in health & nutrition. Her goal is to ultimately create a healthier environment for all Australians.",
      fullBio: "Kate Agnew is a mental health advocate and wellness coach with extensive experience in cognitive behavioral therapy and mindfulness practices. She combines traditional approaches with modern techniques to help individuals achieve mental clarity and emotional balance.",
      education: "Masters in Psychology, University of Melbourne",
      achievements: ["Certified Mindfulness Coach", "Mental Health First Aid Instructor", "Wellness Workshop Facilitator"],
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      id: 4,
      name: "Simone Austin",
      specialty: "Sports Medicine",
      experience: "10 years",
      rating: 4.7,
      patients: "2.1k+",
      image: Simone,
      description: "Expert in physical rehabilitation and performance training for athletes and fitness enthusiasts.",
      fullBio: "Simone Austin is a sports medicine specialist and physical therapist who works with athletes of all levels. Her approach combines evidence-based rehabilitation techniques with performance optimization strategies.",
      education: "Doctor of Physical Therapy, Stanford University",
      achievements: ["Certified Sports Specialist", "Olympic Team Consultant", "Rehabilitation Innovator Award"],
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ];

  const topics = [
    {
      id: 1,
      icon: <FaHeart className="text-green-500 text-3xl" />,
      title: "Heart Health",
      description: "Discover ways to maintain a strong heart through nutrition, exercise, and preventive care.",
      detailedContent: "Learn about cardiovascular exercises, heart-healthy diets, stress management techniques, and early warning signs of heart conditions.",
      articles: 24,
      videos: 12,
    },
    {
      id: 2,
      icon: <FaBrain className="text-green-500 text-3xl" />,
      title: "Mental Wellness",
      description: "Learn strategies to manage stress, boost focus, and improve emotional resilience.",
      detailedContent: "Explore mindfulness practices, cognitive behavioral techniques, meditation guides, and strategies for better sleep and emotional balance.",
      articles: 32,
      videos: 18,
    },
    {
      id: 3,
      icon: <FaStethoscope className="text-green-500 text-3xl" />,
      title: "Nutrition Tips",
      description: "Explore meal plans, superfoods, and balanced diets recommended by experts.",
      detailedContent: "Get access to personalized meal plans, nutritional guides, recipe ideas, and expert advice on supplements and dietary requirements.",
      articles: 45,
      videos: 25,
    },
    {
      id: 4,
      icon: <FaDumbbell className="text-green-500 text-3xl" />,
      title: "Fitness & Recovery",
      description: "Stay active with safe workouts and recovery methods for a stronger body.",
      detailedContent: "Discover workout routines for all fitness levels, recovery techniques, injury prevention strategies, and performance optimization tips.",
      articles: 28,
      videos: 20,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-gray-400 text-sm ml-2">{rating}</span>
      </div>
    );
  };

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

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Meet Our Health Experts
        </h1>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Trusted voices in wellness, nutrition, fitness, and mental health — 
          sharing evidence-based knowledge to empower your health journey.
        </p>
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">15+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">10k+</div>
            <div className="text-gray-400 text-sm">Patients Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">4.8</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">50+</div>
            <div className="text-gray-400 text-sm">Publications</div>
          </div>
        </div>
      </motion.div>

      {/* Expert Profiles */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experts.map((expert) => (
          <motion.div
            key={expert.id}
            variants={itemVariants}
            className="group cursor-pointer"
            onClick={() => setSelectedExpert(expert)}
          >
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-300 border border-gray-700 hover:border-green-400 h-full flex flex-col">
              {/* Expert Image */}
              <div className="relative overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {expert.experience}
                </div>
              </div>

              {/* Expert Info */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-2">
                    {expert.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 font-medium">
                    {expert.specialty}
                  </p>
                  <StarRating rating={expert.rating} />
                  <p className="text-gray-300 text-sm mt-4 line-clamp-3">
                    {expert.description}
                  </p>
                </div>

                {/* Stats and Social */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span>Patients: {expert.patients}</span>
                    <span>Exp: {expert.experience}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 text-green-500 text-lg">
                      <a href={expert.socials.twitter} className="hover:text-green-400 transition-colors">
                        <FaTwitter />
                      </a>
                      <a href={expert.socials.linkedin} className="hover:text-green-400 transition-colors">
                        <FaLinkedin />
                      </a>
                      <a href={expert.socials.facebook} className="hover:text-green-400 transition-colors">
                        <FaFacebook />
                      </a>
                    </div>
                    <button className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors flex items-center space-x-1">
                      <span>View Profile</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expert Topics Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Explore Health Topics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dive deep into essential health topics with expert-curated content, 
            practical guides, and actionable advice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setActiveTopic(topic)}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl group-hover:bg-green-400/10 transition-colors">
                  {topic.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-green-400 text-center mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-300 text-center text-sm mb-6">
                {topic.description}
              </p>
              
              <div className="flex justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <FaBookOpen className="text-green-400" />
                  <span>{topic.articles} Articles</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaPlay className="text-green-400" />
                  <span>{topic.videos} Videos</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expert Quote Section */}
      <motion.div
        className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-700/50 rounded-2xl p-10 text-center max-w-4xl mx-auto mb-20 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaQuoteLeft className="text-green-400 text-4xl mx-auto mb-6" />
        <p className="text-gray-200 italic text-xl md:text-2xl leading-relaxed mb-6">
          "True health is not just about the absence of disease, but the presence 
          of vitality in every aspect of life. It's about finding balance, cultivating 
          happiness, and making self-care a daily practice that nourishes both body and mind."
        </p>
        <p className="text-green-400 font-semibold text-lg">— Dr. Emily Carter</p>
        <p className="text-gray-400 text-sm">Chief Nutrition Specialist</p>
      </motion.div>

      {/* Expert Detail Modal */}
      <AnimatePresence>
        {selectedExpert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExpert(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Expert Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={selectedExpert.image}
                      alt={selectedExpert.name}
                      className="w-64 h-64 object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Expert Details */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-green-400 mb-2">
                      {selectedExpert.name}
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">
                      {selectedExpert.specialty}
                    </p>
                    
                    <div className="flex items-center space-x-6 mb-6">
                      <StarRating rating={selectedExpert.rating} />
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{selectedExpert.experience} experience</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{selectedExpert.patients} patients</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">About</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedExpert.fullBio}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">Education</h3>
                      <p className="text-gray-300">{selectedExpert.education}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">Achievements</h3>
                      <ul className="text-gray-300 space-y-2">
                        {selectedExpert.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <FaStar className="text-green-400 text-sm" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                        Book Consultation
                      </button>
                      <button 
                        className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-green-400 transition-colors"
                        onClick={() => setSelectedExpert(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpertsPage;