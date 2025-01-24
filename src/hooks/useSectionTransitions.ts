import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type TransitionType = 'slide' | 'fade' | 'scale' | 'flip'

interface Section {
  id: string
  component: React.ReactNode
  transition?: TransitionType
}

export const useSectionTransitions = (
  sections: Section[],
  duration: number = 1,
  ease: string = 'power2.inOut'
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const sectionElements = sectionsRef.current
    if (!container || sectionElements.length === 0) return

    let isAnimating = false

    // Set initial styles
    gsap.set(sectionElements, { position: 'absolute', top: 0, left: 0, width: '100%' })
    gsap.set(sectionElements.slice(1), { yPercent: 100 })

    const getTransitionAnimation = (fromIndex: number, toIndex: number): gsap.core.Timeline => {
      const tl = gsap.timeline({ paused: true })
      const fromSection = sectionElements[fromIndex]
      const toSection = sectionElements[toIndex]
      const isMovingDown = toIndex > fromIndex
      const section = sections[toIndex]

      // // Temporarily disable ScrollTrigger on the sections we're animating
      // const fromScrollTriggers = ScrollTrigger.getAll().filter(st => st.vars.trigger && fromSection.contains(st.vars.trigger))
      // const toScrollTriggers = ScrollTrigger.getAll().filter(st => st.vars.trigger && toSection.contains(st.vars.trigger))

      // fromScrollTriggers.forEach(st => st.disable())
      // toScrollTriggers.forEach(st => st.disable())

      switch (section.transition) {
        case 'fade':
          tl.fromTo(toSection, 
            { opacity: 0, yPercent: isMovingDown ? 100 : -100 },
            { opacity: 1, yPercent: 0, duration }
          )
          tl.to(fromSection, { opacity: 0, duration }, 0)
          break

        case 'scale':
          tl.fromTo(toSection,
            { opacity: 0, scale: 0.8, yPercent: isMovingDown ? 100 : -100 },
            { opacity: 1, scale: 1, yPercent: 0, duration }
          )
          tl.to(fromSection, { opacity: 0, scale: 1.2, duration }, 0)
          break

        case 'flip':
          tl.fromTo(toSection,
            { rotationX: isMovingDown ? 90 : -90, yPercent: 0 },
            { rotationX: 0, yPercent: 0, duration }
          )
          tl.to(fromSection, { rotationX: isMovingDown ? -90 : 90, duration }, 0)
          break

        default: // slide
          tl.fromTo(toSection,
            { yPercent: isMovingDown ? 100 : -100 },
            { yPercent: 0, duration }
          )
          tl.to(fromSection, { yPercent: isMovingDown ? -100 : 100, duration }, 0)
      }

      // // Re-enable and reset ScrollTrigger for both sections after the transition
      // tl.add(() => {
      //   fromScrollTriggers.forEach(st => {
      //     st.enable()
      //     st.refresh()
      //   })
      //   toScrollTriggers.forEach(st => {
      //     st.enable()
      //     st.refresh()
      //   })
      // })

      return tl
    }

    const navigateToSection = (index: number) => {
      if (isAnimating || index === currentIndex || index < 0 || index >= sections.length) return
      isAnimating = true

      const animation = getTransitionAnimation(currentIndex, index)

      animation.play().then(() => {
        isAnimating = false
        setCurrentIndex(index)
      })
    }

    // Handle wheel events
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isAnimating) return

      const direction = e.deltaY > 0 ? 1 : -1
      const nextIndex = currentIndex + direction
      navigateToSection(nextIndex)
    }

    // Handle touch events
    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (isAnimating) return

      const touchEndY = e.touches[0].clientY
      const direction = touchStartY > touchEndY ? 1 : -1
      const nextIndex = currentIndex + direction
      
      if (Math.abs(touchStartY - touchEndY) > 50) {
        navigateToSection(nextIndex)
        touchStartY = touchEndY
      }
    }

    // Set up event listeners
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [sections, duration, ease, currentIndex])

  return { containerRef, sectionsRef, currentIndex }
}
