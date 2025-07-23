"use client"

import { motion } from "motion/react"

import { InteractiveCaplyIcon } from "./interactive-caply-icon"

const springTransition = {
  damping: 25,
  stiffness: 120,
  type: "spring" as const,
}

interface FooterBannerProps {
  children: React.ReactNode
  description: string
  title: string
}

export function FooterBanner({
  children,
  description,
  title,
}: FooterBannerProps) {
  return (
    <motion.div
      aria-labelledby="footer-banner-heading"
      className={`
        relative z-10 mx-4 overflow-hidden rounded-3xl bg-gradient-to-br
        from-gray-50 to-gray-100 py-4
        md:py-8
        lg:py-12
        dark:from-zinc-900 dark:to-zinc-800
      `}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ margin: "-100px", once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Background Pattern */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 0.08, scale: 1 }}
      >
        <div
          className="size-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, oklch(0.22 0.045 264.665) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>
      {/* Main Content */}
      <div
        className={`
          relative flex min-h-[400px] flex-col items-center justify-center px-6
          text-center
        `}
      >
        {/* Interactive Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ...springTransition,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
        >
          <InteractiveCaplyIcon size={120} />
        </motion.div>

        {/* Description Text */}
        <div className="mt-8 max-w-2xl space-y-4">
          <motion.h2
            className={`
              text-4xl font-bold tracking-tight text-gray-900
              sm:text-5xl
              dark:text-gray-100
            `}
            id="footer-banner-heading"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className={`
              mt-6 text-lg leading-8 text-gray-600
              dark:text-gray-400
            `}
            initial={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}
