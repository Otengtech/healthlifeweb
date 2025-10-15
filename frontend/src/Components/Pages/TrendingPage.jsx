import React, { useState } from "react";
import { FaSearch, FaEye, FaHeart, FaCommentDots, FaShareAlt } from "react-icons/fa";
import PlantBased from "../../assets/gcs.webp";
import FitnessTech from "../../assets/jumpsquats.webp";
import SleepApp from "../../assets/sleep.webp";
import WaterIntake from "../../assets/hydration.webp";
import SkinCare from "../../assets/supplements.webp";
import MentalBreak from "../../assets/relaxation.webp";
import HerbalTea from "../../assets/tea.avif";
import HealthAI from "../../assets/strength.webp";

const trendingHealthNews = [
{
  image: PlantBased,
  title: "Plant-Based Diets Continue to Trend Worldwide",
  date: "2025-07-03",
  views: 67800,
  likes: 1200,
  comments: 340,
  shares: 510,
  summary: `
    With sustainability in focus, more people are adopting plant-based meals. 
    Nutritionists highlight their benefits: lower cholesterol, improved digestion, and reduced cancer risk. 
    However, they warn to ensure sufficient protein and vitamin B12 intake.
  `,
},
{
  image: FitnessTech,
  title: "Fitness Tech Gadgets Revolutionize Workouts",
  date: "2025-09-04",
  views: 95500,
  likes: 1540,
  comments: 415,
  shares: 750,
  summary: `
    Smartwatches and AI-powered fitness trackers are changing how we exercise. 
    These devices monitor heart rate, sleep, calories, and even hydration. 
    Experts say tech-driven motivation can increase consistency and overall health outcomes.
  `,
},
{
  image: SleepApp,
  title: "Sleep Apps Are Helping Millions Rest Better",
  date: "2025-02-05",
  views: 30100,
  likes: 640,
  comments: 129,
  shares: 250,
  summary: `
    Apps that track sleep cycles and play calming sounds are on the rise. 
    Scientists say monitoring sleep patterns helps users identify stress triggers and improve nightly recovery.
  `,
},
{
  image: WaterIntake,
  title: "Tracking Water Intake Leads to Healthier Habits",
  date: "2025-04-04",
  views: 25400,
  likes: 580,
  comments: 102,
  shares: 198,
  summary: `
    Staying hydrated is essential for kidney and brain function. 
    Apps that remind users to drink water help prevent fatigue, headaches, and poor concentration. 
    Experts recommend 2.5–3 liters daily for adults.
  `,
},
{
  image: SkinCare,
  title: "Dermatologists Warn Against Overusing Skin Products",
  date: "2025-03-07",
  views: 73100,
  likes: 980,
  comments: 302,
  shares: 440,
  summary: `
    Over-cleansing and excessive product use can damage the skin barrier, leading to irritation. 
    Dermatologists recommend a simple 3-step routine: cleanse, moisturize, and protect with sunscreen.
  `,
},
{
  image: MentalBreak,
  title: "The Science Behind Taking Mental Breaks at Work",
  date: "2025-07-08",
  views: 41100,
  likes: 790,
  comments: 154,
  shares: 280,
  summary: `
    Research shows that short breaks during work improve creativity and productivity. 
    Stepping away from screens or taking a brief walk helps the brain reset and reduces burnout.
  `,
},
{
  image: HerbalTea,
  title: "Herbal Teas Gain Popularity as Natural Remedies",
  date: "2025-07-10",
  views: 52600,
  likes: 990,
  comments: 188,
  shares: 360,
  summary: `
    Herbal teas like chamomile, ginger, and green tea are trending for their calming and healing properties. 
    They promote digestion, reduce stress, and support the immune system naturally.
  `,
},
{
  image: HealthAI,
  title: "AI-Powered Diagnostics Making Early Detection Easier",
  date: "2025-07-12",
  views: 134500,
  likes: 3100,
  comments: 630,
  shares: 1200,
  summary: `
    Artificial Intelligence is improving early disease detection accuracy in hospitals. 
    Machine learning models analyze scans faster, helping save lives by identifying risks earlier than human doctors.
  `,
},
];
const TrendingPage = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(trendingHealthNews);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = trendingHealthNews.filter((news) =>
      news.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results.length ? results : []);
  };



  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-12 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Trending Health News
      </h2>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search health topics..."
          className="bg-gray-200 rounded-l-full px-6 py-2 w-72 focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="text-gray-700 bg-gray-200 px-4 py-2 rounded-r-full transition"
        >
          <FaSearch />
        </button>
      </form>

      {/* No results */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-600">No topics found for "{query}"</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((news, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h1 className="text-xl font-semibold mb-2 text-green-700">
                  {news.title}
                </h1>
                <p className="text-gray-800 text-sm mb-3">{news.date}</p>
                <p className="text-gray-600 mb-4 text-sm">{news.summary}</p>

                {/* Social Media + Views */}
                <div className="flex justify-between text-gray-500 text-sm border-t pt-3">
                  <div className="flex items-center gap-2">
                    <FaEye /> {news.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHeart /> {news.likes}
                    <FaCommentDots /> {news.comments}
                    <FaShareAlt /> {news.shares}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingPage;
