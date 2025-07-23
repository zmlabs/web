import type { ParamsPropsWithChildren } from "@/interface/shared-props"

export default async function ProjectsLayout(props: ParamsPropsWithChildren) {
  const { children } = props

  return <main className="mx-auto">{children}</main>
}
