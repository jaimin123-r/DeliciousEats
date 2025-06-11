import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-amber-300 font-sans">

      {/* Header Section */}
      <motion.div
        className="py-16 bg-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
              Recipes That Inspire
            </h2>
            <p className="text-amber-300 leading-relaxed">
              Discover recipes that will tantalize your taste buds, with easy-to-follow instructions and visually stunning presentations. Whether you're a beginner or a seasoned chef, there's something for everyone.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Video Section */}
      <div className="py-16 bg-amber-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-6 text-black"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-3xl font-bold">
                Recipe Videos That Never Miss a Detail
              </h3>
              <p>
                Our videos are designed to guide you step-by-step through every recipe, ensuring that you never miss a critical detail. Experience the joy of cooking like never before.
              </p>
              <div className="flex items-center space-x-4">
                <motion.button
                  className="bg-black text-amber-300 p-4 rounded-full hover:bg-amber-600 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </motion.button>
                <div>
                  <h4 className="font-bold">Watch Video</h4>
                  <p className="text-gray-800">Experience the magic of cooking</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="/img/video/big.png"
                alt="Recipe"
                className="col-span-2 rounded-lg shadow-2xl border border-black"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Recipe Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-3xl font-bold text-amber-400">
                Featured Recipe of the Month
              </h3>
              <p className="text-amber-300">
                This month's featured recipe is a twist on a classic dish that will leave your family and friends speechless. Don't miss out on the opportunity to try it yourself!
              </p>
              <button className="px-6 py-3 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-500 transition-all">
                Explore Featured Recipe
              </button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="/img/video/big_1.png"
                alt="Featured Recipe"
                className="rounded-lg shadow-2xl border border-amber-400"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Latest Trend Section */}
      <div className="py-16 bg-amber-400">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-black mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Thousands of recipes are waiting to be explored
          </motion.p>
          <motion.h3
            className="text-3xl font-bold mb-8 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Discover the Latest Trending Recipes
          </motion.h3>
          <motion.button
            className="bg-black text-amber-400 px-8 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Recipes
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;