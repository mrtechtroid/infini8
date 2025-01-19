'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buildingRef = useRef<HTMLImageElement>(null)
  const blossomRef = useRef<HTMLImageElement>(null)
  const mountainRef = useRef<HTMLImageElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const birdRef = useRef<HTMLImageElement>(null)
  const pseudoMountainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(buildingRef.current, {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })
      gsap.to(birdRef.current, {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })

      gsap.to(blossomRef.current, {
        x: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })

      gsap.to(mountainRef.current, {
        y: -250,
        scale: 1.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })
      gsap.to(pseudoMountainRef.current, {
        // opacity: 1,
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        height:250,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })

      gsap.to(sunRef.current, {
        opacity: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{backgroundImage:"url('/WaterColourBG - 1.png')", background: "rgba(255, 255, 255, 1)"}}
    >
      <div className="relative h-full w-full max-w-[1920px] mx-auto">
        <img
          ref={birdRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birds-EiB1bMKlqOM77MoS6SzA7P3WXsHbyy.svg"
          alt="Flying birds"
          className="absolute top-[15%] left-[15%] w-[120px] md:w-[180px] lg:w-[220px] z-20"
        />
        
        <div 
          ref={sunRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-10"
        >
          <div className="absolute inset-0 bg-[#FF4533] rounded-full" />
        </div>


        <img
          ref={buildingRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/building-QfSshdJncVB1b9cfYiOkkz3izBLM9L.svg"
          alt="Japanese pagoda"
          className="absolute bottom-[0%] w-[180px] md:w-[250px] lg:w-[320px] z-30 transform-gpu"
        />

        <img
          ref={mountainRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountain-LnAQuV6tIuBDPnQfkWj5osBZQT4eOD.svg"
          alt="Mount Fuji"
          className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[500px] md:w-[600px] lg:w-[1000px] z-20 transform-gpu"
        />

        <img
          ref={blossomRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cherry_blossom-9tlvCGBNKYu5I1mHJw2PwMfu9kkOpS.svg"
          alt="Cherry blossoms"
          className="absolute top-[0%] right-[0%] w-[180px] md:w-[250px] lg:w-[320px] z-30 transform-gpu"
        />
        <div
        ref={pseudoMountainRef}
        className='absolute bottom-0 left-0 w-full h-[30px] bg-black'
        >
        </div>
        
      </div>
    </section>
  )
}

