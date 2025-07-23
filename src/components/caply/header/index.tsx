import { translation } from "@/i18n/t"

import { HeaderContent } from "./header-content"

interface HeaderProps {
  lang: string
}

export async function Header({ lang }: HeaderProps) {
  const t = await translation(lang)

  const navItems = [
    { label: t.header.caply.features, path: `/${lang}/caply#features` },
    { label: t.header.caply.pricing, path: `/${lang}/caply#pricing` },
    { label: t.header.caply.faq, path: `/${lang}/caply#faq` },
  ]

  return (
    <HeaderContent lang={lang} name={t.projects.caply} navItems={navItems} />
  )
}
