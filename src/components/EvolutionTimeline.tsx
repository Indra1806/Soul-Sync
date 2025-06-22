
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap, Brain, Circle } from 'lucide-react';
import type { Entity, Interaction } from '@/pages/Index';

interface EvolutionTimelineProps {
  entities: Entity[];
  interactions: Interaction[];
}

export const EvolutionTimeline: React.FC<EvolutionTimelineProps> = ({ entities, interactions }) => {
  // Combine and sort events by timestamp
  const events = [
    ...entities.map(entity => ({
      type: 'entity' as const,
      timestamp: entity.created_at,
      data: entity
    })),
    ...interactions.map(interaction => ({
      type: 'interaction' as const,
      timestamp: interaction.created_at,
      data: interaction
    }))
  ].sort((a, b) => b.timestamp - a.timestamp);

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  const getEntityName = (id: string) => {
    return entities.find(e => e.id === id)?.name || 'Unknown Entity';
  };

  const interactionColors = {
    merge: 'from-green-400 to-emerald-600',
    resist: 'from-red-400 to-rose-600',
    harmonize: 'from-purple-400 to-violet-600',
    fragment: 'from-orange-400 to-amber-600',
    reflect: 'from-cyan-400 to-blue-600'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-pink-400" />
        <h2 className="text-xl font-semibold text-white">Evolution Timeline</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-400"></div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={`${event.type}-${event.timestamp}-${index}`} className="relative flex items-start space-x-4">
              {/* Timeline marker */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white/20 backdrop-blur-sm">
                {event.type === 'entity' ? (
                  <Brain className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Zap className="w-6 h-6 text-purple-400" />
                )}
              </div>

              {/* Event content */}
              <div className="flex-1 pb-8">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-4">
                    {event.type === 'entity' ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">
                            Consciousness Manifested
                          </h3>
                          <span className="text-sm text-gray-400">
                            {formatTimeAgo(event.timestamp)}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Circle 
                            className="w-4 h-4" 
                            style={{ color: `hsl(${event.data.blueprint.resonanceFreq / 3}, 70%, 50%)` }}
                            fill="currentColor"
                          />
                          <span className="text-cyan-300 font-medium">{event.data.name}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Resonance:</span>
                            <span className="text-white ml-2">{event.data.blueprint.resonanceFreq} Hz</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Memory Stability:</span>
                            <span className="text-white ml-2">{event.data.blueprint.memoryStability.toFixed(1)}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Temporal Structure:</span>
                            <span className="text-white ml-2 capitalize">{event.data.blueprint.temporalStructure}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Logic Patterns:</span>
                            <span className="text-white ml-2">{event.data.blueprint.logicLoops.length}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {event.data.blueprint.logicLoops.map((loop, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-cyan-400/30 text-cyan-300">
                              {loop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">
                            Consciousness Interaction
                          </h3>
                          <span className="text-sm text-gray-400">
                            {formatTimeAgo(event.timestamp)}
                          </span>
                        </div>

                        <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                          interactionColors[event.data.type as keyof typeof interactionColors] || 'from-gray-400 to-gray-600'
                        } text-white`}>
                          {event.data.type.charAt(0).toUpperCase() + event.data.type.slice(1)}
                        </div>

                        <div className="text-sm space-y-1">
                          <div>
                            <span className="text-gray-400">Source:</span>
                            <span className="text-purple-300 ml-2">{getEntityName(event.data.source_id)}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Target:</span>
                            <span className="text-purple-300 ml-2">{getEntityName(event.data.target_id)}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm italic">
                          "{event.data.summary}"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}

          {events.length === 0 && (
            <div className="text-center py-12">
              <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No events in the timeline yet.</p>
              <p className="text-sm text-gray-500 mt-2">
                Create entities and interactions to see the evolution of consciousness.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
