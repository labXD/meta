import clsx from "clsx"
import Link from "next/link"
import React, { FC } from "react"

import { LinkButton } from "./LinkButton"

export const Projects: FC = () => {
  const projects = [
    {
      product: "surveyXD",
      name: "Survey Builder",
      href: "https://surveyxd.com",
    },
    {
      product: "gustXD",
      name: "Design System",
      href: "https://gustxd.com",
    },
  ]

  return (
    <footer className="p-4">
      <div className={clsx("flex flex-col items-center space-y-4")}>
        <div
          className={clsx(
            "tracking-wider font-semibold text-sm text-slate-300"
          )}
        >
          CURRENT PROJECTS
        </div>
        <ul className="text-white space-y-6 w-full md:max-w-[500px]">
          {projects.map((prod, index) => (
            <li key={index} className="relative">
              <Link href={prod.href} target="_blank">
                <LinkButton
                  left={<span className="font-bold">{prod.product}</span>}
                  target={"_blank"}
                >
                  {prod.name}
                </LinkButton>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
