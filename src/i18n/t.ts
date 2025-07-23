import { languages } from "./language"

export type Locale = typeof import("./locales/en-US").default

const locales: Record<string, () => Promise<Locale>> = {
  "en-US": () => import("./locales/en-US").then((module) => module.default),
  "ja-JP": () => import("./locales/ja-JP").then((module) => module.default),
  "zh-CN": () => import("./locales/zh-CN").then((module) => module.default),
}

export async function translation(locale: string): Promise<Locale> {
  const validLocale = languages.locales.includes(locale)
    ? locale
    : languages.defaultLocale

  const localeLoader = locales[validLocale]

  return localeLoader()
}
