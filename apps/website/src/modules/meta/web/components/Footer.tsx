import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"

import DiscordLogo from "../assets/discord-white-24.svg"

export const Footer: FC = () => {
  return (
    <footer className="md:fixed flex bottom-0 left-0 right-0 pb-8 justify-center text-white">
      <ul className="m-0 p-0 space-y-1">
        <li className="relative flex justify-center">
          <Link href="https://discord.gg/2JzNrn4P6N" target="_blank">
            <a
              target="_blank"
              className={clsx(
                "min-w-[220px] md:min-w-[160px]",
                "flex items-center px-4 py-2 space-x-4 text-base font-medium transition-all cursor pointer border-2 border-purple-400 rounded-sm",
                "hover:border-white focus:hover:border-purple-400",
                "focus:ring-offset-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
              )}
            >
              <span>
                <DiscordLogo />
              </span>
              <span>Join our Discord</span>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
