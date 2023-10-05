'use client'

import { useScreen } from "@/hooks/useScreen"
import { socials } from "@/utils/social"

export default function Home() {
  const { screenHeight } = useScreen()

  return (
    <main
      className="flex min-h-screen flex-col items-center gap-8 justify-start lg:gap-0 lg:justify-between px-4 py-20 sm:px-16"
      style={{
        height: screenHeight ? screenHeight : '100vh'
      }}
    >
      <div
        className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen pb-16"
      >
        <i
          className="flex place-items-center pt-20 lg:pt-0 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-pink-100 before:to-pink-300 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-pink-500 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
        >
          <img
            className="relative invert dark:invert-0 w-24 h-24 lg:w-32 lg:h-32"
            src="/gelzin.svg"
            alt="gelzin"
            width={100}
            height={180}
          />
        </i>
      </div>

      <footer
        className="fixed bottom-8 left-0 flex h-auto w-full items-end justify-center p-8 z-10"
      >
        {socials && socials.map((social, i) => {
          const {
            name,
            url
          } = social

          let icon = null

          switch (name) {
            case 'GitHub':
              icon = (
                <svg
                  viewBox="0 0 16 16" width="20" height="20"
                  className="fill-current dark:text-white text-black"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                </svg>
              )
              break
            case 'Twitter':
              icon = (
                <svg
                  viewBox="0 0 26 24" width="20" height="20"
                  className="fill-current dark:text-white text-black"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )
              break
            case 'LinkedIn':
              icon = (
                <svg
                  viewBox="0 0 24 24" width="20" height="20"
                  className="fill-current dark:text-white text-black"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              )
              break
            default:
              break
          }

          return (
            <a
              key={i}
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex place-items-center gap-2 p-4 rounded-full hover:bg-zinc-500 dark:hover:bg-zinc-950 transition-colors motion-reduce:transform-none"
            >
              {icon}
            </a>
          )
        })}
      </footer>
    </main>
  )
}
