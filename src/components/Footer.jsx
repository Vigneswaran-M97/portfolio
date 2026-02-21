import './Footer.css';
import { profile } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__name">{profile.name}</p>
                <p className="footer__role">{profile.title}</p>
                <p className="footer__copy">© {new Date().getFullYear()} · Built with React</p>
            </div>
        </footer>
    );
}
