import { translation } from "@/i18n/t"

import { TypingText } from "../animate-ui/text/typing"
import { DownloadButton } from "../common/download-button"
import { LineShadowText } from "../magicui/line-shadow-text"

interface IntroductionProps {
  lang: string
}

export async function Introduction(props: IntroductionProps) {
  const { lang } = props
  const t = await translation(lang)
  const [leftText, rightText] = t.caply.introduction.title.split("AI")
  return (
    <div
      className={`
        space-y-3
        md:space-y-4
        lg:space-y-6
      `}
    >
      <h2
        className={`
          text-3xl font-bold tracking-tight
          md:text-4xl
          lg:text-5xl
        `}
      >
        {leftText}
        <LineShadowText
          className={`
            text-5xl
            md:text-6xl
            lg:text-7xl
          `}
        >
          AI
        </LineShadowText>
        {rightText}
      </h2>
      <TypingText
        cursor
        className={`
          text-sm text-muted-foreground italic
          md:text-base
          lg:text-lg
        `}
        duration={40}
        text={t.caply.introduction.description}
      />
      <DownloadButton
        className="mt-12"
        href={t.caply.appStoreUrl}
        lang={lang}
      />
    </div>
  )
}
