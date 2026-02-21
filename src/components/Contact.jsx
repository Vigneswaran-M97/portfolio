import './Contact.css';
import { contact, profile } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function PhoneIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

const contactItems = [
    {
        icon: <PhoneIcon />,
        label: 'Phone',
        value: contact.phone,
        href: `tel:${contact.phone.replace(/\s/g, '')}`,
        color: '#2f9e44',
    },
    {
        icon: <MailIcon />,
        label: 'Email',
        value: contact.email,
        href: `mailto:${contact.email}`,
        color: '#e03131',
    },
    {
        icon: <SiLinkedin />,
        label: 'LinkedIn',
        value: contact.linkedinLabel,
        href: contact.linkedin,
        color: '#0077B5',
    },
    {
        icon: <SiGithub />,
        label: 'GitHub',
        value: contact.githubLabel,
        href: contact.github,
        color: '#6e7681',
    },
    {
        icon: <MapPinIcon />,
        label: 'Location',
        value: contact.location,
        href: null,
        color: '#1971c2',
    },
];

export default function Contact() {
    const [headRef, headVisible] = useScrollAnimation();

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div ref={headRef}>
                    <p className={`section-label reveal${headVisible ? ' visible' : ''}`}>Get in Touch</p>
                    <h2 className={`section-title reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.08s' }}>
                        Contact
                    </h2>
                    <p className={`section-subtitle reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.16s' }}>
                        Open to Data Scientist and ML Engineer opportunities. Feel free to reach out.
                    </p>
                </div>

                <div className="contact__grid">
                    {contactItems.map((item, i) => (
                        <ContactCard key={item.label} item={item} delay={`${i * 70}ms`} />
                    ))}
                </div>

                {/* Social CTA row */}
                <div className="contact__social reveal" style={{ animationDelay: '0.4s' }}>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-btn contact__social-btn--linkedin"
                    >
                        <SiLinkedin /> View LinkedIn Profile
                    </a>
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-btn contact__social-btn--github"
                    >
                        <SiGithub /> View GitHub Profile
                    </a>
                    <a
                        href={`${import.meta.env.BASE_URL}Vigneswaran_M_CV.pdf`}
                        download="Vigneswaran_M_CV.pdf"
                        className="contact__social-btn contact__social-btn--cv"
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
            </div>
        </section>
    );
}

function ContactCard({ item, delay }) {
    const [ref, visible] = useScrollAnimation();
    const inner = (
        <div
            ref={ref}
            className={`contact-card reveal-scale${visible ? ' visible' : ''}`}
            style={{ '--card-color': item.color, animationDelay: delay }}
        >
            <div className="contact-card__icon">{item.icon}</div>
            <div className="contact-card__info">
                <span className="contact-card__label">{item.label}</span>
                <span className="contact-card__value">{item.value}</span>
            </div>
            {item.href && <span className="contact-card__arrow">→</span>}
        </div>
    );

    return item.href ? (
        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer" className="contact-card__link">
            {inner}
        </a>
    ) : (
        <div className="contact-card__link">{inner}</div>
    );
}
