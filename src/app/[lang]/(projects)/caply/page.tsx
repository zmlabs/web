import type { Metadata } from "next"

import { Banner } from "@/components/caply/banner"
import { Faq } from "@/components/caply/faq"
import { Features } from "@/components/caply/features"
import { Introduction } from "@/components/caply/introduction"
import { Pricing } from "@/components/caply/pricing"
import { GridBackground } from "@/components/common/grid-background"
import { translation } from "@/i18n/t"

import type { ParamsProps } from "@/interface/shared-props"

export async function generateMetadata(props: ParamsProps): Promise<Metadata> {
  const { params } = props
  const { lang } = await params
  const t = await translation(lang)

  return {
    description: t.caply.introduction.description,
    title: `${t.caply.introduction.title} - ${t.projects.caply}`,
    openGraph: {
      description: t.caply.introduction.description,
      title: t.caply.introduction.title,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      description: t.caply.introduction.description,
      title: t.caply.introduction.title,
    },
  }
}

export default async function Caply(props: ParamsProps) {
  const { params } = props
  const { lang } = await params

  return (
    <>
      <section
        aria-label="Hero Section"
        className={`
          relative flex min-h-screen flex-col justify-center overflow-hidden
          border-b p-4 shadow-lg
          md:p-8
          lg:p-12
        `}
        role="banner"
      >
        <GridBackground />
        <div
          className={`
            relative z-10 mx-auto max-w-screen-2xl space-y-16
            md:space-y-24
          `}
        >
          <Banner lang={lang} />
          <Introduction lang={lang} />
        </div>
      </section>

      <div
        className={`
          p-4
          md:p-8
          lg:p-12
        `}
      >
        <Features lang={lang} />

        <Pricing lang={lang} />

        <Faq lang={lang} />
      </div>
    </>
  )
}
