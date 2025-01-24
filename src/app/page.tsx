"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import Footer from "../components/Footer"
import CherryBlossoms from "../components/CherryBlossoms"
import Navbar from "@/components/Navbar"
import AboutKoi from "@/components/AboutKoi"
import GalleryScene from "@/components/Gallery"
import FAQs from "@/components/faqs"
import { useLayoutEffect } from "react";
// import useScrollSnap from "@/hooks/useScrollSnap";
import useScrollSnap from "react-use-scroll-snap";
//import GalleryScene from "@/components/GalleryScene";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function App() {
  const containerRef = useRef(null);
  // useLayoutEffect(() => {
    // if (containerRef==null){return;}
    useScrollSnap({ ref: containerRef, duration: 50, delay: 20 });
  // const [bind, unbind] = useScrollSnap(
  //   containerRef,
  //   {
  //     snapDestinationY: '100vh',
  //   },
  //   () => console.log("snapped"))
  // )},[containerRef]);
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const sections = gsap.utils.toArray(".section"); // Grab all sections dynamically
  
  //     sections.forEach((section, index) => {
  //       const nextSection = sections[index + 1]; // Get the next section
  //       if (!nextSection) return; // Skip if there is no next section
  
  //       // Animate the current section out
  //       gsap.fromTo(
  //         section,
  //         {
  //           scale: 1, // Initial state
  //           rotation: 0,
  //           opacity: 1,
  //         },
  //         {
  //           scrollTrigger: {
  //             trigger: section,
  //             start: "top top", // Start when the section hits the top of the viewport
  //             end: "bottom bottom", // End slightly after the bottom starts leaving
  //             scrub: true,
  //             pin: true, // Pin the section
  //             markers: true,
  //           },
  //           scale: 0.85, // Shrink slightly
  //           rotation: -10, // Rotate slightly
  //           opacity: 0.5, // Fade out
  //           ease: "power3.out",

  //           immediateRender: false,
  //         }
  //       );
  
  //       // Animate the next section in (simultaneously)
  //       gsap.to(
  //         nextSection,
  //         {
  //           scrollTrigger: {
  //             trigger: section, // Use the current section to trigger
  //             start: "top top", // Start slightly before the outgoing section is fully done
  //             end: "bottom bottom", // Fully animate as the current section leaves
  //             scrub: 1000,
  //             pin: false, // Pin only the outgoing section, not the incoming one
  //             // markers: "100% 0%", // Set markers to the bottom of the section
  //           },
  //           scale: 1, // Reset to normal size
  //           rotation: 0,
  //           // yPercent:-100,
  //           opacity: 1, // Fade in completely
  //           ease: "power3.out",
  //           immediateRender: false,
  //         }
  //       );
  //     });
  //   });
  
  //   return () => ctx.revert(); // Cleanup
  // }, []);
  
  
  // useEffect(() => {
  //   const sections = gsap.utils.toArray(".section"); // Grab all sections dynamically

  //   // Handle animations for the sticky container
  //   sections.forEach((section, index) => {
  //     const nextSection = sections[index + 1]; // Get the next section
  //     if (!nextSection) return;
  //     // const innerContent = section.querySelector(".inner-content");

  //     // Pin each section and animate it while scrolling
  //     gsap.to(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top top",
  //         end: `+=${window.innerHeight}`, // Pin duration = height of the viewport
  //         pin: true,
  //         scrub: 1,
  //       },
  //       y: 250,
  //       scale: 0.75,
  //       rotation: -15,
  //       ease: "power3.out",
  //     });

  //     // Animate inner content independently
  //     gsap.fromTo(
  //       nextSection,
  //       {
  //         x: -100,
  //         scale: 0.3,
  //         rotation: 15,
  //       },
  //       {
  //         x: 0,
  //         scale: 1,
  //         rotation: 0,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: nextSection,
  //           start: "top 20%",
  //           end: "top 50%",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //   });
  // }, []);


  return (
    <main className="relative h-screen">
      <Navbar />
      <div ref={containerRef} className="relative h-screen" id = "main">
      {/* <CherryBlossoms /> */}
      <section className="section h-screen">
          <Hero />
      </section>
      <section className="section h-screen">
          <AboutKoi />
      </section>
      <section className="section h-screen">
          <Events />
      </section>
      <section className="section h-screen">
          <GalleryScene />
      </section>
      <section className="section h-screen">
          <FAQs />
      </section>
      <section className="section h-screen">
          <Footer />
      </section>
      </div>
    </main>
  );
}
