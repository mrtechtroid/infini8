"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CustomScrollbar() {
  const [activeSection, setActiveSection] = useState("day1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    gsap.to(".scroll-indicator", {
      height: "100%",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
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
      className={`fixed ${isMobile ? 'left-0 top-0 w-full h-16' : 'left-0 top-0 h-full w-4 md:w-16'} bg-red-600 border-r flex ${isMobile ? 'flex-row' : 'flex-col'} items-center justify-center gap-4 md:gap-8 transition-all duration-300`}
      style={{
        backgroundImage: "url('/eventsbg.jpg')",
        zIndex: 10,
      }}
    >
      {!isMobile && (
        <div className="w-[2px] h-full bg-gray-300 absolute left-1/2 -translate-x-1/2">
          <div
            className="scroll-indicator w-[2px] h-0 bg-blue-600 absolute left-0 top-0"
            style={{ transition: "height 0.3s" }}
          />
        </div>
      )}
      {days.map((day) => (
        <button
          key={day}
          onClick={() => scrollToSection(day)}
          style={{
            width: isMobile ? "auto" : "280px",
            height: isMobile ? "40px" : "80px",
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
           ${isMobile ? 'w-auto px-3' : 'w-24 h-10'}
           ${
             activeSection === day
               ? "bg-yellow-600 text-white"
               : "bg-blue-600 hover:bg-blue-800"
           }`}
        >
          {!isMobile && (
            <div
              style={{
                width: "20px",
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
          )}

          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobile ? "4px" : "12px",
              padding: isMobile ? "0 5px" : "0 15px",
            }}
          >
            <div
              className="font-['The Last Shuriken']"
              style={{
                fontSize: isMobile ? "14px" : "24px",
                textTransform: "uppercase",
                fontFamily: "The Last Shuriken",
                color: "black"
              }}
            >
              {isMobile ? `Day ${day.replace("day", "")}` : day}
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                width: "4px",
                height: "100%",
                backgroundColor: "#DC2626",
              }}
            ></div>
          )}
          
          {!isMobile && (
            <div className={`absolute top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap
              left-[120%]`}>
              Go to Day {day.replace("day", "")}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
