"use client"

import { motion, type HTMLMotionProps, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

type GradientBackgroundProps = HTMLMotionProps<"div"> & {
  transition?: Transition
}

function GradientBackground({
  className,
  transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
  ...props
}: GradientBackgroundProps) {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      className={cn(
        `
          absolute inset-0 size-full bg-gradient-to-br from-muted/90
          via-muted/10 to-muted/90
          bg-[length:400%_400%]
        `,
        className,
      )}
      data-slot="gradient-background"
      transition={transition}
      {...props}
    />
  )
}

export { GradientBackground, type GradientBackgroundProps }
