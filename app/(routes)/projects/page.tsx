import { Icon } from '@/components/icon';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-start justify-start gap-4 w-full max-w-4xl min-h-dvh mx-auto p-4 md:p-8">
      <header
        className="flex items-center justify-start gap-2 print:hidden bg-zinc-900/50"
        aria-label="Header"
      >
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
        >
          <Icon name="ArrowLeft" className="w-4 h-4 text-zinc-50" />
          <span>Voltar</span>
        </a>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium p-4 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
          >
            <div className="group relative w-full min-h-24 aspect-w-16 aspect-h-9 rounded-lg border border-zinc-800">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.name}
              />

              <div className="absolute left-4 -bottom-8 w-full flex items-center justify-between max-w-[calc(100%-2rem)] mx-auto gap-2">
                <div className="bg-zinc-900/50 rounded-md border border-zinc-800 w-fit">
                  <img
                    className="min-w-16 size-16 aspect-square object-cover rounded-md group-hover:shadow-lg transition-shadow duration-200 ease-in-out"
                    src={project.favicon}
                    alt={project.name}
                  />
                </div>

                {/* <span className="text-sm text-zinc-50 bg-zinc-900/50 rounded-md px-2 py-0.5">
                  {new URL(project.url).hostname}
                </span> */}
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-1 w-full mt-10 mb-2">
              <span className="text-lg font-medium">{project.name}</span>

              <p className="text-sm text-zinc-400 text-wrap">
                {project.description['en-US']}
              </p>
            </div>

            <span className="text-xs text-zinc-500">
              Created at{' '}
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
