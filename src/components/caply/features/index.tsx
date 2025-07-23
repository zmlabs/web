import { translation } from "@/i18n/t"

import { FeatureShowcase } from "./showcase"

interface FeaturesProps {
  lang: string
}

export async function Features(props: FeaturesProps) {
  const { lang } = props
  const t = await translation(lang)

  return (
    <FeatureShowcase
      details={t.caply.features.details}
      header={{
        description: t.caply.features.description,
        subtitle: t.caply.features.name,
        title: t.caply.features.title,
      }}
    />
  )
}
