import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LayoutDashboard, MonitorSmartphone, Users, Puzzle, Globe, BarChart3, Folder, FileText } from 'lucide-react';
import CovalentHubLogo from '@/components/logos/CovalentHubLogo';
import HubSpotLogo from '@/components/logos/HubSpotLogo';
import PandaDocLogo from '@/components/logos/PandaDocLogo';
import SalesforceLogo from '@/components/logos/SalesforceLogo';
import MicrosoftAILogo from '@/components/logos/MicrosoftAILogo';
import MicrosoftOutlookLogo from '@/components/logos/MicrosoftOutlookLogo';
import MicrosoftExchangeLogo from '@/components/logos/MicrosoftExchangeLogo';
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
    
    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Allow any username and password as long as they're not empty
      toast.success('Login successful');
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast.info('Password reset functionality would be implemented here');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f7f9ff]">
      {/* Background with gradient orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Background gradient orbs */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        <div className="absolute right-16 top-32 w-48 h-48 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute bottom-20 -left-10 w-56 h-56 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        
        {/* Integration company icons - evenly distributed, 4 per side */}
        {/* Left side */}
        <div className="absolute left-[20%] top-[20%] transform scale-75 opacity-20 grayscale">
          <PandaDocLogo />
        </div>
        <div className="absolute left-[10%] top-[40%] transform scale-75 opacity-20 grayscale">
          <MicrosoftExchangeLogo />
        </div>
        <div className="absolute left-[20%] top-[60%] transform scale-75 opacity-20 grayscale">
          <MicrosoftAILogo />
        </div>
        <div className="absolute left-[10%] top-[80%] transform scale-75 opacity-20 grayscale">
          <HubSpotLogo />
        </div>
        
        {/* Right side */}
        <div className="absolute right-[20%] top-[20%] transform scale-75 opacity-20 grayscale">
          <MicrosoftOutlookLogo />
        </div>
        <div className="absolute right-[10%] top-[40%] transform scale-75 opacity-20 grayscale">
          <SalesforceLogo />
        </div>
        <div className="absolute right-[20%] top-[60%] transform scale-75 opacity-20 grayscale">
          <MicrosoftExchangeLogo />
        </div>
        <div className="absolute right-[10%] top-[80%] transform scale-75 opacity-20 grayscale">
          <PandaDocLogo />
        </div>
        
        {/* System icons - ensuring consistent size of 36px for all */}
        {/* Left side */}
        <div className="absolute left-[40%] top-[25%] text-[#403E43]/70">
          <LayoutDashboard size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute left-[30%] top-[45%] text-[#403E43]/70">
          <MonitorSmartphone size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute left-[40%] top-[65%] text-[#403E43]/70">
          <Users size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute left-[30%] top-[85%] text-[#403E43]/70">
          <Puzzle size={36} strokeWidth={1.5} />
        </div>
        
        {/* Right side */}
        <div className="absolute right-[40%] top-[25%] text-[#403E43]/70">
          <Puzzle size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute right-[30%] top-[45%] text-[#403E43]/70">
          <Globe size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute right-[40%] top-[65%] text-[#403E43]/70">
          <BarChart3 size={36} strokeWidth={1.5} />
        </div>
        <div className="absolute right-[30%] top-[85%] text-[#403E43]/70">
          <FileText size={36} strokeWidth={1.5} />
        </div>
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
            Covalent Hub © {new Date().getFullYear()}
          </p>
          <p className="text-sm text-[#777986]">
            Streamline your IFS workflows
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
