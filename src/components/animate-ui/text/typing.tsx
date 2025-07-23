"use client"

import * as React from "react"

import { motion, useInView, type UseInViewOptions } from "motion/react"

import { cn } from "@/lib/utils"

function CursorBlinker({ className }: { className?: string }) {
  return (
    <motion.span
      animate="blinking"
      className={cn(
        `ml-2 inline-block h-5 w-[1px] translate-y-1 bg-muted-foreground`,
        className,
      )}
      data-slot="cursor-blinker"
      variants={{
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
            times: [0, 0.5, 0.5, 1],
          },
        },
      }}
    />
  )
}

type TypingTextProps = Omit<React.ComponentProps<"span">, "children"> & {
  animateOnChange?: boolean
  cursor?: boolean
  cursorClassName?: string
  delay?: number
  duration?: number
  holdDelay?: number
  inView?: boolean
  inViewMargin?: UseInViewOptions["margin"]
  inViewOnce?: boolean
  loop?: boolean
  text: string | string[]
}

function TypingText({
  animateOnChange = true,
  cursor = false,
  cursorClassName,
  delay = 0,
  duration = 100,
  holdDelay = 1000,
  inView = false,
  inViewMargin = "0px",
  inViewOnce = true,
  loop = false,
  ref,
  text,
  ...props
}: TypingTextProps) {
  const localRef = React.useRef<HTMLParagraphElement>(null)
  React.useImperativeHandle(ref, () => localRef.current!)

  const inViewResult = useInView(localRef, {
    margin: inViewMargin,
    once: inViewOnce,
  })
  const isInView = !inView || inViewResult

  const [started, setStarted] = React.useState(false)
  const [displayedText, setDisplayedText] = React.useState<string>("")

  React.useEffect(() => {
    // Reset animation when text changes (if animateOnChange is true)
    if (animateOnChange) {
      setStarted(false)
      setDisplayedText("")
    }

    if (isInView) {
      const timeoutId = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(timeoutId)
    } else {
      const timeoutId = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(timeoutId)
    }
  }, [isInView, delay, text, animateOnChange])

  React.useEffect(() => {
    if (!started) {
      return
    }
    const timeoutIds: ReturnType<typeof setTimeout>[] = []
    const texts: string[] = typeof text === "string" ? [text] : text

    const typeText = (str: string, onComplete: () => void) => {
      let currentIndex = 0
      const type = () => {
        if (currentIndex <= str.length) {
          setDisplayedText(str.substring(0, currentIndex))
          currentIndex++
          const id = setTimeout(type, duration)
          timeoutIds.push(id)
        } else {
          onComplete()
        }
      }
      type()
    }

    const eraseText = (str: string, onComplete: () => void) => {
      let currentIndex = str.length
      const erase = () => {
        if (currentIndex >= 0) {
          setDisplayedText(str.substring(0, currentIndex))
          currentIndex--
          const id = setTimeout(erase, duration)
          timeoutIds.push(id)
        } else {
          onComplete()
        }
      }
      erase()
    }

    const animateTexts = (index: number) => {
      typeText(texts[index] ?? "", () => {
        const isLast = index === texts.length - 1
        if (isLast && !loop) {
          return
        }
        const id = setTimeout(() => {
          eraseText(texts[index] ?? "", () => {
            const nextIndex = isLast ? 0 : index + 1
            animateTexts(nextIndex)
          })
        }, holdDelay)
        timeoutIds.push(id)
      })
    }

    animateTexts(0)

    return () => {
      timeoutIds.forEach(clearTimeout)
    }
  }, [text, duration, started, loop, holdDelay])

  return (
    <p ref={localRef} data-slot="typing-text" {...props}>
      <span className="sr-only">{text}</span>
      <motion.span>{displayedText}</motion.span>
      {cursor && <CursorBlinker className={cursorClassName} />}
    </p>
  )
}

export { TypingText, type TypingTextProps }
