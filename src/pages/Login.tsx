
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Network, Lock, Key, ShieldCheck } from 'lucide-react';
import CovalentHubLogo from '@/components/logos/CovalentHubLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate authentication
    try {
      // This is a simple simulation - in a real app, you would connect to your auth backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success simulation - in a real implementation, check credentials against your backend
      if (username === 'demo' && password === 'password') {
        toast.success('Login successful');
        navigate('/');
      } else {
        toast.error('Invalid credentials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Password reset functionality would be implemented here');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f7f9ff]">
      {/* Decorative vector elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Background gradient orbs */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        <div className="absolute right-16 top-32 w-48 h-48 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute bottom-20 -left-10 w-56 h-56 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        
        {/* Integration pattern - left side */}
        <div className="absolute left-[5%] top-[20%] flex flex-col gap-16">
          <Network size={40} className="text-[#1963ff]/20" />
          <Lock size={32} className="text-[#353acd]/15 ml-12" />
          <Network size={28} className="text-[#50a5ff]/20 ml-4" />
          <Key size={36} className="text-[#434ce8]/15 ml-16" />
          <Network size={24} className="text-[#1963ff]/15" />
        </div>
        
        {/* Integration pattern - right side */}
        <div className="absolute right-[5%] top-[15%] flex flex-col gap-16">
          <ShieldCheck size={36} className="text-[#434ce8]/15" />
          <Network size={30} className="text-[#1963ff]/20 mr-12" />
          <Lock size={28} className="text-[#353acd]/15 mr-4" />
          <Network size={34} className="text-[#50a5ff]/20 mr-16" />
          <Key size={26} className="text-[#1963ff]/15" />
        </div>
        
        {/* Horizontal connector lines - top */}
        <div className="absolute top-[15%] left-[20%] w-[60%] h-px bg-gradient-to-r from-transparent via-[#1963ff]/10 to-transparent" />
        <div className="absolute top-[35%] left-[20%] w-[60%] h-px bg-gradient-to-r from-transparent via-[#353acd]/10 to-transparent" />
        
        {/* Horizontal connector lines - bottom */}
        <div className="absolute bottom-[35%] left-[20%] w-[60%] h-px bg-gradient-to-r from-transparent via-[#434ce8]/10 to-transparent" />
        <div className="absolute bottom-[15%] left-[20%] w-[60%] h-px bg-gradient-to-r from-transparent via-[#50a5ff]/10 to-transparent" />
        
        {/* Vertical connector lines */}
        <div className="absolute top-[15%] left-[30%] w-px h-[70%] bg-gradient-to-b from-transparent via-[#1963ff]/10 to-transparent" />
        <div className="absolute top-[15%] right-[30%] w-px h-[70%] bg-gradient-to-b from-transparent via-[#434ce8]/10 to-transparent" />
      </div>
      
      <div className="w-full max-w-md px-8 py-12 bg-white/90 backdrop-blur-md rounded-xl shadow-lg relative z-10 border border-[#f0f2ff]">
        <div className="flex flex-col items-center mb-8">
          <CovalentHubLogo size={64} className="mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1963ff] via-[#353acd] to-[#2e34a5] text-transparent bg-clip-text">
            Covalent Hub
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-[#50a5ff] to-[#434ce8] mt-2 mb-4"></div>
          <p className="text-[#49495b] text-center">
            Sign in to access the integration ecosystem
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-[#49495b]">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-[#d8d9df] focus:border-[#1963ff] focus:ring-[#1963ff]"
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-[#49495b]">Password</Label>
              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="text-sm text-[#1963ff] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-[#d8d9df] focus:border-[#1963ff] focus:ring-[#1963ff] pr-10"
                placeholder="Enter your password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#49495b]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#1963ff] to-[#353acd] hover:from-[#0e50dd] hover:to-[#2e34a5] text-white py-2 rounded-md transition-all duration-200 font-medium"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#ebedf2] text-center">
          <p className="text-sm text-[#777986]">
            For demonstration purposes, use:<br />
            Username: <span className="font-semibold">demo</span>, Password: <span className="font-semibold">password</span>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center relative z-10">
        <p className="text-sm text-[#777986]">Covalent Hub © {new Date().getFullYear()}</p>
        <p className="text-sm text-[#777986]">Streamline your IFS workflows</p>
      </div>
    </div>
  );
};

export default Login;
