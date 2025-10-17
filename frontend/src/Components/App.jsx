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
import ExpertsPage from "./Pages/ExpertsPage";
import ReviewsPage from "./Pages/ReviewsPage";
import WorkoutsPage from "./Pages/WorkoutsPage";
import RecipePage from "./Pages/RecipePage";
import PageTransition from "./Home/PageTransition";
import HealthQuiz from "./Pages/QuizPage";

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
        <PageTransition />

        {/* Define all routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutUsPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/reviewpage" element={<ReviewsPage />} />
          <Route path="/recipepage" element={<RecipePage />} />
          <Route path="/workoutspage" element={<WorkoutsPage />} />
          <Route path="/programspage" element={<HealthPrograms />} />
          <Route path="/expertpage" element={<ExpertsPage />} />
          <Route path="/trendingpage" element={<TrendingPage />} />
          <Route path="/quizpage" element={<HealthQuiz />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
