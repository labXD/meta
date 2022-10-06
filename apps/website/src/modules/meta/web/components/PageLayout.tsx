import { BaseLayout } from "@labxd/gustxd"
import clsx from "clsx"
import { FC, ReactNode } from "react"

import { TopNav } from "./TopNav"
export type PageLayoutProps = {
  children: ReactNode
  cls?: string
  disableFooter?: boolean
  disableTopNav?: boolean
  footer?: ReactNode
  innerCls?: string
  topNav?: ReactNode
}
export const PageLayout: FC<PageLayoutProps> = ({
  children,
  cls,
  disableFooter,
  disableTopNav,
  footer,
  innerCls,
  topNav,
}) => {
  return (
    <BaseLayout className={cls}>
      {(!disableTopNav && topNav) ?? <TopNav />}
      <div className={clsx(innerCls, "flex-1")}>{children}</div>
      {!disableFooter && footer}
    </BaseLayout>
  )
}
