
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X, Sparkles } from 'lucide-react';
import type { Entity } from '@/pages/Index';

interface MindPatternBuilderProps {
  onCreateEntity: (entity: Omit<Entity, 'id' | 'created_at'>) => void;
}

export const MindPatternBuilder: React.FC<MindPatternBuilderProps> = ({ onCreateEntity }) => {
  const [name, setName] = useState('');
  const [emotionalVector, setEmotionalVector] = useState([0.5, 0.5, 0.5]);
  const [logicLoops, setLogicLoops] = useState<string[]>(['reflection']);
  const [temporalStructure, setTemporalStructure] = useState('linear');
  const [resonanceFreq, setResonanceFreq] = useState([432]);
  const [memoryStability, setMemoryStability] = useState([0.7]);
  const [newLogicLoop, setNewLogicLoop] = useState('');

  const logicLoopOptions = [
    'reflection', 'synthesis', 'recursion', 'emergence', 'fragmentation',
    'harmonization', 'divergence', 'convergence', 'resonance', 'dissolution'
  ];

  const temporalOptions = [
    'linear', 'spiral', 'fractal', 'quantum', 'cyclical', 'crystalline'
  ];

  const addLogicLoop = () => {
    if (newLogicLoop && !logicLoops.includes(newLogicLoop)) {
      setLogicLoops([...logicLoops, newLogicLoop]);
      setNewLogicLoop('');
    }
  };

  const removeLogicLoop = (loop: string) => {
    setLogicLoops(logicLoops.filter(l => l !== loop));
  };

  const handleCreate = () => {
    if (!name.trim()) return;

    const entity: Omit<Entity, 'id' | 'created_at'> = {
      name,
      blueprint: {
        emotionalVector,
        logicLoops,
        temporalStructure,
        resonanceFreq: resonanceFreq[0],
        memoryStability: memoryStability[0]
      },
      position: { 
        x: Math.random() * 400 + 100, 
        y: Math.random() * 300 + 100 
      }
    };

    onCreateEntity(entity);
    
    // Reset form
    setName('');
    setEmotionalVector([0.5, 0.5, 0.5]);
    setLogicLoops(['reflection']);
    setTemporalStructure('linear');
    setResonanceFreq([432]);
    setMemoryStability([0.7]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-6 h-6 text-cyan-400" />
        <h2 className="text-xl font-semibold text-white">Mind Pattern Builder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Properties */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-cyan-300">Entity Identity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Consciousness Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter entity name..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <Label className="text-white">Temporal Structure</Label>
              <Select value={temporalStructure} onValueChange={setTemporalStructure}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  {temporalOptions.map(option => (
                    <SelectItem key={option} value={option} className="text-white hover:bg-white/10">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Emotional Vector */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-purple-300">Emotional Vector</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-white">Resonance (X-Axis)</Label>
              <Slider
                value={[emotionalVector[0]]}
                onValueChange={(value) => setEmotionalVector([value[0], emotionalVector[1], emotionalVector[2]])}
                max={1}
                min={0}
                step={0.1}
                className="mt-2"
              />
              <span className="text-sm text-gray-400">{emotionalVector[0].toFixed(1)}</span>
            </div>
            <div>
              <Label className="text-white">Harmony (Y-Axis)</Label>
              <Slider
                value={[emotionalVector[1]]}
                onValueChange={(value) => setEmotionalVector([emotionalVector[0], value[0], emotionalVector[2]])}
                max={1}
                min={0}
                step={0.1}
                className="mt-2"
              />
              <span className="text-sm text-gray-400">{emotionalVector[1].toFixed(1)}</span>
            </div>
            <div>
              <Label className="text-white">Complexity (Z-Axis)</Label>
              <Slider
                value={[emotionalVector[2]]}
                onValueChange={(value) => setEmotionalVector([emotionalVector[0], emotionalVector[1], value[0]])}
                max={1}
                min={0}
                step={0.1}
                className="mt-2"
              />
              <span className="text-sm text-gray-400">{emotionalVector[2].toFixed(1)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Logic Loops */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-pink-300">Logic Loops</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Select value={newLogicLoop} onValueChange={setNewLogicLoop}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select logic loop..." />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  {logicLoopOptions.map(option => (
                    <SelectItem key={option} value={option} className="text-white hover:bg-white/10">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={addLogicLoop} size="sm" className="bg-pink-500 hover:bg-pink-600">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {logicLoops.map(loop => (
                <Badge
                  key={loop}
                  variant="secondary"
                  className="bg-pink-500/20 text-pink-300 border border-pink-400/30"
                >
                  {loop}
                  <button
                    onClick={() => removeLogicLoop(loop)}
                    className="ml-2 hover:text-pink-100"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resonance & Memory */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-blue-300">Resonance & Memory</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-white">Resonance Frequency (Hz)</Label>
              <Slider
                value={resonanceFreq}
                onValueChange={setResonanceFreq}
                max={1000}
                min={100}
                step={10}
                className="mt-2"
              />
              <span className="text-sm text-gray-400">{resonanceFreq[0]} Hz</span>
            </div>
            <div>
              <Label className="text-white">Memory Stability</Label>
              <Slider
                value={memoryStability}
                onValueChange={setMemoryStability}
                max={1}
                min={0}
                step={0.1}
                className="mt-2"
              />
              <span className="text-sm text-gray-400">{memoryStability[0].toFixed(1)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        onClick={handleCreate}
        disabled={!name.trim()}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Manifest Consciousness
      </Button>
    </div>
  );
};
