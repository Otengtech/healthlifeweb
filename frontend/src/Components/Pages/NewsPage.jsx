import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaArrowRight, 
  FaHeartbeat, 
  FaLeaf, 
  FaSearch,
  FaFilter,
  FaBookmark,
  FaShare,
  FaClock,
  FaStar,
  FaRegBookmark,
  FaShareAlt,
  FaEye
} from "react-icons/fa";

// Example image imports (replace these with your actual assets)
import DietBoost from "../../assets/balanced-diet.webp";
import Exercise from "../../assets/functional-training.webp";
import Vitamin from "../../assets/vegetables.webp";
import Gut from "../../assets/mindful-eating-nutrition.webp";
import Sleep from "../../assets/sleep.webp";
import Hydration from "../../assets/hydration.webp";
import Tech from "../../assets/meal-timing.webp";
import Immunity from "../../assets/mango.webp";
import Yoga from "../../assets/yoga.webp";

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [savedArticles, setSavedArticles] = useState([]);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const healthNews = [
    {
      id: 1,
      image: DietBoost,
      title: "New Study: Mediterranean Diet Boosts Heart Health",
      date: "2025-09-21",
      category: "nutrition",
      readTime: "4 min read",
      summary: `
        Researchers have confirmed that the Mediterranean diet — rich in fruits, vegetables, olive oil, and fish — 
        lowers cholesterol, reduces inflammation, and improves overall heart health. 
        The study found that people following this diet had a 25% lower risk of heart disease. 
        Experts recommend adopting it gradually by replacing red meat with lean proteins and using olive oil instead of butter.
      `,
      fullContent: `
        <p>A comprehensive study published in the <em>Journal of the American Medical Association</em> has revealed compelling evidence about the benefits of the Mediterranean diet. The research followed over 10,000 participants for five years, tracking their dietary habits and cardiovascular health.</p>
        
        <p><strong>Key Findings:</strong></p>
        <ul>
          <li>25% reduction in heart disease risk</li>
          <li>15% lower cholesterol levels</li>
          <li>Improved blood pressure control</li>
          <li>Reduced inflammatory markers</li>
        </ul>
        
        <p>Dr. Maria Rodriguez, lead researcher, states: "The combination of healthy fats, antioxidants, and fiber creates a synergistic effect that protects the cardiovascular system."</p>
        
        <p><strong>Getting Started:</strong> Begin by incorporating more vegetables into your meals, switching to olive oil for cooking, and having fish twice a week. Small, consistent changes yield the best long-term results.</p>
      `,
      tags: ["diet", "heart health", "mediterranean", "nutrition"],
      author: "Dr. Sarah Chen",
      featured: true
    },
    {
      id: 2,
      image: Exercise,
      title: "Daily Exercise Linked to Improved Mental Well-being",
      date: "2025-09-22",
      category: "fitness",
      readTime: "3 min read",
      summary: `
        Regular exercise, even light activities like brisk walking or stretching, has been shown to reduce anxiety and depression. 
        Scientists say movement releases endorphins — the "feel-good" hormones — that enhance mood and self-esteem. 
        Consistency, not intensity, is key. Just 30 minutes a day can help keep stress at bay and improve mental clarity.
      `,
      fullContent: `
        <p>New research from the Global Mental Health Institute demonstrates that physical activity is as effective as medication for mild to moderate depression. The study involved 2,000 participants across different age groups.</p>
        
        <p><strong>Exercise Benefits for Mental Health:</strong></p>
        <ul>
          <li>Increases endorphin production</li>
          <li>Reduces cortisol (stress hormone) levels</li>
          <li>Improves sleep quality</li>
          <li>Boosts self-confidence and body image</li>
        </ul>
        
        <p><strong>Recommended Activities:</strong></p>
        <ul>
          <li>Brisk walking: 30 minutes daily</li>
          <li>Yoga or stretching: 20 minutes</li>
          <li>Strength training: 2-3 times weekly</li>
          <li>Dancing or recreational sports</li>
        </ul>
      `,
      tags: ["exercise", "mental health", "wellness", "fitness"],
      author: "Dr. Michael Torres",
      featured: false
    },
    {
      id: 3,
      image: Vitamin,
      title: "Vitamin D Deficiency on the Rise",
      date: "2025-09-23",
      category: "nutrition",
      readTime: "5 min read",
      summary: `
        Doctors warn that insufficient exposure to sunlight and poor diet are causing a global spike in vitamin D deficiency. 
        Low levels can lead to fatigue, bone pain, and weakened immunity. 
        Experts advise 10–15 minutes of sun exposure daily and consuming foods like eggs, mushrooms, and fortified milk for better health.
      `,
      fullContent: `
        <p>A global health survey reveals that nearly 40% of the population suffers from Vitamin D deficiency, with higher rates in northern climates and urban areas.</p>
        
        <p><strong>Symptoms of Deficiency:</strong></p>
        <ul>
          <li>Persistent fatigue and tiredness</li>
          <li>Bone and back pain</li>
          <li>Frequent infections</li>
          <li>Hair loss</li>
          <li>Depression and mood swings</li>
        </ul>
        
        <p><strong>Natural Sources:</strong></p>
        <ul>
          <li>Sunlight: 10-15 minutes daily</li>
          <li>Fatty fish (salmon, mackerel)</li>
          <li>Egg yolks and fortified foods</li>
          <li>Mushrooms exposed to UV light</li>
        </ul>
        
        <p>Dr. Emily Watson recommends: "Get your levels checked annually, especially if you live in areas with limited sunlight."</p>
      `,
      tags: ["vitamin d", "deficiency", "immunity", "nutrition"],
      author: "Dr. Emily Watson",
      featured: true
    },
    {
      id: 4,
      image: Gut,
      title: "Gut Health: Probiotics Show Promising Results",
      date: "2025-09-24",
      category: "nutrition",
      readTime: "4 min read",
      summary: `
        A healthy gut means a healthy body. Recent studies reveal that probiotics — found in yogurt, kefir, and fermented foods — 
        improve digestion, strengthen immunity, and even influence mood regulation. 
        Maintaining gut balance can also reduce the risk of obesity and type 2 diabetes.
      `,
      fullContent: `
        <p>Groundbreaking research from the Gut-Brain Institute shows the profound connection between gut health and overall wellness. The gut microbiome influences everything from digestion to mental health.</p>
        
        <p><strong>Benefits of a Healthy Gut:</strong></p>
        <ul>
          <li>Improved digestion and nutrient absorption</li>
          <li>Enhanced immune function</li>
          <li>Better mood regulation</li>
          <li>Reduced inflammation</li>
          <li>Healthy weight management</li>
        </ul>
        
        <p><strong>Probiotic-Rich Foods:</strong></p>
        <ul>
          <li>Yogurt and kefir</li>
          <li>Kimchi and sauerkraut</li>
          <li>Kombucha</li>
          <li>Miso and tempeh</li>
        </ul>
      `,
      tags: ["gut health", "probiotics", "digestion", "immunity"],
      author: "Dr. James Wilson",
      featured: false
    },
    {
      id: 5,
      image: Sleep,
      title: "Sleep Quality Found to Boost Immune System",
      date: "2025-09-25",
      category: "wellness",
      readTime: "3 min read",
      summary: `
        Researchers discovered that people who sleep 7–8 hours nightly have stronger immune systems and fewer illnesses. 
        Sleep allows the body to repair tissues, balance hormones, and produce infection-fighting proteins. 
        Lack of quality rest can weaken defenses and increase inflammation levels.
      `,
      fullContent: `
        <p>A study from the Sleep Research Center demonstrates that consistent, quality sleep is crucial for immune function. Participants who maintained regular sleep schedules showed 30% better immune response.</p>
        
        <p><strong>Sleep and Immunity Connection:</strong></p>
        <ul>
          <li>Production of cytokines during sleep</li>
          <li>T-cell activation and function</li>
          <li>Antibody production enhancement</li>
          <li>Inflammation reduction</li>
        </ul>
        
        <p><strong>Tips for Better Sleep:</strong></p>
        <ul>
          <li>Maintain consistent sleep schedule</li>
          <li>Create a dark, cool sleeping environment</li>
          <li>Avoid screens 1 hour before bed</li>
          <li>Limit caffeine after 2 PM</li>
        </ul>
      `,
      tags: ["sleep", "immunity", "wellness", "recovery"],
      author: "Dr. Lisa Park",
      featured: false
    },
    {
      id: 6,
      image: Hydration,
      title: "Hydration Key to Better Brain Performance",
      date: "2025-09-26",
      category: "wellness",
      readTime: "3 min read",
      summary: `
        Staying hydrated enhances brain function, improves focus, and prevents headaches. 
        Dehydration, even mild, can impair memory and concentration. 
        Health experts recommend drinking at least 2–3 liters of water daily and eating water-rich foods like cucumber and watermelon.
      `,
      fullContent: `
        <p>Neuroscience research reveals that proper hydration is essential for optimal brain function. Even mild dehydration (1-2%) can significantly impact cognitive performance.</p>
        
        <p><strong>Cognitive Impacts of Dehydration:</strong></p>
        <ul>
          <li>Reduced attention and concentration</li>
          <li>Impaired short-term memory</li>
          <li>Slower processing speed</li>
          <li>Increased perception of task difficulty</li>
        </ul>
        
        <p><strong>Hydration Strategies:</strong></p>
        <ul>
          <li>Carry a reusable water bottle</li>
          <li>Set hourly hydration reminders</li>
          <li>Include water-rich foods in meals</li>
          <li>Monitor urine color (pale yellow is ideal)</li>
        </ul>
      `,
      tags: ["hydration", "brain health", "performance", "wellness"],
      author: "Dr. Robert Kim",
      featured: false
    },
    {
      id: 7,
      image: Tech,
      title: "AI in Healthcare: Revolutionizing Patient Care",
      date: "2025-09-28",
      category: "technology",
      readTime: "6 min read",
      summary: `
        Artificial intelligence is transforming modern healthcare — from diagnosing diseases faster to predicting outbreaks. 
        AI tools help doctors detect early signs of cancer, heart disease, and diabetes with higher accuracy. 
        This technology ensures better treatment plans and personalized patient monitoring.
      `,
      fullContent: `
        <p>The integration of artificial intelligence in healthcare is creating unprecedented opportunities for early detection and personalized treatment. AI algorithms can analyze medical images, predict disease outbreaks, and assist in drug discovery.</p>
        
        <p><strong>AI Applications in Healthcare:</strong></p>
        <ul>
          <li>Medical imaging analysis with 95%+ accuracy</li>
          <li>Predictive analytics for disease prevention</li>
          <li>Personalized treatment recommendations</li>
          <li>Virtual health assistants and chatbots</li>
          <li>Drug discovery and development acceleration</li>
        </ul>
        
        <p>Dr. Amanda Zhou notes: "AI isn't replacing doctors—it's augmenting their capabilities and allowing them to focus on patient care rather than administrative tasks."</p>
      `,
      tags: ["AI", "healthcare", "technology", "innovation"],
      author: "Dr. Amanda Zhou",
      featured: true
    },
    {
      id: 8,
      image: Immunity,
      title: "Superfoods That Strengthen Your Immunity",
      date: "2025-09-29",
      category: "nutrition",
      readTime: "4 min read",
      summary: `
        Superfoods like turmeric, spinach, ginger, and garlic are packed with antioxidants and anti-inflammatory compounds. 
        These nutrients protect cells from damage and strengthen the immune response against infections. 
        Nutritionists recommend adding them to daily meals for long-term health.
      `,
      fullContent: `
        <p>Nutrition science continues to uncover the powerful immune-boosting properties of everyday superfoods. These nutrient-dense foods provide essential vitamins, minerals, and antioxidants that support immune function.</p>
        
        <p><strong>Top Immune-Boosting Superfoods:</strong></p>
        <ul>
          <li><strong>Turmeric:</strong> Contains curcumin with potent anti-inflammatory effects</li>
          <li><strong>Garlic:</strong> Rich in allicin, shown to combat infections</li>
          <li><strong>Ginger:</strong> Powerful antioxidant and anti-inflammatory</li>
          <li><strong>Spinach:</strong> Packed with vitamins C and E, beta-carotene</li>
          <li><strong>Berries:</strong> High in flavonoids and vitamin C</li>
        </ul>
        
        <p><strong>Simple Incorporation Tips:</strong></p>
        <ul>
          <li>Add turmeric to soups and smoothies</li>
          <li>Use fresh garlic in cooking</li>
          <li>Brew ginger tea daily</li>
          <li>Include leafy greens in every meal</li>
        </ul>
      `,
      tags: ["superfoods", "immunity", "nutrition", "antioxidants"],
      author: "Dr. Maria Rodriguez",
      featured: false
    },
    {
      id: 9,
      image: Yoga,
      title: "Morning Yoga Enhances Flexibility and Focus",
      date: "2025-09-20",
      category: "fitness",
      readTime: "3 min read",
      summary: `
        Starting your day with yoga can help relieve tension, boost flexibility, and sharpen focus. 
        Controlled breathing techniques improve oxygen flow and calm the nervous system, 
        making yoga not only a physical but also a mental therapy for stress management.
      `,
      fullContent: `
        <p>Research from the Mind-Body Institute confirms that a consistent morning yoga practice provides both physical and mental benefits that last throughout the day.</p>
        
        <p><strong>Benefits of Morning Yoga:</strong></p>
        <ul>
          <li>Improved flexibility and mobility</li>
          <li>Enhanced mental clarity and focus</li>
          <li>Reduced stress and anxiety levels</li>
          <li>Better posture and body awareness</li>
          <li>Increased energy throughout the day</li>
        </ul>
        
        <p><strong>5-Minute Morning Yoga Sequence:</strong></p>
        <ol>
          <li>Cat-Cow stretch (1 minute)</li>
          <li>Downward-facing dog (1 minute)</li>
          <li>Child's pose with breathing (1 minute)</li>
          <li>Gentle spinal twists (1 minute)</li>
          <li>Mountain pose with deep breathing (1 minute)</li>
        </ol>
      `,
      tags: ["yoga", "morning routine", "flexibility", "mental health"],
      author: "Yoga Master Ananda",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Articles", count: healthNews.length },
    { id: "nutrition", name: "Nutrition", count: healthNews.filter(news => news.category === "nutrition").length },
    { id: "fitness", name: "Fitness", count: healthNews.filter(news => news.category === "fitness").length },
    { id: "wellness", name: "Wellness", count: healthNews.filter(news => news.category === "wellness").length },
    { id: "technology", name: "Technology", count: healthNews.filter(news => news.category === "technology").length }
  ];

  const filteredAndSortedNews = useMemo(() => {
    let filtered = healthNews;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    // Sort articles
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "featured") {
      filtered.sort((a, b) => b.featured - a.featured);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const toggleSaveArticle = (articleId) => {
    setSavedArticles(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const shareArticle = async (article) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled');
      }
    } else {
      // Fallback
      navigator.clipboard.writeText(`${article.title} - ${window.location.href}`);
      alert('Article link copied to clipboard!');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-green-500/20 rounded-2xl">
            <FaHeartbeat className="text-3xl text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Health & Wellness News
          </h1>
        </div>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Stay informed with the latest updates in nutrition, fitness, and overall well-being. 
          Explore recent studies, expert advice, and evidence-based wellness tips.
        </motion.p>
      </motion.div>

      {/* Controls Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* View Controls */}
          <div className="flex gap-4 items-center">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="featured">Featured First</option>
            </select>

            {/* View Toggle */}
            <div className="flex bg-gray-800 rounded-2xl p-1 border border-gray-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-xl transition ${
                  viewMode === "grid" 
                    ? "bg-green-500 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-xl transition ${
                  viewMode === "list" 
                    ? "bg-green-500 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        className="max-w-7xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-gray-400">
          Showing {filteredAndSortedNews.length} of {healthNews.length} articles
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </motion.div>

      {/* News Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${viewMode}-${selectedCategory}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`max-w-7xl mx-auto ${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }`}
        >
          {filteredAndSortedNews.map((news, index) => (
            <motion.article
              key={news.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group ${
                viewMode === "list" && "flex"
              }`}
              whileHover={{ scale: viewMode === "grid" ? 1.02 : 1.01 }}
            >
              {/* Image */}
              {viewMode === "grid" ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {news.featured && (
                      <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                        <FaStar className="inline mr-1" />
                        Featured
                      </span>
                    )}
                    <button
                      onClick={() => toggleSaveArticle(news.id)}
                      className="p-2 bg-gray-900/80 rounded-full backdrop-blur-sm hover:bg-gray-800 transition"
                    >
                      {savedArticles.includes(news.id) ? (
                        <FaBookmark className="text-yellow-400" />
                      ) : (
                        <FaRegBookmark className="text-white" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                // List view image
                <div className="w-48 relative flex-shrink-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium capitalize">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaCalendarAlt />
                    <span>{formatDate(news.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaClock />
                    <span>{news.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition line-clamp-2">
                  {news.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {news.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="text-sm text-gray-400">
                    By {news.author}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpandedArticle(expandedArticle === news.id ? null : news.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white font-medium transition"
                    >
                      <FaEye />
                      {expandedArticle === news.id ? "Collapse" : "Read More"}
                    </button>
                    <button
                      onClick={() => shareArticle(news)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-xl transition"
                    >
                      <FaShareAlt className="text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedArticle === news.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-700/50 overflow-hidden"
                    >
                      <div 
                        className="prose prose-invert max-w-none text-gray-300"
                        dangerouslySetInnerHTML={{ __html: news.fullContent }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredAndSortedNews.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto text-center py-16"
        >
          <div className="text-gray-400 text-lg">
            No articles found matching your criteria. Try adjusting your search or filters.
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NewsPage;