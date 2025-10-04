import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes: string[] = [
  "The best way to predict the future is to invent it.",
  "Simplicity is the soul of efficiency.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
];

const QuoteGenerator: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    setIndex(newIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-white">
      <div className="max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium mb-6"
          >
            {quotes[index]}
          </motion.p>
        </AnimatePresence>
        <button
          onClick={handleNextQuote}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-2xl px-6 py-2 transition"
        >
          Inspire Me ✨
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
