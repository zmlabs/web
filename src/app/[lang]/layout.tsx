import type { Metadata } from "next"
import { Baloo_2, Noto_Serif_JP, Varela_Round } from "next/font/google"
import { redirect } from "next/navigation"

import { ThemeProvider } from "next-themes"

import { languages } from "@/i18n/language"
import { cn } from "@/lib/utils"

import type { ParamsPropsWithChildren } from "@/interface/shared-props"

import "./globals.css"

const balooSans = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo-sans",
})

const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-varela-round",
  weight: "400",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: "400",
})

export const metadata: Metadata = {
  title: "ZM Labs",
  description:
    "An independent development lab focused on creative software solutions.",
}

export async function generateStaticParams() {
  return languages.locales.map((lang) => ({ lang }))
}

export default async function RootLayout(props: ParamsPropsWithChildren) {
  const { children, params } = props

  const { lang } = await params

  if (!languages.locales.includes(lang)) {
    redirect(languages.defaultLocale)
  }

  return (
    <html
      suppressHydrationWarning
      className={cn(
        balooSans.variable,
        varelaRound.variable,
        notoSerifJP.variable,
        "relative",
      )}
      lang={lang}
    >
      <body className="bg-background font-body text-foreground antialiased">
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
