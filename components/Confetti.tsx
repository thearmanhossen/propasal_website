
import React, { useMemo } from 'react';

const Confetti: React.FC = () => {
  const confettiPieces = useMemo(() => {
    const colors = ['#f4a261', '#e76f51', '#2a9d8f', '#e9c46a', '#264653', '#f08080', '#ffc0cb'];
    return Array.from({ length: 100 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}vw`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        animationDuration: `${Math.random() * 3 + 4}s`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      return <div key={i} className="confetti" style={style}></div>;
    });
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">{confettiPieces}</div>;
};

export default Confetti;
