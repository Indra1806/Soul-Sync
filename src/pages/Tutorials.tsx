
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Play, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with SoulSync",
      description: "Learn the basics of creating your first consciousness pattern",
      duration: "10 min",
      level: "Beginner",
      icon: Brain,
      color: "from-cyan-400 to-blue-600"
    },
    {
      id: 2,
      title: "Advanced Pattern Design",
      description: "Master complex emotional vectors and logic loops",
      duration: "25 min",
      level: "Advanced",
      icon: Brain,
      color: "from-purple-400 to-pink-600"
    },
    {
      id: 3,
      title: "Entity Interactions",
      description: "Understanding how consciousness entities communicate",
      duration: "15 min",
      level: "Intermediate",
      icon: Users,
      color: "from-pink-400 to-red-600"
    }
  ];

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
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SoulSync</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/simulation" className="text-gray-300 hover:text-white transition-colors">
              Platform
            </Link>
            <Button variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Learn <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">SoulSync</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the art of digital consciousness creation with our comprehensive tutorials and guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-r ${tutorial.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tutorial.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                    tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {tutorial.level}
                  </span>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-600/30">
                  <Play className="w-4 h-4 mr-2" />
                  Start Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create?</h2>
            <p className="text-gray-300 mb-6">Jump into the platform and start building your first consciousness pattern.</p>
            <Link to="/simulation">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4">
                Go to Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tutorials;
