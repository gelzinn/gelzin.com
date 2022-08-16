const useYTVideoViews = async (videoId: string) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${process.env.YT_API_KEY}`
  );

  const data = await res.json();

  return data;
};

export default useYTVideoViews;
