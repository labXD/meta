import clsx from "clsx"
import React, { FC } from "react"

export type TopNavProps = {}
export const TopNav: FC<TopNavProps> = () => {
  const projects = [
    {
      name: "UI Component Library",
      href: "https://github.com/labXD/gustXD",
    },
    {
      name: "Lightweight EMR",
      //   href: "https://github.com/labXD/gustXD",
    },
  ]
  const team = ["The Team"]
  return (
    <nav className="px-4 fixed top-0 left-0 right-0">
      <div
        className={clsx(
          "py-4 text-white items-center",
          "grid md:grid-cols-[auto_1fr_auto] gap-4"
        )}
      >
        <div className="md:min-w-[200px]"></div>
        <div className={clsx("flex-1 flex justify-center")}>
          <div className={clsx("text-center space-y-4 md:space-y-0 relative")}>
            <span
              className={clsx(
                "font-semibold text-sm text-slate-300",
                "md:absolute md:-left-4 md:-translate-x-full md:top-[calc(50%_-_1rem)]"
              )}
            >
              PROJECTS
            </span>
            <ul className="m-0 p-0 flex flex-wrap justify-center">
              {projects.map((prod, index) => (
                <li key={index} className="relative pr-4 pb-4">
                  <a
                    className={clsx(
                      "text-base font-medium transition-all cursor pointer px-2 border-2 border-teal-300 rounded-sm min-w-[100px] text-center justify-center inline-flex py-2",

                      {
                        "hover:border-white focus:hover:border-teal-300 ":
                          prod.href,
                        "focus:ring-offset-black focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-1":
                          prod.href,
                        "pointer-events-none opacity-50": !prod.href,
                      }
                    )}
                    href={prod.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="justify-end items-center md:min-w-[200px] hidden md:flex">
          <ul className="m-0 p-0 flex">
            {team.map((prod, index) => (
              <li key={index} className="relative pr-4 pb-4">
                <button
                  className={clsx(
                    "text-base font-medium transition-all cursor pointer border-2 border-purple-400 rounded-sm px-2 py-2 min-w-[100px]",
                    "hover:border-white focus:hover:border-purple-400 ",
                    "focus:ring-offset-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1",
                    "pointer-events-none opacity-50"
                  )}
                >
                  {prod}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
