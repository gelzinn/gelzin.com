import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import LoadingCircle from "~/components/Loading/LoadingCircle";
import {
  OtherVideosContainer,
  RecentVideoContainer,
} from "~/styles/pages/design-portfolio";
import enUS from "date-fns/locale/en-US";
import { PlayCircle, YoutubeLogo } from "phosphor-react";
import Link from "next/link";
import BackArrow from "~/components/NavigationIcons/BackArrow";
import {
  MostRecentVideoStats,
  SingleVideoResponse,
  VideoResponse,
} from "~/models/ytVideoResponse";
import useYTVideoViews from "~/hooks/useYTVideoViews";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.YT_PLAYLIST_ITEMS_API}?part=snippet&key=${process.env.YT_API_KEY}&playlistId=${process.env.YT_PLAYLIST_ID}&type=video&maxResults=50`
  );
  const data = await res.json();

  return {
    props: {
      videosData: data,
    },
  };
};

export default function DesignerPortfolio({ videosData }) {
  const [videosList, setVideosList] = useState<VideoResponse>();
  const [videosListStats, setVideosListStats] = useState({});
  const [mostRecentVideo, setMostRecentVideo] = useState<SingleVideoResponse>();
  const [mostRecentVideoStats, setMostRecentVideoStats] =
    useState<MostRecentVideoStats>();

  useEffect(() => {
    setMostRecentVideo(videosData.items[0].snippet);
    setVideosList(videosData.items);
  }, [videosData]);

  useEffect(() => {
    if (mostRecentVideo) {
      const getViews = async () => {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${mostRecentVideo.resourceId.videoId}&key=${process.env.YT_API_KEY}`
        );

        const data = await res.json();
        setMostRecentVideoStats(data.items[0].statistics);
      };

      getViews();
    }
  }, [mostRecentVideo]);

  useEffect(() => {
    if (videosList) {
      videosList.map((video: VideoResponse) => {
        if (
          video.snippet.resourceId.videoId ===
          mostRecentVideo.resourceId.videoId
        ) {
          return;
        }

        const getViews = async () => {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.snippet.resourceId.videoId}&key=${process.env.YT_API_KEY}`
          );

          const dataWithoutStats = await res.json();
          const data = dataWithoutStats.items[0]?.statistics;

          setVideosListStats({
            ...videosListStats,
            id: video.snippet.resourceId.videoId,
            views: data?.viewCount,
          });
        };

        getViews();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videosList]);

  return (
    <>
      <Head>
        <title>Design Portfolio • gelzin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <RecentVideoContainer>
        {mostRecentVideo && mostRecentVideoStats ? (
          <>
            <BackArrow />
            <div className="about-video">
              <div className="heading">
                <p>Most recent video:</p>
                <span>
                  {mostRecentVideo.title
                    // .replace(/\s/g, "")
                    .replace(/-/g, "")
                    .replace(/()/g, "")
                    .replace("|", "")
                    .replace(/'/g, "")
                    .replace(/"/g, "")
                    .replace("Tipografia", "")
                    .replace("Lyric", "")
                    .replace("Video", "")
                    .replace("Oficial", "")
                    .replace(mostRecentVideo.videoOwnerChannelTitle, "")
                    .toLocaleLowerCase()}
                </span>
                <p>
                  from <b>{mostRecentVideo.videoOwnerChannelTitle}</b>
                </p>
              </div>
              <div className="other-info">
                <div>
                  <span>Published at:</span>
                  <p>
                    {format(
                      new Date(mostRecentVideo.publishedAt),
                      "MMM' 'd' • 'u",
                      {
                        locale: enUS,
                      }
                    )}
                  </p>
                </div>
                <div>
                  <span>Views:</span>
                  <p>
                    {mostRecentVideoStats.viewCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </p>
                </div>
              </div>
              <div className="actions">
                <a
                  target="_blank"
                  id="youtube"
                  href={`https://youtube.com/watch?v=${mostRecentVideo.resourceId.videoId}`}
                  rel="noreferrer"
                >
                  <YoutubeLogo />
                  On YouTube
                </a>
                {mostRecentVideo.videoOwnerChannelId && (
                  <a
                    target="_blank"
                    href={`https://youtube.com/channel/${mostRecentVideo.videoOwnerChannelId}`}
                    rel="noreferrer"
                  >
                    From the same author
                  </a>
                )}
              </div>
            </div>
            <div className="bg">
              <img
                src={mostRecentVideo.thumbnails.maxres.url}
                alt={mostRecentVideo.title}
              />
            </div>
          </>
        ) : (
          <LoadingCircle />
        )}
      </RecentVideoContainer>
      {videosList ? (
        <OtherVideosContainer>
          <div className="title">
            <span>Other videos</span>
            <p>The projects are in chronological order.</p>
          </div>
          <ul className="videos">
            {videosList.map((video: VideoResponse) => {
              if (
                video.snippet.thumbnails.standard ===
                mostRecentVideo.thumbnails.standard
              ) {
                return;
              }

              if (!video.snippet.thumbnails.standard) {
                return;
              }

              return (
                <li key={video.id}>
                  <div className="banner">
                    <Link
                      href={`https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                      passHref
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <PlayCircle />
                      </a>
                    </Link>
                    <img
                      src={video.snippet.thumbnails.standard?.url}
                      alt={video.title}
                    />
                  </div>
                  <footer>
                    <div>
                      <b>
                        {video.snippet.title
                          .replace(/()/g, "")
                          .replace("|", "")
                          .replace(/'/g, "")
                          .replace(/"/g, "")
                          .replace("Tipografia", "")
                          .replace("Lyric", "")
                          .replace("Video", "")
                          .replace("Oficial", "")}
                      </b>
                      <p>
                        {format(
                          new Date(video.snippet.publishedAt),
                          "MMM' 'd' • 'u",
                          {
                            locale: enUS,
                          }
                        )}
                      </p>
                    </div>
                  </footer>
                </li>
              );
            })}
          </ul>
        </OtherVideosContainer>
      ) : (
        <LoadingCircle />
      )}
    </>
  );
}
