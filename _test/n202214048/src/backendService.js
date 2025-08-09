import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

export async function getMovies() {
  const response = await axios.get("/movies?_expand=genre");
  return response.data;
}

export async function getMovie(id) {
  const response = await axios.get("/movies/" + id);
  return response.data;
}

export async function putMovie(movie) {
  await axios.put("/movies/" + movie.id, movie);
}

export async function postMovie(movie) {
  await axios.post("/movies", movie);
}

export async function deleteMovie(id) {
  await axios.delete("/movies/" + id);
}

export async function getGenreList() {
  const response = await axios.get('/genres');
  return response.data;
}