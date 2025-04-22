import Parser from "rss-parser";
const parser = new Parser();

export async function getNews() {
    const urls =[
        'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/cine/portada',
        'https://www.espinof.com/tag/cine/rss2.xml'
    ];

    const feeds = await Promise.all(urls.map(url=>parser.parseURL(url)));

    const noticias = feeds.flatMap(feed => 
        feed.items.map(item =>({
            id: item.guid || item.link,
            title: item.title,
            link:item.link,
            descripction: item.contentSnippet || item.descripction,
            date: item.pubDate,
            image: item.enclosure?.url || item.image?.url,
            link: item.link,
            source: feed.title
    }))
);
    noticias.sort((a,b)=>b.date - a.date.getTime());

    return noticias;
}
