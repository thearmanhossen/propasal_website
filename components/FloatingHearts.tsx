
import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
    const hearts = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}vw`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 24 + 12}px`,
                opacity: Math.random() * 0.5 + 0.2,
            };
            return <div key={i} className="heart text-pink-400" style={style}>❤️</div>;
        });
    }, []);

    return <div className="absolute top-0 left-0 w-full h-full -z-10">{hearts}</div>;
};

export default FloatingHearts;
