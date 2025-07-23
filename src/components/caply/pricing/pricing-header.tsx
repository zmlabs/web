"use client"

import { motion } from "motion/react"

import type { Locale } from "@/i18n/t"

interface PricingHeaderProps {
  pricing: Locale["caply"]["pricing"]
}

export function PricingHeader({ pricing }: PricingHeaderProps) {
  return (
    <motion.div
      className={`
        mx-auto mb-6 text-center
        md:mb-8
        lg:mb-8
        xl:mb-10
        2xl:mb-12
      `}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.span
        className={`
          text-xs font-medium tracking-wide text-primary uppercase
          md:text-sm
        `}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        {pricing.name}
      </motion.span>

      <motion.h2
        className={`
          mt-2 font-title text-3xl font-bold tracking-tight
          md:mt-3 md:text-4xl
          lg:text-5xl
        `}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {pricing.title}
      </motion.h2>

      <motion.p
        className={`
          mx-auto mt-3 text-sm leading-relaxed text-muted-foreground
          md:mt-4 md:text-base
          lg:text-lg
        `}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {pricing.description}
      </motion.p>
    </motion.div>
  )
}
