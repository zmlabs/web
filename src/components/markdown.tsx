import markdownit from "markdown-it"

import { cn } from "@/lib/utils"

const md = markdownit()

interface MarkdownProps {
  className?: string
  text: string
}

export default function Markdown(props: MarkdownProps) {
  const { className, text } = props

  return (
    <article
      dangerouslySetInnerHTML={{ __html: md.render(text) }}
      // eslint-disable-next-line better-tailwindcss/no-unregistered-classes
      className={cn("markdown-body prose", className)}
    />
  )
}
