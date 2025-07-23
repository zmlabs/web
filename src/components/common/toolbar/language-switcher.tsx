"use client"

import { usePathname, useRouter } from "next/navigation"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { name: "English", code: "en-US", short: "EN" },
  { name: "简体中文", code: "zh-CN", short: "中文" },
  { name: "日本語", code: "ja-JP", short: "日" },
]

interface LanguageSwitcherProps {
  currentLang: string
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0]

  const switchLanguage = (langCode: string) => {
    const segments = pathname.split("/")
    segments[1] = langCode
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <Select value={currentLang} onValueChange={switchLanguage}>
      <SelectTrigger
        aria-label="Select language"
        className={`
          cursor-pointer border-none bg-background/80 font-semibold
          text-primary/70 shadow-none backdrop-blur-md
          hover:bg-muted hover:text-primary
          dark:border-none dark:bg-background/80
        `}
      >
        <SelectValue>{currentLanguage.short}</SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            className="cursor-pointer"
            value={lang.code}
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
