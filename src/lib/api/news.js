import Parser from "rss-parser";
const parser = new Parser({
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }
  });;



export async function getNews() {
    const urls =[
        'https://www.sensacine.com/rss/noticias-cine.xml',
        'https://www.mundiario.com/cineseries/rss/',
        'https://www.mundiario.com/cineseries/rss/video/'
    ];

    const feeds = await Promise.all(
        urls.map(async (url) => {
            try{
                return await parser.parseURL(url);
            }catch (error) {
                console.error(`Error al cargar el feed ${url}` , error);
                return null;
            }
    })
    );

    const noticias = feeds.flatMap(feed => {
        if(!feed || !feed.items) return [];
        return feed.items.map(item =>({
            id: item.guid || item.link,
            title: item.title,
            link:item.link,
            descripction: item.contentSnippet || item.descripction || "Sin descripción",
            imgage: item.enclosure ? item.enclosure.url : item.image || item.thumbnail || "https://www.sensacine.com/imagenes/2023/10/03/20231003103219523.jpg",
            date: item.pubDate,
            link: item.link,
            source: feed.title || "Desconocido"
    }))
});

    noticias.sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime());

    return noticias;
}

