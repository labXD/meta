import clsx from "clsx"
import Link from "next/link"
import React, { FC } from "react"

export const TopNav: FC = () => {
  const projects = [
    {
      product: "gustXD",
      name: "Design System",
      href: "https://gustxd.com",
    },
    {
      product: "surveyXD",
      name: "Survey Builder",
      href: "https://surveyxd.com",
    },
  ]

  return (
    <nav className="pt-4">
      <div className={clsx("flex flex-col items-center space-y-4")}>
        <div
          className={clsx(
            "tracking-wider font-semibold text-sm text-slate-300"
          )}
        >
          CURRENT PROJECTS
        </div>
        <ul className="text-white space-y-4">
          {projects.map((prod, index) => (
            <li key={index} className="relative">
              <Link passHref href={prod.href} target="_blank">
                <a
                  target={"_blank"}
                  className={clsx(
                    "min-w-[220px]",
                    "divide-x divide-white text-base transition-all cursor pointer px-2 border-2 border-teal-300 rounded-sm text-center justify-center inline-flex py-2",

                    {
                      "hover:border-white focus:hover:border-teal-300":
                        prod.href,
                      "focus:ring-offset-black focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-1":
                        prod.href,
                      "pointer-events-none opacity-50": !prod.href,
                    }
                  )}
                >
                  <span className="px-1 font-medium">{prod.product}</span>
                  <span className="px-1">{prod.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
