const API_URL_NOW_PLAYING ="https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTZkNGFlNWEyOTUxNDZjYzZlMmQwNWM2MzhkN2I3YyIsIm5iZiI6MTc0MjIwNDcwMy4zMzQsInN1YiI6IjY3ZDdlZjFmZDgwMjMwOTcwM2YxODJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j_5W4yQdwSXPgEmaqQntuDVt9-ysfR7b_OTvameod_A";

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

