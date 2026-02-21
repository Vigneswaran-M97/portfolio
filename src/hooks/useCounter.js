import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value from 0 → target over `duration` ms.
 * Supports suffixes like "+" or "M+".
 * @param {string} rawValue  e.g. "4+", "120M+", "6+", "3×"
 * @param {boolean} active   start counting when true
 * @param {number} duration  ms
 */
export default function useCounter(rawValue, active, duration = 1400) {
    // parse: extract numeric part and suffix
    const match = String(rawValue).match(/^(\d+\.?\d*)(.*)/);
    const target = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : rawValue;

    const [display, setDisplay] = useState('0');
    const raf = useRef(null);

    useEffect(() => {
        if (!active) return;

        const start = performance.now();

        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) raf.current = requestAnimationFrame(tick);
        };

        raf.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf.current);
    }, [active]);

    return display;
}
