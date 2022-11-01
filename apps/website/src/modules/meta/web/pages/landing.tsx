import clsx from "clsx"
import type { NextPage } from "next"
import Typewriter from "typewriter-effect"

import { ButtonList, PageLayout, Projects } from "../components"

export const LandingPage: NextPage = () => {
  return (
    <PageLayout
      pageTitle="labXD - Developing experiences"
      primary
      cls="before:content-[''] before:bg-black before:bg-gradient-radial before:from-[#1e1c4d] before:fixed before:inset-0 before:-z-10"
      innerCls="flex flex-col items-center justify-center"
      footer={<ButtonList />}
      topNav={<Projects />}
    >
      <main className={clsx("page-max-xl")}>
        <section className="text-white font-display relative">
          <h1 className="text-center text-transparent font-bold text-8xl bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-600">
            labXD
          </h1>
          <div
            className={clsx(
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
          <div className="space-y-1 pt-12 px-4 text-center text-white text-base font-normal">
            <div className="text-2xl tracking-wider flex items-center justify-center text-indigo-50 font-semibold">
              <span className="relative">
                Creation
                <div className="absolute top-0 left-0 right-0 flex justify-center text-base -translate-y-full">
                  <span className="text-white bg-teal-600  py-1 px-2 leading-4 rounded-xl">
                    30 days
                  </span>
                </div>
              </span>
              <span className="whitespace-nowrap font-normal px-2">-and-</span>
              <span className="relative">
                Growth
                <div className="absolute top-0 left-0 right-0 flex justify-center text-base -translate-y-full">
                  <span className="text-white bg-purple-500 py-1 px-2 leading-4 rounded-xl">
                    30 days
                  </span>
                </div>
              </span>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}
