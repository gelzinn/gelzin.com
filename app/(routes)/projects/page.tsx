import { Icon } from '@/components/icon';
import { projects } from '@/config/projects';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-start justify-start w-full max-w-4xl min-h-dvh mx-auto py-4 md:py-8">
      <header
        className="flex flex-col items-start justify-center gap-4 print:hidden w-full px-8 py-4"
        aria-label="Header"
      >
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium p-2 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 text-zinc-50" />
          </a>

          <h1 className="text-2xl text-zinc-50">Projects</h1>
        </div>
      </header>

      <section className="relative flex flex-col items-start justify-start w-full p-4 md:p-8">
        {/* top left "+" symbol */}
        <div className="absolute -top-2 -left-2 md:top-2 md:left-2 z-20">
          <Icon
            name="Plus"
            className="ml-[0.5px] mt-[0.5px] min-w-12 size-12 text-zinc-500"
            strokeWidth={0.5}
          />
        </div>

        <div className="overflow-hidden relative flex flex-col items-start justify-start w-full min-h-dvh z-10">
          <section className="grid grid-cols-1 md:grid-cols-2 w-full items-start justify-start gap-4 min-h-dvh mx-auto rounded-tr-md rounded-bl-md p-4 bg-zinc-900/50 border border-zinc-800 print:border-0 z-10">
            {projects
              .sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);

                return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
              })
              .map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium p-2 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
                >
                  <div className="group relative w-full min-h-24 aspect-w-16 aspect-h-9">
                    <img
                      className="w-full h-full object-cover rounded-lg border border-zinc-800"
                      src={project.image}
                      alt={project.name}
                    />

                    <div className="absolute left-2 -bottom-8 w-full flex items-center justify-between max-w-[calc(100%-2rem)] mx-auto gap-2">
                      <div
                        className="w-fit rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden"
                        style={{
                          backgroundColor: project.favicon.background,
                        }}
                      >
                        <img
                          className="min-w-16 size-16 aspect-square object-cover"
                          src={project.favicon.url}
                          alt={project.name}
                          style={{
                            transform: `scale(${project.favicon.zoom})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start gap-4 p-2 w-full">
                    <div className="flex flex-col items-start justify-start gap-1 w-full mt-10 mb-2">
                      <span className="text-lg font-medium">
                        {project.name}
                      </span>

                      <p className="text-sm text-zinc-400 text-wrap">
                        {project.description['en-US']}
                      </p>
                    </div>

                    <footer
                      className="flex items-center justify-between gap-1 w-full"
                      aria-label="Footer"
                    >
                      <span className="text-xs text-zinc-500">
                        {new URL(project.url).hostname}
                      </span>

                      <span className="text-xs text-zinc-500">
                        Created at{' '}
                        {new Date(project.createdAt).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )}
                      </span>
                    </footer>
                  </div>
                </a>
              ))}
          </section>

          <section className="absolute z-0 w-full h-full top-0 left-0 p-4 md:p-8 print:hidden overflow-hidden">
            <div
              style={{
                backgroundImage:
                  'url(https://reservey.app/media-content/diagonal-grid-pattern.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: '100% center',
              }}
              className="absolute top-0 left-0 inset-0 -z-10 pointer-events-none p-4 md:p-8"
            />
          </section>
        </div>

        {/* bottom right "+" symbol */}
        <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 z-20">
          <Icon
            name="Plus"
            className="ml-[0.5px] mt-[0.5px] min-w-12 size-12 text-zinc-500"
            strokeWidth={0.5}
          />
        </div>
      </section>
    </main>
  );
}
