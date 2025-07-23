"use client"

import { useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`
          relative flex size-9 cursor-pointer items-center justify-center
          overflow-hidden rounded-lg bg-background/80 backdrop-blur-md
        `}
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`
        relative flex size-9 cursor-pointer items-center justify-center
        overflow-hidden rounded-lg bg-background/80 backdrop-blur transition-all
        duration-150 ease-out
        hover:scale-105 hover:bg-muted
        focus:outline-none
        focus-visible:border-ring focus-visible:ring-[3px]
        focus-visible:ring-ring/50
        active:scale-95
      `}
      onClick={toggleTheme}
    >
      {/* Sun Icon */}
      <motion.div
        animate={{
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        className="absolute"
        initial={{
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun className="size-5 text-amber-500" />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        animate={{
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          scale: isDark ? 1 : 0.8,
        }}
        className="absolute"
        initial={{
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Moon className="size-5 text-blue-400" />
      </motion.div>
    </motion.button>
  )
}
