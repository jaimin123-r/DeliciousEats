import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiClock, FiHeart, FiUsers, FiCheck, FiUser, FiBookOpen, FiArrowLeft } from "react-icons/fi"; 
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const RecipeDetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  
  const id = window.location.pathname.split("/")[2];

  // Check if recipe is already liked when component mounts
  useEffect(() => {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes") || "[]");
    setIsLiked(likedRecipes.includes(id));
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setData(res.data);
      
      // Fetch suggestions but exclude current recipe
      const suggestionsRes = await axios.get("https://dummyjson.com/recipes?limit=6");
      const filteredSuggestions = suggestionsRes.data.recipes.filter(
        recipe => recipe.id.toString() !== id
      ).slice(0, 3); // Limit to 3 suggestions
      
      setSuggestions(filteredSuggestions);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Refetch when ID changes

  const handleLikeToggle = () => {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes") || "[]");
    
    if (isLiked) {
      // Remove from liked recipes
      const updatedLikedRecipes = likedRecipes.filter(recipeId => recipeId !== id);
      localStorage.setItem("likedRecipes", JSON.stringify(updatedLikedRecipes));
      toast.success("Recipe removed from favorites");
    } else {
      // Add to liked recipes
      likedRecipes.push(id);
      localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
      toast.success("Added to Favorites!", {
               icon: "❤️",
               position: "top-center",
           
             });
    }
    
    setIsLiked(!isLiked);
  };

  const splitIntoColumns = (ingredientList) => {
    if (!ingredientList) return [[], []];
    const midpoint = Math.ceil(ingredientList.length / 2);
    const firstColumn = ingredientList.slice(0, midpoint);
    const secondColumn = ingredientList.slice(midpoint);
    return [firstColumn, secondColumn];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <div className="text-red-500 text-xl mb-4">Error: {error}</div>
        <button 
          onClick={fetchData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const [firstColumnIngredients, secondColumnIngredients] = splitIntoColumns(data.ingredients);

  return (
    <div className="max-w-6xl mx-auto pb-10">
      {/* Back Button - Mobile & Tablet Only */}
      <div className="lg:hidden p-4">
        <Link to="/recipes" className="flex items-center text-blue-600">
          <FiArrowLeft className="mr-1" />
          <span>Back to recipes</span>
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Side: Image */}
          <div className="lg:col-span-5 relative">
            <div className=" w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600?text=Recipe+Image";
                }}
              />
            </div>
            
            {/* Mobile-only action buttons */}
            <div className="lg:hidden grid grid-cols-3 gap-2 mt-4">
              <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
                <FiClock size={24} className=" mb-1" />
                <span className="text-sm font-medium">{data.prepTimeMinutes + data.cookTimeMinutes} min</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg">
                <FiUsers size={24} className="mb-1" />
                <span className="text-sm font-medium">{data.servings} servings</span>
              </div>
              <button 
                onClick={handleLikeToggle}
                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
                  isLiked ? "bg-red-100" : "bg-gray-100 hover:bg-red-50"
                }`}
                aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
              >
                <FiHeart 
                  size={24} 
                  className={`mb-1 ${isLiked ? "text-red-500 fill-red-500" : "text-red-400"}`} 
                />
                <span className="text-sm font-medium">{isLiked ? "Liked" : "Like"}</span>
              </button>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="lg:col-span-7 flex flex-col mt-4 lg:mt-0">
            {/* Recipe Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4">{data.name}</h1>

            {/* Created by section */}
            {/* <div className="flex flex-wrap items-center mb-4 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center mr-6 mb-2 sm:mb-0">
                <FiUser className="text-indigo-500 mr-2" />
                <span className="text-gray-700 font-medium">Created by Alex Williamns</span>
              </div>
              <div className="flex items-center">
                <FiBookOpen className="text-indigo-500 mr-2" />
                <span className="text-gray-700 font-medium">21 recipes</span>
              </div>
            </div> */}

            {/* Details: Total Time, Servings, Like Button - Desktop Only */}
            <div className="hidden lg:grid grid-cols-3 gap-4 mb-4 mt-5">
              <div className="flex flex-col items-center justify-center bg-blue-50 p-4 rounded-lg">
                <FiClock size={28} className=" mb-1" />
                <span className="text-lg font-medium">{data.prepTimeMinutes + data.cookTimeMinutes} min</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-green-50 p-4 rounded-lg">
                <FiUsers size={28} className=" mb-1" />
                <span className="text-lg font-medium">{data.servings} servings</span>
              </div>
              <button 
                onClick={handleLikeToggle}
                className={`flex flex-col cursor-pointer items-center justify-center p-4 rounded-lg transition-colors ${
                  isLiked ? "bg-red-100" : "bg-gray-100 hover:bg-red-50"
                }`}
                aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
              >
                <FiHeart 
                  size={28} 
                  className={`mb-1 ${isLiked ? "text-red-500 fill-red-500" : "text-red-400"}`} 
                />
                <span className="text-lg font-medium">{isLiked ? "Liked" : "Like"}</span>
              </button>
            </div>

            {/* Ingredients with custom icons */}
            <div className="mb-6 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm mt-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Ingredients</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {/* First Column */}
                <div className="space-y-2">
                  {firstColumnIngredients.map((ingredient, index) => (
                    <div key={`first-${index}`} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
                
                {/* Second Column */}
                <div className="space-y-2">
                  {secondColumnIngredients.map((ingredient, index) => (
                    <div key={`second-${index}`} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Steps and Suggestions */}
      <div className="px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Steps with background and icons */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Steps</h3>
          <div className="space-y-3 sm:space-y-4">
            {data.instructions.map((instruction, index) => (
              <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg flex">
                <div className="bg-gray-800 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-gray-700">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {suggestions.map((suggestion, index) => (
                <Link to={`/recipe/${suggestion.id}`} key={index} className="block rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={suggestion.image}
                      alt={suggestion.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Recipe";
                      }}
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                      {suggestion.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2 text-xs sm:text-sm text-gray-600">
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {suggestion.prepTimeMinutes + suggestion.cookTimeMinutes} min
                      </span>
                      <span className="flex items-center">
                        <FiUsers className="mr-1" />
                        {suggestion.servings} servings
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetailPage;