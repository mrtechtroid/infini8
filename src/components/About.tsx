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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(starRef.current,
        { x: '-3', y: '0%', opacity: 0 },
        {
          x: '0%', y: '+3%',
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

      gsap.fromTo(buildingRef.current,
        { y: 100, opacity: 0 },
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

      gsap.fromTo(textRef.current,
        { opacity: 0, y: 30 },
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
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0a0a15] overflow-hidden py-20"
    >
      {/* Stars Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <img
              ref={buildingRef}
              src="/about_building.svg"
              alt="Building with neon sign"
              className="h-full transform-gpu neon-flicker"
            />
          </div>
          
          <div 
            ref={textRef}
            className="w-full lg:w-1/2 text-white space-y-8 px-6 lg:px-0"
          >
            <h3 
              className="text-4xl md:text-5xl mb-8 text-[#FF4533]"
              // deciding style={{ fontFamily: 'Tektur, sans-serif' }}
              style={{fontFamily: 'Osake, sans-serif'}}
            >
              The Cultural Extravaganza
            </h3>

            <div className="space-y-6">
              <p 
                className="text-xl text-gray-300 leading-relaxed"
                style={{fontFamily: 'Tektur, sans-serif'}}
              >
                Infin8, the yearly cultural bash at IIITB, is a three-day extravaganza filled with vibrant shows, performances, competitions, games, and stalls.
              </p>

              <blockquote 
                className="text-2xl text-[#FF4533] pl-6 border-l-2 border-[#FF4533] my-8"
                style={{fontFamily: 'Tektur, sans-serif'}}
              >
                A unique and exciting experience for everyone
              </blockquote>

              <p 
                className="text-xl text-gray-300 leading-relaxed"
                style={{fontFamily: 'Tektur, sans-serif'}}
              >
                Talented artists from all corners of India come to showcase their skills, turning it into a thrilling spectacle. What's more, lots of students from other colleges in Bangalore join the fun, making Infin8 a true festival of creativity and celebration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
