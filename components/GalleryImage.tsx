
import React, { useState, useEffect } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, delay }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);


  return (
    <div className={`relative aspect-[2/3] transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90'}`}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
        />
    </div>
  );
};

export default GalleryImage;
