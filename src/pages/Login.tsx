import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Network, Lock, Key, ShieldCheck, Database, ServerCog, HardDrive, Settings, Workflow, Plug2, FileCode, Cable, Circle, Dot } from 'lucide-react';
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
      {/* Network background with dots */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Background gradient orbs */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        <div className="absolute right-16 top-32 w-48 h-48 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute bottom-20 -left-10 w-56 h-56 rounded-full bg-gradient-to-r from-[#50a5ff]/10 to-[#434ce8]/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#1963ff]/10 to-[#353acd]/10 blur-3xl" />
        
        {/* Network dots - top */}
        <div className="absolute left-[10%] top-[10%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[25%] top-[8%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[40%] top-[12%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[55%] top-[9%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[70%] top-[11%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[85%] top-[10%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        
        {/* Network dots - middle */}
        <div className="absolute left-[5%] top-[35%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[20%] top-[30%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[35%] top-[33%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[50%] top-[35%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[65%] top-[32%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[80%] top-[36%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[95%] top-[34%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        
        {/* Network dots - bottom */}
        <div className="absolute left-[8%] top-[65%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[22%] top-[70%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[38%] top-[68%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[52%] top-[72%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[68%] top-[67%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[82%] top-[71%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        <div className="absolute left-[94%] top-[66%] text-[#8E9196]">
          <Circle size={10} fill="#8E9196" />
        </div>
        
        {/* Network dots - center area with system icons */}
        <div className="absolute left-[25%] top-[45%] text-[#8E9196]">
          <Database size={20} />
        </div>
        <div className="absolute left-[42%] top-[48%] text-[#8E9196]">
          <ServerCog size={20} />
        </div>
        <div className="absolute left-[58%] top-[44%] text-[#8E9196]">
          <Lock size={20} />
        </div>
        <div className="absolute left-[75%] top-[47%] text-[#8E9196]">
          <Network size={20} />
        </div>
        
        {/* Integration company icons - gray single-color versions */}
        <div className="absolute left-[15%] top-[20%] transform scale-75 opacity-20 grayscale">
          <PandaDocLogo />
        </div>
        <div className="absolute right-[15%] top-[22%] transform scale-75 opacity-20 grayscale">
          <HubSpotLogo />
        </div>
        <div className="absolute left-[10%] bottom-[40%] transform scale-75 opacity-20 grayscale">
          <MicrosoftExchangeLogo />
        </div>
        <div className="absolute right-[12%] bottom-[38%] transform scale-75 opacity-20 grayscale">
          <SalesforceLogo />
        </div>
        <div className="absolute left-[30%] bottom-[25%] transform scale-75 opacity-20 grayscale">
          <MicrosoftAILogo />
        </div>
        <div className="absolute right-[30%] top-[25%] transform scale-75 opacity-20 grayscale">
          <MicrosoftOutlookLogo />
        </div>
        
        {/* System icons - IFS related */}
        <div className="absolute left-[40%] top-[25%] text-[#8E9196]/70">
          <ServerCog size={20} />
        </div>
        <div className="absolute right-[40%] bottom-[25%] text-[#8E9196]/70">
          <HardDrive size={20} />
        </div>
        <div className="absolute left-[60%] top-[20%] text-[#8E9196]/70">
          <Settings size={20} />
        </div>
        <div className="absolute right-[60%] bottom-[20%] text-[#8E9196]/70">
          <Workflow size={20} />
        </div>
        <div className="absolute left-[20%] top-[50%] text-[#8E9196]/70">
          <FileCode size={20} />
        </div>
        <div className="absolute right-[20%] top-[50%] text-[#8E9196]/70">
          <Cable size={20} />
        </div>
        <div className="absolute left-[45%] bottom-[50%] text-[#8E9196]/70">
          <Plug2 size={20} />
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
