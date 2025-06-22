
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, Zap, Circle } from 'lucide-react';
import type { Entity, Interaction } from '@/pages/Index';

interface EntityInteractionBoardProps {
  entities: Entity[];
  interactions: Interaction[];
  onInteraction: (interaction: Omit<Interaction, 'id' | 'created_at'>) => void;
  selectedEntity: Entity | null;
  onSelectEntity: (entity: Entity | null) => void;
  simulationActive: boolean;
}

export const EntityInteractionBoard: React.FC<EntityInteractionBoardProps> = ({
  entities,
  interactions,
  onInteraction,
  selectedEntity,
  onSelectEntity,
  simulationActive
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [targetEntity, setTargetEntity] = useState<string>('');
  const [interactionType, setInteractionType] = useState<string>('');
  const animationRef = useRef<number>();

  const interactionTypes = [
    { value: 'merge', label: 'Merge Consciousness', color: '#10b981' },
    { value: 'resist', label: 'Resist Pattern', color: '#ef4444' },
    { value: 'harmonize', label: 'Harmonize Frequency', color: '#8b5cf6' },
    { value: 'fragment', label: 'Fragment Reality', color: '#f59e0b' },
    { value: 'reflect', label: 'Reflect Truth', color: '#06b6d4' }
  ];

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection lines
      interactions.forEach(interaction => {
        const source = entities.find(e => e.id === interaction.source_id);
        const target = entities.find(e => e.id === interaction.target_id);
        
        if (source && target) {
          const interactionColor = interactionTypes.find(t => t.value === interaction.type)?.color || '#ffffff';
          
          ctx.strokeStyle = interactionColor + '40';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 10]);
          
          ctx.beginPath();
          ctx.moveTo(source.position.x, source.position.y);
          ctx.lineTo(target.position.x, target.position.y);
          ctx.stroke();
        }
      });

      // Draw entities
      entities.forEach(entity => {
        const x = entity.position.x;
        const y = entity.position.y;
        const isSelected = selectedEntity?.id === entity.id;
        
        // Entity glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
        gradient.addColorStop(0, `hsl(${entity.blueprint.resonanceFreq / 3}, 70%, 60%)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - 40, y - 40, 80, 80);
        
        // Entity core
        ctx.fillStyle = isSelected ? '#ffffff' : `hsl(${entity.blueprint.resonanceFreq / 3}, 70%, 50%)`;
        ctx.beginPath();
        ctx.arc(x, y, isSelected ? 15 : 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulsing animation
        if (simulationActive) {
          const pulseSize = Math.sin(Date.now() / 1000 + entity.id.charCodeAt(0)) * 5 + 20;
          ctx.strokeStyle = `hsl(${entity.blueprint.resonanceFreq / 3}, 70%, 50%)40`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [entities, interactions, selectedEntity, simulationActive]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find clicked entity
    const clickedEntity = entities.find(entity => {
      const dx = x - entity.position.x;
      const dy = y - entity.position.y;
      return Math.sqrt(dx * dx + dy * dy) < 20;
    });

    onSelectEntity(clickedEntity || null);
  };

  const handleInteraction = () => {
    if (!selectedEntity || !targetEntity || !interactionType) return;

    const interactionTypeData = interactionTypes.find(t => t.value === interactionType);
    
    // Generate AI-like summary
    const summaries = {
      merge: "Consciousness patterns converged into unified resonance field",
      resist: "Temporal barriers erected, pattern rejection manifested",
      harmonize: "Frequencies aligned across dimensional boundaries",
      fragment: "Reality shards dispersed through quantum probability",
      reflect: "Truth echoes reverberated through memory crystalline"
    };

    onInteraction({
      source_id: selectedEntity.id,
      target_id: targetEntity,
      type: interactionType as any,
      summary: summaries[interactionType as keyof typeof summaries] || "Unknown interaction occurred"
    });

    // Reset selection
    setTargetEntity('');
    setInteractionType('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">Entity Interaction Board</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Interaction Canvas */}
        <div className="lg:col-span-2">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-purple-300">Consciousness Field</CardTitle>
            </CardHeader>
            <CardContent>
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="w-full h-96 cursor-pointer rounded-lg bg-black/20"
                style={{ minHeight: '400px' }}
              />
              <p className="text-sm text-gray-400 mt-2">
                Click on entities to select them. Watch consciousness patterns evolve in real-time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          {/* Selected Entity */}
          {selectedEntity && (
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-cyan-300">Selected Entity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-white">{selectedEntity.name}</h3>
                  <p className="text-sm text-gray-400">Resonance: {selectedEntity.blueprint.resonanceFreq} Hz</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedEntity.blueprint.logicLoops.map(loop => (
                    <Badge key={loop} variant="outline" className="text-xs">
                      {loop}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <p>Memory Stability: {selectedEntity.blueprint.memoryStability.toFixed(1)}</p>
                  <p>Temporal: {selectedEntity.blueprint.temporalStructure}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Interaction Controls */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-pink-300">Create Interaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-white">Target Entity</label>
                <Select value={targetEntity} onValueChange={setTargetEntity}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select target..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/20">
                    {entities
                      .filter(e => e.id !== selectedEntity?.id)
                      .map(entity => (
                        <SelectItem key={entity.id} value={entity.id} className="text-white hover:bg-white/10">
                          {entity.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-white">Interaction Type</label>
                <Select value={interactionType} onValueChange={setInteractionType}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select type..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/20">
                    {interactionTypes.map(type => (
                      <SelectItem key={type.value} value={type.value} className="text-white hover:bg-white/10">
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleInteraction}
                disabled={!selectedEntity || !targetEntity || !interactionType}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                <Zap className="w-4 h-4 mr-2" />
                Initiate Interaction
              </Button>
            </CardContent>
          </Card>

          {/* Entity List */}
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
            <CardHeader>
              <CardTitle className="text-blue-300">Active Entities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {entities.map(entity => (
                  <div
                    key={entity.id}
                    onClick={() => onSelectEntity(entity)}
                    className={`p-2 rounded cursor-pointer transition-colors ${
                      selectedEntity?.id === entity.id
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Circle 
                        className="w-3 h-3" 
                        style={{ color: `hsl(${entity.blueprint.resonanceFreq / 3}, 70%, 50%)` }}
                        fill="currentColor"
                      />
                      <span className="text-sm text-white">{entity.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
