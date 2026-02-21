import { useRef, useState, useEffect } from 'react';
import './Hero.css';
import { profile, contact } from '../data/portfolioData';
import useCounter from '../hooks/useCounter';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import {
    HeroShapeHex,
    HeroShapeCircle,
    HeroShapeGrid,
    HeroShapeDots,
    NeuralNetSVG,
} from '../icons/Icons';

function AnimatedStat({ value, label, active, delay }) {
    const displayed = useCounter(value, active, 1600);
    return (
        <div className="hero__stat" style={{ animationDelay: delay }}>
            <span className="hero__stat-value">{displayed}</span>
            <span className="hero__stat-label">{label}</span>
        </div>
    );
}

export default function Hero() {
    const [statsActive, setStatsActive] = useState(false);
    const statsRef = useRef(null);

    // trigger counter once stats row enters viewport
    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setStatsActive(true); obs.disconnect(); }
        }, { threshold: 0.5 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section id="hero" className="hero">
            {/* decorative floating shapes */}
            <div className="hero__deco hero__deco--top-right hero-shape hero-shape--float" style={{ animationDelay: '0.3s' }}>
                <HeroShapeHex />
            </div>
            <div className="hero__deco hero__deco--mid-left hero-shape hero-shape--drift" style={{ animationDelay: '0.6s' }}>
                <HeroShapeDots color="var(--accent)" />
            </div>
            <div className="hero__deco hero__deco--bot-right hero-shape hero-shape--spin" style={{ animationDelay: '0.9s' }}>
                <HeroShapeCircle />
            </div>
            <div className="hero__deco hero__deco--grid hero-shape hero-shape--float" style={{ animationDelay: '0.5s' }}>
                <HeroShapeGrid />
            </div>
            <div className="hero__deco hero__deco--neural hero-shape" style={{ animationDelay: '1s', animationDuration: '1.4s' }}>
                <NeuralNetSVG />
            </div>

            <div className="container hero__inner">
                <div className="hero__badge hero-animate" style={{ animationDelay: '0.1s' }}>
                    <span className="hero__badge-dot" />
                    Available for new opportunities
                </div>

                <h1 className="hero__name hero-animate" style={{ animationDelay: '0.2s' }}>
                    {profile.name}
                </h1>

                <p className="hero__title hero-animate" style={{ animationDelay: '0.32s' }}>
                    {profile.title}
                </p>

                <p className="hero__company hero-animate" style={{ animationDelay: '0.38s' }}>
                    @&nbsp;
                    <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="hero__company-link">
                        {profile.company}
                    </a>
                </p>

                <p className="hero__tagline hero-animate" style={{ animationDelay: '0.44s' }}>
                    <span className="hero__cursor">{'>'}</span>&nbsp;{profile.tagline}
                </p>

                <div className="hero__stats hero-animate" ref={statsRef} style={{ animationDelay: '0.56s' }}>
                    {profile.stats.map((s, i) => (
                        <AnimatedStat
                            key={s.label}
                            value={s.value}
                            label={s.label}
                            active={statsActive}
                            delay={`${i * 120}ms`}
                        />
                    ))}
                </div>

                <div className="hero__cta hero-animate" style={{ animationDelay: '0.68s' }}>
                    <a href="#projects" className="btn btn--primary">View Projects</a>
                    <a href="#about" className="btn btn--ghost">About Me</a>
                    <a
                        href={`${import.meta.env.BASE_URL}Vigneswaran_M_CV.pdf`}
                        download="Vigneswaran_M_CV.pdf"
                        className="btn btn--download"
                        title="Download CV"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download CV
                    </a>
                </div>

                <div className="hero__socials hero-animate" style={{ animationDelay: '0.80s' }}>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                        className="hero__social" title="LinkedIn">
                        <SiLinkedin />
                    </a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer"
                        className="hero__social" title="GitHub">
                        <SiGithub />
                    </a>
                    <a href={`mailto:${contact.email}`}
                        className="hero__social" title={contact.email}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
