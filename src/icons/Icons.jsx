/**
 * All SVGs are MIT/CC0 / hand-drawn originals — fully copyright-free.
 * Sources: Feather Icons (MIT), Heroicons (MIT), SVG Repo CC0, custom.
 */

/* ─── Feather / Heroicons (MIT) ─── */

export function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

export function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

/* ─── Tech-stack category icons (Feather MIT) ─── */

export function CodeIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

export function BrainIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9.5 2a2.5 2.5 0 0 1 5 0" />
            <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H9.5A2.5 2.5 0 0 1 7 5.5v-1A2.5 2.5 0 0 1 9.5 2" />
            <path d="M4.5 8.5A2.5 2.5 0 0 0 2 11c0 1.38.56 2.63 1.46 3.54" />
            <path d="M19.5 8.5A2.5 2.5 0 0 1 22 11c0 1.38-.56 2.63-1.46 3.54" />
            <path d="M7 8.5v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9" />
            <line x1="12" y1="14" x2="12" y2="19.5" />
            <line x1="9" y1="16" x2="15" y2="16" />
        </svg>
    );
}

export function SparkleIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
            <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3z" />
            <path d="M19 15l.5 1.5L21 17l-1.5.5L19 19l-.5-1.5L17 17l1.5-.5L19 15z" />
        </svg>
    );
}

export function ServerIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
    );
}

export function DatabaseIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        </svg>
    );
}

export function CloudIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    );
}

/* ─── About section expertise icons ─── */

export function EyeIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

export function FileTextIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );
}

export function CpuIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
    );
}

export function PackageIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}

/* ─── Award trophy (custom original) ─── */
export function TrophyIcon({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
            <path d="M4 5H2a2 2 0 0 0 0 4h2" />
            <path d="M20 5h2a2 2 0 0 0 0 4h-2" />
            <path d="M12 16v4" />
            <path d="M8 20h8" />
        </svg>
    );
}

export function StarIcon({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

/* ─── Hero decorative SVG shapes ─── */

export function HeroShapeOrb({ size = 200, opacity = 0.07 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
            <defs>
                <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity={opacity * 10} />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#orbGrad)" />
        </svg>
    );
}

export function HeroShapeDots({ color = 'currentColor' }) {
    const dots = [];
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            dots.push(<circle key={`${r}-${c}`} cx={c * 18 + 9} cy={r * 18 + 9} r="2" />);
        }
    }
    return (
        <svg width="90" height="90" viewBox="0 0 90 90" fill={color} opacity="0.18" aria-hidden="true">
            {dots}
        </svg>
    );
}

export function HeroShapeHex() {
    return (
        <svg width="90" height="104" viewBox="0 0 90 104" fill="none" aria-hidden="true">
            <polygon
                points="45,2 88,26 88,74 45,98 2,74 2,26"
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.22"
            />
            <polygon
                points="45,14 76,31 76,65 45,82 14,65 14,31"
                stroke="var(--accent)"
                strokeWidth="1"
                fill="none"
                opacity="0.12"
            />
        </svg>
    );
}

export function HeroShapeCircle() {
    return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <circle cx="60" cy="60" r="56" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="8 5" opacity="0.18" />
            <circle cx="60" cy="60" r="40" stroke="var(--accent)" strokeWidth="0.8" opacity="0.10" />
        </svg>
    );
}

export function HeroShapeGrid() {
    const lines = [];
    for (let i = 0; i <= 4; i++) {
        lines.push(<line key={`h${i}`} x1="0" y1={i * 20} x2="80" y2={i * 20} />);
        lines.push(<line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="80" />);
    }
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true"
            stroke="var(--accent)" strokeWidth="0.8" opacity="0.16">
            {lines}
        </svg>
    );
}

/* ─── Neural network SVG (decorative, original) ─── */
export function NeuralNetSVG() {
    const nodes = [
        // input layer
        { x: 30, y: 40 }, { x: 30, y: 80 }, { x: 30, y: 120 },
        // hidden layer 1
        { x: 90, y: 30 }, { x: 90, y: 70 }, { x: 90, y: 110 }, { x: 90, y: 150 },
        // hidden layer 2
        { x: 150, y: 50 }, { x: 150, y: 90 }, { x: 150, y: 130 },
        // output
        { x: 210, y: 70 }, { x: 210, y: 110 },
    ];

    const edges = [
        // input → hidden1
        [0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6],
        // hidden1 → hidden2
        [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [5, 8], [5, 9], [6, 8], [6, 9],
        // hidden2 → output
        [7, 10], [7, 11], [8, 10], [8, 11], [9, 10], [9, 11],
    ];

    return (
        <svg width="240" height="180" viewBox="0 0 240 180" fill="none" aria-hidden="true">
            <g opacity="0.2" stroke="var(--accent)" strokeWidth="0.7">
                {edges.map(([a, b], i) => (
                    <line key={i}
                        x1={nodes[a].x} y1={nodes[a].y}
                        x2={nodes[b].x} y2={nodes[b].y}
                    />
                ))}
            </g>
            <g fill="var(--accent)">
                {nodes.map((n, i) => (
                    <circle key={i} cx={n.x} cy={n.y} r="4" opacity={i < 3 ? 0.5 : i < 7 ? 0.35 : i < 10 ? 0.45 : 0.6} />
                ))}
            </g>
        </svg>
    );
}
