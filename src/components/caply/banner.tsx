import { translation } from "@/i18n/t"

import { Video } from "../common/video"
import { CaplyIcon } from "../layouts/header/icons/caply"

interface BannerProps {
  lang: string
}

export async function Banner(props: BannerProps) {
  const { lang } = props
  const t = await translation(lang)
  return (
    <div
      className={`
        flex flex-col gap-6
        lg:flex-row lg:items-end lg:gap-8
      `}
    >
      <div
        className={`
          mb-4 flex items-center gap-3
          lg:mb-8 lg:gap-4
        `}
      >
        <CaplyIcon
          aria-label={t.projects.caply}
          className="size-32 rounded-4xl text-7xl"
        />
        <h1 className="font-title text-8xl font-bold">{t.projects.caply}</h1>
      </div>
      <Video
        className="w-full max-w-xl rounded-xl"
        darkSrc="/caply/introduction-dark.mp4"
        lightSrc="/caply/introduction-light.mp4"
      />
    </div>
  )
}
