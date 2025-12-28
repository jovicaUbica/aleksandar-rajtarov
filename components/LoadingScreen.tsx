import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide loading screen after a short delay
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#121a2b] flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <div className="text-center animate-pulse">
                <div className="text-8xl font-serif text-white mb-4 tracking-tighter">AP</div>
                <div className="h-[2px] w-32 bg-amber-500 mx-auto mb-6"></div>
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-[0.5em] justify-center">
                    Učitavanje...
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
