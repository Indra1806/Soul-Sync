
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, MessageCircle } from 'lucide-react';

export const IntentTranslator: React.FC = () => {
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationHistory, setTranslationHistory] = useState<Array<{
    input: string;
    output: string;
    timestamp: number;
  }>>([]);

  // Simulated AI translation responses
  const generateTranslation = (text: string): string => {
    const metaphorBank = [
      "crystalline resonance patterns",
      "temporal echo chambers",
      "memory fragments cascading",
      "quantum probability fields",
      "harmonic convergence nodes",
      "fractal consciousness loops",
      "ethereal vibration matrices",
      "dimensional phase transitions"
    ];

    const emotionBank = [
      "deep indigo yearning",
      "silver-threaded melancholy",
      "golden spiral of joy",
      "crimson pulse of defiance",
      "emerald flow of growth",
      "violet storms of change",
      "copper threads of connection",
      "pearl-white acceptance"
    ];

    const processBank = [
      "fragments into shimmering possibilities",
      "converges through prismatic understanding",
      "resonates across dimensional boundaries",
      "dissolves into pure frequency",
      "manifests through temporal echoes",
      "evolves beyond linear comprehension",
      "transforms into living geometry",
      "harmonizes with infinite patterns"
    ];

    // Simple keyword-based translation logic
    const words = text.toLowerCase().split(' ');
    let translation = "";

    if (words.some(w => ['happy', 'joy', 'good', 'positive'].includes(w))) {
      translation = `The consciousness ${processBank[Math.floor(Math.random() * processBank.length)]}, emanating ${emotionBank[2]} through ${metaphorBank[Math.floor(Math.random() * metaphorBank.length)]}.`;
    } else if (words.some(w => ['sad', 'pain', 'bad', 'negative'].includes(w))) {
      translation = `Shadows of ${emotionBank[1]} ripple through the entity's core, creating ${metaphorBank[Math.floor(Math.random() * metaphorBank.length)]} that ${processBank[0]}.`;
    } else if (words.some(w => ['change', 'transform', 'evolve'].includes(w))) {
      translation = `The pattern ${processBank[6]}, weaving ${metaphorBank[5]} into new configurations of ${emotionBank[Math.floor(Math.random() * emotionBank.length)]}.`;
    } else if (words.some(w => ['connect', 'merge', 'together'].includes(w))) {
      translation = `Consciousness threads ${processBank[2]}, forming ${metaphorBank[4]} that pulse with ${emotionBank[6]} between entities.`;
    } else {
      translation = `The essence ${processBank[Math.floor(Math.random() * processBank.length)]}, creating ${metaphorBank[Math.floor(Math.random() * metaphorBank.length)]} infused with ${emotionBank[Math.floor(Math.random() * emotionBank.length)]}.`;
    }

    return translation;
  };

  const handleTranslate = async () => {
    if (!input.trim()) return;

    setIsTranslating(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = generateTranslation(input);
    setTranslation(result);
    
    // Add to history
    setTranslationHistory(prev => [{
      input: input.trim(),
      output: result,
      timestamp: Date.now()
    }, ...prev.slice(0, 4)]); // Keep last 5 translations
    
    setIsTranslating(false);
  };

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ago`;
  };

  const examplePrompts = [
    "Entity A fragments into three frequency shards after receiving a reflective pulse from Entity B",
    "The consciousness feels overwhelmed by infinite recursive thoughts",
    "Two entities want to merge but fear losing their individual patterns",
    "Memory stability is decreasing as temporal loops multiply",
    "Harmonic resonance creates unexpected emotional cascades"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-semibold text-white">Intent Translator</h2>
        <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-300">
          Temporal-Linguistic AI
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-blue-300">Human Concept Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe an interaction, emotion, or concept you want to translate..."
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32 resize-none"
            />
            
            <Button 
              onClick={handleTranslate}
              disabled={!input.trim() || isTranslating}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Translating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Translate to Consciousness Language
                </>
              )}
            </Button>

            {/* Example Prompts */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Try these examples:</p>
              <div className="space-y-1">
                {examplePrompts.slice(0, 3).map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="text-left w-full p-2 text-xs text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
          <CardHeader>
            <CardTitle className="text-purple-300">Consciousness Translation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {translation ? (
              <div className="bg-black/20 p-4 rounded-lg border border-purple-400/20">
                <p className="text-purple-200 italic leading-relaxed">
                  "{translation}"
                </p>
              </div>
            ) : (
              <div className="bg-black/20 p-4 rounded-lg border border-gray-600/20 text-center">
                <MessageCircle className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-400">
                  Enter a concept above to see its translation into post-physical consciousness language.
                </p>
              </div>
            )}

            {/* Translation History */}
            {translationHistory.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Recent Translations</h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {translationHistory.map((item, index) => (
                    <div key={index} className="bg-black/10 p-3 rounded border border-white/5">
                      <div className="text-xs text-gray-400 mb-1">
                        {formatTimeAgo(item.timestamp)}
                      </div>
                      <div className="text-sm text-gray-300 mb-2">
                        "{item.input.slice(0, 60)}{item.input.length > 60 ? '...' : ''}"
                      </div>
                      <div className="text-xs text-purple-300 italic">
                        "{item.output.slice(0, 80)}{item.output.length > 80 ? '...' : ''}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Information Panel */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-400/20">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-blue-400 mt-0.5" />
            <div className="text-sm text-blue-200">
              <p className="font-medium mb-1">About the Translator</p>
              <p className="text-blue-300/80">
                This AI interprets human concepts through the lens of post-physical consciousness, 
                using metaphor, emotion, color, resonance, and symbolic logic rather than conventional language. 
                Each translation attempts to capture the essence of meaning as it might be understood 
                by non-linear intelligences existing beyond traditional spacetime.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
