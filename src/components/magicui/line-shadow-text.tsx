"use client"

import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface LineShadowTextProps
  extends Omit<
      React.HTMLAttributes<HTMLElement>,
      "children" | keyof MotionProps
    >,
    MotionProps {
  as?: React.ElementType
  children: string
  shadowColor?: string
}

export function LineShadowText({
  children,
  className,
  shadowColor = "black",
  ...props
}: LineShadowTextProps) {
  return (
    <motion.span
      className={cn(
        "relative z-0 inline-flex",
        `
          after:absolute after:top-[0.04em] after:left-[0.04em]
          after:content-[attr(data-text)]
        `,
        `
          after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]
        `,
        `
          after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text
          after:text-transparent
        `,
        "after:animate-line-shadow",
        className,
      )}
      data-text={children}
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      {...props}
    >
      {children}
    </motion.span>
  )
}
