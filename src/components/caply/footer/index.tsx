import { DownloadButton } from "@/components/common/download-button"
import { translation } from "@/i18n/t"

import { FooterBanner } from "./footer-banner"
import { FooterContent } from "./footer-content"

interface FooterProps {
  lang: string
}

export async function Footer({ lang }: FooterProps) {
  const t = await translation(lang)

  return (
    <footer className="mx-auto max-w-screen-2xl">
      {/* Footer Banner - Acts as "curtain" that scrolls up to reveal Footer Content */}
      <FooterBanner
        description={t.footer.caply.description}
        title={t.footer.caply.title}
      >
        <DownloadButton
          className="mt-12"
          href={t.caply.appStoreUrl}
          lang={lang}
        />
      </FooterBanner>

      {/* Spacing before Footer Content */}
      <div className="h-16" />

      {/* Footer Content - Sticky at bottom, acts as background */}
      <FooterContent lang={lang} />
    </footer>
  )
}
