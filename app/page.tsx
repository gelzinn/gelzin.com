import { Button } from './components/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 w-full min-h-dvh mx-auto p-4 md:p-8">
      <img
        className="invert dark:invert-0 pointer-events-none select-none w-24 h-24 md:w-32 md:h-32 mt-auto"
        src="/gelzin.svg"
        alt="gelzin"
        width={100}
        height={180}
      />

      <div className="mt-auto inline-flex items-center justify-center gap-2">
        <Button isLink href="/cv">
          <span>Resume</span>
        </Button>

        <Button isLink href="/projects">
          <span>Projects</span>
        </Button>
      </div>
    </main>
  );
}
