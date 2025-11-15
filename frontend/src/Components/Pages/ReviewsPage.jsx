import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReviewsPage = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      message: "This platform completely changed my health journey. I feel stronger, more confident, and more mindful every day!",
      rating: 5,
      date: "2024-01-15",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Roberts",
      message: "The support and motivation here are unmatched. I've built habits I never thought possible!",
      rating: 5,
      date: "2024-01-12",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Carter",
      message: "Such an inspiring community — I learned to balance fitness, nutrition, and mindfulness with ease.",
      rating: 4,
      date: "2024-01-10",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      name: "Daniel Smith",
      message: "Every tip shared here adds real value. I'm more energetic, focused, and consistent now.",
      rating: 5,
      date: "2024-01-08",
      avatar: "👨‍🔧"
    },
    {
      id: 5,
      name: "Olivia Brown",
      message: "Finally, a health space that feels supportive and real. My mental and physical health are thriving!",
      rating: 5,
      date: "2024-01-05",
      avatar: "👩‍🎨"
    },
    {
      id: 6,
      name: "James Lee",
      message: "I love how easy it is to stay consistent with the help of this amazing community. Thank you!",
      rating: 4,
      date: "2024-01-03",
      avatar: "👨‍🍳"
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
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
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-gray-200 py-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            What People Are Saying
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how our community is transforming their health and wellness journey
          </p>
        </motion.div>

        {/* Stats Section
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-green-400">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-green-400">500+</div>
            <div className="text-gray-400">Happy Members</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-green-400">98%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-green-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </motion.div> */}

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedReview(review)}
            >
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/10 h-full flex flex-col">
                {/* Header with Avatar and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-white">{review.name}</h3>
                      <div className="text-sm text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Message */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-lg line-clamp-4 group-hover:line-clamp-none transition-all">
                    {review.message}
                  </p>
                </div>

                {/* Read More Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-green-400 text-sm font-medium flex items-center space-x-2">
                    <span>Read full review</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-100 mb-6 text-lg">
              Join thousands of others who have transformed their lives
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Detailed Review */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-green-400"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{selectedReview.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedReview.name}</h3>
                    <div className="text-gray-400">
                      {new Date(selectedReview.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <StarRating rating={selectedReview.rating} />
              </div>
              
              <div className="text-6xl text-green-400 opacity-50 mb-4">"</div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedReview.message}
              </p>
              <div className="text-6xl text-green-400 opacity-50 text-right">"</div>
              
              <button
                className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => setSelectedReview(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewsPage;