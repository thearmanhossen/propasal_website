
import React from 'react';

interface SectionProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ isVisible, children }) => {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
