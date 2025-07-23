export function GridBackground() {
  return (
    <>
      <div
        className={`
          absolute inset-0
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          [background-size:80px_80px]
          dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]
        `}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className={`
          pointer-events-none absolute inset-0 flex items-center justify-center
          bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          dark:bg-black
        `}
      />
    </>
  )
}
