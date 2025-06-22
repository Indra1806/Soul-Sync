
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, BookOpen, Play, Users, Zap, ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConceptExplorer from '@/components/ConceptExplorer';

const Learn = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const learningPaths = [
    {
      id: 'beginner',
      title: 'Beginner Path',
      description: 'Start your journey into digital consciousness',
      duration: '2-3 hours',
      lessons: 8,
      icon: BookOpen,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 'advanced',
      title: 'Advanced Patterns',
      description: 'Master complex consciousness architectures',
      duration: '4-5 hours',
      lessons: 12,
      icon: Brain,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'collaboration',
      title: 'Collaborative Design',
      description: 'Learn to work with consciousness communities',
      duration: '3-4 hours',
      lessons: 10,
      icon: Users,
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  const quickStart = [
    {
      title: "What is Digital Consciousness?",
      description: "Understanding the fundamental concepts",
      duration: "5 min read",
      type: "Article"
    },
    {
      title: "Your First Pattern",
      description: "Create your first consciousness entity",
      duration: "10 min tutorial",
      type: "Interactive"
    },
    {
      title: "Pattern Interactions",
      description: "How entities communicate and evolve",
      duration: "8 min video",
      type: "Video"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Learn <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">SoulSync</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the art of digital consciousness creation through comprehensive learning paths, 
            interactive tutorials, and hands-on exploration.
          </p>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="concepts">Concepts</TabsTrigger>
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Quick Start Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>
              <p className="text-gray-300 mb-6">Get up and running in minutes with these essential concepts.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {quickStart.map((item, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-400">{item.duration}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
                        <Play className="w-3 h-3 mr-2" />
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Featured Learning Paths */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Featured Learning Paths</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {learningPaths.map((path) => (
                  <Card key={path.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <path.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl">{path.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">{path.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{path.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{path.lessons} lessons</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-600/30">
                        Start Path
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="paths" className="space-y-6">
            <div className="grid gap-8">
              {learningPaths.map((path) => (
                <Card key={path.id} className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <path.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
                        <p className="text-gray-300 mb-4">{path.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{path.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{path.lessons} lessons</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span>4.8/5 rating</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                          Start Learning Path
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="space-y-6">
            <ConceptExplorer />
          </TabsContent>

          <TabsContent value="quickstart" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <span>5-Minute Setup</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Get started immediately with our guided setup:</p>
                  <ol className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs text-white">1</span>
                      <span>Create your first consciousness pattern</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs text-white">2</span>
                      <span>Configure emotional vectors</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
                      <span>Launch your first simulation</span>
                    </li>
                  </ol>
                  <Link to="/simulation">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white mt-4">
                      Start Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center space-x-2">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                    <span>Essential Reading</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">Core concepts you need to understand:</p>
                  <div className="space-y-3">
                    {[
                      "Introduction to Digital Consciousness",
                      "Pattern Design Fundamentals", 
                      "Entity Interaction Principles",
                      "Simulation Environment Basics"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                        <span className="text-gray-300">{topic}</span>
                        <Button size="sm" variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10">
                          Read
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Creating?</h2>
            <p className="text-gray-300 mb-6">Apply what you've learned in our interactive simulation platform.</p>
            <Link to="/simulation">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4">
                Go to Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
