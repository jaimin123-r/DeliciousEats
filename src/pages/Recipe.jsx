import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { MdAccessTime, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Sidebar from "../common/Sidebar";
import { toast } from "react-hot-toast";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

import { motion } from "framer-motion";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  const [collapsedSections, setCollapsedSections] = useState({
    dishType: true,
    mealType: true,
    worldCuisine: true,
    rating: true,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      const { recipes } = res.data;
      setData(recipes);
      setFilteredData(recipes);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredData.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search logic
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  // Filter logic
  const applyFilter = (filterKey, filterValue) => {
    const filtered = data.filter((recipe) =>
      recipe[filterKey]?.includes(filterValue)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div
            className="md:overflow-y-auto md:top-0 md:sticky md:h-screen p-4 rounded-lg bg-white shadow-md"
            style={{ minWidth: "250px" }}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Filters Header */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <Filter size={18} className="mr-2" />
                Filters
              </h3>

              {/* Difficulty Filter */}
              <div className="mb-4">
                <h4
                  className="font-medium flex justify-between items-center cursor-pointer mb-2"
                  onClick={() => toggleSection("dishType")}
                >
                  Difficulty
                  {collapsedSections.dishType ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronUp size={18} />
                  )}
                </h4>
                {!collapsedSections.dishType && (
                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("difficulty", "Easy")}
                    >
                      Easy
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("difficulty", "Medium")}
                    >
                      Medium
                    </li>
                  </motion.ul>
                )}
              </div>

              {/* Meal Type Filter */}
              <div className="mb-4">
                <h4
                  className="font-medium flex justify-between items-center cursor-pointer mb-2"
                  onClick={() => toggleSection("mealType")}
                >
                  Meal Type
                  {collapsedSections.mealType ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronUp size={18} />
                  )}
                </h4>
                {!collapsedSections.mealType && (
                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("mealType", "Breakfast")}
                    >
                      Breakfast
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("mealType", "Lunch")}
                    >
                      Lunch
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("mealType", "Dinner")}
                    >
                      Dinner
                    </li>
                  </motion.ul>
                )}
              </div>

              {/* World Cuisine Filter */}
              <div className="mb-4">
                <h4
                  className="font-medium flex justify-between items-center cursor-pointer mb-2"
                  onClick={() => toggleSection("worldCuisine")}
                >
                  World Cuisine
                  {collapsedSections.worldCuisine ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronUp size={18} />
                  )}
                </h4>
                {!collapsedSections.worldCuisine && (
                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("cuisine", "Italian")}
                    >
                      Italian
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("cuisine", "Indian")}
                    >
                      Indian
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("cuisine", "Thai")}
                    >
                      Thai
                    </li>
                    <li
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() => applyFilter("cuisine", "Pakistani")}
                    >
                      Pakistani
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: recipesPerPage }).map((_, index) => (
                  <RecipeCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  {Array.from(
                    { length: Math.ceil(filteredData.length / recipesPerPage) },
                    (_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
            {!loading && filteredData.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-600">
                  No recipes found in this category
                </h3>
                <p className="text-gray-500 mt-2">
                  Try selecting a different filter or search term
                </p>
              </div>
            )}
            {!loading && error && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-red-500">
                  Something went wrong
                </h3>
                <p className="text-gray-500 mt-2">{error}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

const RecipeCardSkeleton = () => {
  return (
    <div className="relative bg-white rounded-xl shadow animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-64 bg-gray-200 rounded-t-xl"></div>

      {/* Content Placeholder */}
      <div className="p-4">
        {/* Title Placeholder */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>

        {/* Rating and Time Placeholder */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="h-4 bg-gray-200 rounded w-12"></div>
            <div className="h-4 bg-gray-200 rounded w-8"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

const RecipeCard = ({ recipe }) => {
  const [isHovered, setIsHovered] = useState(false); // Default to false
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite); // State for toggling favorite

  const onToggleFavorite = (id) => {
    setIsFavorite((prev) => {
      const newState = !prev;

      // Show a toast notification
      if (newState) {
        toast.success("Added to Favorites!", {
          icon: "❤️",
          position: "top-center",
        });
      } else {
        toast.success("Removed from Favorites!", {
          position: "top-center",
        });
      }

      return newState;
    });
  };

  return (
    <div
      className="relative bg-white rounded-xl transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Dark overlay on image */}
        <div
          className={`
            absolute inset-0 bg-black rounded-xl transition-opacity duration-300
            ${isHovered ? "opacity-30" : "opacity-20"}
          `}
        />

        {/* Favorite Button */}
        <button
          className={`
            absolute top-2 right-4 z-10 
            flex items-center justify-center 
            w-10 h-10 bg-transparent rounded-full
            transition-all duration-300
          `}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(recipe.id); // Call the toggle function
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaHeart
            className={`text-2xl transition-colors ${
              isFavorite ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h5 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
          {recipe.name}
        </h5>

        {/* Rating and Author */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
          <div className="flex items-center space-x-1">
            <IoMdStar className="text-yellow-400" />
            <span>{recipe.rating}</span>
            <span>({recipe.reviewCount})</span>
          </div>
          <div>
            <span className="flex items-center space-x-1">
              <MdAccessTime className="mr-1" />{" "}
              {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
            </span>
          </div>
        </div>
      </div>

      {/* Full card clickable link */}
      <Link
        to={`/recipe/${recipe.id}`}
        className="absolute inset-0 z-0"
        aria-label={`View ${recipe.title}`}
      />
    </div>
  );
};
