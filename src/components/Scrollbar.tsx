"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CustomScrollbar() {
  const [activeSection, setActiveSection] = useState("day1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle responsive layout
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkMobile();

    // Add resize listener
<<<<<<< Updated upstream
    window.addEventListener('resize', checkMobile);
=======
    window.addEventListener("resize", checkMobile);
>>>>>>> Stashed changes

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create an Intersection Observer to track which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // GSAP ScrollTrigger for scroll indicator
    gsap.to(".scroll-indicator", {
      height: "100%",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
<<<<<<< Updated upstream
      window.removeEventListener('resize', checkMobile);
=======
      window.removeEventListener("resize", checkMobile);
>>>>>>> Stashed changes
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
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
<<<<<<< Updated upstream
      className={`fixed left-0 top-0 h-full bg-red-600 border-r flex flex-col items-center justify-center gap-4 md:gap-8 transition-all duration-300
        ${isMobile ? 'w-12 md:w-16' : 'w-16'}`}
      style={{
        backgroundImage: "url('/eventsbg.jpg')",
=======
      className={`fixed left-0 top-0 h-full bg-black border-r flex flex-col items-center justify-center gap-4 md:gap-8 transition-all duration-300
        ${isMobile ? "w-12 md:w-16" : "w-16"}`}
      style={{
        backgroundImage: "url('/eveTATTIntsbg.jpg')",
>>>>>>> Stashed changes
        zIndex: 10,
      }}
    >
      {/* Scroll Indicator */}
      <div className="w-[2px] h-full bg-gray-300 absolute left-1/2 -translate-x-1/2">
        <div
          className="scroll-indicator w-[2px] h-0 bg-blue-600 absolute left-0 top-0"
          style={{ transition: "height 0.3s" }}
        />
      </div>
      {days.map((day) => (
        <button
          key={day}
          onClick={() => scrollToSection(day)}
          style={{
            width: isMobile ? "200px" : "280px",
            height: isMobile ? "60px" : "80px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            zIndex: 4,
          }}
          className={`relative z-10 rounded-md flex items-center justify-start pl-2 md:pl-4
           transition-all duration-200 group overflow-hidden
<<<<<<< Updated upstream
           ${isMobile ? 'w-20 h-8 md:w-24 md:h-10' : 'w-24 h-10'}
=======
           ${isMobile ? "w-20 h-8 md:w-24 md:h-10" : "w-24 h-10"}
>>>>>>> Stashed changes
           ${
             activeSection === day
               ? "bg-yellow-600 text-white"
               : "bg-blue-600 hover:bg-blue-800"
           }`}
        >
          {/* Left black stripes */}
          <div
            style={{
              width: isMobile ? "15px" : "20px",
              height: "100%",
              backgroundColor: "#080033",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "20%",
                  backgroundColor: index % 2 === 0 ? "#080033" : "#DC2626",
                }}
              ></div>
            ))}
          </div>

          {/* Main content */}
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobile ? "8px" : "12px",
              padding: isMobile ? "0 10px" : "0 15px",
            }}
          >
            <div
              className="font-['The Last Shuriken']"
              style={{
                fontSize: isMobile ? "18px" : "24px",
                textTransform: "uppercase",
                fontFamily: "The Last Shuriken",
<<<<<<< Updated upstream
                color: "black"
=======
                color: "black",
>>>>>>> Stashed changes
              }}
            >
              {day}
            </div>
          </div>

          {/* Right red divider */}
          <div
            style={{
              width: isMobile ? "3px" : "4px",
              height: "100%",
              backgroundColor: "#DC2626",
            }}
          ></div>
<<<<<<< Updated upstream
          
          {/* Tooltip */}
          <div className={`absolute top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap
            ${isMobile ? 'left-[100%] ml-2' : 'left-[120%]'}`}>
=======

          {/* Tooltip */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap
            ${isMobile ? "left-[100%] ml-2" : "left-[120%]"}`}
          >
>>>>>>> Stashed changes
            Go to Day {day.replace("day", "")}
          </div>
        </button>
      ))}
    </div>
  );
};
