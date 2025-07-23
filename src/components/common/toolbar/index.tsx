"use client"

import { motion } from "motion/react"

import { LanguageSwitcher } from "./language-switcher"
import { ThemeSwitcher } from "./theme-switcher"

interface ToolbarProps {
  lang: string
}

export function Toolbar({ lang }: ToolbarProps) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`
        absolute top-4 right-4 z-10 flex items-center gap-3 rounded-lg border
        border-border/50 px-2 py-1
      `}
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{
        delay: 0.1,
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <LanguageSwitcher currentLang={lang} />
      <ThemeSwitcher />
    </motion.div>
  )
}
