import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
import RecipeDetailPage from './pages/RecipeDetailPage';
import Favorite from './pages/Favorite';
import Login from './common/Login';
import Signup from './common/Signup';
import { Toaster } from 'react-hot-toast';

// Main component that toggles between login and signup
function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <Login onSwitchToSignup={() => setIsLogin(false)} />
        ) : (
          <Signup onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Toaster - Ensure it's rendered at the top level */}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Header - Fixed height and sticky */}
        <Header className="sticky top-0 z-50" />

        {/* Main Content - Flexible height */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/login" 
              element={
                <div className="min-h-[calc(100vh-4rem)]"> 
                  <AuthPages />
                </div>
              } 
            />
            <Route 
              path="/signup" 
              element={
                <div className="min-h-[calc(100vh-4rem)]"> 
                  <AuthPages />
                </div>
              } 
            />
            <Route 
              path="/" 
              element={
                <div className="min-h-[calc(100vh-4rem)]"> 
                  <Home />
                </div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <div className="min-h-[calc(100vh-4rem)]">
                  <About />
                </div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <div className="min-h-[calc(100vh-4rem)]">
                  <Contact />
                </div>
              } 
            />
            <Route 
              path="/recipes" 
              element={
                <div className="min-h-[calc(100vh-4rem)]">
                  <Recipe />
                </div>
              } 
            />
            <Route 
              path="/favorites" 
              element={
                <div className="min-h-[calc(100vh-4rem)]">
                  <Favorite/>
                </div>
              } 
            />
            <Route 
              path="/recipe/:id" 
              element={
                <div className="min-h-[calc(100vh-4rem)]">
                  <RecipeDetailPage />
                </div>
              } 
            />
          </Routes>
        </main>

        {/* Footer - Fixed height */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;