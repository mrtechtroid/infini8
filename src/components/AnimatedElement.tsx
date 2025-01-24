"use client"

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
interface AnimatedElementProps {
  children: ReactNode
  delay?: number
}

export function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const controls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        controls.start({ opacity: 1, y: 0 })
      }
    }, [isInView, controls])
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
}

