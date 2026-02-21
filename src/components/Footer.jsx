import './Footer.css';
import { profile, contact } from '../data/portfolioData';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__top">
                    <div>
                        <p className="footer__name">{profile.name}</p>
                        <p className="footer__role">{profile.title}</p>
                    </div>
                    <div className="footer__socials">
                        <a href={`mailto:${contact.email}`} className="footer__social-link" title="Email">
                            ✉ {contact.email}
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                            className="footer__social-link footer__social-link--icon" title="LinkedIn">
                            <SiLinkedin /> LinkedIn
                        </a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer"
                            className="footer__social-link footer__social-link--icon" title="GitHub">
                            <SiGithub /> GitHub
                        </a>
                    </div>
                </div>
                <div className="footer__divider" />
                <p className="footer__copy">
                    © {new Date().getFullYear()} {profile.name} · Built with React &amp; Vite
                </p>
            </div>
        </footer>
    );
}
