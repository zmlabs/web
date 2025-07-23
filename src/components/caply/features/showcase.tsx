"use client"

import { useEffect, useRef, useState } from "react"

import { motion, useScroll } from "motion/react"

import { cn } from "@/lib/utils"

// Shared animation configuration
const springTransition = {
  damping: 25,
  stiffness: 120,
  type: "spring" as const,
}

interface DetailData {
  description: string
  title: string
}

interface DetailsData {
  aiTranslation: DetailData
  captionMode: DetailData
  customDisplay: DetailData
  historyAndSummary: DetailData
  localRecognition: DetailData
}

interface HeaderData {
  description: string
  subtitle: string
  title: string
}

interface FeatureShowcaseProps {
  details: DetailsData
  header: HeaderData
}

export function FeatureShowcase({ details, header }: FeatureShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  })

  const detailsArray = [
    {
      key: "aiTranslation",
      ...details.aiTranslation,
      video: "/caply/translation.mp4",
    },
    {
      key: "captionMode",
      ...details.captionMode,
      video: "/caply/caption-mode.mp4",
    },
    {
      key: "customDisplay",
      ...details.customDisplay,
      video: "/caply/dark-mode.mp4",
    },
    {
      key: "historyAndSummary",
      ...details.historyAndSummary,
      video: "/caply/summary.mp4",
    },
    {
      key: "localRecognition",
      ...details.localRecognition,
      video: "/caply/recognition.mp4",
    },
  ]

  // Calculate the currently active item based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const totalItems = detailsArray.length
      // Create smoother transitions with better segment division
      const segmentSize = 1 / totalItems
      const adjustedProgress = Math.max(0, Math.min(1, progress))
      let rawIndex = adjustedProgress / segmentSize

      // Add slight bias to make transitions feel more natural
      if (rawIndex > 0.1) {
        rawIndex = rawIndex - 0.1
      }

      const index = Math.floor(rawIndex)
      const clampedIndex = Math.min(Math.max(index, 0), totalItems - 1)
      setActiveIndex(clampedIndex)
    })

    return unsubscribe
  }, [scrollYProgress, detailsArray.length])

  return (
    <section
      ref={containerRef}
      aria-label="Features Section"
      className={`
        relative mx-auto mb-0 h-[400vh] max-w-screen-2xl px-4 pb-24
        md:px-8
        lg:px-12
      `}
      id="features"
    >
      <div
        className={`
          sticky top-0 flex h-screen flex-col items-center pt-18 pb-8
          lg:pt-24
          2xl:pt-32
        `}
      >
        {/* Centered header section */}
        <motion.div
          className={`
            mb-6 text-center
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
            {header.subtitle}
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
            {header.title}
          </motion.h2>
          <motion.p
            className={`
              mx-auto mt-3 max-w-2xl text-sm leading-relaxed
              text-muted-foreground
              md:mt-4 md:text-base
              lg:text-lg
            `}
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {header.description}
          </motion.p>
        </motion.div>

        {/* Feature showcase content */}
        <div
          className={`
            grid flex-1 grid-cols-1 gap-6
            md:gap-8
            lg:grid-cols-2 lg:gap-8
            xl:gap-12
            2xl:gap-16
          `}
        >
          {/* Left side: Feature list */}
          <motion.div
            className={`
              order-2 self-center
              lg:order-1
            `}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Mobile: Show only active item */}
            <div
              className={`
                block
                lg:hidden
              `}
            >
              <FeatureItem
                key={detailsArray[activeIndex]?.key}
                isActive
                description={detailsArray[activeIndex]?.description}
                title={detailsArray[activeIndex]?.title}
              />
              {/* Mobile page indicator */}
              <div className="mt-4 flex justify-center">
                <span className="text-xs text-muted-foreground">
                  {activeIndex + 1} / {detailsArray.length}
                </span>
              </div>
            </div>

            {/* Desktop: Show all items */}
            <div
              className={`
                hidden space-y-1.5
                md:space-y-2
                lg:block lg:space-y-2
                xl:space-y-3
                2xl:space-y-4
              `}
            >
              {detailsArray.map((detail, index) => (
                <FeatureItem
                  key={detail.key}
                  description={detail.description}
                  isActive={index === activeIndex}
                  title={detail.title}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side: Video area */}
          <div
            className={`
              order-1 flex items-center justify-center
              lg:order-2
            `}
          >
            <VideoPlayer
              key={activeIndex}
              activeVideo={detailsArray[activeIndex]?.video}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  description: string
  isActive: boolean
  title: string
}

function FeatureItem({ description, isActive, title }: FeatureItemProps) {
  return (
    <div
      className={cn(
        `
          relative transform-gpu rounded-lg border px-5 py-2 transition-all
          duration-500 ease-out
          md:rounded-xl
          xl:py-3
          2xl:py-4
        `,
        isActive
          ? `
            translate-x-0 scale-100 border-primary/40 bg-muted-foreground/5
            opacity-100 shadow-lg shadow-primary/15
            dark:shadow-none
          `
          : `
            -translate-x-2 scale-98 border-border/40 bg-card/20 opacity-50
            hover:border-border/60 hover:bg-card/30 hover:opacity-70
            md:-translate-x-3
          `,
      )}
    >
      <h3
        className={cn(
          `
            mb-1 text-sm font-semibold transition-all duration-400 ease-out
            md:text-base
            lg:mb-1 lg:text-base
            xl:mb-1.5 xl:text-sm
            2xl:mb-2 2xl:text-base
          `,
          isActive ? "text-foreground" : "text-foreground/75",
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          `
            text-xs leading-snug transition-all duration-400 ease-out
            md:text-sm
            lg:text-sm lg:leading-snug
            xl:text-xs xl:leading-snug
            2xl:text-sm 2xl:leading-normal
          `,
          isActive
            ? "text-muted-foreground opacity-100"
            : "text-muted-foreground/70 opacity-80",
        )}
      >
        {description}
      </p>
    </div>
  )
}

interface VideoPlayerProps {
  activeVideo: string
}

function VideoPlayer({ activeVideo }: VideoPlayerProps) {
  return (
    <motion.video
      key={activeVideo}
      autoPlay
      loop
      muted
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className={`
        relative aspect-[9/16] max-h-[50vh] w-full rounded-lg object-cover
        shadow-xl ring-1 ring-border/20
        xl:max-h-[60vh] xl:rounded-2xl
      `}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      src={activeVideo}
      transition={{
        ...springTransition,
        duration: 0.6,
      }}
    />
  )
}
