export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 w-full h-dvh mx-auto p-4 md:p-8">
      <img
        className="invert dark:invert-0 pointer-events-none select-none w-24 h-24 md:w-32 md:h-32"
        src="/gelzin.svg"
        alt="gelzin"
        width={100}
        height={180}
      />

      <div className="fixed bottom-8 inline-flex items-center justify-center gap-2">
        <a
          href="/cv"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
        >
          <span>Resume</span>
        </a>

        <a
          href="/projects"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
        >
          <span>Projects</span>
        </a>
      </div>
    </main>
  );
}
