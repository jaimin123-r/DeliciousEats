import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Search } from 'lucide-react';

const Sidebar = ({ categories, difficulties, activeFilters, handleFilterChange, handleSortChange }) => {
  const [collapsedSections, setCollapsedSections] = useState({
    dishType: true,
    mealType: true,
    dietHealth: true,
    worldCuisine: true,
    seasonal: true,
  });

  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Relevance');

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSortOptionChange = (option) => {
    setSelectedSort(option);
    handleSortChange(option);
    setSortOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="mb-6 relative">
        <button
          className="w-full flex justify-between items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setSortOpen(!sortOpen)}
        >
          <span>{selectedSort}</span>
          {sortOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {sortOpen && (
          <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() =>{
                setSortOpen(false)
                 handleSortOptionChange('Relevance')
              } }
            >
              Relevance
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setSortOpen(false)
                handleSortOptionChange('Cooking Time')
              }}
            >
              Cooking Time
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                setSortOpen(false)
                handleSortOptionChange('Popularity')
              }}
            >
              Popularity
            </button>
          </div>
        )}
      </div>

      {/* Filters Header */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3 flex items-center">
          <Filter size={18} className="mr-2" />
          Filters
        </h3>

        {/* Collapsible Sidebar Sections */}
        <div className="mb-4">
          <h4
            className="font-medium flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('dishType')}
          >
            Difficulty
            {collapsedSections.dishType ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </h4>
          {!collapsedSections.dishType && (
            <ul className="space-y-2">
              <li><Link to="/recipes/appetizers-snacks" className="text-gray-700 hover:underline"> Easy</Link></li>
              <li><Link to="/recipes/bread" className="text-gray-700 hover:underline">Medium</Link></li>
              <li><Link to="/recipes/cake" className="text-gray-700 hover:underline">Hard</Link></li>
             
            </ul>
          )}
        </div>

        <div className="mb-4">
          <h4
            className="font-medium flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('mealType')}
          >
            Meal Type
            {collapsedSections.mealType ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </h4>
          {!collapsedSections.mealType && (
            <ul className="space-y-2">
              <li><Link to="/recipes/breakfast-brunch" className="text-gray-700 hover:underline">Breakfast and Brunch</Link></li>
              <li><Link to="/recipes/desserts" className="text-gray-700 hover:underline">Desserts</Link></li>
              <li><Link to="/recipes/dinners" className="text-gray-700 hover:underline">Dinners</Link></li>
              <li><Link to="/recipes/lunch" className="text-gray-700 hover:underline">Lunch</Link></li>
            </ul>
          )}
        </div>

     

        <div className="mb-4">
          <h4
            className="font-medium flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('worldCuisine')}
          >
            World Cuisine
            {collapsedSections.worldCuisine ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </h4>
          {!collapsedSections.worldCuisine && (
            <ul className="space-y-2">
              <li><Link to="/recipes/chinese" className="text-gray-700 hover:underline">Chinese</Link></li>
              <li><Link to="/recipes/indian" className="text-gray-700 hover:underline">Indian</Link></li>
              <li><Link to="/recipes/italian" className="text-gray-700 hover:underline">Italian</Link></li>
              <li><Link to="/recipes/mexican" className="text-gray-700 hover:underline">Mexican</Link></li>
            </ul>
          )}
        </div>

           <div className="mb-4">
          <h4
            className="font-medium flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggleSection('dietHealth')}
          >
            Rating 
            {collapsedSections.dietHealth ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </h4>
          {!collapsedSections.dietHealth && (
            <ul className="space-y-2">
              <li><Link to="/recipes/diabetic" className="text-gray-700 hover:underline">4.5 and above</Link></li>
              <li><Link to="/recipes/gluten-free" className="text-gray-700 hover:underline">3.5 and above</Link></li>
              <li><Link to="/recipes/high-fiber" className="text-gray-700 hover:underline">2.5 and above</Link></li>
              <li><Link to="/recipes/low-calorie" className="text-gray-700 hover:underline">1.5 and above</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;