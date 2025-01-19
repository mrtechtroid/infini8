'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CherryBlossoms() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createBlossom = () => {
      const blossom = document.createElement('div')
      blossom.classList.add('cherry-blossom')
      blossom.style.left = `${Math.random() * 100}vw`
      blossom.style.animationDuration = `${Math.random() * 3 + 2}s`
      container.appendChild(blossom)

      gsap.to(blossom, {
        y: '100vh',
        x: `+=${Math.random() * 100 - 50}px`,
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 2,
        ease: 'none',
        onComplete: () => {
          container.removeChild(blossom)
        }
      })
    }

    const interval = setInterval(createBlossom, 300)

    return () => {
      clearInterval(interval)
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />
  )
}

