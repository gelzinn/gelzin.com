'use client';

import { useRef } from 'react';

import { Icon } from '@/components/icon';
import { about, experiences, skills, social } from '@/config';
import { exportPDF } from '@/utils/exportToPDF';

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleBack = () => window.history.back();

  const handlePrint = () => window.print();

  const handleExportPDF = () => exportPDF(cvRef.current, 'CV - gelzin');

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 py-8 md:py-16 print:!p-0 text-zinc-50 print:text-zinc-950">
      <section className="mx-auto w-full max-w-4xl print:max-w-max bg-zinc-950 border border-zinc-800 print:border-0 divide-y divide-zinc-800 rounded-xl overflow-hidden">
        <header
          className="flex items-center justify-between gap-4 p-4 print:p-0"
          aria-label="Header"
        >
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700"
            onClick={handleBack}
          >
            <Icon name="ArrowLeft" className="w-4 h-4 text-zinc-50" />
            <span>Back</span>
          </button>
        </header>

        <div className="w-full max-w-4xl space-y-6 p-8" ref={cvRef} title="CV">
          <section
            className="flex flex-col gap-y-4 print:gap-y-4"
            aria-label="Information"
          >
            <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-4">
              <picture className="relative flex shrink-0 overflow-hidden rounded-xl size-32 bg-zinc-900 border border-zinc-800">
                <img
                  className="aspect-square h-full w-full pointer-events-none select-none"
                  alt="@gelzin on LinkedIn"
                  src="https://media.licdn.com/dms/image/D4D03AQHfWbG9xL1voQ/profile-displayphoto-shrink_800_800/0/1698112632669?e=1710374400&v=beta&t=BohAkeMwk1xpi54vCGRUc9pRtMDhAMrjFus22quzKOI"
                  width="128"
                  height="128"
                  loading="lazy"
                />
              </picture>

              <div className="flex-1 space-y-2">
                <h1 className="inline-flex items-center gap-2 text-2xl text-pretty font-medium">
                  <strong>Marcelo Augusto</strong>
                  <span
                    className="text-xs md:text-base text-zinc-400"
                    title="gelzin"
                  >
                    gelzin
                  </span>
                </h1>

                <div
                  className="flex flex-wrap gap-4 md:gap-2 text-sm"
                  title="Information"
                >
                  <p className="w-full text-pretty text-sm text-zinc-400 print:text-zinc-950">
                    {about.description['en-US']
                      .split('\n')
                      .map((line, index) => (
                        <span
                          key={index}
                          className="block first-of-type:mt-0 mt-4"
                        >
                          {line}
                        </span>
                      ))}
                  </p>

                  <p className="max-w-md items-center text-pretty text-xs">
                    <a
                      className="inline-flex items-center gap-x-1.5 leading-none hover:underline"
                      href={about.location.google_maps}
                      target="_blank"
                    >
                      <Icon name="MapPin" className="w-4 h-4" />
                      <span>{about.location['en-US'].full}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm print:hidden">
              {social.map((item, index) => (
                <a
                  key={index}
                  title={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    width="16"
                    height="16"
                    loading="lazy"
                    className="w-4 max-w-4 h-4 max-h-4 object-contain pointer-events-none select-none"
                    style={item.filter ? { filter: item.filter } : {}}
                  />

                  <span className="text-xs inline-flex items-center justify-center ml-2">
                    {item.url.split('/')[item.url.split('/').length - 1]}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section
            className="flex w-full min-h-0 flex-col gap-y-2"
            aria-label="Work Experience"
          >
            <h2 className="text-xl font-bold">Work Experience</h2>

            <ol className="relative border-s border-zinc-800 w-full my-4 start-4">
              {experiences
                .sort(
                  (a, b) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime(),
                )
                .map((item, index) => (
                  <li className="mb-8 px-8 w-full" key={index}>
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-1 ring-zinc-800 bg-zinc-950">
                      <Icon
                        name="Briefcase"
                        className="w-4 h-4 text-zinc-50 print:text-zinc-950"
                      />
                    </span>

                    <h3 className="flex items-center mb-2 text-lg font-normal">
                      <strong
                        className="inline-flex items-center gap-2 font-medium text-zinc-50 print:text-zinc-950"
                        title={item.position}
                      >
                        {item.company}
                      </strong>

                      <a
                        href={item.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="ml-2 print:hidden"
                      >
                        <Icon
                          name="ExternalLink"
                          className="w-4 h-4 text-zinc-400"
                        />
                      </a>

                      <section
                        className="flex flex-wrap gap-2 ml-auto"
                        title="Modalities"
                      >
                        {item.modalities &&
                          item.modalities.length > 0 &&
                          item.modalities.map((modality, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium cursor-default w-auto px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-50 ms-4"
                            >
                              {modality}
                            </span>
                          ))}
                      </section>
                    </h3>

                    <time className="block mb-4 text-sm font-normal leading-none text-zinc-500">
                      {new Date(item.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                      {' - '}
                      {item.endDate
                        ? new Date(item.endDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                          })
                        : 'Present'}
                    </time>

                    <p className="mb-4 text-sm font-normal text-zinc-400">
                      {item.summary['en-US'].split('\n').map((line, index) => (
                        <span key={index} className="block mt-4">
                          {line}
                        </span>
                      ))}
                    </p>

                    <ul className="list-disc list-inside">
                      {item.highlights &&
                        item.highlights.length > 0 &&
                        item.highlights.map((highlight, index) => (
                          <a
                            key={index}
                            title={highlight.name}
                            href={highlight.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mb-2 text-sm font-normal"
                          >
                            {highlight.name}
                          </a>
                        ))}
                    </ul>
                  </li>
                ))}
            </ol>
          </section>

          <section
            className="flex min-h-0 flex-col gap-y-2"
            aria-label="Skills"
          >
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .sort((a, b) => a.localeCompare(b))
                .map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium cursor-default w-auto px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-50 print:text-zinc-950"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </section>
        </div>

        <footer
          className="flex items-center justify-end gap-2 p-4 print:hidden bg-zinc-900/50"
          aria-label="Print and Save as PDF"
        >
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700"
            onClick={handlePrint}
          >
            <Icon name="Printer" className="w-4 h-4 text-zinc-50" />
            <span>Print</span>
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700"
            onClick={handleExportPDF}
          >
            <Icon name="Download" className="w-4 h-4 text-zinc-50" />
            <span>Save as PDF</span>
          </button>
        </footer>
      </section>
    </main>
  );
}
