import type { NextPage } from "next"
import Image from "next/future/image"
import Link from "next/link"
import YouTube, { YouTubeProps } from "react-youtube"

import { PageLayout } from "@/meta/web"

import XDDeckCover from "../assets/deck-cover.png"
import XDLogo from "../assets/xd-logo-dark.png"

export const MotifXDLanding: NextPage = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo()
  }

  return (
    <PageLayout
      pageTitle="motifXD"
      cls="before:content-[''] before:bg-slate-800 before:bg-gradient-radial before:from-[#1e1c4d] before:fixed before:inset-0 before:-z-10"
    >
      <main className="text-white px-4 pt-8 pb-12 flex flex-col items-center page-max-xl">
        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <a href="/" className="flex items-center pt-8">
              <span className="font-bold font-display text-4xl text-indigo-100">
                motifXD
              </span>
              <span>
                <Image alt="motifxd" src={XDLogo} className="w-20" />
              </span>
            </a>
            <div className="text-xl text-center">
              Generating design systems as an API
            </div>
          </div>
          <ul className="mt-8 py-2 w-full space-y-4">
            <li>
              <a className="button button-red space-x-4" href="#demo">
                <span className="material-symbols-rounded">anchor</span>
                <span>Demo Video</span>
              </a>
            </li>
            <li>
              <a className="button button-red space-x-4" href="#pitch">
                <span className="material-symbols-rounded">anchor</span>
                <span>Pitch Deck</span>
              </a>
            </li>
          </ul>
        </section>
        <section
          id="demo"
          className="pt-16 px-4 w-full md:max-w-[640px] lg:max-w-[800px]"
        >
          <Link passHref target={"_blank"} href="https://demo.motifxd.com">
            <a target="_blank" className="button text-pink-300">
              Go to the demo
            </a>
          </Link>
          <YouTube
            className="youtube-container"
            videoId="w2WsCVYQG0k"
            onReady={onPlayerReady}
          />
        </section>
        <section
          id="pitch"
          className="pt-16 px-4 w-full md:max-w-[640px] lg:max-w-[800px]"
        >
          <Link passHref target={"_blank"} href="https://deckv1.motifxd.com">
            <a
              target="_blank"
              className="cursor-pointer flex flex-col items-center"
            >
              <button className="button text-pink-300">
                Go to the presentation
              </button>
              <div className="group relative before:text-black before:content before:absolute before:inset-0 before:bg-purple-700 before:opacity-5 before:hover:opacity-80 before:transition-all before:flex before:items-center before:justify-center">
                <div className="drop-shadow opacity-0 z-10 group-hover:opacity-100 absolute inset-0 text-white flex items-center justify-center text-3xl font-bold">
                  Click To View Deck
                </div>
                <Image
                  alt="motifXD deck"
                  src={XDDeckCover}
                  className="w-full border border-xd-primary-purple-700"
                />
              </div>
            </a>
          </Link>
        </section>
      </main>
    </PageLayout>
  )
}
