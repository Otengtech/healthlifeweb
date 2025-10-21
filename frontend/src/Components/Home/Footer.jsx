import React from "react";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Picture1 from "../../assets/picture1.jpg";
import Picture2 from "../../assets/picture2.jpg";
import Picture3 from "../../assets/picture3.jpg";

const developers = [
  {
    name: "Oteng Ebenezer",
    role: "Frontend Developer",
    image: Picture2,
    bio: "Focused on user interfaces with React, Tailwind CSS, and smooth animations.",
  },
  {
    name: "Jefferson Takyi",
    role: "UI/UX Designer",
    image: Picture3,
    bio: "Designs visually appealing and user-friendly layouts that bring ideas to life.",
  },
  {
    name: "Micheal Opare",
    role: "Backend Engineer",
    image: Picture1,
    bio: "Specializes in Node.js and MongoDB, ensuring performance and scalability.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 flex flex-col justify-between py-12">
      {/* Top Grid Section */}
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">HealthLife</h2>
          <p className="text-sm leading-relaxed mb-4">
            Empowering you with health tips, nutrition advice, and fitness
            motivation to help you live a balanced lifestyle.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> otengebenezer326@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-400" /> +233 593 957 373
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" /> Accra, Ghana
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-semibold text-green-400 mb-3">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contactpage" },
              { name: "About Us", path: "/aboutpage" },
              { name: "Health News", path: "/newspage" },
              { name: "Privacy Policy", path: "/policypage" },
              { name: "Terms of Service", path: "/termspage" },
              { name: "Disclaimer", path: "/disclaimerpage" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h1 className="text-xl font-semibold text-green-400 mb-3">Follow Us</h1>
          <p className="text-sm mb-4">
            Stay connected and join our online wellness family:
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 text-2xl transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black text-2xl transition duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-2xl transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Developer Team Section */}
      <div className="bg-gray-900 mt-16 py-12 px-6 sm:px-10 md:px-16 lg:px-24">
        <h1 className="text-center text-2xl font-semibold text-green-400 mb-10">
          Meet Our Developers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl hover:shadow-lg transition duration-300 text-center sm:text-left"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{dev.name}</h4>
                  <p className="text-green-400 text-sm mb-2">{dev.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center sm:text-left">
                {dev.bio}
              </p>
              <button className="rounded-full w-full py-2 mt-4 bg-green-400 text-gray-800 font-semibold hover:bg-green-500 transition">
                View Portfolio
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-400 px-4">
        <p>
          &copy; {new Date().getFullYear()} HealthLife | Privacy Policy | Terms & Conditions | Disclaimer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
