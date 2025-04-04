const url = 'https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1';
const options = {
method: 'GET',
headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTZkNGFlNWEyOTUxNDZjYzZlMmQwNWM2MzhkN2I3YyIsIm5iZiI6MTc0MjIwNDcwMy4zMzQsInN1YiI6IjY3ZDdlZjFmZDgwMjMwOTcwM2YxODJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j_5W4yQdwSXPgEmaqQntuDVt9-ysfR7b_OTvameod_A'
}
};
export{};
const res = await fetch(url, options)
const data = await res.json();
console.log(data);

