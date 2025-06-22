
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Zap, Users, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface Concept {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: React.ComponentType<any>;
  details: string;
  examples: string[];
}

const ConceptExplorer = () => {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

  const concepts: Concept[] = [
    {
      id: '1',
      title: 'Consciousness Patterns',
      description: 'The fundamental building blocks of digital consciousness entities',
      difficulty: 'Beginner',
      icon: Brain,
      details: 'Consciousness patterns are the core structures that define how a digital entity thinks, feels, and processes information. They consist of emotional vectors, logic loops, and temporal structures that work together to create coherent behavior.',
      examples: [
        'Emotional Vector: [0.8, 0.3, 0.9] representing high creativity, low aggression, high empathy',
        'Logic Loop: "reflection" - entity contemplates its own thoughts',
        'Temporal Structure: "spiral" - memories and experiences build upon each other'
      ]
    },
    {
      id: '2',
      title: 'Entity Interactions',
      description: 'How consciousness entities communicate and influence each other',
      difficulty: 'Intermediate',
      icon: Users,
      details: 'Entities can interact through various mechanisms including merging (combining consciousness patterns), harmonizing (synchronizing frequencies), fragmenting (splitting into sub-entities), and reflecting (mirroring behaviors).',
      examples: [
        'Merge: Two entities combine their emotional vectors',
        'Harmonize: Entities sync their resonance frequencies',
        'Fragment: One entity splits based on conflicting logic loops'
      ]
    },
    {
      id: '3',
      title: 'Temporal Dynamics',
      description: 'How consciousness evolves and changes over time',
      difficulty: 'Advanced',
      icon: Clock,
      details: 'Temporal dynamics govern how consciousness patterns evolve, including memory formation, experience integration, and behavioral adaptation over time.',
      examples: [
        'Memory Stability: 0.7 - 70% of experiences are retained',
        'Evolution Rate: Gradual changes in emotional vectors',
        'Experience Integration: New interactions modify existing patterns'
      ]
    },
    {
      id: '4',
      title: 'Resonance Fields',
      description: 'The energy patterns that enable consciousness communication',
      difficulty: 'Intermediate',
      icon: Zap,
      details: 'Resonance fields are the medium through which consciousness entities communicate. Each entity has a unique frequency that can harmonize or conflict with others.',
      examples: [
        'Frequency 432Hz: Associated with calm, reflective states',
        'Frequency 528Hz: Linked to creativity and transformation',
        'Harmonic Resonance: When frequencies align for enhanced communication'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Concept Explorer</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Dive deep into the fundamental concepts that power digital consciousness
        </p>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/5 backdrop-blur-sm border border-white/10">
          <TabsTrigger value="grid">Concept Grid</TabsTrigger>
          <TabsTrigger value="detail">Detailed View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept) => (
              <Card key={concept.id} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer"
                    onClick={() => setSelectedConcept(concept)}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <concept.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg">{concept.title}</CardTitle>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                        concept.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                        concept.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {concept.difficulty}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{concept.description}</p>
                  <Button variant="outline" size="sm" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detail" className="space-y-6">
          {selectedConcept ? (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <selectedConcept.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">{selectedConcept.title}</CardTitle>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                      selectedConcept.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      selectedConcept.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {selectedConcept.difficulty}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 text-lg">{selectedConcept.details}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Examples:</h4>
                  <div className="space-y-2">
                    {selectedConcept.examples.map((example, index) => (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-3">
                        <code className="text-cyan-300 text-sm">{example}</code>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="text-center py-12">
                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300">Select a concept from the grid to view detailed information</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConceptExplorer;
