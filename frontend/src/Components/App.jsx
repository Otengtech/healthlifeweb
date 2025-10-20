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
import HealthTools from "./Pages/ToolPage";
import FoodPage from "./Pages/FoodPage";
import VegetablePage from "./Pages/VegetablePage";
import FruitPage from "./Pages/FruitPage";
import ProteinPage from "./Pages/ProteinPage";
import HerbsPage from "./Pages/HerbsPage";
import BeveragePage from "./Pages/BeveragePage";
import ContactPage from "./Pages/ContactPage"
import ScrollToTop from "./Home/ScrollToTop";
import ChatBox from "./Home/ChatBot";

function App() {

  function HomePage() {
  return (
    <>
      <Hero />
      <TopSec />
      <LastSec />
      <ChatBox />
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
          <Route path="/foodpage" element={<FoodPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/reviewpage" element={<ReviewsPage />} />
          <Route path="/recipepage" element={<RecipePage />} />
          <Route path="/workoutspage" element={<WorkoutsPage />} />
          <Route path="/programspage" element={<HealthPrograms />} />
          <Route path="/expertpage" element={<ExpertsPage />} />
          <Route path="/trendingpage" element={<TrendingPage />} />
          <Route path="/quizpage" element={<HealthQuiz />} />
          <Route path="/toolpage" element={<HealthTools />} />
          <Route path="/vegepage" element={<VegetablePage />} />
          <Route path="/fruitpage" element={<FruitPage />} />
          <Route path="/proteinpage" element={<ProteinPage />} />
          <Route path="/herbpage" element={<HerbsPage />} />
          <Route path="/bevpage" element={<BeveragePage />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
  );
}

export default App;
