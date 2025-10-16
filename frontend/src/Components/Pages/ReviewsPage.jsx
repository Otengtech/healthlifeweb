import React from "react";
import { motion } from "framer-motion";

const ReviewsPage = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      message:
        "This platform completely changed my health journey. I feel stronger, more confident, and more mindful every day!",
    },
    {
      name: "Michael Roberts",
      message:
        "The support and motivation here are unmatched. I’ve built habits I never thought possible!",
    },
    {
      name: "Emily Carter",
      message:
        "Such an inspiring community — I learned to balance fitness, nutrition, and mindfulness with ease.",
    },
    {
      name: "Daniel Smith",
      message:
        "Every tip shared here adds real value. I’m more energetic, focused, and consistent now.",
    },
    {
      name: "Olivia Brown",
      message:
        "Finally, a health space that feels supportive and real. My mental and physical health are thriving!",
    },
    {
      name: "James Lee",
      message:
        "I love how easy it is to stay consistent with the help of this amazing community. Thank you!",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-12 px-6 md:px-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What People Are Saying
      </motion.h1>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="border border-green-500 bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-green-400/20 transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="https://assets-us-01.kc-usercontent.com/3e01c88d-6d32-0086-9f07-7574b3104890/9a2b909e-38c8-48b0-b00f-cf961d7ca3e8/Quote.svg?quality=75&auto=format"
              alt="Quote"
              className="w-8 h-8 mb-4"
            />
            <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
              “{review.message}”
            </p>
            <h3 className="text-green-400 font-semibold text-sm md:text-base">
              {review.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
