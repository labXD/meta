import Head from "next/head"
import { FC } from "react"

interface PageMetaTitleInterface {
  children: string
  primary?: boolean
}

export const PageMetaTitle: FC<PageMetaTitleInterface> = ({
  children,
  primary,
}) => {
  return (
    <Head>
      <title>
        {children}
        {!primary && " - labXD"}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
