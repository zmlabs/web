"use client"

import { cn } from "@/lib/utils"

import type { Locale } from "@/i18n/t"

interface BillingToggleProps {
  billingToggle: Locale["caply"]["pricing"]["billingToggle"]
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export function BillingToggle({
  billingToggle,
  isYearly,
  onToggle,
}: BillingToggleProps) {
  return (
    <div
      className="relative rounded-full border border-border/50 bg-muted/50 p-1"
    >
      {/* 背景滑块 */}
      <div
        className={`
          absolute inset-y-1 rounded-full border border-border/30 bg-background
          shadow-sm transition-all duration-300 ease-out
        `}
        style={{
          transform: `translateX(${isYearly ? "2px" : "calc(100% - 4px)"})`,
          width: "calc(50% - 2px)",
        }}
      />

      {/* 选项按钮 */}
      <div className="relative flex">
        <button
          className={cn(
            `
              relative flex min-w-[120px] cursor-pointer items-center
              justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium
              transition-colors duration-200
            `,
            isYearly
              ? "text-foreground"
              : `
                text-muted-foreground
                hover:text-foreground
              `,
          )}
          onClick={() => onToggle(true)}
        >
          <span>{billingToggle.yearly}</span>
          <span
            className={cn(
              `
                rounded-full bg-accent px-2 py-1 text-xs font-medium
                text-accent-foreground transition-all duration-300
              `,
              isYearly ? "scale-100 opacity-100" : "scale-90 opacity-70",
            )}
          >
            {billingToggle.yearlyDiscount}
          </span>
        </button>

        <button
          className={cn(
            `
              relative flex min-w-[120px] cursor-pointer items-center
              justify-center rounded-full px-6 py-3 text-sm font-medium
              transition-colors duration-200
            `,
            !isYearly
              ? "text-foreground"
              : `
                text-muted-foreground
                hover:text-foreground
              `,
          )}
          onClick={() => onToggle(false)}
        >
          {billingToggle.monthly}
        </button>
      </div>
    </div>
  )
}
