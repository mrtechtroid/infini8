import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArtistSection = () => {
  const artists = [
    {
      name: "Chaitya Shah",
      description:
        "Chaitya this mf makes us go to expensive as VEG restaurants :(\nKeyuki usse jain food chahiye",
    },
    {
      name: "Emma Gonzalez",
      description:
        "Emma is a passionate activist who advocates for gun control and youth empowerment.",
    },
    {
      name: "Neil deGrasse Tyson",
      description:
        "Neil is a renowned astrophysicist who makes complex science accessible and engaging.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);
  const artistRefs = useRef([]);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    setMousePosition({ x, y: 0 });
  };

  const getParallaxStyle = (depth) => ({
    transform: `translateX(${mousePosition.x * depth * 50}px)`,
    transition: "transform 0.3s ease-out",
  });
  const getBambooWindStyle = (depth) => ({
    ...getParallaxStyle(depth),
    animation: "bambooWind 8s ease-in-out infinite",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(artistRefs.current[currentIndex], {
        y: -100,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % artists.length);
        },
      });

      const nextIndex = (currentIndex + 1) % artists.length;
      gsap.fromTo(
        artistRefs.current[nextIndex],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
        }
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, artists.length]);
  const handleArtistChange = (newIndex: number) => {
    // Animate current artist out
    gsap.to(artistRefs.current[currentIndex], {
      y: -100,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(newIndex);
        // Animate new artist in
        gsap.fromTo(
          artistRefs.current[newIndex],
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          }
        );
      },
    });
  };

  return (
    <div
      className="relative w-full min-h-[160vh] md:min-h-screen overflow-hidden bg-[url('/artistbg.png')] bg-cover bg-center bg-no-repeat"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={contentRef}
        className="absolute top-0 left-0 w-full min-h-full py-20 md:py-0"
      >
        {artists.map((artist, index) => (
          <div
            key={index}
            ref={(el) => (artistRefs.current[index] = el)}
            className={`absolute w-full min-h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-full h-full flex items-center">
              <div className="w-full max-w-6xl px-4 md:pl-20 flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-[-40px] md:mt-0">
                <div className="relative w-[280px] md:w-[400px] h-[420px] md:h-[600px] overflow-hidden rounded-lg">
                  <img
                    src="/test_artist.png"
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:ml-12 text-center md:text-left px-4 md:px-0 flex flex-col justify-center">
                  <h2
                    style={{
                      fontSize: "42px",
                      fontFamily: "Onsen, bold",
                    }}
                    className="font-bold mb-4 text-black transform -skew-x-12 inline-block px-4 md:px-6 py-2"
                  >
                    {artist.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "50px",
                      fontStyle: "bold",
                      fontFamily: "Softly, sans-serif",
                      zIndex: 100,
                    }}
                    className="text-black p-4 max-w-xl"
                  >
                    {artist.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* artist scrolling dots*/}
      <div className="absolute bottom-8 left-0 w-full flex justify-center gap-4 z-10">
        {artists.map((_, index) => (
          <button
            key={index}
            onClick={() => handleArtistChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            style={{
              transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/artistfront.png"
          alt="Front Layer"
          className="absolute bottom-0 md:left-0 left-[-13%] md:right-0 w-[50%] md:w-full h-full object-cover object-right-bottom"
          style={{
            ...getParallaxStyle(0.5),
            zIndex: 1,
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
            zIndex: 2,
            transform: `translate3d(${mousePosition.x * 40}px, ${
              mousePosition.x * -5
            }px, 0) scale(${1 + mousePosition.x * 0.05})`,
          }}
        />
      </div>
    </div>
  );
};

export default ArtistSection;
