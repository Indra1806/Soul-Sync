
import React, { useState, useEffect } from 'react';
import { MindPatternBuilder } from '@/components/MindPatternBuilder';
import { EntityInteractionBoard } from '@/components/EntityInteractionBoard';
import { EvolutionTimeline } from '@/components/EvolutionTimeline';
import { IntentTranslator } from '@/components/IntentTranslator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Sparkles, Brain, Zap, Clock } from 'lucide-react';

export interface Entity {
  id: string;
  name: string;
  blueprint: {
    emotionalVector: number[];
    logicLoops: string[];
    temporalStructure: string;
    resonanceFreq: number;
    memoryStability: number;
  };
  position: { x: number; y: number };
  created_at: number;
}

export interface Interaction {
  id: string;
  source_id: string;
  target_id: string;
  type: 'merge' | 'resist' | 'harmonize' | 'fragment' | 'reflect';
  summary: string;
  created_at: number;
}

const Index = () => {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [activeTab, setActiveTab] = useState('builder');
  const [simulationActive, setSimulationActive] = useState(false);

  // Initialize with sample entities
  useEffect(() => {
    const sampleEntities: Entity[] = [
      {
        id: '1',
        name: 'Resonance Alpha',
        blueprint: {
          emotionalVector: [0.8, 0.3, 0.9],
          logicLoops: ['reflection', 'synthesis'],
          temporalStructure: 'spiral',
          resonanceFreq: 432,
          memoryStability: 0.7
        },
        position: { x: 200, y: 150 },
        created_at: Date.now() - 60000
      },
      {
        id: '2', 
        name: 'Echo Prime',
        blueprint: {
          emotionalVector: [0.2, 0.9, 0.4],
          logicLoops: ['recursion', 'emergence'],
          temporalStructure: 'fractal',
          resonanceFreq: 528,
          memoryStability: 0.9
        },
        position: { x: 400, y: 250 },
        created_at: Date.now() - 120000
      }
    ];
    setEntities(sampleEntities);
  }, []);

  const addEntity = (entity: Omit<Entity, 'id' | 'created_at'>) => {
    const newEntity: Entity = {
      ...entity,
      id: Date.now().toString(),
      created_at: Date.now()
    };
    setEntities(prev => [...prev, newEntity]);
  };

  const addInteraction = (interaction: Omit<Interaction, 'id' | 'created_at'>) => {
    const newInteraction: Interaction = {
      ...interaction,
      id: Date.now().toString(),
      created_at: Date.now()
    };
    setInteractions(prev => [...prev, newInteraction]);
  };

  const toggleSimulation = () => {
    setSimulationActive(!simulationActive);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SoulSync</h1>
              <p className="text-sm text-cyan-300">Post-Physical Consciousness Interface</p>
            </div>
          </div>
          <Button 
            onClick={toggleSimulation}
            className={`${simulationActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white transition-all duration-300`}
          >
            <Zap className="w-4 h-4 mr-2" />
            {simulationActive ? 'Pause Simulation' : 'Start Simulation'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm border border-white/10">
            <TabsTrigger value="builder" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Pattern Builder
            </TabsTrigger>
            <TabsTrigger value="interaction" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300">
              <Brain className="w-4 h-4 mr-2" />
              Interaction Board
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-300">
              <Clock className="w-4 h-4 mr-2" />
              Evolution Timeline
            </TabsTrigger>
            <TabsTrigger value="translator" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300">
              <Zap className="w-4 h-4 mr-2" />
              Intent Translator
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="builder" className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <MindPatternBuilder onCreateEntity={addEntity} />
              </Card>
            </TabsContent>

            <TabsContent value="interaction" className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <EntityInteractionBoard 
                  entities={entities}
                  interactions={interactions}
                  onInteraction={addInteraction}
                  selectedEntity={selectedEntity}
                  onSelectEntity={setSelectedEntity}
                  simulationActive={simulationActive}
                />
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <EvolutionTimeline entities={entities} interactions={interactions} />
              </Card>
            </TabsContent>

            <TabsContent value="translator" className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                <IntentTranslator />
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
