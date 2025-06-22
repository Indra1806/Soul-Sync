
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User, Github } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic with Supabase
    console.log('Auth form submitted:', { mode, formData });
  };

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-cyan-400/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 pr-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-6 w-6 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
          >
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>

          <div className="text-center">
            <span className="text-gray-400">
              {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
            </span>
            <Button
              type="button"
              variant="link"
              className="text-cyan-400 hover:text-cyan-300 p-0 h-auto"
              onClick={switchMode}
            >
              {mode === 'signin' ? 'Sign up' : 'Sign in'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
