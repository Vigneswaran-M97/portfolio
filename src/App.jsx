import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './animations.css';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggleTheme };
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
