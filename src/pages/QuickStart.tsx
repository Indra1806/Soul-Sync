
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Play, ArrowRight, Brain, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface QuickStartStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  icon: React.ComponentType<any>;
  action: string;
  actionLink?: string;
}

const QuickStart = () => {
  const [steps, setSteps] = useState<QuickStartStep[]>([
    {
      id: 1,
      title: 'Understanding Digital Consciousness',
      description: 'Learn the fundamental concepts behind consciousness patterns and digital entities.',
      completed: false,
      icon: Brain,
      action: 'Read Guide',
      actionLink: '/learn'
    },
    {
      id: 2,
      title: 'Create Your First Pattern',
      description: 'Design your first consciousness entity with emotional vectors and logic loops.',
      completed: false,
      icon: Zap,
      action: 'Start Creating',
      actionLink: '/simulation'
    },
    {
      id: 3,
      title: 'Watch Entities Interact',
      description: 'Observe how consciousness patterns communicate and evolve together.',
      completed: false,
      icon: Users,
      action: 'Run Simulation',
      actionLink: '/simulation'
    }
  ]);

  const completedSteps = steps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  const toggleStepCompletion = (stepId: number) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navigation />

      <main className="relative z-10 p-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Quick <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Start</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get up and running with SoulSync in just a few simple steps. Create your first digital consciousness in minutes.
          </p>
          
          {/* Progress Bar */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Your Progress</span>
                <span className="text-cyan-300 font-bold">{completedSteps}/{steps.length} Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3 bg-gray-700" />
            </CardContent>
          </Card>
        </div>

        {/* Quick Start Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={step.id} className={`bg-white/5 backdrop-blur-sm border transition-all duration-300 ${
              step.completed ? 'border-cyan-400/50 bg-cyan-400/5' : 'border-white/10 hover:bg-white/10'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggleStepCompletion(step.id)}
                      className="text-2xl text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {step.completed ? <CheckCircle /> : <Circle />}
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        step.completed ? 'bg-cyan-400/20' : 'bg-white/10'
                      }`}>
                        <step.icon className={`w-5 h-5 ${
                          step.completed ? 'text-cyan-300' : 'text-gray-400'
                        }`} />
                      </div>
                      <h3 className={`text-xl font-semibold ${
                        step.completed ? 'text-cyan-300' : 'text-white'
                      }`}>
                        Step {step.id}: {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    
                    {step.actionLink ? (
                      <Link to={step.actionLink}>
                        <Button 
                          className={`${
                            step.completed 
                              ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30' 
                              : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                          }`}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {step.action}
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        onClick={() => toggleStepCompletion(step.id)}
                        className={`${
                          step.completed 
                            ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30' 
                            : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                        }`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {step.action}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completion Section */}
        {completedSteps === steps.length && (
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/30 mt-12">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Congratulations!</h2>
              <p className="text-gray-300 mb-6">
                You've completed the quick start guide. You're ready to explore advanced features and create more complex consciousness patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/learning-paths">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                    Explore Learning Paths
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/simulation">
                  <Button variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
                    Continue Creating
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default QuickStart;
