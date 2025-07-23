"use client"

import { motion } from "motion/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Shared animation configuration
const springTransition = {
  damping: 25,
  stiffness: 120,
  type: "spring" as const,
}

interface FaqItem {
  answer: string
  id: string
  question: string
}

interface FaqContentProps {
  items: FaqItem[]
  title: string
}

export function FaqContent({ items, title }: FaqContentProps) {
  return (
    <motion.section
      aria-label="FAQ Section"
      className={`
        mx-auto my-24 max-w-screen-2xl space-y-6 p-4
        md:space-y-8 md:p-8
        lg:space-y-8 lg:p-12
        xl:space-y-10
        2xl:space-y-12
      `}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2
          className={`
            font-title text-3xl font-bold tracking-tight
            md:text-4xl
            lg:text-5xl
          `}
        >
          {title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.6, ...springTransition }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Accordion className="w-full" type="multiple">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.5,
                ...springTransition,
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <AccordionItem value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  )
}
