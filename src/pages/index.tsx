import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Banner, AboutMyServices, RecentProjects } from "~/styles/pages/home";

import {
  CircleWavyCheck,
  CircleWavyWarning,
  QrCode,
  ShoppingCartSimple,
} from "phosphor-react";

type VideoResponse = {
  channelId: string;
  channelTitle: string;
  description: string;
  publishedAt: string;
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    standard: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
    maxres: {
      url: string;
      width: number;
      height: number;
    };
  };
  title: string;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
};

type RepoResponse = {
  description: string;
  forks: number;
  image: string;
  language: string;
  languageColor: string;
  link: string;
  owner: string;
  repo: string;
  stars: number;
  website: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const videosRes = await fetch(
    `${process.env.YT_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YT_API_KEY}&playlistId=${process.env.YT_PLAYLIST_ID}&type=video&maxResults=1`
  );
  const videosData = await videosRes.json();

  const reposRes = await fetch(
    "https://gh-pinned-repos.egoist.sh/?username=gelzinn"
  );
  const reposData = await reposRes.json();

  return {
    props: {
      videosData,
      reposData,
    },
  };
};

export default function Home({ videosData, reposData }) {
  const [mostRecentVideo, setMostRecentVideo] = useState<VideoResponse>();
  const [mostRecentRepo, setMostRecentRepo] = useState<RepoResponse>();
  const [recentRepoScreenshot, setRecentRepoScreenshot] = useState<any>();

  useEffect(() => {
    setMostRecentVideo(videosData.items[0].snippet);
  }, [videosData]);

  useEffect(() => {
    setMostRecentRepo(reposData[0]);
  }, [reposData]);

  useEffect(() => {
    if (mostRecentRepo && mostRecentRepo.website) {
      const videosRes = async () => {
        const repoScreenshot = await fetch(
          `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.API_FLASH_KEY}&url=${mostRecentRepo.website}`
        );

        setRecentRepoScreenshot(repoScreenshot.url);
      };

      videosRes();
    }
  }, [mostRecentRepo]);

  return (
    <>
      <Head>
        <title>gelzin • Designer &amp; Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Banner>
          <div className="about-me">
            <div className="logo">
              <img src="../../logos/gelzin.svg" alt="gelzin" />
            </div>
            <div className="info">
              <span>gelzin</span>
              <p>Designer &amp; Developer.</p>
            </div>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/99c7f5130489301.6183594f0fce2.gif"
            alt="gelzin Banner"
          />
          <img className="scroll" src="../../mouse-scroll.svg" alt="Scroll" />
        </Banner>
        <AboutMyServices>
          <div className="lets-work">
            <div className="info">
              <span>Let&apos;s work together</span>
              <p>
                In case you are looking for an editor to make your custom
                videos, especially lyric videos, get in touch using the button
                below.
              </p>
              <div className="actions">
                <a href="">Let&apos;s work together</a>
                <Link href="/about-me">Know more about me</Link>
              </div>
            </div>
            <img
              src="../../illustrations/flying-people.svg"
              alt="dsdasdassdsdasdadsaasd"
            />
          </div>
          <div className="my-services">
            <h1>
              My <b>design</b> services
            </h1>
            <li>
              <img
                src="../../lyric-videos-cover.png"
                alt="Lyric Videos Cover"
              />
              <div className="info">
                <div className="opened">
                  <CircleWavyCheck />
                  <p>Open to new orders</p>
                </div>
                <span>Lyric Videos</span>
                <p>
                  Videos in which graphic design principles are applied to film
                  and video production through the use of animation and visual
                  effects.
                </p>
                <div className="actions">
                  <Link href="/portfolio/lyric-videos">See more</Link>
                  <a href="" id="buy">
                    <ShoppingCartSimple weight="bold" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img src="../../flyers-cover.png" alt="Lyric Videos Cover" />
              <div className="info">
                <div className="opened">
                  <CircleWavyCheck />
                  <p>Open to new orders</p>
                </div>
                <span>Flyers</span>
                <p>
                  A way to take and convey your message to a mass audience
                  visually, rather than saying something verbally.
                </p>
                <div className="actions">
                  <a href="">See more</a>
                  <a href="" id="buy">
                    <ShoppingCartSimple weight="bold" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <img
                id="closed"
                src="../../lyric-videos-cover.png"
                alt="Lyric Videos Cover"
              />
              <div className="info">
                <div className="closed">
                  <CircleWavyWarning />
                  <p>Closed Schedule</p>
                </div>
                <span>Custom project</span>
                <p>
                  A fully customized project. Production time and final value
                  will be adjusted according to order.
                </p>
                <div className="actions">
                  <Link href="/portfolio/design">See more</Link>
                </div>
              </div>
            </li>
          </div>
        </AboutMyServices>
        <RecentProjects>
          <h1>
            More <b>recent</b> works
          </h1>
          <li>
            <div className="container">
              <div className="info">
                <span>
                  Last <b>design</b> work.
                </span>
                <p>
                  You can get an idea of who you will be working with together
                  and realize their ideas.
                </p>
                <Link href="/portfolio/lyric-videos">See design works</Link>
              </div>
              {mostRecentVideo && (
                <div className="about-project">
                  <img
                    src={mostRecentVideo.thumbnails.high.url}
                    alt={mostRecentVideo.title}
                  />
                  <p>
                    {mostRecentVideo.resourceId.videoId ? (
                      <Link
                        href={`https://www.youtube.com/watch?v=${mostRecentVideo.resourceId.videoId}`}
                      >
                        {mostRecentVideo.title}
                      </Link>
                    ) : (
                      `${mostRecentVideo.title}`
                    )}
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="container">
              <div className="info">
                <span>
                  Last <b>development</b> project.
                </span>
                <p>
                  You can follow my evolution in development and all my projects
                  with technologies.
                </p>
                <Link href="/portfolio/development">
                  See development projects
                </Link>
              </div>
              {mostRecentRepo && (
                <div className="about-project development">
                  {recentRepoScreenshot ? (
                    <img src={recentRepoScreenshot} alt={mostRecentRepo.repo} />
                  ) : (
                    <img src={mostRecentRepo.image} alt={mostRecentRepo.repo} />
                  )}
                  <p>
                    {mostRecentRepo.website ? (
                      <Link href={mostRecentRepo.website}>
                        {mostRecentRepo.repo}
                      </Link>
                    ) : (
                      `${mostRecentRepo.repo}`
                    )}
                  </p>
                </div>
              )}
            </div>
          </li>
        </RecentProjects>
      </main>
    </>
  );
}
