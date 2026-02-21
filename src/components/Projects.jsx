import './Projects.css';
import { projectCategories } from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

function TechBadge({ label }) {
    return <span className="tech-badge">{label}</span>;
}

function ProjectCard({ project, delay }) {
    const [ref, visible] = useScrollAnimation();
    return (
        <article
            ref={ref}
            className={`project-card${project.featured ? ' project-card--featured' : ''} reveal-scale${visible ? ' visible' : ''}`}
            style={{ animationDelay: delay }}
        >
            {project.featured && (
                <div className="project-card__featured-banner">★ Featured Project</div>
            )}
            {project.award && (
                <div className="project-card__award">🏆 {project.award}</div>
            )}
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__footer">
                <div className="project-card__tags">
                    {project.technologies.map((t) => (
                        <TechBadge key={t} label={t} />
                    ))}
                </div>
            </div>
        </article>
    );
}

function CategorySection({ cat }) {
    const [headerRef, headerVisible] = useScrollAnimation();
    return (
        <div className="project-category">
            <div
                ref={headerRef}
                className={`project-category__header reveal${headerVisible ? ' visible' : ''}`}
            >
                <h3 className="project-category__title">{cat.category}</h3>
                <span className="project-category__count">
                    {cat.projects.length} project{cat.projects.length !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="project-category__grid">
                {cat.projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} delay={`${i * 90}ms`} />
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    const [headRef, headVisible] = useScrollAnimation();
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div ref={headRef}>
                    <p className={`section-label reveal${headVisible ? ' visible' : ''}`}>Work</p>
                    <h2 className={`section-title reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.08s' }}>Projects</h2>
                    <p className={`section-subtitle reveal${headVisible ? ' visible' : ''}`} style={{ animationDelay: '0.16s' }}>
                        Production systems and research projects across ML, computer vision, and document intelligence.
                    </p>
                </div>
                {projectCategories.map((cat) => (
                    <CategorySection key={cat.id} cat={cat} />
                ))}
            </div>
        </section>
    );
}
