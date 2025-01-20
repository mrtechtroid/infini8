'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const buildingRef = useRef<HTMLImageElement>(null)
  const starRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const neonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shooting star animation
      gsap.fromTo(starRef.current,
        {
          x: '-3',
          y: '0%',
          opacity: 0
        },
        {
          x: '0%',
          y: '+3%',
          // opacity: [0, 1, 1, 0],
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'restart none none none'
          }
        }
      )

      // Building reveal animation
      gsap.fromTo(buildingRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Text reveal animation
      gsap.fromTo(textRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Neon sign flicker effect
      // gsap.to(neonRef.current, {
      //   opacity: [1, 0.8, 1, 0.9, 1],
      //   duration: 0.5,
      //   repeat: -1,
      //   ease: 'none',
      //   yoyo: true
      // })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0a0a15] overflow-hidden py-20"
    >
      <img
        ref={starRef}
        src="/shooting_star.png"
        alt="Shooting star"
        className="absolute w-[10vw] transform-gpu z-4"
        style={{ top: '10%', left: '50%' }}
      />
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <img
              ref={buildingRef}
              src="/about_building.svg"
              alt="Building with neon sign"
              className="h-full transform-gpu"
            />
          </div>
          
          <div 
            ref={textRef}
            className="w-full lg:w-1/2 text-white space-y-6" style={{fontFamily: 'Tektur, sans-serif'}}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6" >
              The Cultural Extravaganza
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Infin8, the yearly cultural bash at IIITB, is a three-day extravaganza filled with loads of vibrant shows, 
              performances, competitions, games, and stalls. It's not your everyday event - it's a unique and exciting 
              experience for everyone.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Talented artists from all corners of India come to showcase their skills, turning it into a thrilling spectacle. 
              What's more, lots of students from other colleges in Bangalore join the fun, making Infin8 a true festival of 
              creativity and celebration.
            </p>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
