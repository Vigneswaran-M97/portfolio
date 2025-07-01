import React, { useState, useEffect } from 'react';
import { Menu, X, User, Award, Code, Mail, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-md border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 animate-pulse">
            Vigneswaran
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              <User size={18} className="group-hover:animate-bounce" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              <Briefcase size={18} className="group-hover:animate-bounce" />
              <span>Experience</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              <Code size={18} className="group-hover:animate-bounce" />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('awards')} 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              <Award size={18} className="group-hover:animate-bounce" />
              <span>Awards</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
            >
              <Mail size={18} className="group-hover:animate-bounce" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <User size={18} />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Code size={18} />
                <span>Skills</span>
              </button>
              <button onClick={() => scrollToSection('awards')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Award size={18} />
                <span>Awards</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;