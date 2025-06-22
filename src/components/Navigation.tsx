
import React from 'react';
import { Brain, Home, BookOpen, Zap, Users, GraduationCap, Play, Route } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative z-10 p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SoulSync</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/simulation" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/simulation') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Platform</span>
            </Link>
            <Link 
              to="/quickstart" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/quickstart') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Quick Start</span>
            </Link>
            <Link 
              to="/learning-paths" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/learning-paths') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Route className="w-4 h-4" />
              <span>Learning Paths</span>
            </Link>
            <Link 
              to="/learn" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/learn') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Learn</span>
            </Link>
            <Link 
              to="/tutorials" 
              className={`flex items-center space-x-1 transition-colors ${
                isActive('/tutorials') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Tutorials</span>
            </Link>
            <a 
              href="#" 
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Community</span>
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
