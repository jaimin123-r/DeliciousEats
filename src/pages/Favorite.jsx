import React from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
  return (
    <div className="h-[400px] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-[#22181C] mb-8 text-center">
        Please Login to View Favorites
      </h1>

      <div className="flex flex-col space-y-4">
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
      </div>
    </div>
  );
};

export default Favorite;
