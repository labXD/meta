import clsx from "clsx"
import { AnchorHTMLAttributes, FC, ReactNode } from "react"

interface LinkButtonInterface extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  left: ReactNode
  variant?: "green" | "purple"
}
export const LinkButton: FC<LinkButtonInterface> = ({
  children,
  left,
  variant = "green",
  ...other
}) => {
  return (
    <a
      {...other}
      className={clsx(
        "button transition-all divide-x space-x-2",
        "ring-2",
        "hover:ring-white focus:hover:ring-teal-300",
        {
          "ring-teal-300": variant === "green",
          "ring-purple-400": variant === "purple",
        }
      )}
    >
      {left}
      <span className="pl-2">{children}</span>
    </a>
  )
}
