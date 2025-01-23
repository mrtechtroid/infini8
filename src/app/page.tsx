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
import FAQs from "@/components/faqs"
//import GalleryScene from "@/components/GalleryScene";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");
  
    const ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: {
            snapTo: 1, // snapping to the closest section
            duration: 0.5, // snapping duration (faster snap)
            ease: "power1.out", // smooth easing for snap
          },
        });
  
        if (i > 0) {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "center center",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <main ref={containerRef} className="relative">
      <Navbar />
      <CherryBlossoms />
      <section className="h-screen">
        <Hero />
      </section>
      <section className="h-screen">
        <AboutKoi />
      </section>
      <section className="h-screen">
        <Events />
      </section>
      <section className="h-screen">
        <FAQs/>
      </section>
      <section className="h-screen">
        <Footer />
      </section>
    </main>
  )
}

