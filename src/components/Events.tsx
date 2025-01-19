'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Festival Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="billboard bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-400 mb-2">{event.time}</p>
              <p className="text-gray-400">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

