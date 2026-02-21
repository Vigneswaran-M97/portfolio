import React from 'react';
import './Navbar.css';
import { SunIcon, MoonIcon } from '../icons/Icons';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Tech Stack', href: '#tech-stack' },
];

export default function Navbar({ theme, onToggleTheme }) {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
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
                        <a key={link.href} href={link.href} className="navbar__link">
                            {link.label}
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
