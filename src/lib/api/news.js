import Parser from "rss-parser";
const parser = new Parser({
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }
  });;



export async function getNews() {
    //Urls de las cuales se quieren coger las noticias
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

        return feed.items.map(item =>{
            const originalDate = new Date(item.pubDate);
            //Condiciones para mostrar la fecha de las noticias
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };

            const shortDate = new Intl.DateTimeFormat('es-ES', options).format(originalDate);
            const capitalizedFirstLetter = shortDate.charAt(0).toUpperCase() + shortDate.slice(1);
            return{
                //elementos que quiero que se muestren tras realizar el mapeo. 
                //En caso de que no se encuentren, se escribe "Sin descripción" o "Desconocido"
                id: item.guid || item.link,
                title: item.title,
                link:item.link,
                descripction: item.contentSnippet || item.descripction || "Sin descripción",
                image: item.enclosure ? item.enclosure.url : item.image || item.thumbnail || "https://www.sensacine.com/imagenes/2023/10/03/20231003103219523.jpg",
                date: capitalizedFirstLetter,
                source: feed.title || "Desconocido"
            };

    })
});

    //Sirve para mostrar en orden las noticias de la más reciente a la más antigua.
    noticias.sort((a,b)=>new Date(b.date).getTime() - new Date(a.date).getTime());

    return noticias;
}

