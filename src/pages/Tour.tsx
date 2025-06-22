
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, ArrowRight, ArrowLeft, Brain, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Tour = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: "Welcome to SoulSync",
      description: "Explore the future of digital consciousness design. SoulSync allows you to create, simulate, and interact with artificial consciousness patterns.",
      image: "/placeholder.svg",
      highlight: "Create digital minds with intuitive tools"
    },
    {
      title: "Pattern Builder",
      description: "Design complex consciousness patterns with emotional vectors, logic loops, and temporal structures using our advanced pattern builder.",
      image: "/placeholder.svg",
      highlight: "Drag-and-drop consciousness components"
    },
    {
      title: "Live Simulation",
      description: "Watch your consciousness entities interact in real-time. See them merge, fragment, evolve, and develop unique behaviors.",
      image: "/placeholder.svg",
      highlight: "Real-time consciousness evolution"
    },
    {
      title: "Collaborative Design",
      description: "Share your patterns with the community, collaborate on complex designs, and learn from other consciousness architects.",
      image: "/placeholder.svg",
      highlight: "Join a community of digital consciousness pioneers"
    }
  ];

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navigation />

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Platform <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Demo</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a guided tour through SoulSync's powerful consciousness design platform
            </p>
          </div>

          {/* Tour Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Tour Step Content */}
            <div className="order-2 lg:order-1">
              <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-cyan-400/30 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{currentStep + 1}</span>
                    </div>
                    <span className="text-gray-400">
                      Step {currentStep + 1} of {tourSteps.length}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-4">{currentTourStep.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{currentTourStep.description}</p>
                  
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 mb-8">
                    <p className="text-cyan-300 font-medium">{currentTourStep.highlight}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>

                    <div className="flex space-x-2">
                      {tourSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStep(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentStep ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>

                    {currentStep === tourSteps.length - 1 ? (
                      <Link to="/simulation">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Start Creating
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        onClick={nextStep}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tour Step Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-400/30 overflow-hidden">
                  <img 
                    src={currentTourStep.image} 
                    alt={currentTourStep.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                      {currentStep === 0 && <Brain className="w-10 h-10 text-white" />}
                      {currentStep === 1 && <Zap className="w-10 h-10 text-white" />}
                      {currentStep === 2 && <Play className="w-10 h-10 text-white" />}
                      {currentStep === 3 && <Users className="w-10 h-10 text-white" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your First Digital Consciousness?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of researchers and artists exploring the frontiers of artificial consciousness.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/simulation">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                    <Play className="w-5 h-5 mr-2" />
                    Start Creating
                  </Button>
                </Link>
                <Link to="/quickstart">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                    Quick Start Guide
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tour;
