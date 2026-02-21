import { useRef, useState, useEffect } from 'react';
import './Hero.css';
import { profile } from '../data/portfolioData';
import useCounter from '../hooks/useCounter';
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
                </div>
            </div>
        </section>
    );
}
