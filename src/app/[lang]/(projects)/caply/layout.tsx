import { Footer } from "@/components/caply/footer"
import { Header } from "@/components/caply/header"
import { Toolbar } from "@/components/common/toolbar"

import type { ParamsPropsWithChildren } from "@/interface/shared-props"

export default async function CaplyLayout(props: ParamsPropsWithChildren) {
  const { children, params } = props
  const { lang } = await params

  return (
    <>
      <Header lang={lang} />
      <Toolbar lang={lang} />

      {children}
      <Footer lang={lang} />
    </>
  )
}
