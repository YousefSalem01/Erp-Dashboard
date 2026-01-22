import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onLogin?: () => void;
  onSignUp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogin, onSignUp }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className=" mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">
            Company Logo
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onLogin}>
            Login
          </Button>
          <Button onClick={onSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
