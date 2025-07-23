"use client"

import { useEffect, useRef, useState } from "react"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface InteractiveCaplyIconProps {
  className?: string
  size?: number
}

export function InteractiveCaplyIcon({
  className,
  size = 80,
}: InteractiveCaplyIconProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) {
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate direction from center to mouse
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      // Limit movement within the icon container (max 15px movement)
      const maxMove = 15
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      if (distance > 0) {
        const normalizedX =
          Math.min(maxMove, distance) * (deltaX / distance) * 0.3
        const normalizedY =
          Math.min(maxMove, distance) * (deltaY / distance) * 0.3

        setMousePosition({ x: normalizedX, y: normalizedY })
      }
    }

    // Use throttled event listener for better performance
    let ticking = false
    const optimizedHandler = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    document.addEventListener("mousemove", optimizedHandler, { passive: true })

    return () => {
      document.removeEventListener("mousemove", optimizedHandler)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative flex size-40 items-center justify-center",
        className,
      )}
      initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    >
      <motion.div
        className={`
          flex items-center justify-center rounded-4xl bg-black text-white
          shadow-2xl transition-shadow duration-300
        `}
        initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
        style={{
          fontSize: `${size * 0.5}px`,
          height: size,
          width: size,
        }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileInView={{
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        <motion.svg
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          height="1em"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{
            damping: 20,
            mass: 0.5,
            stiffness: 150,
            type: "spring",
          }}
          viewBox="0 0 48 48"
          whileInView={{ opacity: 1, scale: 1 }}
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M24 1.5c-7.415 0-12.608.228-15.873.446c-3.255.217-5.866 2.657-6.163 5.958c-.244 2.712-.476 6.748-.476 12.288s.232 9.576.476 12.288c.297 3.301 2.908 5.741 6.163 5.958c1.505.1 3.42.203 5.772.284v4.197c0 3.022 3.57 4.623 5.827 2.615l7.487-6.665c5.73-.054 9.89-.246 12.66-.431c3.256-.217 5.867-2.657 6.164-5.958c.244-2.712.476-6.748.476-12.288s-.232-9.576-.476-12.288c-.297-3.301-2.908-5.741-6.163-5.958C36.609 1.728 31.416 1.5 24 1.5m17 11.828c0 .471-.174 1.154-.445 1.79c-.46 1.076-1.702 1.076-2.812.705c-.886-.296-1.81-.39-2.846-.267c-1.716.201-4.03 1.748-4.03 4.46c0 2.206 1.32 4.14 4.378 4.428c.852.081 1.626-.038 2.409-.302c1.14-.383 2.434-.28 2.878.837c.457 1.15.631 2.533.152 3.28C39.662 29.848 36.902 30 35.245 30C29.2 30 25 26.109 25 20.016C25 14.27 29.076 10 34.897 10c2.074 0 6.103.486 6.103 3.328m-18.445 1.79c.271-.636.445-1.319.445-1.79C23 10.486 18.97 10 16.897 10C11.077 10 7 14.27 7 20.016C7 26.109 11.2 30 17.245 30c1.657 0 4.417-.15 5.439-1.742c.479-.746.305-2.13-.152-3.279c-.444-1.117-1.739-1.22-2.878-.837c-.783.264-1.557.383-2.409.302c-3.058-.289-4.378-2.222-4.378-4.428c0-2.712 2.314-4.259 4.03-4.46c1.035-.122 1.96-.029 2.846.267c1.11.37 2.352.371 2.812-.705"
            fill="currentColor"
            fillRule="evenodd"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
