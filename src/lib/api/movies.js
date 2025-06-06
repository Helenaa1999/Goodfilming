const API_URL_NOW_PLAYING ="https://api.themoviedb.org/3";
const API_KEY = import.meta.env.TMB_API_KEY2;

//Conexión con la API the movie data base para adquirir los estrenos
export async function getNowPlaying(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };
    const res = await fetch(`${API_URL_NOW_PLAYING}/movie/now_playing?language=es-ES&page=1`, options);
    const data = await res.json();
    const film = data.results;
    return film;
}

const API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1';
//Conexión con la API the movie data base para adquirir las películas populares
export async function getPopular() {
  const options={
    method: 'GET',
    headers:{
      accept: 'application/json', 
      Authorization: `Bearer ${API_KEY}`
    }
  }

  const res = await fetch (`${API_URL_POPULAR}/movie/popular?language=es-ES&page=1`, options);
  const data = await res.json();
  const film = data.results;
  return film;
}

