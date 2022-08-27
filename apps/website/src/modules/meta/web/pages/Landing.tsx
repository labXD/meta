import clsx from "clsx"
import type { NextPage } from "next"
import Head from "next/head"
import Typewriter from "typewriter-effect"

import { TopNav } from "@/meta/web/components"

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>labXD - Laboratory for Experience Development</title>
      </Head>
      <TopNav />
      <main
        className={clsx(
          "before:content before:bg-black before:bg-gradient-radial before:from-[#1e1c4d] before:fixed before:inset-0 before:-z-10",
          "flex items-center justify-center flex-col flex-1"
        )}
      >
        <div className="">
          <div className="text-white font-display relative flex flex-col items-center">
            <h1 className="text-transparent font-bold text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-600">
              labXD
            </h1>

            <div className="text-2xl tracking-wider flex  items-center  pt-12 text-indigo-50 font-semibold">
              <span className="relative">
                Side
                <div className="absolute top-0 left-0 right-0 flex justify-center text-base -translate-y-full">
                  <span className="text-white bg-teal-600  py-1 px-2 leading-4 rounded-xl">
                    client
                  </span>
                </div>
              </span>
              <span className="whitespace-nowrap font-normal px-2">-to-</span>
              <span className="relative">
                Side
                <div className="absolute top-0 left-0 right-0 flex justify-center text-base -translate-y-full">
                  <span className="text-white bg-orange-600 py-1 px-2 leading-4 rounded-xl">
                    server
                  </span>
                </div>
              </span>
            </div>

            <div
              className={clsx(
                "absolute -bottom-4 translate-y-full w-screen px-4",
                "text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-pink-200"
              )}
            >
              <Typewriter
                options={{
                  strings: [
                    "Experience Developement",
                    "UX Infrastructure Architect",
                    "User and Developer Experience",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Landing
