export interface ParamsProps {
  params: Promise<{ lang: string }>
}

export interface ParamsPropsWithChildren extends ParamsProps {
  children: React.ReactNode
}
