'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Footer from '@/components/Footer'
import CherryBlossoms from '@/components/CherryBlossoms'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('section:not(:first-child)').forEach((section, i) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="relative overflow-hidden">
      <Hero />
      <CherryBlossoms />
      <About />
      <Events />
      <Footer />
    </main>
  )
}

