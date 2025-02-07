// @ts-nocheck
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import {AnimatedElement} from "@/components/AnimatedElement";
import LanternButton from "@/components/LanternButton";
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white w-full h-full bg-red-900 bg-[url('/eventsbg.jpg')] relative">
      <object type="image/svg+xml" data="/sushi_anim.svg" className="absolute bottom-[0%] right-[0%]  md:right-[0%] md:bottom-[0%] md:w-[90%] md:h-[90%] " />
      {/* <AnimatedElement><img src="/sushi.svg" alt="Background pattern" width={1000} height={1000}  /></AnimatedElement> */}
      <div className="container mx-auto px-4 absolute left-[4%] top-[10%] w-[100%] h-[100%] md:w-[50%] md:h-[90%] ">
      <AnimatedElement><h2 className="text-4xl font-bold mb-12" style={{fontFamily:"The Last Shuriken"}}>Events</h2></AnimatedElement>
        <span>
          <AnimatedElement>
          <p className="text-m md:text-xl text-white leading-relaxed bg-brown-400 "
          style={{fontFamily:"Tektur"}}>
          From heart-thumping dance battles and soulful musical performances to intense gaming showdowns and quirky quizzes, Infin8’s events are a treasure trove of opportunities to shine. Dive in, compete, and experience the thrill of creating memories that last a lifetime.
          </p>
          </AnimatedElement>
        </span>
        <div className="flex flex-row md:flex-row gap-4 mb-6">
        <LanternButton url="/events" title="Day 1" title_jp="日1"/>
        <LanternButton url="/events#day2" title="Day 2" title_jp="日2"/>
        <LanternButton url="/events#day3" title="Day 3" title_jp="日3"/>
        </div>
      </div>
    </section>
  )
}

