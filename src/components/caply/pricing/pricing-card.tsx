"use client"

import { Check } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

// 共享的动画配置
const springTransition = {
  damping: 25,
  stiffness: 120,
  type: "spring" as const,
}

interface BaseTier {
  category: string
  description: string
  features: string[]
  name: string
  period?: {
    monthly: string
    yearly: string
  }
  popular?: boolean
  price: {
    monthly: string
    yearly: string
  }
}

interface PricingCardProps {
  isYearly: boolean
  labels: {
    mostPopular: string
    saveWithYearlyBilling: string
  }
  tier: BaseTier
}

export function PricingCard({ isYearly, labels, tier }: PricingCardProps) {
  const currentPrice = isYearly ? tier.price.yearly : tier.price.monthly

  return (
    <div
      className={cn(
        "relative h-full rounded-lg border p-8",
        tier.popular
          ? "border-primary bg-card shadow-lg ring-1 ring-primary/10"
          : "border-border bg-card",
      )}
    >
      {/* 流行标签 */}
      {tier.popular && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 transform"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, ...springTransition }}
        >
          <div
            className={`
              rounded-full bg-primary px-3 py-1 text-sm font-medium
              text-primary-foreground
            `}
          >
            {labels.mostPopular}
          </div>
        </motion.div>
      )}

      {/* 头部信息 */}
      <div className="mb-8 text-center">
        <motion.span
          className={`
            text-sm font-medium tracking-wide text-muted-foreground uppercase
          `}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          {tier.category}
        </motion.span>

        <motion.h3
          className="mt-2 text-3xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {tier.name}
        </motion.h3>

        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          {tier.description}
        </motion.p>
      </div>

      {/* 价格信息 */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.4, ...springTransition }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold tracking-tight">
            {currentPrice}
          </span>
          {tier.period && (
            <span className="ml-1 text-xl text-muted-foreground">
              {isYearly ? tier.period.yearly : tier.period.monthly}
            </span>
          )}
        </div>

        <p
          className={cn(
            `
              mt-2 h-5 text-sm font-medium text-muted-foreground
              transition-opacity duration-300
            `,
            isYearly ? "opacity-100" : "opacity-0",
          )}
        >
          {labels.saveWithYearlyBilling}
        </p>
      </motion.div>

      {/* 功能列表 */}
      <div className="space-y-4">
        {tier.features.map((feature, index) => (
          <motion.div
            key={feature}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <motion.div
              className={`
                mt-0.5 flex size-5 flex-shrink-0 items-center justify-center
                rounded-full bg-primary/10
              `}
              transition={springTransition}
              whileHover={{ scale: 1.1 }}
            >
              <Check className="size-3 text-primary" />
            </motion.div>
            <span className="text-sm leading-relaxed">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
