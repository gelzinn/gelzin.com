export type SingleVideoResponse = {
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

export type MostRecentVideoStats = {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
};

export type VideoResponse = {
  [x: string]: any;
  etag: string;
  id: string;
  kind: string;
  snippet: {
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
};
