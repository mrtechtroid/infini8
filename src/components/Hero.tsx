"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // Refs remain the same
  const containerRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLImageElement>(null);
  const blossomRef = useRef<HTMLImageElement>(null);
  const mountainRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const birdRef = useRef<HTMLImageElement>(null);
  const pseudoMountainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Reset all elements to initial positions
      gsap.set([
        buildingRef.current,
        birdRef.current,
        blossomRef.current,
        mountainRef.current,
        sunRef.current,
        logoRef.current,
        pseudoMountainRef.current
      ], {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        // Add other animated properties as needed
      });

      // Initial load animations
      gsap.from(buildingRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      gsap.from(birdRef.current, {
        x: -200,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power1.out",
      });

      gsap.from(blossomRef.current, {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power1.out",
      });

      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // ScrollTrigger animations with immediateRender: false
      gsap.fromTo(
        buildingRef.current,
        { x: 0 },
        {
          x: -150,
          ease: "power1.inOut",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=500",
            scrub: 0.5,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Apply similar changes to all ScrollTrigger animations
      gsap.fromTo(blossomRef.current,
        { x: 0 },
        {
          x: 200,
          ease: "power1.inOut",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=500",
            scrub: 0.5,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(mountainRef.current,
        { y: 0, scale: 1 },
        {
          y: -50,
          scale: 1.1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Add immediateRender: false to all other ScrollTrigger animations...
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden watercolor-bg" //put this for css background
      // className="relative h-screen w-full overflow-hidden" uncoment for image background
      // style={{ backgroundImage: "url('/bg-upscale.png')" }} uncomment for image background
    >
        <div className="sakura-overlay" /> {/*put for css background*/}
      <div className="relative h-full w-full max-w-[1920px] mx-auto">
        <img
          ref={birdRef}
          src="/Birds.svg"
          alt="Flying birds"
          className="absolute top-[15%] left-[15%] w-[120px] md:w-[180px] lg:w-[220px] z-20"
        />

        {/* Sun with reduced opacity */}
        {/* <div
          ref={sunRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-[5] opacity-100"
        >
          <div className="absolute inset-0 bg-[#FF4533] rounded-full mix-blend-screen" />
        </div>

        <div
          ref={logoRef}
          className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15] transform-gpu opacity-0"  // Added opacity-0
        >
          <img
            src="/infin8_logo.png"
            alt="Infin8 logo"
            className="w-[300px] md:w-[360px] lg:w-[440px]"
          />
        </div> */}
        <div
          ref={sunRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-[5] opacity-80"
        >
          <div className="absolute inset-0 bg-[#FF4533] rounded-full mix-blend-screen" />

          {/* Logo now nested inside sun div */}
          <div
            ref={logoRef}
            className="absolute inset-0 flex items-center justify-center z-[15]"
          >
            <img
              src="/infin8_logo.png"
              alt="Infin8 logo"
              className="w-[300px] md:w-[360px] lg:w-[440px]"
            />
          </div>
        </div>

        <img
          ref={buildingRef}
          src="building.svg"
          alt="Japanese pagoda"
          className="absolute bottom-[0%] w-[150px] md:w-[220px] lg:w-[320px] z-30 transform-gpu"
        />

        <div className="absolute bottom-0 left-[100px] md:left-[160px] lg:left-[230px] w-full flex items-end z-20">
          <img
            ref={mountainRef}
            src="mountain.svg"
            alt="Mount Fuji"
            className="w-[500px] md:w-[600px] lg:w-[1000px] transform-gpu"
          />
        </div>

        <img
          ref={blossomRef}
          src="cherry_blossom.svg"
          alt="Cherry blossoms"
          className="absolute top-[0%] right-[0%] w-[180px] md:w-[250px] lg:w-[320px] z-30 transform-gpu"
        />
        {/* <div
          ref={pseudoMountainRef}
          className='absolute bottom-0 left-0 w-full h-[30px] bg-black'
        > */}
        <div
          ref={pseudoMountainRef}
          className="absolute bottom-0 left-0 w-full h-[30px] bg-[#0a0a0a] transform-gpu z-10 "
          style={{ marginBottom: "-1px" }} // This eliminates any potential gap
        ></div>
      </div>
    </section >

  )
}
