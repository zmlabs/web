import Link from "next/link"

import { translation } from "@/i18n/t"

interface FooterContentProps {
  lang: string
}

export async function FooterContent({ lang }: FooterContentProps) {
  const t = await translation(lang)

  const navigationLinks = [
    { href: `https://caply.featurebase.app/`, label: t.footer.caply.feedback },
    { href: `/${lang}/caply/help`, label: t.footer.caply.help },
    { href: `/${lang}/caply/privacy`, label: t.footer.caply.privacy },
    { href: `/${lang}/caply/terms`, label: t.footer.caply.terms },
  ]

  return (
    <div
      aria-label="Footer navigation and legal information"
      className="sticky bottom-0"
      role="contentinfo"
    >
      {/* Top Border */}
      <div
        aria-hidden="true"
        className={`
          absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent
          via-gray-300 to-transparent
          dark:via-gray-700
        `}
      />

      <div
        className={`
          mx-auto flex max-w-7xl flex-col items-center justify-between gap-8
          px-6 py-12
          sm:flex-row
          lg:px-8
        `}
      >
        {/* Footer Navigation */}
        <nav aria-label="Footer links">
          <ul
            className={`
              flex flex-wrap justify-center gap-6
              sm:justify-start
            `}
          >
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`
                    text-sm font-medium text-gray-600 transition-colors
                    hover:text-gray-900 hover:underline
                    dark:text-gray-400 dark:hover:text-gray-100
                  `}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright Information */}
        <p
          className={`
            text-center text-sm text-gray-500
            sm:text-right
            dark:text-gray-400
          `}
        >
          © {new Date().getFullYear()} ZM Labs. All rights reserved.
        </p>
      </div>
    </div>
  )
}
