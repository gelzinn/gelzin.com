import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import LoadingCircle from "~/components/Loading/LoadingCircle";
import {
  OtherProjectsContainer,
  RecentProjectContainer,
} from "~/styles/pages/development-portfolio";
import enUS from "date-fns/locale/en-US";
import { ArrowSquareOut, Eye, GitFork, Star } from "phosphor-react";
import Link from "next/link";
import BackArrow from "~/components/NavigationIcons/BackArrow";
import LoadingScreen from "~/components/Loading/LoadingScreen";
import { Repositorie } from "~/models/repositoriesResponse";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.github.com/search/repositories?q=user:gelzinn+sort:updated_at");
  const data = await res.json();

  return {
    props: {
      reposData: data.items,
    },
  };
};

export default function DesignerPortfolio({ reposData }) {
  const [projectsList, setProjectsList] = useState<Repositorie[]>([]);
  const [mostRecentProject, setMostRecentProject] = useState<Repositorie>();

  const [recentRepoScreenshot, setRecentRepoScreenshot] = useState<any>();

  useEffect(() => {
    if (reposData) {
      setProjectsList(reposData);
      setMostRecentProject(reposData[0]);
    }
  }, [reposData]);

  useEffect(() => {
    if (mostRecentProject && mostRecentProject.homepage) {
      const videosRes = async () => {
        const repoScreenshot = await fetch(
          `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.API_FLASH_KEY}&url=${mostRecentProject.homepage}`
        );

        setRecentRepoScreenshot(repoScreenshot.url);
      };

      videosRes();
    }
  }, [mostRecentProject]);

  return (
    <>
      <Head>
        <title>Development Portfolio • gelzin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {mostRecentProject ? (
        <>
          <RecentProjectContainer repoImage={recentRepoScreenshot}>
            <BackArrow />
            <div
              className={`about-video ${
                !recentRepoScreenshot && `without-image`
              }`}
            >
              <div className="heading">
                <p>Most recent development project:</p>
                <span>
                  {mostRecentProject.name
                    .replace(/-/g, " ")
                    .replace(/()/g, "")
                    .replace("|", "")
                    .replace(/'/g, "")
                    .replace(/"/g, "")
                    .toLocaleLowerCase()}
                </span>
                <p>{mostRecentProject.description}</p>
              </div>
              <div className="other-info">
                <div>
                  <span>Created at:</span>
                  <p>
                    {format(
                      new Date(mostRecentProject.created_at),
                      "MMM' 'd' • 'u",
                      {
                        locale: enUS,
                      }
                    )}
                  </p>
                </div>
                <div>
                  <span>Last update:</span>
                  <p>
                    {format(
                      new Date(mostRecentProject.updated_at),
                      "MMM' 'd' • 'u",
                      {
                        locale: enUS,
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="actions">
                {mostRecentProject.homepage && (
                  <a
                    target="_blank"
                    id="visit"
                    href={mostRecentProject.homepage}
                    rel="noreferrer"
                  >
                    <ArrowSquareOut />
                    Visit Project
                  </a>
                )}
                <a
                  target="_blank"
                  href={mostRecentProject.html_url}
                  rel="noreferrer"
                >
                  See repository
                </a>
              </div>
            </div>
            {recentRepoScreenshot && (
              <div className="bg">
                <img src={recentRepoScreenshot} alt={mostRecentProject.name} />
              </div>
            )}
          </RecentProjectContainer>
          <>
            {projectsList ? (
              <OtherProjectsContainer>
                <div className="title">
                  <span>Other projects</span>
                  <p>The projects are in chronological order.</p>
                </div>
                <ul className="repos">
                  {projectsList.map((repo: Repositorie) => {
                    if (
                      repo.name === "gelzinn" ||
                      repo.name === "gelzin-portfolio-nextjs"
                      // repo.name === mostRecentProject.name
                    ) {
                      return;
                    }

                    const getRepoLanguages = () => {
                      const languagesPromises = [];
                      const languagesList = [];

                      languagesPromises.push(
                        fetch(repo.languages_url).then((response) =>
                          response.json()
                        )
                      );

                      return Promise.all(languagesPromises);
                    };

                    getRepoLanguages();

                    return (
                      <li key={repo.id}>
                        <div className="info">
                          <header>{repo.name}</header>
                          <div>
                            <span>Description</span>
                            <p>{repo.description}</p>
                          </div>
                          {repo.topics && repo.topics.length > 0 && (
                            <div>
                              <span>Topics</span>
                              <ul>
                                <>
                                  {repo.topics.map((topic) => {
                                    return <li key={topic}>{topic}</li>;
                                  })}
                                </>
                              </ul>
                            </div>
                          )}
                        </div>
                        <footer>
                          <div className="actions">
                            {repo.homepage && (
                              <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noreferrer"
                                title={repo.homepage}
                              >
                                Visitar o projeto
                                <ArrowSquareOut />
                              </a>
                            )}
                            {repo.html_url && (
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                title={repo.html_url}
                              >
                                Ver o repositório
                                <ArrowSquareOut />
                              </a>
                            )}
                          </div>
                          <ul className="stats">
                            <li>
                              <span>Stars</span>
                              <p>
                                <Star
                                  id="star"
                                  weight={
                                    repo.stargazers_count > 0
                                      ? "fill"
                                      : "regular"
                                  }
                                />
                                {repo.stargazers_count}
                              </p>
                            </li>
                            <li>
                              <span>Forks</span>
                              <p>
                                <GitFork
                                  weight={
                                    repo.forks_count > 0 ? "fill" : "regular"
                                  }
                                />
                                {repo.forks_count}
                              </p>
                            </li>
                            <li>
                              <span>Watching</span>
                              <p>
                                <Eye
                                  weight={
                                    repo.watchers_count > 0 ? "fill" : "regular"
                                  }
                                />
                                {repo.watchers_count}
                              </p>
                            </li>
                          </ul>
                        </footer>
                      </li>
                    );
                  })}
                </ul>
              </OtherProjectsContainer>
            ) : (
              <LoadingCircle />
            )}
          </>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
