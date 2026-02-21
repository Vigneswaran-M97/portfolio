import './About.css';
import { profile } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { EyeIcon, FileTextIcon, CpuIcon, PackageIcon } from '../icons/Icons';

const highlights = [
    {
        icon: <EyeIcon size={20} />,
        title: 'Computer Vision at Scale',
        text: 'Production pipelines processing 120M+ document images using YOLO, OpenCV, and custom image processing workflows.',
    },
    {
        icon: <FileTextIcon size={20} />,
        title: 'Document Intelligence',
        text: 'End-to-end ML systems for OCR, layout detection, named entity extraction, and structured data extraction from banking documents.',
    },
    {
        icon: <CpuIcon size={20} />,
        title: 'Generative AI & VLMs',
        text: 'Applied Vision-Language Models (Qwen 2.5-VL) via Ollama for automated KYC document understanding and JSON conversion.',
    },
    {
        icon: <PackageIcon size={20} />,
        title: 'Production ML Deployment',
        text: 'Built and shipped REST APIs (Django), containerised with Docker, and deployed on cloud platforms (AWS, GCP, IIS).',
    },
];

export default function About() {
    const [sectionRef, sectionVisible] = useScrollAnimation();
    const [sidebarRef, sidebarVisible] = useScrollAnimation();

    return (
        <section id="about" className="about">
            <div className="container">
                <p className={`section-label reveal${sectionVisible ? ' visible' : ''}`}>About Me</p>
                <h2 className={`section-title reveal${sectionVisible ? ' visible' : ''}`} style={{ animationDelay: '0.08s' }}>
                    Background &amp; Expertise
                </h2>
                <div className="section-divider" style={{ marginBottom: '48px' }} />

                <div className="about__grid" ref={sectionRef}>
                    <div className="about__text">
                        <p className={`about__bio reveal${sectionVisible ? ' visible' : ''}`} style={{ animationDelay: '0.15s' }}>
                            {profile.about}
                        </p>

                        <div className="about__highlights">
                            {highlights.map((h, i) => (
                                <div
                                    key={h.title}
                                    className={`about__highlight reveal${sectionVisible ? ' visible' : ''}`}
                                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                                >
                                    <span className="about__highlight-icon">{h.icon}</span>
                                    <div>
                                        <strong>{h.title}</strong>
                                        <p>{h.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        ref={sidebarRef}
                        className={`about__sidebar reveal-right${sidebarVisible ? ' visible' : ''}`}
                        style={{ animationDelay: '0.25s' }}
                    >
                        <div className="about__card">
                            {[
                                ['Experience', '4+ Years'],
                                ['Domain', 'Banking & Fintech'],
                                ['Focus', 'Computer Vision'],
                                ['Scale', '120M+ Images'],
                                ['Recognition', '3× Awards'],
                            ].map(([label, value]) => (
                                <div key={label} className="about__card-row">
                                    <span className="about__card-label">{label}</span>
                                    <span className="about__card-value">{value}</span>
                                </div>
                            ))}
                            <div className="about__card-row">
                                <span className="about__card-label">Company</span>
                                <a
                                    href={profile.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="about__card-value about__card-link"
                                >
                                    {profile.company} ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
