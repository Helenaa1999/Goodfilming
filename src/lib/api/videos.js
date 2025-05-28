const YT_API_KEY = import.meta.env.YT_API_KEY;


export async function getVideos(title) {
    const ytQuery = encodeURIComponent(`${title} trailer español`);
    const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${ytQuery}&type=video&key=${YT_API_KEY}&maxResults=1`;
    const ytRes = await fetch (ytUrl);
    const ytData = await ytRes.json();
    let videoId = null;
    if(ytData.items && ytData.items.length >0){
        videoId= ytData.items[0].id.videoId;
    }

    return videoId;
}
