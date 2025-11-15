import React from "react";
import RightWindow from "../../assets/rightwindow.jpg";
import Sarah from "../../assets/Sarah-Gray.webp";
import Gabbie from "../../assets/gabbie.webp";
import Sarah2 from "../../assets/Sarah Gray2.webp";
import Kate from "../../assets/Kate Agnew.webp";
import Simone from "../../assets/Simone.webp";
import Workouts from "./Workouts";
import RecipeSection from "./Recipe";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants for reusability
const slideInRight = {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const scaleHover = {
  whileHover: { scale: 1.02 }
};

// Reusable Button Component
const PrimaryButton = ({ children, to, onClick, className = "", ...props }) => {
  const buttonContent = to ? (
    <Link to={to}>{children}</Link>
  ) : (
    children
  );

  return (
    <motion.button
      {...slideInRight}
      className={`py-3 px-6 bg-green-500 text-gray-900 hover:bg-green-400 transition duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

// Data constants
const EXPERTS = [
  {
    image: Sarah2,
    name: "Sarah Gray",
    role: "Pharmacist and Nutritionist",
    details:
      "Sarah Gray is both a Registered Pharmacist and Registered Nutritionist with a particular interest in health education.",
  },
  {
    image: Gabbie,
    name: "Gabbie Watt",
    role: "Naturopath",
    details:
      "A bachelor degree qualified Naturopath, Gabbie is passionate about integrating evidence-based practice and traditional medicine.",
  },
  {
    image: Kate,
    name: "Kate Agnew",
    role: "Accredited Practising Dietitian",
    details:
      "Kate is passionate about innovation and problem-solving in health & nutrition. Her goal is to ultimately create a healthier environment for all Australians.",
  },
  {
    image: Simone,
    name: "Simone Austin",
    role: "Accredited Practising Dietitian",
    details:
      "Simone Austin is an Advanced Sports Dietitian, author of Eat Like An Athlete and past President of Sports Dietitians Australia.",
  },
];

const TESTIMONIALS = [
  {
    message:
      "Healthylife made it so easy to find reliable health advice. I feel more confident about my choices every day!",
    name: "Jessica T.",
  },
  {
    message:
      "The expert guidance and simple programs helped me improve my lifestyle. Highly recommend to anyone!",
    name: "Michael R.",
  },
];

const WORKOUT_BENEFITS = [
  {
    title: "Boosts Mental Health",
    desc: "Regular exercise helps reduce stress and improve mood.",
  },
  {
    title: "Supports Heart Health",
    desc: "Physical activity strengthens your heart and improves circulation.",
  },
  {
    title: "Types of Workouts",
    desc: (
      <>
        <span className="font-medium">Cardio:</span> Running, cycling, swimming
        <br />
        <span className="font-medium">Strength:</span> Weightlifting, resistance bands
        <br />
        <span className="font-medium">Flexibility:</span> Yoga, stretching
      </>
    ),
  },
];

const LastSec = () => {
  return (
    <div className="overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Healthylife - Trusted Health Experts",
            "description": "Health programs based on science with evidence-based information",
            "mainEntity": {
              "@type": "Organization",
              "name": "Healthylife",
              "description": "Health and wellness platform with expert guidance"
            }
          })
        }}
      />

      {/* Section 1: Trusted Experts */}
      <section 
        className="w-full h-full py-12 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center bg-gray-100"
        aria-labelledby="trusted-experts-heading"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <picture>
            <source media="(min-width: 768px)" srcSet={Sarah} />
            <img
              src={Sarah}
              alt="Sarah Gray - Health Expert"
              className="rounded-2xl w-full max-w-sm md:max-w-md object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-left">
          <motion.h1
            {...slideInRight}
            id="trusted-experts-heading"
            className="text-3xl md:text-5xl font-bold text-green-800"
          >
            From Trusted Experts
          </motion.h1>
          <motion.p
            {...slideInRight}
            className="text-gray-700 text-start text-sm md:text-base leading-relaxed"
          >
            Healthylife was built alongside health experts to help ditch the
            complexity around health and make living healthier, easier. This
            means all of our health programs are based on science to bring you
            evidence-based information and guidance that you can trust.
          </motion.p>
          <PrimaryButton to="/expertpage">
            Read More
          </PrimaryButton>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section 
        className="w-full h-full py-12 flex flex-col items-center justify-center bg-gray-50"
        aria-labelledby="testimonials-heading"
      >
        <h2 
          id="testimonials-heading"
          className="text-2xl md:text-3xl text-green-800 font-bold mb-8 text-center"
        >
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              {...slideInLeft}
              {...scaleHover}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-start md:items-center gap-4 transition-all duration-300 hover:shadow-lg"
              role="article"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <img
                src="https://assets-us-01.kc-usercontent.com/3e01c88d-6d32-0086-9f07-7574b3104890/9a2b909e-38c8-48b0-b00f-cf961d7ca3e8/Quote.svg?quality=75&auto=format"
                alt="Quote icon"
                className="w-8 h-8"
                loading="lazy"
              />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                {testimonial.message}
              </p>
              <div 
                className="font-semibold text-green-700 text-sm md:text-base"
                aria-label={`Author: ${testimonial.name}`}
              >
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
        <PrimaryButton to="/reviewpage" className="mt-8">
          Go to Reviews
        </PrimaryButton>
      </section>

      {/* Error Boundary for nested components */}
      <SectionErrorBoundary>
        <Workouts />
      </SectionErrorBoundary>
      
      <SectionErrorBoundary>
        <RecipeSection />
      </SectionErrorBoundary>
    </div>
  );
};

// Error Boundary Component
class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Section Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg m-4">
          <h3 className="text-red-800 font-semibold">Something went wrong with this section.</h3>
          <button 
            className="mt-2 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default LastSec;