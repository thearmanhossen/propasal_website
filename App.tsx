
import React, { useState, useRef, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import Section from './components/Section';
import GalleryImage from './components/GalleryImage';
import Confetti from './components/Confetti';
import { Heart } from 'lucide-react';

// --- Configuration ---
// Add your personal touches here
const YOUR_GIRLFRIENDS_NAME = "Jannatul";

const LOVE_MESSAGE = `
  My dearest love, from the moment you walked into my life, you painted my world with colors I never knew existed. 
  Every laugh we've shared, every challenge we've conquered, and every quiet moment in between has woven a story 
  I cherish more than words can say. You are my confidante, my greatest adventure, and my home. I love you more
  with every passing sunrise.
`;

// Add paths to your photos here. Use at least 6 for the best look.
const GALLERY_IMAGES = [
  'https://picsum.photos/400/600?random=1',
  'https://picsum.photos/400/600?random=2',
  'https://picsum.photos/400/600?random=3',
  'https://picsum.photos/400/600?random=4',
  'https://picsum.photos/400/600?random=5',
  'https://picsum.photos/400/600?random=6',
];

// Add the path to your romantic background music here
const MUSIC_SRC = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder music

// --- App Component ---
export default function App() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleInitialClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Audio autoplay was blocked.", error));
    }
    setStep(1);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setStep(5);
  };
  
  const nextStep = () => {
    if (step < 4) {
      setStep(s => s + 1);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-100 via-red-100 to-white flex flex-col items-center justify-center p-4 text-center text-gray-800">
      <FloatingHearts />
      {showConfetti && <Confetti />}
      <audio ref={audioRef} src={MUSIC_SRC} loop />

      <Section isVisible={step === 0}>
        <h1 className="font-great-vibes text-4xl md:text-7xl animate-pulse text-pink-500">
          {YOUR_GIRLFRIENDS_NAME}, this is for you ❤️
        </h1>
        <button
          onClick={handleInitialClick}
          className="mt-8 px-8 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg text-pink-600 font-bold text-lg hover:bg-white transition-transform transform hover:scale-105"
        >
          Click Here
        </button>
      </Section>
      
      <Section isVisible={step === 1}>
        <div className="bg-white/50 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl">
          <h2 className="font-great-vibes text-4xl md:text-6xl mb-4 text-red-500">My Love Letter</h2>
          <p className="text-lg md:text-2xl leading-relaxed whitespace-pre-line">{LOVE_MESSAGE}</p>
          <button onClick={nextStep} className="mt-8 px-6 py-2 bg-pink-400 text-white rounded-full shadow-lg text-lg hover:bg-pink-500 transition-transform transform hover:scale-105">
            And there's more...
          </button>
        </div>
      </Section>

      <Section isVisible={step === 2}>
        <h2 className="font-great-vibes text-4xl md:text-6xl mb-8 text-red-500">Our Memories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
          {GALLERY_IMAGES.map((src, index) => (
            <GalleryImage key={index} src={src} alt={`Memory ${index + 1}`} delay={index * 150} />
          ))}
        </div>
        <button onClick={nextStep} className="mt-10 px-6 py-2 bg-pink-400 text-white rounded-full shadow-lg text-lg hover:bg-pink-500 transition-transform transform hover:scale-105">
          A special question awaits...
        </button>
      </Section>

      <Section isVisible={step === 3}>
        <div className="bg-white/50 backdrop-blur-md p-10 rounded-2xl shadow-xl">
            <h2 className="font-great-vibes text-4xl md:text-7xl text-red-500">
                I have something special to ask...
            </h2>
            <button onClick={nextStep} className="mt-8 px-6 py-2 bg-pink-400 text-white rounded-full shadow-lg text-lg hover:bg-pink-500 transition-transform transform hover:scale-105">
                Ready?
            </button>
        </div>
      </Section>

      <Section isVisible={step === 4}>
         <h2 className="font-great-vibes text-5xl md:text-8xl mb-8 text-red-600">
            Will you be mine forever?
          </h2>
          <div className="relative my-8 animate-pulse">
              <Heart className="w-40 h-40 md:w-60 md:h-60 text-red-500" fill="currentColor" />
          </div>
          <button onClick={handleYesClick} className="px-12 py-5 bg-pink-500 text-white rounded-full shadow-2xl text-3xl font-bold hover:bg-pink-600 transition-transform transform hover:scale-110">
            Yes 💕
          </button>
      </Section>

      <Section isVisible={step === 5}>
          <h2 className="font-great-vibes text-5xl md:text-8xl text-pink-600 animate-bounce">
            She said YES!!!
          </h2>
          <p className="mt-4 text-2xl md:text-4xl">I love you more than anything.</p>
      </Section>

    </main>
  );
}
