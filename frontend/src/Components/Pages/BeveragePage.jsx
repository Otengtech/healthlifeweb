import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

// ✅ Beverage data (8 items with accurate Unsplash image URLs)
const beverages = [
  {
    name: "Green Tea",
    image:
      "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVudGVhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in antioxidants, catechins, and promotes metabolism and heart health.",
    uses: "Consumed as a warm or cold beverage, can be flavored with lemon or honey.",
    preparation:
      "Steep green tea leaves in hot water (not boiling) for 2–3 minutes.",
    storage: "Store dried tea leaves in an airtight container away from moisture.",
  },
  {
    name: "Orange Juice",
    image:
      "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Excellent source of Vitamin C, potassium, and antioxidants.",
    uses: "Perfect for breakfast or as a refreshing drink during the day.",
    preparation:
      "Freshly squeeze oranges or use a juicer. Chill before serving.",
    storage: "Keep refrigerated and consume within 3 days.",
  },
  {
    name: "Smoothie",
    image:
      "https://images.unsplash.com/photo-1662130187270-a4d52c700eb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21vb3RoaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Provides fiber, vitamins, and minerals depending on ingredients used.",
    uses: "Great for breakfast, post-workout, or a healthy snack.",
    preparation:
      "Blend fruits, vegetables, yogurt, or milk until smooth.",
    storage: "Best served fresh. Can refrigerate for up to 24 hours.",
  },
  {
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Contains caffeine and antioxidants that improve focus and energy levels.",
    uses: "Consumed hot or iced, black or with milk/sugar.",
    preparation:
      "Brew using roasted coffee beans via espresso, drip, or French press.",
    storage: "Store coffee beans in an airtight container at room temperature.",
  },
  {
    name: "Coconut Water",
    image:
      "https://plus.unsplash.com/premium_photo-1753485340269-f3b263730649?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHdhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Natural source of electrolytes and hydration; low in calories.",
    uses: "Ideal for post-exercise hydration or tropical refreshment.",
    preparation:
      "Extract fresh from young coconuts or use bottled natural options.",
    storage: "Keep refrigerated after opening and consume within 2 days.",
  },
  {
    name: "Milkshake",
    image:
      "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "High in calcium, protein, and energy, depending on ingredients.",
    uses: "Enjoyed as dessert or snack; can be customized with chocolate, fruit, or nuts.",
    preparation:
      "Blend milk, ice cream, and desired flavors until creamy.",
    storage: "Serve immediately for best taste and texture.",
  },
  {
    name: "Lemonade",
    image:
      "https://images.unsplash.com/photo-1507281549113-040fcfef650e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Rich in Vitamin C; aids digestion and hydration.",
    uses: "Served chilled with ice, mint, or ginger for a refreshing summer drink.",
    preparation:
      "Mix fresh lemon juice, sugar, and water. Stir until sugar dissolves.",
    storage: "Refrigerate up to 2 days.",
  },
  {
    name: "Herbal Infusion",
    image:
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    nutrition:
      "Caffeine-free and rich in antioxidants; benefits depend on herbs used.",
    uses: "Calming drink often used for relaxation or sleep aid.",
    preparation:
      "Steep dried herbs (like chamomile or peppermint) in hot water for 5–10 minutes.",
    storage: "Keep herbs in sealed jars away from light and moisture.",
  },
];

const BeveragePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBeverages = beverages.filter((bev) =>
    bev.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-gray-950 to-gray-900 text-gray-100 py-12 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-8"
      >
        Refreshing Beverages for Every Mood
      </motion.h1>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-14"
      >
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a beverage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 rounded-full bg-gray-800/70 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </motion.div>

      {/* Beverage List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {filteredBeverages.length > 0 ? (
          filteredBeverages.map((bev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex flex-col lg:flex-row items-center gap-8 rounded-3xl p-6 lg:p-10 bg-gray-800/40 backdrop-blur-md border border-amber-800/40 hover:border-amber-400/50 transition"
            >
              <img
                src={bev.image}
                alt={bev.name}
                className="w-full lg:w-1/3 h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="w-full lg:w-2/3 space-y-3">
                <h2 className="text-3xl font-semibold text-amber-400">{bev.name}</h2>
                <p>
                  <span className="text-amber-300 font-medium">Nutrition:</span>{" "}
                  {bev.nutrition}
                </p>
                <p>
                  <span className="text-amber-300 font-medium">Uses:</span>{" "}
                  {bev.uses}
                </p>
                <p>
                  <span className="text-amber-300 font-medium">Preparation:</span>{" "}
                  {bev.preparation}
                </p>
                <p>
                  <span className="text-amber-300 font-medium">Storage:</span>{" "}
                  {bev.storage}
                </p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No beverages found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default BeveragePage;
