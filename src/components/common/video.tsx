/* eslint-disable jsx-a11y/media-has-caption */

import { cn } from "@/lib/utils"

interface VideoProps extends React.ComponentProps<"video"> {
  darkSrc?: string
  lightSrc?: string
}

export function Video(props: VideoProps) {
  const {
    autoPlay = true,
    className,
    darkSrc,
    lightSrc,
    loop = true,
    muted = true,
    src,
    ...rest
  } = props

  if (src) {
    return (
      <video
        {...rest}
        autoPlay={autoPlay}
        className={className}
        loop={loop}
        muted={muted}
        src={src}
      />
    )
  } else if (lightSrc && darkSrc) {
    return (
      <>
        <video
          {...rest}
          autoPlay={autoPlay}
          className={cn("dark:hidden", className)}
          loop={loop}
          muted={muted}
          src={lightSrc}
        />
        <video
          {...rest}
          autoPlay={autoPlay}
          className={cn(
            `
              hidden
              dark:block
            `,
            className,
          )}
          loop={loop}
          muted={muted}
          src={darkSrc}
        />
      </>
    )
  }
}
