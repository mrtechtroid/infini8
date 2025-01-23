'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const events = [
  { title: 'Anime Cosplay Contest', time: '2:00 PM', location: 'Main Stage' },
  { title: 'Sushi Making Workshop', time: '3:30 PM', location: 'Culinary Hall' },
  { title: 'Taiko Drumming Performance', time: '5:00 PM', location: 'Outdoor Arena' },
  { title: 'Japanese Calligraphy Class', time: '6:30 PM', location: 'Art Studio' },
  { title: 'Karaoke Night', time: '8:00 PM', location: 'Student Center' },
]

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const billboards = gsap.utils.toArray<HTMLElement>('.billboard')
    
    billboards.forEach((billboard, index) => {
      gsap.fromTo(billboard,
        { 
          opacity: 0, 
          y: 50,
          rotationY: -30,
          transformOrigin: 'left center'
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: billboard,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white w-full h-full bg-red-900 bg-[url('/eventsbg.jpg')] relative">
      <Image src="/sushi.svg" alt="Background pattern" width={1000} height={1000} className="absolute right-[0%] bottom-[0%] w-[90%] h-[90%]" />
      <div className="container mx-auto px-4 absolute left-[4%] top-[10%] w-[50%] h-[90%]">
        <h2 className="text-4xl font-bold mb-12" style={{fontFamily:"The Last Shuriken"}}>Events</h2>
        <span>
          <p className="text-xl text-gray-300 leading-relaxed">
            Infin8 is a three-day extravaganza filled with vibrant shows, performances, competitions, games, and stalls.
          </p>
        </span>
      </div>
    </section>
  )
}

