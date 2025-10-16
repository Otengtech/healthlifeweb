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

const LastSec = () => {
  const experts = [
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

  return (
    <div className="overflow-hidden">
      {/* Section 1: Trusted Experts */}
      <section className="w-full h-full py-12 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center bg-gray-100">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={Sarah}
            alt="Expert"
            className="rounded-2xl w-full max-w-sm md:max-w-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800">
            From Trusted Experts
          </h1>
          <p className="text-gray-700 text-start text-sm md:text-base leading-relaxed">
            Healthylife was built alongside health experts to help ditch the
            complexity around health and make living healthier, easier. This
            means all of our health programs are based on science to bring you
            evidence-based information and guidance that you can trust.
          </p>
          <div>
            <Link to="/expertpage">
              <button className="py-3 px-6 bg-green-500 text-gray-900 hover:bg-green-400 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Meet Experts */}
      <section className="w-full h-full py-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-green-800 mb-10">
          Meet Our Experts
        </h1>

        {/* Container: Scroll horizontally on small screens, grid on large */}
        <div
          className="
      flex sm:grid 
      sm:grid-cols-2 lg:grid-cols-4 
      gap-6 md:gap-8 
      overflow-x-auto sm:overflow-x-visible 
      px-6 md:px-12 
      w-full
      scrollbar-hide
    "
        >
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="
          bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 
          flex-shrink-0 w-72 sm:w-auto
        "
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="object-cover w-full h-56 rounded-t-lg"
              />
              <div className="p-4 text-center md:text-left">
                <div className="text-green-700 font-semibold text-lg">
                  {expert.name}
                </div>
                <div className="text-gray-500 text-sm mb-2">{expert.role}</div>
                <p className="text-gray-600 text-sm">{expert.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="w-full h-full py-12 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl md:text-3xl text-green-800 font-bold mb-8 text-center">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20">
          {[
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
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-start md:items-center gap-4 transition-all duration-300 hover:shadow-lg"
            >
              <img
                src="https://assets-us-01.kc-usercontent.com/3e01c88d-6d32-0086-9f07-7574b3104890/9a2b909e-38c8-48b0-b00f-cf961d7ca3e8/Quote.svg?quality=75&auto=format"
                alt="Quote"
                className="w-8 h-8"
              />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                {testimonial.message}
              </p>
              <div className="font-semibold text-green-700 text-sm md:text-base">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-8 py-3 px-6 bg-green-500 text-gray-900 hover:bg-green-400 transition">
          <Link to="/reviewpage">Go to Reviews</Link>
        </button>
      </section>

      {/* Section 4: Why Workouts Matter */}
      <section
        className="relative w-full min-h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${RightWindow})` }}
      >
        <motion.div
          className="absolute left-0 top-0 h-full w-full md:w-1/2 flex flex-col justify-center items-start bg-white bg-opacity-80 p-8 md:p-16 rounded-r-3xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6 text-green-700"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Why Workouts Matter
          </motion.h2>

          <div className="flex flex-col gap-6">
            {[
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
                    <span className="font-medium">Cardio:</span> Running,
                    cycling, swimming
                    <br />
                    <span className="font-medium">Strength:</span>{" "}
                    Weightlifting, resistance bands
                    <br />
                    <span className="font-medium">Flexibility:</span> Yoga,
                    stretching
                  </>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="bg-green-500 text-gray-700 rounded-full p-3 shadow-md flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-white"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-lg text-green-700">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Workouts />
      <RecipeSection />
    </div>
  );
};

export default LastSec;
