"use client"

import Link from "next/link"

import { useEffect, useState } from "react"

import { motion, useScroll } from "motion/react"

import { LanguageSwitcher } from "@/components/common/toolbar/language-switcher"
import { ThemeSwitcher } from "@/components/common/toolbar/theme-switcher"
import { CaplyIcon } from "@/components/layouts/header/icons/caply"
import { Separator } from "@/components/ui/separator"

interface HeaderContentProps {
  lang: string
  name: string
  navItems: {
    label: string
    path: string
  }[]
}

export function HeaderContent({ name, lang, navItems }: HeaderContentProps) {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > 50) // 滚动超过50px时触发显示
    })
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95,
        y: isVisible ? 0 : -20,
      }}
      className={`
        fixed top-2 right-2 left-2 z-50 mx-auto max-w-screen-xl origin-top
        backdrop-blur-md
        md:top-3 md:right-3 md:left-3
        lg:top-4 lg:right-4 lg:left-4
      `}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: -20,
      }}
      transition={{
        damping: 20,
        mass: 1,
        stiffness: 200,
        type: "spring",
      }}
    >
      <div
        className={`
          flex items-center justify-between rounded-2xl border bg-background/80
          px-6 py-2 shadow-sm
          lg:py-3
        `}
      >
        {/* Logo/Brand */}
        <Link
          className={`
            flex items-center gap-3 transition-transform duration-150 ease-out
            hover:scale-[1.02]
            active:scale-[0.98]
          `}
          href={`/${lang}/caply`}
        >
          <CaplyIcon className="size-8" />
          <span className="font-title text-xl font-bold">{name}</span>
        </Link>

        {/* Navigation & Toolbar */}
        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" role="navigation">
            <ul
              className={`
                flex items-center gap-1
                md:gap-2
              `}
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <motion.div
                      aria-label={`Navigate to ${item.label} section`}
                      className={`
                        cursor-pointer rounded-lg px-2 py-1 text-xs
                        font-semibold text-primary/60 transition-all
                        duration-150 ease-out
                        hover:scale-105 hover:bg-muted hover:text-primary
                        focus:outline-none
                        focus-visible:border-ring focus-visible:ring-[3px]
                        focus-visible:ring-ring/50
                        active:scale-95
                        md:px-4 md:py-2 md:text-sm
                      `}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />
          {/* Integrated Toolbar */}
          <div className="flex items-center gap-1">
            <LanguageSwitcher currentLang={lang} />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
