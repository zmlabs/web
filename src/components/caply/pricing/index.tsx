import { translation } from "@/i18n/t"

import { PricingGrid } from "./pricing-grid"

interface PricingProps {
  lang: string
}

export async function Pricing(props: PricingProps) {
  const { lang } = props
  const t = await translation(lang)

  return (
    <section className="scroll-mt-24" id="pricing">
      <PricingGrid pricing={t.caply.pricing} />
    </section>
  )
}
