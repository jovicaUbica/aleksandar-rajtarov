import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-[#121a2b] hover:bg-amber-600 text-white p-3 rounded-full shadow-2xl transition-all hover:scale-110 group"
            aria-label="Nazad na vrh"
        >
            <ArrowUp className="w-5 h-5" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#121a2b] text-white px-3 py-2 rounded-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Na vrh
            </span>
        </button>
    );
};

export default BackToTop;
