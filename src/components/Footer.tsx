import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span>Crafted with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-blue-400 animate-bounce" />
            <span>by Vigneswaran</span>
            <Sparkles size={16} className="text-yellow-400 animate-spin-slow" />
          </div>
          <p className="text-gray-400 mb-2">
            Machine Learning Engineer | AI Enthusiast | Innovation Driver
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Vigneswaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;