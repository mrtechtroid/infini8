"use client"

import type React from "react"
import { forwardRef } from "react"
import { useSectionTransitions } from "@/hooks/useSectionTransitions"

interface SectionContainerProps {
  sections: Array<{
    id: string
    component: React.ReactNode
    transition?: "slide" | "fade" | "scale" | "flip"
  }>
  duration?: number
  ease?: string
}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ sections, duration = 1, ease = "power2.inOut" }, ref) => {
    const { containerRef, sectionsRef, currentIndex } = useSectionTransitions(sections, duration, ease)

    return (
      <div ref={containerRef} className="h-screen overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el
            }}
            className="h-screen w-full"
            style={{
              zIndex: index === currentIndex ? 1 : 0,
              visibility: Math.abs(index - currentIndex) <= 1 ? "visible" : "hidden",
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
    )
  },
)

SectionContainer.displayName = "SectionContainer"

export default SectionContainer

