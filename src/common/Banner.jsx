import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-gray-900 via-amber-950 to-amber-700 rounded-3xl overflow-hidden shadow-xl">
        {/* Main banner content */}
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Left content area */}
          <div className="w-full md:w-3/5 p-6 md:p-12 text-white z-10">
            <div className="flex items-center mb-4 space-x-2">
              <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              <span className="font-medium text-yellow-200">Premium Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">Delicious</span> Recipes
            </h1>
            
            <p className="text-lg mb-8 text-gray-100 max-w-lg">
              Explore thousands of chef-crafted recipes tailored to your taste. From quick meals to gourmet experiences.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/signup"
                className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-yellow-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <ArrowRight className={`transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} size={18} />
              </Link>
              
              <Link 
                to="/recipes"
                className="bg-transparent border-2 border-white/70 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
          
          {/* Right image area */}
          <div className="w-full md:w-2/5 relative flex justify-center items-center md:mt-0">
            {/* Decorative circles */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-300/30 rounded-full blur-xl hidden md:block"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-300/40 rounded-full blur-xl hidden md:block"></div>
            
            {/* Image container */}
            <div className="relative h-72 w-72 md:h-full md:w-full flex-shrink-0 overflow-hidden flex justify-center items-center mb-8">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="img/banner/banner.jpg" 
                  alt="Delicious food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;