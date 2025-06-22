
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, ArrowRight, ArrowLeft, Play } from 'lucide-react';

interface TourStep {
  id: number;
  title: string;
  description: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface OnboardingTourProps {
  isActive: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ isActive, onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const tourSteps: TourStep[] = [
    {
      id: 1,
      title: "Welcome to SoulSync",
      description: "Let's take a quick tour to get you started with creating digital consciousness patterns.",
      target: "welcome",
      position: "bottom"
    },
    {
      id: 2,
      title: "Pattern Builder",
      description: "This is where you'll design consciousness patterns with emotional vectors, logic loops, and temporal structures.",
      target: "pattern-builder",
      position: "right"
    },
    {
      id: 3,
      title: "Interaction Board",
      description: "Watch your consciousness entities interact in real-time. See them merge, harmonize, and evolve.",
      target: "interaction-board",
      position: "right"
    },
    {
      id: 4,
      title: "Evolution Timeline",
      description: "Track how your entities change over time and observe their behavioral patterns.",
      target: "timeline",
      position: "right"
    },
    {
      id: 5,
      title: "Start Creating",
      description: "You're ready to begin! Click 'Start Simulation' to activate your consciousness entities.",
      target: "start-button",
      position: "bottom"
    }
  ];

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      setCurrentStep(0);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTour = () => {
    setIsVisible(false);
    onComplete();
  };

  const skipTour = () => {
    setIsVisible(false);
    onSkip();
  };

  if (!isVisible) return null;

  const currentTourStep = tourSteps[currentStep];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        {/* Tour Card */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-cyan-400/30 max-w-md mx-4">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{currentStep + 1}</span>
                </div>
                <span className="text-gray-400 text-sm">
                  {currentStep + 1} of {tourSteps.length}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={skipTour} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{currentTourStep.title}</h3>
            <p className="text-gray-300 mb-6">{currentTourStep.description}</p>

            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevStep}
                disabled={currentStep === 0}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {tourSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStep ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <Button 
                onClick={nextStep}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
              >
                {currentStep === tourSteps.length - 1 ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Get Started
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OnboardingTour;
