import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home" },
    { name: "Recipes" },
    { name: "About" },
    { name: "Contact" },
    { name: "Favorites" },
  ];

  const isActiveLink = (name) => {
    if (name === "Home" && location.pathname === "/") {
      return true;
    }
    return location.pathname === `/${name.toLowerCase()}`;
  };

  return (
    <>
      {/* Spacer div to prevent content from being hidden under the navbar */}
      <div className={`${scrolled ? "h-16" : "h-20"} transition-all duration-300`}></div>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-white shadow-md"
            : "py-6 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="spanbhai text-2xl font-bold text-[#22181C]">
                <span className="animate-pulse inline-block mr-1 text-[#22181C]">✦</span>
                DeliciousEats
              </h3>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                    className={`
                      px-4 py-2 rounded-full font-medium text-sm
                      transition-all duration-200 ease-in-out
                      ${
                        isActiveLink(item.name)
                          ? "text-[#22181C] bg-indigo-50 font-semibold"
                          : "text-gray-600 hover:text-[#22181C] hover:bg-indigo-50/70"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Search Bar */}
              <motion.div
                className={`relative transition-all duration-300 w-48`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Search
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                    searchFocused ? "text-[#22181C]" : "text-gray-400"
                  }`}
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className={`pl-10 w-full py-2 text-sm rounded-full border transition-all duration-300 ${
                    searchFocused
                      ? "border-[#22181C] ring-2 ring-indigo-100 pr-10"
                      : "border-gray-200 hover:border-gray-300 pr-4"
                  } focus:outline-none`}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </motion.div>

              {/* Sign Up and Login Buttons */}
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-gradient-to-br from-[#22181C] to-amber-700 text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-amber-900"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-white text-[#22181C] border border-[#22181C] rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Login
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-button max-h-full p-2 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/30 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mobile-menu fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl flex flex-col h-screen"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {/* Menu Header */}
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                  <div className="space-y-4">
                    <h3 className="spanbhai text-2xl font-bold text-[#22181C]">
                      <span className="animate-pulse inline-block mr-1 text-[#22181C]">✦</span>
                      DeliciousEats
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="p-4 border-b border-gray-100">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="Search recipes..."
                      className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
                        className={`block px-6 py-4 border-b border-gray-100 ${
                          isActiveLink(item.name)
                            ? "bg-indigo-50 text-amber-600 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-100">
                  <Link
                    to="/signup"
                    className="block w-full py-3 text-center bg-gradient-to-br from-[#22181C] to-amber-700 text-white rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="block w-full py-3 mt-3 text-center bg-gray-50 text-gray-700 rounded-full font-medium text-sm border border-gray-200 hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;