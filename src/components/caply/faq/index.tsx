import { translation } from "@/i18n/t"

import { FaqContent } from "./faq-content"

interface FaqProps {
  lang: string
}

export async function Faq(props: FaqProps) {
  const { lang } = props
  const t = await translation(lang)

  return (
    <section className="scroll-mt-24" id="faq">
      <FaqContent items={t.caply.faq.items} title={t.caply.faq.title} />
    </section>
  )
}
