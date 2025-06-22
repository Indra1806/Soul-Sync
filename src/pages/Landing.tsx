
import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Users, Zap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SoulSync</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/simulation" className="text-gray-300 hover:text-white transition-colors">
              Platform
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors">
              Tutorials
            </Link>
            <Button variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Post-Physical Consciousness Interface</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Design & Simulate
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Digital Consciousness
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create, evolve, and interact with artificial consciousness patterns in our advanced simulation environment. 
              Build the future of digital minds with SoulSync's intuitive pattern builder and interaction platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/simulation">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Pattern Builder</h3>
              <p className="text-gray-300">
                Design complex consciousness patterns with emotional vectors, logic loops, and temporal structures using our intuitive interface.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Live Simulation</h3>
              <p className="text-gray-300">
                Watch consciousness entities interact in real-time with dynamic behaviors, merging, fragmenting, and evolving autonomously.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Design</h3>
              <p className="text-gray-300">
                Share your consciousness designs with the community, collaborate on complex patterns, and learn from others.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Shape Digital Consciousness?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers, artists, and visionaries exploring the frontiers of artificial consciousness.
            </p>
            <Link to="/simulation">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-4 text-lg">
                Begin Your Journey
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
