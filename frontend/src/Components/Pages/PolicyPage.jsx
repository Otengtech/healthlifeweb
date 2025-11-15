import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShieldAlt, 
  FaCookie, 
  FaLink, 
  FaStethoscope, 
  FaLock, 
  FaSync,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaExternalLinkAlt
} from "react-icons/fa";

const PolicyPage = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const policySections = [
    {
      id: "introduction",
      icon: <FaShieldAlt className="text-green-400 text-xl" />,
      title: "Introduction",
      content: "Welcome to HealthLife! We value your privacy and want to make it clear that this website does not collect any personal information from our users. You can browse our content safely and securely without worrying about your data being stored or shared.",
      emphasis: "No personal information is collected"
    },
    {
      id: "cookies",
      icon: <FaCookie className="text-green-400 text-xl" />,
      title: "Cookies and Analytics",
      content: "HealthLife may use cookies or third-party services such as Google Analytics and Google AdSense to enhance your experience and deliver relevant content. These tools help us understand how visitors interact with our website and improve our services. No personally identifiable information is collected through these methods.",
      points: [
        "Anonymous usage statistics",
        "Content performance metrics",
        "Ad relevance optimization"
      ]
    },
    {
      id: "third-party",
      icon: <FaExternalLinkAlt className="text-green-400 text-xl" />,
      title: "Third-Party Services",
      content: "Our website may include links, ads, or features from third-party services. These services may collect anonymous data or use cookies for functionality and analytics. We are not responsible for their privacy practices, and we encourage you to review their policies.",
      warning: "We recommend reviewing third-party privacy policies"
    },
    {
      id: "medical-disclaimer",
      icon: <FaStethoscope className="text-green-400 text-xl" />,
      title: "Medical Disclaimer",
      content: "All content on HealthLife is for general informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.",
      emphasis: "Not a substitute for professional medical advice",
      warning: "Always consult healthcare professionals for medical concerns"
    },
    {
      id: "security",
      icon: <FaLock className="text-green-400 text-xl" />,
      title: "Security",
      content: "While we do not collect personal information, we maintain our website using up-to-date security standards to protect the integrity of our content and prevent unauthorized access. Our platform implements industry-standard security measures.",
      points: [
        "Regular security updates",
        "Secure hosting infrastructure",
        "Content integrity protection"
      ]
    },
    {
      id: "updates",
      icon: <FaSync className="text-green-400 text-xl" />,
      title: "Policy Updates",
      content: "HealthLife may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. All updates will be reflected on this page with the effective date. We recommend checking back occasionally to stay informed.",
      emphasis: "Last updated: January 2024"
    },
    {
      id: "external-links",
      icon: <FaLink className="text-green-400 text-xl" />,
      title: "External Links",
      content: "Our site may contain links to other websites for additional resources and information. HealthLife is not responsible for the content, accuracy, or privacy practices of external websites. Please review their respective policies before engaging with them.",
      warning: "Review external website policies before use"
    }
  ];

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy and trust are important to us. Learn how we protect your information and ensure a safe browsing experience.
          </p>
        </motion.div>

        {/* Last Updated Banner */}
        <motion.div
          className="bg-gray-800 border border-green-400/20 rounded-xl p-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaExclamationTriangle className="text-green-400 text-xl" />
              <div>
                <p className="text-green-400 font-semibold">Policy Last Updated</p>
                <p className="text-gray-400 text-sm">January 15, 2024</p>
              </div>
            </div>
            <button className="text-green-400 hover:text-green-300 text-sm font-medium">
              View Change History
            </button>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {policySections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-xl">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-green-400">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      Section {index + 1} of {policySections.length}
                    </p>
                  </div>
                </div>
                <div className="text-green-400">
                  {openSections[section.id] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              <AnimatePresence>
                {openSections[section.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-6 space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>

                      {section.emphasis && (
                        <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                          <p className="text-green-400 font-semibold text-center">
                            {section.emphasis}
                          </p>
                        </div>
                      )}

                      {section.warning && (
                        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
                          <p className="text-yellow-400 text-sm">
                            <strong>Note:</strong> {section.warning}
                          </p>
                        </div>
                      )}

                      {section.points && (
                        <div className="bg-gray-750 rounded-lg p-4">
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-center space-x-3 text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Summary */}
        <motion.div
          className="mt-12 bg-gray-800 rounded-2xl p-8 border border-green-400/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
            Quick Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">No personal data collection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Secure browsing experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Informational content only</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Regular policy updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Third-party links disclosed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Medical disclaimer included</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            By using HealthLife, you acknowledge that you have read and understood this Privacy Policy.
            <br />
            Thank you for trusting us with your wellness journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PolicyPage;