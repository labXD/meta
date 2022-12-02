import { BaseLayout } from "@labxd/gustxd"
import clsx from "clsx"
import Head from "next/head"
import { FC, ReactNode } from "react"

export type PageLayoutProps = {
  children: ReactNode
  cls?: string
  footer?: ReactNode
  innerCls?: string
  topNav?: ReactNode
  pageTitle?: string
}
export const PageLayout: FC<PageLayoutProps> = ({
  children,
  cls,
  footer,
  innerCls,
  topNav,
  pageTitle,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BaseLayout className={cls}>
        {topNav}
        <div className={clsx(innerCls, "flex-1")}>{children}</div>
        {footer}
      </BaseLayout>
    </>
  )
}
