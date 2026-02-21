import React from 'react';
import './Navbar.css';
import { SunIcon, MoonIcon } from '../icons/Icons';

const NAV_LINKS = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Awards', href: '#awards', id: 'awards' },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [activeId, setActiveId] = React.useState('');

    // Glassmorphism on scroll
    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active section tracking via IntersectionObserver
    React.useEffect(() => {
        const sectionIds = NAV_LINKS.map((l) => l.id);

        const observers = [];
        const visibilityMap = {};

        const pickMostVisible = () => {
            // choose section with highest intersection ratio
            let bestId = '';
            let bestRatio = 0;
            for (const [id, ratio] of Object.entries(visibilityMap)) {
                if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
            }
            setActiveId(bestId);
        };

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    visibilityMap[id] = entry.intersectionRatio;
                    pickMostVisible();
                },
                { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-60px 0px -30% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#hero" className="navbar__logo">
                    <span className="navbar__logo-name">VM</span>
                    <span className="navbar__logo-dot" />
                </a>

                <nav className="navbar__links" aria-label="Primary navigation">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`navbar__link${activeId === link.id ? ' navbar__link--active' : ''}`}
                        >
                            {link.label}
                            {activeId === link.id && <span className="navbar__link-indicator" />}
                        </a>
                    ))}
                </nav>

                <button
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
}
