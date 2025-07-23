import Link from "next/link"

import { translation } from "@/i18n/t"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
  className?: string
  href: string
  lang: string
}

export async function DownloadButton(props: DownloadButtonProps) {
  const { className, href, lang } = props
  const t = await translation(lang)
  return (
    <Link className={cn("group relative block w-fit", className)} href={href}>
      <div
        className={`
          absolute inset-0 translate-2 rounded-none bg-black
          dark:bg-white
        `}
      />
      <div
        className={`
          relative rounded-none border-4 border-black bg-white px-8 py-4
          font-title transition-transform
          group-hover:-translate-x-1 group-hover:-translate-y-1
          group-active:translate-x-0 group-active:translate-y-0
          dark:border-white dark:bg-black
        `}
      >
        <div className="flex items-center gap-4">
          <svg
            className={`
              size-12 text-black
              dark:text-white
            `}
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                d="m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.5 13.5 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828"
                fill="currentColor"
              />
            </g>
          </svg>
          <div className="flex flex-col items-center justify-center">
            <span
              className={`
                text-sm font-bold tracking-wider text-black uppercase
                dark:text-white
              `}
            >
              {t.caply.downloadOn}
            </span>
            <span
              className={`
                text-3xl leading-none font-black tracking-tight text-black
                uppercase
                dark:text-white
              `}
            >
              APP STORE
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
