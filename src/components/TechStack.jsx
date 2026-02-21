import './TechStack.css';
import { techStack } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { CodeIcon, BrainIcon, SparkleIcon, ServerIcon, DatabaseIcon, CloudIcon } from '../icons/Icons';

// Simple Icons (MIT) via react-icons/si
import {
    SiPython, SiTypescript,
    SiScikitlearn, SiOpencv,
    SiDjango, SiNodedotjs,
    SiMongodb, SiMysql,
    SiDocker, SiAmazonwebservices, SiGooglecloud, SiFirebase,
    SiOllama, SiRaspberrypi,
} from 'react-icons/si';

/**
 * Skill → { icon, color } mapping.
 * Icons: Simple Icons (MIT) via react-icons.
 * Brand colours: simpleicons.org (public domain).
 */
const SKILL_META = {
    // Languages
    Python: { icon: <SiPython />, color: '#3776AB' },
    SQL: { icon: <SiMysql />, color: '#4479A1' },
    TypeScript: { icon: <SiTypescript />, color: '#3178C6' },

    // ML & CV
    'Scikit-learn': { icon: <SiScikitlearn />, color: '#F7931E' },
    YOLO: { icon: <SiOpencv />, color: '#5C3EE8' },
    FastRCNN: { icon: <SiPython />, color: '#3776AB' },
    OpenCV: { icon: <SiOpencv />, color: '#5C3EE8' },
    SpaCy: { icon: <SiPython />, color: '#09a3d5' },
    SVM: { icon: <SiScikitlearn />, color: '#F7931E' },

    // GenAI
    'Vision-Language Models': { icon: <SiPython />, color: '#7c3aed' },
    Ollama: { icon: <SiOllama />, color: '#6b7280' },
    'Qwen 2.5-VL': { icon: <SiPython />, color: '#7c3aed' },

    // Backend
    Django: { icon: <SiDjango />, color: '#092E20' },
    'Django REST Framework': { icon: <SiDjango />, color: '#092E20' },
    'Node.js': { icon: <SiNodedotjs />, color: '#339933' },

    // Databases
    MongoDB: { icon: <SiMongodb />, color: '#47A248' },
    MySQL: { icon: <SiMysql />, color: '#4479A1' },

    // Cloud & DevOps
    AWS: { icon: <SiAmazonwebservices />, color: '#FF9900' },
    GCP: { icon: <SiGooglecloud />, color: '#4285F4' },
    Docker: { icon: <SiDocker />, color: '#2496ED' },
    IIS: { icon: <ServerIcon size={13} />, color: '#0078D4' },   // custom fallback
    Firebase: { icon: <SiFirebase />, color: '#FFCA28' },
    'Raspberry Pi': { icon: <SiRaspberrypi />, color: '#A22846' },
};

const categoryIcons = {
    Languages: <CodeIcon size={18} />,
    'Machine Learning': <BrainIcon size={18} />,
    'Generative AI': <SparkleIcon size={18} />,
    Backend: <ServerIcon size={18} />,
    Databases: <DatabaseIcon size={18} />,
    'Cloud & DevOps': <CloudIcon size={18} />,
};

function SkillBadge({ label }) {
    const meta = SKILL_META[label];
    const brandColor = meta?.color ?? 'var(--accent)';
    const icon = meta?.icon ?? null;

    return (
        <span className="stack__item" style={{ '--brand': brandColor }}>
            {icon && <span className="stack__item-logo">{icon}</span>}
            <span className="stack__item-label">{label}</span>
        </span>
    );
}

function StackGroup({ group, delay }) {
    const [ref, visible] = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`stack__group reveal-scale${visible ? ' visible' : ''}`}
            style={{ animationDelay: delay }}
        >
            <div className="stack__group-header">
                <span className="stack__group-icon">
                    {categoryIcons[group.category] ?? null}
                </span>
                <span className="stack__group-name">{group.category}</span>
            </div>
            <div className="stack__items">
                {group.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
    const [headRef, headVisible] = useScrollAnimation();
    return (
        <section id="tech-stack" className="tech-stack">
            <div className="container">
                <div ref={headRef}>
                    <p className={`section-label reveal${headVisible ? ' visible' : ''}`}>Skills</p>
                    <h2
                        className={`section-title reveal${headVisible ? ' visible' : ''}`}
                        style={{ animationDelay: '0.08s' }}
                    >
                        Tech Stack
                    </h2>
                    <p
                        className={`section-subtitle reveal${headVisible ? ' visible' : ''}`}
                        style={{ animationDelay: '0.16s' }}
                    >
                        Core tools and technologies used across production ML and data engineering projects.
                    </p>
                </div>

                <div className="stack__grid">
                    {techStack.map((group, i) => (
                        <StackGroup key={group.category} group={group} delay={`${i * 70}ms`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
