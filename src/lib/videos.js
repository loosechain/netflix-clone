import videosData from "../data/videos.json"

export const getCommonVideos = async (URL) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
  const BASE_URL = "youtube.googleapis.com/youtube/v3"
  try {
  const response = await fetch(
    `https://${BASE_URL}/${URL}&maxResults=25&key=${YOUTUBE_API_KEY}`
  )
  const data = await response.json()
  console.log(data)
  if(data?.error){
    console.log("Youtube API error.", data.error)
    return []
  }
  return data.items.map((item) => {
    const id = item.id.video || item.id
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id
    };
  });
}
catch (error) {
  console.log("youtube api error", error)
  return []
}
};
 

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&q=${searchQuery}`
  return getCommonVideos(URL)
}

export const getPopularVideos = () => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`
  return getCommonVideos(URL)
}

