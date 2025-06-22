
import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/simulation', label: 'Platform' },
    { path: '/quickstart', label: 'Quick Start' },
    { path: '/learning-paths', label: 'Learning Paths' },
    { path: '/learn', label: 'Learn' },
    { path: '/tutorials', label: 'Tutorials' },
    { path: '/tour', label: 'Demo' },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:bg-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SoulSync</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <nav className="p-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-cyan-400/20 text-cyan-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-6 space-y-3 border-t border-white/10">
                <Button variant="outline" className="w-full border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
