import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element scrolls into view.
 * Returns [ref, isVisible].
 */
export default function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // fire once
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}
