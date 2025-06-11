import React from "react";
import { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import {Link} from "react-router-dom";
import "../App.css"

function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing with:', email);
    setEmail('');
    // Would normally send this to your backend
  };

  return (
    <footer className="bg-gradient-to-br from-black to-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="spanbhai text-2xl font-bold text-white">
              <span className=" animate-pulse inline-block mr-1 text-white">✦</span>
              DeliciousEats
            </h3>
            <p className="text-white">Discover delightful recipes from around the world. Cook with passion, eat with love.</p>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </Link>
              <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </Link>
              <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300 transform hover:scale-110">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h4 className="font-semibold text-lg mb-4 text-white relative inline-block spanbhai">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Contact', 'Recipe'].map((item) => (
                <li key={item}>
                  <Link   
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-white hover:text-amber-500 transition-colors duration-300 group flex items-center"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span className="ml-2 ">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div className="mt-8 md:mt-0">
            <h4 className="font-semibold text-lg mb-4 text-white relative inline-block spanbhai">
              Categories
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegetarian', 'Quick Meals'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white hover:text-amber-500 transition-colors duration-300 group flex items-center"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span className="ml-2">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        
          {/* Newsletter */}
          <div className="mt-8 md:mt-0">
            <h4 className="font-semibold text-lg mb-4 text-white relative inline-block spanbhai">
              Subscribe
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-amber-500 rounded-full"></span>
            </h4>
            <p className="text-white mb-4">Get weekly recipe inspiration in your inbox</p>
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-md transition-all duration-300 group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className=" w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500-500 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300"></div>
              </div>
              <button 
                onClick={handleSubscribe}
                className="bg-black text-white px-4 py-2 rounded-md w-full transition-all duration-300 transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white">© {new Date().getFullYear()} DeliciousEats. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-white">
            <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300">Privacy Policy</Link>
            <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300">Terms of Service</Link>
            <Link to="#" className="text-white hover:text-amber-500 transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;