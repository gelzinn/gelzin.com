'use client';

import { useState } from 'react';

import { Icon } from '@/components/icon';
import { about, experiences, skills, social } from '@/config';

export default function CVPage() {
  const [language, setLanguage] = useState<'en-US' | 'pt-BR'>('en-US');

  const handlePrint = () => window.print();

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en-US' ? 'pt-BR' : 'en-US';
    setLanguage(newLanguage);
  };

  return (
    <main className="relative mx-auto w-full max-w-4xl print:max-w-max h-fit min-h-dvh p-0 md:px-8 md:py-16 transition-all duration-200 ease-in-out">
      <div className="mx-auto w-full bg-zinc-950 md:border border-zinc-800 print:border-none print:border-t-0 divide-y divide-zinc-800 md:rounded-xl overflow-hidden">
        <header
          className="flex items-center justify-between gap-2 p-4 print:hidden bg-zinc-900/50"
          aria-label="Header"
        >
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50"
          >
            <Icon name="ArrowLeft" className="w-4 h-4 text-zinc-50" />
            <span>{language === 'en-US' ? 'Back' : 'Voltar'}</span>
          </a>

          <div className="flex" aria-label="Actions">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out disabled:opacity-50 rounded-e-none z-[1]"
              onClick={handleChangeLanguage}
            >
              <Icon name="Globe" className="w-4 h-4 text-zinc-50" />
              <span>{language === 'en-US' ? 'Português' : 'English'}</span>
            </button>

            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors duration-200 ease-in-out pointer-events-none rounded-s-none -ml-px z-0"
              disabled
            >
              {language === 'en-US' ? 'US' : 'BR'}
            </button>
          </div>
        </header>

        <div
          className="w-full max-w-4xl space-y-8 p-4 md:p-8 max-md:pb-24 max-md:mb-2"
          aria-label="CV"
        >
          <section
            className="flex flex-col w-full gap-y-4"
            aria-label="Information"
          >
            <div className="flex flex-col sm:flex-row items-start justify-center sm:justify-between gap-4">
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
                  aria-label="Description"
                >
                  <p className="w-full text-pretty text-sm text-zinc-400 print:text-zinc-950">
                    {about.description[language]
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
                      <span>{about.location[language].full}</span>
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
                    {item.url.split('/')[item.url.split('/').length - 1]}
                  </span>
                </a>
              ))}
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
                  const isActive = experience.active;

                  return (
                    <li
                      className="relative mb-8 last-of-type:mb-0 pr-8 w-full"
                      key={index}
                    >
                      <span
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-1 ring-zinc-800 bg-zinc-950"
                        title={isActive ? 'Current Active' : 'Inactive'}
                      >
                        <Icon
                          name="Briefcase"
                          className={`w-4 h-4 ${
                            isActive
                              ? 'text-zinc-50 print:text-zinc-950'
                              : 'text-zinc-400 print:text-zinc-400'
                          }`}
                        />
                      </span>

                      <h3 className="flex flex-col sm:flex-row items-start sm:items-center pl-8 mb-4 text-lg font-normal gap-2 sm:gap-0">
                        <div className="flex flex-wrap items-center gap-4">
                          <strong
                            className="inline-flex items-center gap-2 font-medium text-zinc-50 print:text-zinc-950"
                            aria-label="Company"
                          >
                            {experience.company}
                          </strong>

                          {experience.website && (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="relative inline-flex items-center justify-center group print:hidden"
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

                        <section
                          className="flex flex-wrap gap-2 sm:ml-auto"
                          aria-label="Modalities"
                        >
                          {experience.modalities &&
                            experience.modalities.length > 0 &&
                            experience.modalities.map((modality, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-light w-auto px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-50 print:text-zinc-950 first-of-type:ms-0 sm:first-of-type:ms-auto ms-4"
                              >
                                {modality}
                              </span>
                            ))}
                        </section>
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

                          <time className="block mb-4 mt-2 text-sm font-normal leading-none text-zinc-400">
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
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium cursor-default w-auto px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-50 print:text-zinc-950"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </section>
        </div>

        <footer
          className="fixed left-4 right-4 bottom-4 md:left-0 md:right-0 md:bottom-0 z-10 max-md:w-[calc(100%-2rem)] w-full md:relative flex items-center justify-between gap-2 print:hidden rounded-xl md:rounded-none md:z-0 max-md:border-hidden"
          aria-label="Print and Save as PDF"
        >
          <div className="md:hidden block fixed left-0 right-0 bottom-0 w-screen h-24 bg-gradient-to-t from-zinc-950 via-zinc-950 to-zinc-950/0 -z-10" />

          <section
            className="flex flex-wrap items-center justify-center sm:justify-between w-full border md:border-0 border-zinc-800 bg-zinc-900/50 gap-2 p-4 rounded-xl md:rounded-none backdrop-blur-lg"
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
