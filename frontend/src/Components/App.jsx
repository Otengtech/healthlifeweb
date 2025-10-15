import Navbar from "./Home/Navbar";
import "../App.css";
import TopSec from './Home/TopSec';
import Footer from './Home/Footer';
import Hero from "./Home/HeroSection";
import LastSec from "./Home/LastSec";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import NewsPage from "./Pages/NewsPage";
import TrendingPage from "./Pages/TrendingPage";
import BlogPage from "./Pages/BlogPage";
import HealthPrograms from "./Pages/HealthPrograms";

function App() {

  function HomePage() {
  return (
    <>
      <Hero />
      <TopSec />
      <LastSec />
    </>
  );
}

  return (
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />

        {/* Define all routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutUsPage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/programspage" element={<HealthPrograms />} />
          <Route path="/trendingpage" element={<TrendingPage />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
