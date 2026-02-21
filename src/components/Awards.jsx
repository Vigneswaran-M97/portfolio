import './Awards.css';
import { awards } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { TrophyIcon, StarIcon } from '../icons/Icons';

const iconMap = { '🏆': <TrophyIcon size={20} />, '⭐': <StarIcon size={20} /> };

export default function Awards() {
    const [headRef, headVisible] = useScrollAnimation();

    return (
        <section id="awards" className="awards">
            <div className="container">
                <div ref={headRef}>
                    <p className={`section-label reveal${headVisible ? ' visible' : ''}`}>Recognition</p>
                    <h2 className={`section-title reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.08s' }}>
                        Awards &amp; Achievements
                    </h2>
                    <p className={`section-subtitle reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.16s' }}>
                        Recognised for delivering impactful ML systems and consistent engineering excellence.
                    </p>
                </div>

                <div className="awards__list">
                    {awards.map((award, idx) => (
                        <AwardItem key={award.id} award={award} idx={idx} isLast={idx === awards.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AwardItem({ award, idx, isLast }) {
    const [ref, visible] = useScrollAnimation();
    return (
        <div
            ref={ref}
            className={`award-item reveal-left${visible ? ' visible' : ''}`}
            style={{ animationDelay: `${idx * 0.14}s` }}
        >
            <div className={`award-item__icon${visible ? ' award-item__icon--pop' : ''}`}>
                {iconMap[award.icon] || award.icon}
            </div>
            <div className="award-item__content">
                <div className="award-item__header">
                    <h3 className="award-item__title">{award.title}</h3>
                    <span className="award-item__year">{award.year}</span>
                </div>
                <p className="award-item__desc">{award.description}</p>
            </div>
            {!isLast && <div className="award-item__connector" />}
        </div>
    );
}
