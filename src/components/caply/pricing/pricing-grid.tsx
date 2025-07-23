"use client"

import { useRef, useState } from "react"

import { motion, useScroll, useTransform } from "motion/react"

import { BillingToggle } from "./billing-toggle"
import { PricingCard } from "./pricing-card"
import { PricingHeader } from "./pricing-header"

import type { Locale } from "@/i18n/t"

// Shared animation configuration
const springTransition = {
  damping: 25,
  stiffness: 120,
  type: "spring" as const,
}

interface PricingGridProps {
  pricing: Locale["caply"]["pricing"]
}

export function PricingGrid({ pricing }: PricingGridProps) {
  const [isYearly, setIsYearly] = useState(true)

  // Scroll animation setup
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start center"],
    target: containerRef,
  })

  // Transform scroll progress to width (80% to 100%)
  const backgroundWidth = useTransform(scrollYProgress, [0, 1], ["80%", "100%"])

  const tiers = [pricing.tiers.free, pricing.tiers.basic, pricing.tiers.pro]

  return (
    <section
      ref={containerRef}
      aria-label="Pricing Section"
      className={`
        relative mx-auto max-w-screen-2xl p-4
        md:p-8
        lg:p-12
      `}
    >
      {/* Animated background */}
      <motion.div
        className={`
          absolute inset-y-0 left-1/2 -z-10 -translate-x-1/2 rounded-3xl
          bg-gradient-to-b from-muted/90 via-background to-background
          dark:from-muted/50
        `}
        style={{
          width: backgroundWidth,
        }}
      />

      <PricingHeader pricing={pricing} />

      {/* Billing toggle */}
      <motion.div
        className="mb-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <BillingToggle
          billingToggle={pricing.billingToggle}
          isYearly={isYearly}
          onToggle={setIsYearly}
        />
      </motion.div>

      {/* Pricing cards grid */}
      <div
        className={`
          mx-auto grid max-w-7xl grid-cols-1 gap-8
          lg:grid-cols-3
        `}
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            transition={{
              delay: 0.4 + index * 0.15,
              duration: 0.6,
              ...springTransition,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <PricingCard
              isYearly={isYearly}
              labels={pricing.labels}
              tier={tier}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
