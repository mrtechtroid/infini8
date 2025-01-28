"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bold } from "lucide-react";

export default function CustomScrollbar() {
  const [activeSection, setActiveSection] = useState("day1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < window.innerHeight);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Simple scroll-based section detection
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const days = ["day1", "day2", "day3"];

  return (
    <div
      className={`fixed ${isMobile ? 'left-0 top-0 w-full h-16' : 'left-0 top-0 h-full w-4 md:w-16'} bg-red-600 border-r flex ${isMobile ? 'flex-row' : 'flex-col'} items-center justify-center gap-4 md:gap-8 transition-all duration-300`}
      style={{
        backgroundImage: "url('/eventsbg.jpg')",
        zIndex: 10,
      }}
    >
      {days.map((day) => (
        <button
          key={day}
          onClick={() => scrollToSection(day)}
          className={`relative z-10 rounded-md flex items-center justify-start pl-2 md:pl-4
           transition-all duration-200 group overflow-hidden
           ${isMobile ? 'w-auto px-3 h-10' : 'w-24 h-10'}
           ${activeSection === day 
             ? "bg-yellow-600 text-black scale-120" 
             : "bg-blue-600 hover:bg-blue-800"}`}
        >
          <div className="text-center w-full"
          style={{ fontFamily: "The Last Shuriken", fontStyle: "bold", fontSize: 15}}>
            {isMobile ? `Day ${day.replace("day", "")}` : day}
          </div>
        </button>
      ))}
    </div>
  );
}
