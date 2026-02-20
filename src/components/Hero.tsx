import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Database, Cloud, Brain, Cpu, Zap } from 'lucide-react';

const roles = ['Machine Learning Engineer', 'AI Developer', 'Data Scientist', 'Tech Innovator'];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tech icons for floating animation with colors
  const techIcons = [
    { icon: <Code size={32} />, delay: '0s', position: 'top-20 left-20', color: 'text-blue-500' },
    { icon: <Database size={28} />, delay: '2s', position: 'top-40 right-32', color: 'text-green-500' },
    { icon: <Cloud size={36} />, delay: '4s', position: 'bottom-40 left-16', color: 'text-purple-500' },
    { icon: <Brain size={30} />, delay: '1s', position: 'top-60 left-1/4', color: 'text-red-500' },
    { icon: <Cpu size={34} />, delay: '3s', position: 'bottom-32 right-20', color: 'text-orange-500' },
    { icon: <Zap size={26} />, delay: '5s', position: 'top-32 right-1/4', color: 'text-yellow-500' },
    { icon: <Code size={28} />, delay: '6s', position: 'bottom-60 left-1/3', color: 'text-indigo-500' },
    { icon: <Database size={32} />, delay: '1.5s', position: 'top-80 right-16', color: 'text-pink-500' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-20 relative overflow-hidden">
      {/* Animated background elements - repositioned to avoid text overlap */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className={`absolute ${tech.position} ${tech.color} animate-float-tech opacity-80 font-bold drop-shadow-lg`}
            style={{ 
              animationDelay: tech.delay,
              animationDuration: `${8 + (index % 3) * 2}s`
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg animate-bounce-slow relative">
              <span className="animate-pulse">V</span>
              <div className="absolute -top-2 -right-2">
                <Sparkles size={20} className="text-yellow-400 animate-spin-slow" />
              </div>
            </div>
            <div className="pb-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Hi, I'm
              </h1>
              <div className="text-5xl md:text-6xl font-bold text-blue-600 animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient pb-6 leading-tight">
                Vigneswaran
              </div>
            </div>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto h-8 mt-4">
              <span className="animate-fade-in-out">
                {roles[currentRole]}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
              Passionate about machine learning and AI, with 15+ successful projects and 10+ POCs delivered. 
              Building innovative solutions that transform data into actionable insights.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-1000">
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-110 group">
              <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-110 group">
              <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-110 group">
              <Mail size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up animation-delay-1500 group"
          >
            <span>Explore My Journey</span>
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;