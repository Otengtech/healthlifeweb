import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smoothie from "../../assets/berry-smoothie.webp";
import spag from "../../assets/zucchini-noodles.webp";
import avo from "../../assets/avocado.webp";
import {
  FaUtensils,
  FaRandom,
  FaClock,
  FaPlay,
  FaPause,
  FaTimes,
  FaListUl,
  FaHeart,
  FaShare,
  FaBookmark,
  FaFire,
  FaUserFriends,
  FaShoppingCart,
  FaRegBookmark,
  FaFilter,
  FaSearch,
  FaStar,
  FaRegStar,
  FaUtensilSpoon,
  FaLeaf,
  FaDollarSign,
  FaSeedling,
  FaWeight,
  FaEye
} from "react-icons/fa";

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
      const container = document.getElementById("ad-container-300x250");
      if (container) {
        container.innerHTML = "";
  
        const script = document.createElement("script");
        script.innerHTML = `
          atOptions = {
    'key' : '1f1699da3c5fbf28192da4947a10cbd0',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
   };
        `;
        container.appendChild(script);
  
        const script2 = document.createElement("script");
        script2.src =
          "//www.highperformanceformat.com/1f1699da3c5fbf28192da4947a10cbd0/invoke.js";
        script2.async = true;
        container.appendChild(script2);
      }
    }, []);

  const setStoredValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setStoredValue];
};

const RecipePage = () => {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack", "Vegan", "Keto", "Low-Carb"];
  const difficulties = ["All", "Easy", "Medium", "Intermediate", "Advanced"];
  const cookTimes = ["All", "Quick (<15min)", "Medium (15-30min)", "Long (>30min)"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCookTime, setSelectedCookTime] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [favorites, setFavorites] = useLocalStorage("recipeFavorites", []);
  const [savedRecipes, setSavedRecipes] = useLocalStorage("savedRecipes", []);
  const [cookingHistory, setCookingHistory] = useLocalStorage("cookingHistory", []);
  const [showFilters, setShowFilters] = useState(false);
  const [servings, setServings] = useState(2);
  const [showNutrition, setShowNutrition] = useState(false);
  const timerRef = useRef(null);

  const recipes = [
    {
      id: 1,
      name: "Fluffy Pancakes",
      type: "Breakfast",
      time: 20,
      calories: 350,
      level: "Easy",
      image: "https://media.istockphoto.com/id/1223834793/photo/fresh-homemade-pancakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=2TEymFOg3irymcv_sWpCeBte48mTps0Bo_cdW_AsKhI=",
      ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp sugar",
        "2 tsp baking powder",
        "1 cup milk",
        "1 egg",
        "2 tbsp melted butter"
      ],
      steps: [
        "Mix flour, sugar, baking powder, and salt in a bowl.",
        "Add milk, eggs, and melted butter, whisk until smooth.",
        "Heat a pan and pour batter to form pancakes.",
        "Cook until bubbles form, then flip and cook golden.",
        "Serve warm with syrup or fruit.",
      ],
      nutrition: {
        protein: 8,
        carbs: 45,
        fat: 12,
        fiber: 2
      },
      tags: ["Vegetarian", "Family-Friendly"],
      rating: 4.5,
      reviews: 128,
      cookware: ["Mixing bowl", "Whisk", "Non-stick pan"],
      tips: ["Don't overmix the batter for fluffier pancakes", "Let batter rest for 5 minutes before cooking"]
    },
    {
      id: 2,
      name: "Chicken Caesar Salad",
      type: "Lunch",
      time: 15,
      calories: 420,
      level: "Medium",
      image: "https://media.istockphoto.com/id/534139231/photo/healthy-grilled-chicken-caesar-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=XqKwFLWfpdjWD4r_TnyVjUqZkcM8y22W8-K9bplWOtM=",
      ingredients: [
        "2 chicken breasts",
        "1 romaine lettuce",
        "1/2 cup Parmesan cheese",
        "1/4 cup Caesar dressing",
        "1/2 cup croutons"
      ],
      steps: [
        "Grill or pan-sear chicken breasts until cooked.",
        "Chop lettuce, tomatoes, and cucumbers.",
        "Slice chicken and add to salad bowl.",
        "Top with croutons, Parmesan, and Caesar dressing.",
        "Toss gently and serve chilled.",
      ],
      nutrition: {
        protein: 35,
        carbs: 12,
        fat: 18,
        fiber: 4
      },
      tags: ["High-Protein", "Low-Carb"],
      rating: 4.2,
      reviews: 89,
      cookware: ["Grill pan", "Salad bowl", "Knife"],
      tips: ["Marinate chicken for 30 minutes for better flavor", "Add dressing just before serving to keep greens crisp"]
    },
    {
      id: 3,
      name: "Zucchini Noodles with Pesto",
      type: "Dinner",
      time: 25,
      calories: 320,
      level: "Intermediate",
      image: spag,
      ingredients: [
        "3 medium zucchinis",
        "1/2 cup basil pesto",
        "1/4 cup pine nuts",
        "2 tbsp olive oil",
        "1/4 cup Parmesan cheese"
      ],
      steps: [
        "Spiralize zucchinis into noodles.",
        "Toast pine nuts in a dry pan until golden.",
        "Heat olive oil in a large pan.",
        "Add zucchini noodles and cook for 2-3 minutes.",
        "Toss with pesto, top with pine nuts and Parmesan.",
      ],
      nutrition: {
        protein: 12,
        carbs: 18,
        fat: 22,
        fiber: 6
      },
      tags: ["Vegan", "Low-Carb", "Gluten-Free"],
      rating: 4.7,
      reviews: 156,
      cookware: ["Spiralizer", "Large pan", "Mixing bowl"],
      tips: ["Don't overcook zucchini noodles - they should be al dente", "Make pesto fresh for best flavor"]
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      type: "Dessert",
      time: 25,
      calories: 450,
      level: "Advanced",
      image: "https://media.istockphoto.com/id/1130692246/photo/homemade-chocolate-brownies-shot-from-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=WlzAoNvVZjr-TUfC-q5swZDKgQ0UlcD5sG3rUTUI2Vo=",
      ingredients: [
        "200g dark chocolate",
        "100g butter",
        "2 eggs",
        "50g sugar",
        "30g flour"
      ],
      steps: [
        "Melt chocolate and butter together.",
        "Whisk in sugar and eggs until smooth.",
        "Fold in flour and cocoa powder gently.",
        "Pour into ramekins and bake 10–12 mins.",
        "Serve warm with vanilla ice cream.",
      ],
      nutrition: {
        protein: 6,
        carbs: 52,
        fat: 28,
        fiber: 3
      },
      tags: ["Vegetarian", "Indulgent"],
      rating: 4.8,
      reviews: 203,
      cookware: ["Ramekins", "Double boiler", "Mixing bowls"],
      tips: ["Don't overbake - center should be molten", "Serve immediately after baking"]
    },
    {
      id: 5,
      name: "Berry Smoothie Bowl",
      type: "Snack",
      time: 10,
      calories: 250,
      level: "Easy",
      image: smoothie,
      ingredients: [
        "1 banana",
        "1 cup mixed berries",
        "1/2 cup Greek yogurt",
        "2 tbsp honey",
        "1/4 cup granola"
      ],
      steps: [
        "Blend banana, strawberries, yogurt, and milk.",
        "Pour into a bowl.",
        "Top with granola, coconut flakes, and berries.",
        "Drizzle with honey.",
        "Serve immediately chilled.",
      ],
      nutrition: {
        protein: 15,
        carbs: 38,
        fat: 8,
        fiber: 7
      },
      tags: ["Vegetarian", "Quick", "Healthy"],
      rating: 4.4,
      reviews: 95,
      cookware: ["Blender", "Bowls"],
      tips: ["Use frozen fruits for thicker consistency", "Add protein powder for extra nutrition"]
    },
    {
      id: 6,
      name: "Avocado Superfood Toast",
      type: "Breakfast",
      time: 10,
      calories: 280,
      level: "Easy",
      image: avo,
      ingredients: [
        "2 slices whole grain bread",
        "1 ripe avocado",
        "1 tbsp chia seeds",
        "1/2 cup microgreens",
        "1 tbsp olive oil"
      ],
      steps: [
        "Toast bread until golden and crisp.",
        "Mash avocado with lime juice and salt.",
        "Spread avocado mixture on toast.",
        "Top with microgreens and chia seeds.",
        "Drizzle with olive oil and serve.",
      ],
      nutrition: {
        protein: 9,
        carbs: 28,
        fat: 16,
        fiber: 12
      },
      tags: ["Vegan", "Healthy", "Quick"],
      rating: 4.6,
      reviews: 167,
      cookware: ["Toaster", "Small bowl", "Knife"],
      tips: ["Use ripe avocados for best texture", "Add red pepper flakes for spice"]
    }
  ];

  // Filter recipes based on all criteria
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === "All" || recipe.type === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || recipe.level === selectedDifficulty;
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesCookTime = true;
    if (selectedCookTime === "Quick (<15min)") matchesCookTime = recipe.time < 15;
    else if (selectedCookTime === "Medium (15-30min)") matchesCookTime = recipe.time >= 15 && recipe.time <= 30;
    else if (selectedCookTime === "Long (>30min)") matchesCookTime = recipe.time > 30;
    
    return matchesCategory && matchesDifficulty && matchesCookTime && matchesSearch;
  });

  // Favorite functionality
  const toggleFavorite = (recipeId) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const toggleSaveRecipe = (recipe) => {
    setSavedRecipes(prev => {
      const exists = prev.find(r => r.id === recipe.id);
      if (exists) {
        return prev.filter(r => r.id !== recipe.id);
      } else {
        return [...prev, { ...recipe, savedAt: new Date().toISOString() }];
      }
    });
  };

  const isFavorite = (recipeId) => favorites.includes(recipeId);
  const isSaved = (recipeId) => savedRecipes.some(r => r.id === recipeId);

  const generateRandomRecipe = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setRandomRecipe(random);
  };

  const startRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCountdown(5);
    setTimeElapsed(0);
    setIsActive(false);
    clearInterval(timerRef.current);
    
    // Add to cooking history
    setCookingHistory(prev => [
      {
        recipeId: recipe.id,
        recipeName: recipe.name,
        cookedAt: new Date().toISOString(),
        duration: 0
      },
      ...prev.slice(0, 9) // Keep last 10
    ]);
  };

  useEffect(() => {
    if (selectedRecipe && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (selectedRecipe && countdown === 0) {
      setIsActive(true);
    }
  }, [countdown, selectedRecipe]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive]);

  const handlePauseResume = () => setIsActive((prev) => !prev);
  
  const closeModal = () => {
    setSelectedRecipe(null);
    setCountdown(5);
    setTimeElapsed(0);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const adjustServings = (direction) => {
    setServings(prev => {
      if (direction === 'up' && prev < 10) return prev + 1;
      if (direction === 'down' && prev > 1) return prev - 1;
      return prev;
    });
  };

  const shareRecipe = (recipe) => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: `Check out this delicious ${recipe.name} recipe!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${recipe.name} - ${window.location.href}`);
      alert('Recipe link copied to clipboard!');
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= Math.floor(rating) ? 
            <FaStar key={star} className="text-yellow-400 text-sm" /> :
            <FaRegStar key={star} className="text-yellow-400 text-sm" />
        ))}
        <span className="text-gray-400 text-sm ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-12 px-4 md:px-28 space-y-12">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">
          Explore Delicious Recipes
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover amazing recipes tailored to your taste. Cook, save, and share your culinary adventures!
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        className="max-w-6xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Search Bar */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search recipes, ingredients, or tags..."
            className="w-full pl-12 pr-4 py-4 bg-gray-800 rounded-2xl border border-gray-700 focus:border-green-500 focus:outline-none transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            <FaFilter />
            Filters
          </button>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-800 rounded-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div>
                <label className="block text-green-400 mb-2 font-semibold">Category</label>
                <select
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-green-400 mb-2 font-semibold">Difficulty</label>
                <select
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-green-400 mb-2 font-semibold">Cook Time</label>
                <select
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                  value={selectedCookTime}
                  onChange={(e) => setSelectedCookTime(e.target.value)}
                >
                  {cookTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition duration-300 flex items-center gap-2 ${
                selectedCategory === cat
                  ? "bg-green-500 text-gray-900 border-green-500"
                  : "border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900"
              }`}
            >
              {cat === "Vegan" && <FaLeaf />}
              {cat === "Keto" && <FaFire />}
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-gray-800 p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-green-400">{recipes.length}</div>
          <div className="text-gray-400 text-sm">Total Recipes</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-green-400">{favorites.length}</div>
          <div className="text-gray-400 text-sm">Favorites</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-green-400">{savedRecipes.length}</div>
          <div className="text-gray-400 text-sm">Saved</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-2xl text-center">
          <div className="text-2xl font-bold text-green-400">{cookingHistory.length}</div>
          <div className="text-gray-400 text-sm">Cooked</div>
        </div>
      </motion.div>

      

      {/* Recipe Cards */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(recipe.id);
                    }}
                    className="p-2 bg-black/50 rounded-full hover:bg-red-500/80 transition-colors"
                  >
                    <FaHeart 
                      className={isFavorite(recipe.id) ? "text-red-500" : "text-white"} 
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaveRecipe(recipe);
                    }}
                    className="p-2 bg-black/50 rounded-full hover:bg-green-500/80 transition-colors"
                  >
                    {isSaved(recipe.id) ? (
                      <FaBookmark className="text-green-400" />
                    ) : (
                      <FaRegBookmark className="text-white" />
                    )}
                  </button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-green-500 text-gray-900 text-xs font-semibold rounded-full">
                    {recipe.time}min
                  </span>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-green-400 flex-1">
                    {recipe.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareRecipe(recipe);
                    }}
                    className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <FaShare />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaUtensilSpoon />
                    {recipe.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaFire />
                    {recipe.calories} cal
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    recipe.level === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    recipe.level === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {recipe.level}
                  </span>
                </div>

                <StarRating rating={recipe.rating} />

                <div className="flex flex-wrap gap-1 mt-3 mb-4">
                  {recipe.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => startRecipe(recipe)}
                  className="w-full py-3 bg-green-500 hover:bg-green-400 text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaPlay />
                  Start Cooking
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Random Recipe Generator & Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Random Recipe Generator */}
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 border border-green-500/30"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <FaRandom className="text-3xl" />
            Random Recipe Generator
          </h2>
          <button
            onClick={generateRandomRecipe}
            className="w-full py-4 bg-green-500 hover:bg-green-400 text-gray-900 font-bold rounded-xl transition-colors mb-6 text-lg"
          >
            🎲 Generate Random Recipe
          </button>

          {randomRecipe && (
            <motion.div
              className="p-6 bg-gray-700/50 rounded-xl border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={randomRecipe.image}
                  alt={randomRecipe.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-300">
                    {randomRecipe.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {randomRecipe.type} • {randomRecipe.time} min • {randomRecipe.level}
                  </p>
                  <StarRating rating={randomRecipe.rating} />
                </div>
              </div>
              <button
                onClick={() => startRecipe(randomRecipe)}
                className="w-full mt-4 py-2 bg-green-500 hover:bg-green-400 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Cook This Recipe
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Cooking History */}
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 border border-blue-500/30"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
            <FaClock className="text-3xl" />
            Recent Activity
          </h2>
          
          {cookingHistory.length > 0 ? (
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {cookingHistory.map((history, index) => (
                <div key={index} className="p-4 bg-gray-700/30 rounded-lg flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaUtensils className="text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-200">{history.recipeName}</h4>
                    <p className="text-gray-400 text-sm">
                      {new Date(history.cookedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <FaClock className="text-4xl mx-auto mb-3 opacity-50" />
              <p>No cooking history yet</p>
              <p className="text-sm">Start cooking to track your progress!</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex justify-center items-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-800 p-6 border-b border-gray-700 rounded-t-3xl z-10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-green-400 mb-2">
                      {selectedRecipe.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300">
                      <span className="flex items-center gap-2">
                        <FaUtensilSpoon />
                        {selectedRecipe.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock />
                        {selectedRecipe.time} min
                      </span>
                      <span className="flex items-center gap-2">
                        <FaFire />
                        {selectedRecipe.calories} cal
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        selectedRecipe.level === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        selectedRecipe.level === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {selectedRecipe.level}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {countdown > 0 ? (
                  <div className="text-center py-12">
                    <motion.div
                      key={countdown}
                      className="text-8xl font-bold text-green-500 mb-6"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      {countdown}
                    </motion.div>
                    <p className="text-xl text-gray-400">Get ready to cook!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Ingredients & Info */}
                    <div className="space-y-6">
                      {/* Servings Adjuster */}
                      <div className="bg-gray-700/50 p-4 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-green-400">Servings</h3>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => adjustServings('down')}
                              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xl font-bold w-8 text-center">{servings}</span>
                            <button
                              onClick={() => adjustServings('up')}
                              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Ingredients */}
                      <div className="bg-gray-700/50 p-4 rounded-2xl">
                        <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                          <FaShoppingCart />
                          Ingredients
                        </h3>
                        <ul className="space-y-2">
                          {selectedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex items-center gap-3 p-2 bg-gray-600/30 rounded-lg">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-200">{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cookware & Tips */}
                      <div className="space-y-4">
                        <div className="bg-gray-700/50 p-4 rounded-2xl">
                          <h4 className="font-semibold text-green-400 mb-2">Required Cookware</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedRecipe.cookware.map((item, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-600 text-gray-300 text-sm rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-700/50 p-4 rounded-2xl">
                          <h4 className="font-semibold text-green-400 mb-2">Pro Tips</h4>
                          <ul className="space-y-2">
                            {selectedRecipe.tips.map((tip, index) => (
                              <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                                <span className="text-green-400 mt-1">💡</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Cooking Process */}
                    <div className="space-y-6">
                      {/* Timer */}
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-center">
                        <div className="text-green-900 mb-4">
                          <FaClock className="text-4xl mx-auto mb-2" />
                          <p className="text-4xl font-bold">{formatTime(timeElapsed)}</p>
                          <p className="text-green-900/80">Total: {selectedRecipe.time} min</p>
                        </div>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={handlePauseResume}
                            className="px-6 py-3 bg-green-900 text-green-100 font-semibold rounded-lg flex items-center gap-2 hover:bg-green-800 transition-colors"
                          >
                            {isActive ? <FaPause /> : <FaPlay />}
                            {isActive ? "Pause" : "Resume"}
                          </button>
                          <button
                            onClick={closeModal}
                            className="px-6 py-3 bg-green-900/50 text-green-100 border border-green-700 rounded-lg hover:bg-green-800/50 transition-colors"
                          >
                            Exit
                          </button>
                        </div>
                      </div>

                      {/* Cooking Steps */}
                      <div className="bg-gray-700/50 p-6 rounded-2xl">
                        <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                          <FaListUl />
                          Cooking Steps
                        </h3>
                        <div className="space-y-4">
                          {selectedRecipe.steps.map((step, index) => (
                            <motion.div
                              key={index}
                              className="flex gap-4 p-4 bg-gray-600/30 rounded-xl"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="w-8 h-8 bg-green-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {index + 1}
                              </div>
                              <p className="text-gray-200 flex-1">{step}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Nutrition Info */}
                      <div className="bg-gray-700/50 p-4 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-green-400">Nutrition Information</h4>
                          <button
                            onClick={() => setShowNutrition(!showNutrition)}
                            className="text-sm text-green-400 hover:text-green-300 transition-colors"
                          >
                            {showNutrition ? 'Hide' : 'Show'} Details
                          </button>
                        </div>
                        {showNutrition && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="grid grid-cols-2 gap-4"
                          >
                            <div className="text-center p-3 bg-gray-600/30 rounded-lg">
                              <FaWeight className="text-green-400 mx-auto mb-1" />
                              <div className="font-bold text-green-400">{selectedRecipe.nutrition.protein}g</div>
                              <div className="text-xs text-gray-400">Protein</div>
                            </div>
                            <div className="text-center p-3 bg-gray-600/30 rounded-lg">
                              <FaFire className="text-green-400 mx-auto mb-1" />
                              <div className="font-bold text-green-400">{selectedRecipe.nutrition.carbs}g</div>
                              <div className="text-xs text-gray-400">Carbs</div>
                            </div>
                            <div className="text-center p-3 bg-gray-600/30 rounded-lg">
                              <FaDollarSign className="text-green-400 mx-auto mb-1" />
                              <div className="font-bold text-green-400">{selectedRecipe.nutrition.fat}g</div>
                              <div className="text-xs text-gray-400">Fat</div>
                            </div>
                            <div className="text-center p-3 bg-gray-600/30 rounded-lg">
                              <FaSeedling className="text-green-400 mx-auto mb-1" />
                              <div className="font-bold text-green-400">{selectedRecipe.nutrition.fiber}g</div>
                              <div className="text-xs text-gray-400">Fiber</div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <div className="py-6 bg-gray-900 flex justify-center">
          <div id="ad-container-320x50"></div>
        </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecipePage;