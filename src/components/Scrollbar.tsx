"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CustomScrollbar() {
  const [activeSection, setActiveSection] = useState("day1");

  useEffect(() => {
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
        threshold: 0.5, // Trigger when section is 50% visible
      }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // GSAP ScrollTrigger for scroll indicator
    gsap.to(".scroll-indicator", {
      height: "100%", // Animate the height of the indicator
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true, // Smooth syncing with scroll
      },
    });

    return () => observer.disconnect();
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
      className="fixed left-0 top-0 h-full bg-red-600 w-16 bg-background border-r flex flex-col items-center justify-center gap-8"
      style={{
        backgroundImage: "url('/eventsbg.jpg')",
        zIndex: 10, // Ensure the container is above other elements
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
            width: "280px",
            height: "80px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            zIndex: 4, // Ensure buttons are above the scrollbar indicator
          }}
          className={`relative z-10 w-24 h-10 rounded-md flex items-center justify-start pl-4
           transition-all duration-200 group overflow-hidden
           ${
             activeSection === day
               ? "bg-yellow-600 text-white"
               : "bg-blue-600 hover:bg-blue-800"
           }`}
        >
          {/* Left black stripes */}
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

          {/* Main content */}
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              padding: "0 15px",
            }}
          >
            <div
              className="font-['The Last Shuriken']"
              style={{
                fontSize: "24px",
                textTransform: "uppercase",
                fontFamily: "The Last Shuriken",
                color:"black"
              }}
            >
              {`${day}`}
            </div>
          </div>

          {/* Right red divider */}
          <div
            style={{
              width: "4px",
              height: "100%",
              backgroundColor: "#DC2626",
            }}
          ></div>
          <div className="absolute left-[120%] top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-popover text-popover-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
            Go to Day {day.replace("day", "")}
          </div>
        </button>
      ))}
    </div>
  );
}
