"use client"

import { useState, useRef, useEffect } from "react"
import { X, Menu } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide menu content initially
    if (linksRef.current) {
      gsap.set(linksRef.current, { opacity: 0 })
    }
  }, [])

  const toggleMenu = () => {
    if (!isOpen) {
      // Opening animation
      const circle = circleRef.current
      if (circle) {
        // Calculate the maximum dimension of the viewport
        const maxDim = Math.max(window.innerWidth, window.innerHeight)
        const finalScale = (maxDim * 2) / 50 // 50px is our initial circle size

        gsap
          .timeline()
          .set(circle, { display: "block" })
          .to(circle, {
            scale: finalScale,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .set(overlayRef.current, { display: "block" })
          .to(linksRef.current, {
            opacity: 1,
            duration: 0.3,
            onComplete: () => setIsOpen(true),
          })
      }
    } else {
      // Closing animation
      gsap
        .timeline()
        .to(linksRef.current, {
          opacity: 0,
          duration: 0.3,
        })
        .to(circleRef.current, {
          scale: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsOpen(false)
            gsap.set(circleRef.current, { display: "none" })
            gsap.set(overlayRef.current, { display: "none" })
          },
        })
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Toggle menu"
        style={{zIndex: 70}}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-black" />}
      </button>

      {/* Growing Circle */}
      <div
        ref={circleRef}
        className="fixed top-6 right-6 w-12 h-12 bg-slate-800 rounded-full z-50 hidden"
        style={{ transformOrigin: "center",zIndex:50 }}
      />

      {/* Menu Overlay */}
      <div ref={overlayRef} className="fixed inset-0 hidden" style={{ zIndex: 60 }} >
        {/* Decorative Elements */}
        <div className="absolute left-8 bottom-8 w-64 h-64">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
          
        </div>

        {/* Navigation Links */}
        <div ref={linksRef} className="absolute inset-0 flex flex-col items-end justify-center pr-16 md:pr-24">
          <nav className="space-y-8 text-right" style={{ fontFamily:"The Last Shuriken"}}>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/events", label: "Events" },
              { href: "/team", label: "Team" },
            ].map((link) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  className="block text-4xl md:text-5xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-handwritten)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  }}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

