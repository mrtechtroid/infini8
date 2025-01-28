// @ts-nocheck
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Info } from 'lucide-react';
import ArtistModal from './components/ArtistModal';

gsap.registerPlugin(ScrollTrigger);
import React from 'react';
import { X } from 'lucide-react';

interface ArtistModalProps {
  artist: {
    name: string;
    date: string;
    description: string;
    imageExtension?: string;
  };
  index: number;
  isOpen: boolean;
  onClose: () => void;
}

const ArtistModal = ({ artist, index, isOpen, onClose }: ArtistModalProps) => {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <img
              src={`/artists/0${String(index + 1)}.${artist.imageExtension || 'png'}`}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col space-y-4">
            <h2 
              className="text-2xl md:text-3xl font-bold transform -skew-x-12"
              style={{ fontFamily: "Onsen, bold" }}
            >
              {artist.name}
            </h2>
            
            <p 
              className="text-lg md:text-xl font-bold text-red-600"
              style={{ fontFamily: "Tektur, sans-serif" }}
            >
              {artist.date}
            </p>

            <div className="prose max-w-none">
              <p className="text-base md:text-lg leading-relaxed">{artist.description}</p>
              
              {/* Additional Content */}
              <div className="mt-6 space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Performance Details</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  <li>Duration: 90 minutes</li>
                  <li>Genre: Mind Reading & Illusion</li>
                  <li>Venue: Main Stage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ArtistSection = () => {
  const artists = [
    {
      name: "Twinkle Aggrwal",
      date: "7th Feb 2025",
      description: "Hailed by The New York Times as a 'modern day wizard,' Twinkle Aggrwal stuns audiences by reading minds of celebrities like Shah Rukh Khan and cricket legends Sachin Tendulkar and Virat Kohli.",
    },
    {
      name: "Karan Singh",
      date: "8th Feb 2025",
      description: "Hailed by The New York Times as a 'modern day wizard,' Karan Singh Magic stuns audiences by reading minds of celebrities like Shah Rukh Khan and cricket legends Sachin Tendulkar and Virat Kohli.",
      imageExtension: "svg",
    },
    {
      name: "Oxygen On the Rocks",
      date: "9th Feb 2024",
      description: "Hailed by The New York Times as a 'modern day wizard,' Oxygen On the Rocks stuns audiences by reading minds of celebrities like Shah Rukh Khan and cricket legends Sachin Tendulkar and Virat Kohli.",
    },
    {
      name: "DJ Kawal",
      date: "9th Feb 2025",
      description: "Hailed by The New York Times as a 'modern day wizard,' DJ Kawal stuns audiences by reading minds of celebrities like Shah Rukh Khan and cricket legends Sachin Tendulkar and Virat Kohli.",
    }
  ];

  const [screenHeight, setScreenHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const contentRef = useRef(null);
  const artistRefs = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    setMousePosition({ x, y: 0 });
  };

  const getParallaxStyle = (depth) => ({
    transform: `translateX(${mousePosition.x * depth * 50}px)`,
    transition: "transform 0.3s ease-out",
  });

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !modalOpen) {
        handleArtistChange((currentIndex + 1) % artists.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, artists.length, isAnimating, modalOpen]);

  const handleArtistChange = (newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;

    setIsAnimating(true);

    gsap.to(artistRefs.current[currentIndex], {
      y: -100,
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          artistRefs.current[newIndex],
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.25,
            onComplete: () => {
              setIsAnimating(false);
            }
          }
        );
      },
    });
  };

  return (
    <div
      className="relative w-full h-screen overflow-x-hidden bg-[url('/artistbg.png')] bg-cover bg-center bg-no-repeat"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={contentRef}
        className="relative w-full h-full flex flex-col justify-between py-4 sm:py-8 md:py-12"
      >
        {/* Artist Content */}
        <div className="flex-1 flex-wrap">
          {artists.map((artist, index) => (
            <div
              key={index}
              ref={(el) => (artistRefs.current[index] = el)}
              className={`absolute inset-0 flex items-center transition-opacity duration-250 
                ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              style={{
                pointerEvents: index === currentIndex ? "auto" : "none",
              }}
            >
              <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 max-w-screen max-h-screen p-8 overflow-hidden"
              // style={{ marginLeft: "-20rem" }}
              >
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[2/3] max-h-[60vh] group">
                    <img
                      src={`/artists/0${String(index + 1)}.${artist.imageExtension || 'png'}`}
                      alt={artist.name}
                      className="w-full h-full object-contain"
                    />
                    {/* Information Button */}
                    <button
                      onClick={() => setModalOpen(true)}
                      className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                    >
                      <Info className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Content Container */}
                  <div
                    className="flex flex-col space-y-4"
                  >
                    <div className="space-y-2">
                      <h2
                        style={{
                          fontSize: "clamp(24px, 4vw, 36px)",
                          fontFamily: "Onsen, bold",
                        }}
                        className="font-bold text-black transform -skew-x-12 inline-block px-4 py-2"
                      >
                        {artist.name}
                      </h2>
                      <p
                        className="text-lg sm:text-xl md:text-2xl font-bold text-black px-4"
                        style={{
                          fontFamily: "Tektur, sans-serif",
                        }}
                      >
                        {artist.date}
                      </p>
                    </div>

                    {/* <button
                      onClick={() => setModalOpen(true)}
                      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 hover:bg-white/90 transition-colors text-left"
                    >
                      <p
                        className="text-black"
                        style={{
                          fontSize: "clamp(12px, 2.5vw, 16px)",
                          lineHeight: "1.6",
                          fontFamily: "Tektur, sans-serif",
                        }}
                      >
                        {artist.description}
                        <span className="block mt-2 text-red-600 font-semibold text-sm">
                          Click for more details →
                        </span>
                      </p>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="relative w-full flex justify-center gap-4 pb-4 z-20">
          {artists.map((_, index) => (
            <button
              key={index}
              onClick={() => handleArtistChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-red-500 w-8"
                : "bg-white/50 hover:bg-white/80"
                }`}
              style={{
                transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/artistfront.png"
          alt="Front Layer"
          className="absolute bottom-0 md:left-0 left-[-13%] md:right-0 w-[50%] md:w-full h-full object-cover object-right-bottom"
          style={{
            ...getParallaxStyle(0.5),
            zIndex: 15,
            animation: "bambooWind 6s ease-in-out infinite",
            transformOrigin: "bottom center",
          }}
        />
        <img
          src="/artistparticle.png"
          alt="Particle Layer"
          className="absolute bottom-0 right-[-30%] md:right-0 w-[160%] md:w-full h-full object-cover object-right-bottom"
          style={{
            ...getParallaxStyle(1),
            zIndex: 16,
            transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.x * -5}px, 0) scale(${1 + mousePosition.x * 0.05})`,
          }}
        />
      </div>

      {/* Modal */}
      <ArtistModal
        artist={artists[currentIndex]}
        index={currentIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ArtistSection;