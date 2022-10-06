import clsx from "clsx"
import type { NextPage } from "next"
import Typewriter from "typewriter-effect"

import { ButtonList, PageLayout, PageMetaTitle, Projects } from "../components"

export const LandingPage: NextPage = () => {
  //   const card = (
  //     <section className="pt-8 px-4 page-max-xl text-sm md:text-base">
  //       <div className="p-4  text-white">
  //         <h3 className="font-medium underline underline-offset-2">
  //           What we are about
  //         </h3>
  //         <p className="pt-2">
  //           labXD&apos;s mission is based on self-growth motivation:
  //         </p>
  //         <ul className="py-1 ml-4 pl-4 list-disc font-medium">
  //           <li>Always be learning, </li>
  //           <li>
  //             Create and grow projects that we are happy to get up at 5am to work
  //             onXD
  //           </li>
  //         </ul>
  //         <h3 className="pt-4 font-medium underline underline-offset-2">
  //           Thirty Rapid POC model
  //         </h3>
  //         <p className="pt-2">
  //           Tech idea? Design project? No matter the type, each project goes
  //           through our <b>Thirty</b> rapid proof of concept model,{" "}
  //           <b className="text-red-500">
  //             a process we are currently developing in which we spend 30 days
  //             creating the product and 30 days growing it.
  //           </b>{" "}
  //           After the 60 days, we want to be able to make a decision on whether:
  //         </p>
  //         <ul className="py-1 ml-4 pl-4 list-disc font-medium">
  //           <li>the project has validity for further iterations,</li>
  //           <li>
  //             is something we can build a team around (we do the POC and the team
  //             we build runs the project after the 60 days),
  //           </li>
  //           <li>it has curbed our anxiety to push forwardXD</li>
  //         </ul>
  //         <p className="pt-4">
  //           Join our journey (Haus of XD) as we navigate through the tech and
  //           design landscape. Find us on various social platforms.
  //         </p>
  //       </div>
  //     </section>
  //   )
  return (
    <div>
      <PageMetaTitle primary>labXD - Developing experiences</PageMetaTitle>
      <PageLayout
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
                <span className="whitespace-nowrap font-normal px-2">
                  -and-
                </span>
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
    </div>
  )
}
