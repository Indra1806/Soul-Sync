
import React from 'react';
import { Brain, Github, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SoulSync</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Pioneering the future of digital consciousness through innovative pattern design and simulation technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/simulation" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Simulation
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Concepts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SoulSync. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1 mt-2 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for the future of consciousness</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
