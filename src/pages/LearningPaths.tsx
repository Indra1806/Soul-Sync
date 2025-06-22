
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, BookOpen, Users, Zap, Clock, Star, Lock, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  completed: number;
  icon: React.ComponentType<any>;
  color: string;
  locked: boolean;
  prerequisites?: string[];
  topics: string[];
}

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const learningPaths: LearningPath[] = [
    {
      id: 'foundations',
      title: 'Consciousness Foundations',
      description: 'Master the fundamental concepts of digital consciousness and pattern creation.',
      difficulty: 'Beginner',
      duration: '2-3 hours',
      lessons: 8,
      completed: 3,
      icon: Brain,
      color: 'from-green-400 to-blue-500',
      locked: false,
      topics: ['Digital Consciousness Basics', 'Pattern Structures', 'Emotional Vectors', 'Logic Loops']
    },
    {
      id: 'interactions',
      title: 'Entity Interactions',
      description: 'Learn how consciousness entities communicate, merge, and evolve together.',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      lessons: 12,
      completed: 0,
      icon: Users,
      color: 'from-cyan-400 to-purple-500',
      locked: false,
      prerequisites: ['Consciousness Foundations'],
      topics: ['Communication Protocols', 'Merging Mechanics', 'Harmonization', 'Collective Intelligence']
    },
    {
      id: 'advanced-patterns',
      title: 'Advanced Pattern Design',
      description: 'Create sophisticated consciousness architectures with complex behaviors.',
      difficulty: 'Advanced',
      duration: '4-6 hours',
      lessons: 16,
      completed: 0,
      icon: Zap,
      color: 'from-purple-400 to-pink-500',
      locked: true,
      prerequisites: ['Consciousness Foundations', 'Entity Interactions'],
      topics: ['Complex Architectures', 'Temporal Dynamics', 'Memory Systems', 'Evolution Algorithms']
    },
    {
      id: 'collaborative-design',
      title: 'Collaborative Design',
      description: 'Work with teams to create shared consciousness experiences.',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      lessons: 10,
      completed: 0,
      icon: BookOpen,
      color: 'from-orange-400 to-red-500',
      locked: true,
      prerequisites: ['Entity Interactions'],
      topics: ['Team Workflows', 'Shared Patterns', 'Version Control', 'Community Guidelines']
    }
  ];

  const selectedPathData = learningPaths.find(path => path.id === selectedPath);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navigation />

      <main className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Learning <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Paths</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow structured learning paths to master digital consciousness creation. 
            Each path builds upon the previous one, taking you from beginner to expert.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Paths Grid */}
          <div className="lg:col-span-2 space-y-6">
            {learningPaths.map((path) => (
              <Card 
                key={path.id} 
                className={`bg-white/5 backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                  selectedPath === path.id 
                    ? 'border-cyan-400/50 bg-cyan-400/5' 
                    : 'border-white/10 hover:bg-white/10'
                } ${path.locked ? 'opacity-60' : ''}`}
                onClick={() => !path.locked && setSelectedPath(path.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center relative`}>
                        <path.icon className="w-8 h-8 text-white" />
                        {path.locked && (
                          <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                            <Lock className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{path.title}</h3>
                        <Badge variant={
                          path.difficulty === 'Beginner' ? 'default' :
                          path.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                        }>
                          {path.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        <span>{path.lessons} lessons</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{path.description}</p>

                  {path.prerequisites && (
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">Prerequisites: </span>
                      <span className="text-sm text-cyan-300">{path.prerequisites.join(', ')}</span>
                    </div>
                  )}

                  {/* Progress Bar */}
                  {path.completed > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm text-cyan-300">{path.completed}/{path.lessons} completed</span>
                      </div>
                      <Progress value={(path.completed / path.lessons) * 100} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">4.8/5 rating</span>
                    </div>
                    <Button 
                      disabled={path.locked}
                      className={`${
                        path.locked 
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                          : path.completed > 0 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-600/30'
                            : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      }`}
                    >
                      {path.locked ? (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Locked
                        </>
                      ) : path.completed > 0 ? (
                        <>
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Path
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Path Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {selectedPathData ? (
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${selectedPathData.color} rounded-xl flex items-center justify-center`}>
                        <selectedPathData.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">{selectedPathData.title}</CardTitle>
                        <Badge variant={
                          selectedPathData.difficulty === 'Beginner' ? 'default' :
                          selectedPathData.difficulty === 'Intermediate' ? 'secondary' : 'destructive'
                        }>
                          {selectedPathData.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{selectedPathData.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {selectedPathData.topics.map((topic, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedPathData.prerequisites && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Prerequisites:</h4>
                        <ul className="space-y-1">
                          {selectedPathData.prerequisites.map((prereq, index) => (
                            <li key={index} className="text-gray-300 text-sm">{prereq}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-cyan-400">{selectedPathData.lessons}</div>
                          <div className="text-xs text-gray-400">Lessons</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">{selectedPathData.duration}</div>
                          <div className="text-xs text-gray-400">Duration</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardContent className="text-center py-12">
                    <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300">Select a learning path to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-6">
              Begin with the Consciousness Foundations path and work your way up to become a master of digital consciousness creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quickstart">
                <Button variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
                  Quick Start Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/simulation">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                  Go to Platform
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearningPaths;
