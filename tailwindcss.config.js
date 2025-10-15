// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeSlide: {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
        animation: {
          fadeSlide: "fadeSlide 0.6s ease-in-out",
        },
      },
    },
    plugins: [],
  };
  