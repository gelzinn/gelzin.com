'use client';

import { useEffect, useState } from 'react';

import { Icon } from '@/components/icon';
import { about, experiences, skills, social } from '@/config';

const formatDuration = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
  }
};

export default function CVPage() {
  const [user, setUser] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const [language] = useState<'en-US' | 'pt-BR'>('en-US');

  const handlePrint = () => window.print();

  const fetchUser = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://api.github.com/users/gelzin');
      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="relative mx-auto w-full max-w-4xl print:max-w-max h-fit min-h-dvh p-0 md:p-8 transition-all duration-200 ease-in-out">
      <div className="mx-auto w-full max-w-4xl bg-zinc-950 md:border border-zinc-800 print:border-none print:border-t-0 divide-y divide-zinc-800 md:rounded-xl overflow-hidden">
        <header
          className="flex items-center justify-start gap-2 p-4 print:hidden bg-zinc-900/50"
          aria-label="Header"
        >
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 text-zinc-50" />
            <span>{language === 'en-US' ? 'Back' : 'Voltar'}</span>
          </a>
        </header>

        <div
          className="w-full space-y-8 p-4 md:p-8 max-md:pb-24 mb-8"
          aria-label="CV"
        >
          <section
            className="flex flex-col w-full gap-y-4"
            aria-label="Information"
          >
            <div className="flex flex-1 flex-col sm:flex-row items-stretch justify-center sm:justify-between gap-4">
              <picture className="relative flex shrink-0 overflow-hidden rounded-md size-24 bg-zinc-900 border border-zinc-800">
                <img
                  className="aspect-square h-full w-full pointer-events-none select-none"
                  alt="@gelzin on GitHub"
                  src="https://github.com/gelzinn.png"
                  width="128"
                  height="128"
                  loading="lazy"
                />
              </picture>

              <div className="flex flex-col items-start justify-center gap-1 w-full text-pretty mb-2">
                <h1 className="text-2xl">
                  {loading ? 'Loading...' : user?.login || 'gelzin'}
                </h1>
                <span className="text-xs md:text-base text-zinc-400">
                  {loading
                    ? 'Loading...'
                    : user?.bio || 'Developer and UX/UI Designer'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-sm print:hidden">
              {social.map((item, index) => {
                const url = item.url.split('/')[item.url.split('/').length - 1];

                return (
                  <a
                    key={index}
                    title={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out ${item.classNames}`}
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
                      {url}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          <section
            className="flex flex-col w-full gap-y-4"
            aria-label="Work Experience"
          >
            <h2 className="text-xl font-bold">Work Experience</h2>

            <ol
              className="relative border-s border-zinc-800 w-full h-fit start-4 mb-8"
              aria-label="Experiences"
            >
              {experiences
                .sort(
                  (a, b) =>
                    new Date(b.positions[0].startDate).getTime() -
                    new Date(a.positions[0].startDate).getTime(),
                )
                .map((experience, index) => {
                  const isLast = index === experiences.length - 1;
                  const isActive = experience.active || false;

                  return (
                    <li
                      className="relative mb-8 last-of-type:mb-0 pr-8 w-full"
                      key={index}
                    >
                      <span
                        className="absolute flex items-center justify-center size-8 rounded-full -start-4 ring-1 ring-zinc-800 bg-zinc-900"
                        title={isActive ? 'Current Active' : 'Inactive'}
                      >
                        <div className="flex items-center justify-center size-4 text-sm text-zinc-400 pointer-events-none">
                          <div
                            className="flex items-center justify-center gap-2 size-4"
                            aria-label="Status"
                            title={isActive ? 'Active' : 'Inactive'}
                          >
                            {isActive ? (
                              <div className="relative inline-flex items-center justify-center gap-2 font-medium text-zinc-50 print:text-zinc-950 size-full">
                                <div className="relative w-2 h-2 rounded-full bg-emerald-500">
                                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                </div>
                              </div>
                            ) : (
                              <div className="relative inline-flex items-center justify-center gap-2 font-medium text-zinc-50 print:text-zinc-950 size-full">
                                <div className="relative w-2 h-2 rounded-full bg-zinc-500/50" />
                              </div>
                            )}
                          </div>
                        </div>
                      </span>

                      <h3 className="flex flex-col items-start pl-8 text-lg font-normal gap-2">
                        <div className="flex flex-wrap items-center gap-4 w-full">
                          <div
                            className="flex flex-col items-start gap-1"
                            aria-label="Company"
                          >
                            <strong
                              className="inline-flex items-center gap-2 font-medium text-zinc-50 print:text-zinc-950"
                              aria-label="Company"
                            >
                              {experience.company}
                            </strong>

                            <small
                              className="block text-xs font-light text-zinc-400"
                              aria-label="Total time working at the company"
                            >
                              {(() => {
                                const oldest = experience.positions.sort(
                                  (a, b) =>
                                    new Date(a.startDate).getTime() -
                                    new Date(b.startDate).getTime(),
                                )[0];

                                const latest = experience.positions.sort(
                                  (a, b) =>
                                    new Date(b.startDate).getTime() -
                                    new Date(a.startDate).getTime(),
                                )[0];

                                return formatDuration(
                                  new Date(oldest.startDate),
                                  new Date(latest.endDate || new Date()),
                                );
                              })()}
                            </small>
                          </div>

                          {experience.website && (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="relative inline-flex items-center justify-center group print:hidden size-4 ml-auto"
                              aria-label={`${experience.website.replace('https://', '')}`}
                            >
                              <Icon
                                name="ExternalLink"
                                className="size-4 text-zinc-400"
                              />

                              <span className="sr-only">
                                {experience.website.replace('https://', '')}
                              </span>
                            </a>
                          )}
                        </div>

                        {experience.modalities &&
                          experience.modalities.length > 0 && (
                            <section
                              className="flex flex-wrap gap-2 mt-2"
                              aria-label="Modalities"
                            >
                              {experience.modalities.map((modality, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-light w-auto px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-50 print:text-zinc-950 first-of-type:ms-0 sm:first-of-type:ms-auto ms-4"
                                >
                                  {modality}
                                </span>
                              ))}
                            </section>
                          )}
                      </h3>

                      {experience.positions.map((position, index) => (
                        <div
                          key={index}
                          className={`group/position pl-8 first-of-type:mt-6 mt-8 print:-ml-px ${
                            isLast
                              ? 'print:ring-0 ring-1 ring-zinc-950'
                              : 'ring-0'
                          }`}
                          aria-label="Position details"
                        >
                          <div className="absolute flex items-center justify-center size-2 rounded-full -ml-9 mt-2 print:mt-0 mb-2">
                            {isLast && (
                              <div className="print:hidden absolute -top-3 mr-px w-px h-[150%] bg-zinc-800" />
                            )}

                            <span className="size-2 rounded-full ring-1 ring-zinc-800 bg-zinc-950 z-10" />
                          </div>

                          <h4 className="text-base font-medium text-zinc-50 print:text-zinc-950">
                            {position.title}
                          </h4>

                          <section
                            className="flex items-center justify-start gap-2  mt-2 mb-4"
                            aria-label="Highlights"
                            title={formatDuration(
                              new Date(position.startDate),
                              new Date(position.endDate || new Date()),
                            )}
                          >
                            <time className="block text-sm font-normal leading-none text-zinc-400">
                              {new Date(position.startDate).toLocaleDateString(
                                language,
                                {
                                  year: 'numeric',
                                  month: 'long',
                                },
                              )}
                              {' - '}
                              {position.endDate
                                ? new Date(position.endDate).toLocaleDateString(
                                    language,
                                    {
                                      year: 'numeric',
                                      month: 'long',
                                    },
                                  )
                                : 'Present'}
                            </time>
                          </section>

                          <p className="mb-4 last-of-type:mb-0 text-sm font-normal text-zinc-300">
                            {position.summary[language]
                              .split('\n')
                              .map((line, index) => (
                                <span key={index} className="block mt-4">
                                  {line}
                                </span>
                              ))}
                          </p>
                        </div>
                      ))}
                    </li>
                  );
                })}
            </ol>
          </section>

          <section
            className="flex flex-col w-full gap-y-4"
            aria-label="Skills &amp; Technologies"
          >
            <h2 className="text-xl font-bold">Skills &amp; Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .sort((a, b) => a.localeCompare(b))
                .map((item, index) => (
                  <span
                    key={index}
                    className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-default w-auto px-2 py-1 bg-zinc-900 border border-zinc-800 print:text-zinc-950"
                  >
                    <Icon
                      name="Check"
                      className="size-4 text-zinc-500 group-hover:text-emerald-500 group-hover:scale-125 transition-all duration-200 ease-in-out"
                    />

                    <span className="text-zinc-400 group-hover:text-zinc-50 transition-colors duration-200 ease-in-out">
                      {item}
                    </span>
                  </span>
                ))}
            </div>
          </section>
        </div>

        <footer
          className="flex z-10 print:hidden w-full h-auto px-8 py-6 bg-zinc-950/50 border-t border-zinc-800 md:rounded-b-xl mx-auto"
          aria-label="Print and Save as PDF"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',

            maxWidth: 'calc(56rem - 4rem)',
          }}
        >
          <section
            className="flex flex-wrap items-center justify-center sm:justify-between w-full h-full gap-2 rounded-xl md:rounded-none"
            aria-label="Last updated"
          >
            <div className="flex items-center gap-2" aria-label="Last updated">
              <a
                href={
                  about.business_email
                    ? `mailto:${about.business_email}`
                    : `mailto:${about.email}`
                }
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
              >
                <Icon name="Mail" className="w-4 h-4 text-zinc-50" />
                <span>Let&apos;s chat!</span>

                <div className="relative w-2 h-2 rounded-full bg-emerald-500 ml-1">
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </a>
            </div>

            <div
              className="hidden sm:flex flex-wrap gap-2"
              aria-label="Actions"
            >
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 disabled:hover:border-zinc-800"
                disabled
                onClick={handlePrint}
              >
                <Icon name="Printer" className="w-4 h-4 text-zinc-50" />
                <span>Print</span>
              </button>
            </div>
          </section>
        </footer>
      </div>
    </main>
  );
}
