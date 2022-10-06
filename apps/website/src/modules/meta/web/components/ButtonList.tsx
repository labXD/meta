import Image from "next/future/image"
import Link from "next/link"
import { FC } from "react"

import DiscordLogo from "../assets/discord-white-24.svg"
import SpotifyImage from "../assets/spotify.png"
import { LinkButton } from "./LinkButton"
export const ButtonList: FC = () => {
  return (
    <nav className="p-4">
      <div className="flex flex-col items-center justify-center flex-1">
        <ul className="text-white space-y-6 w-full md:max-w-[500px]">
          <li>
            <Link href="https://discord.gg/2JzNrn4P6N" target="_blank">
              <LinkButton
                target="_blank"
                left={
                  <span>
                    <DiscordLogo />
                  </span>
                }
                variant="purple"
              >
                Join our Discord
              </LinkButton>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/channel/UCWvxvCuwAcVeCSt5tsLBwwA"
              target="_blank"
            >
              <LinkButton
                target="_blank"
                left={
                  <span className="material-symbols-outlined">
                    youtube_activity
                  </span>
                }
                variant="purple"
              >
                <span>Watch our shows</span>
              </LinkButton>
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com/show/00xrBv5KybQqy9fCJNNYRb?si=474f888b490e4226"
              target="_blank"
            >
              <LinkButton
                target="_blank"
                left={
                  <Image alt="spotify" src={SpotifyImage} className="w-20" />
                }
                variant="purple"
              >
                <span>Listen to chatterXD</span>
              </LinkButton>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
