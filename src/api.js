const API_KEY = import.meta.env.VITE_TMDB_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export async function getTrending() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
  const data = await response.json()
  return data.results
}

export async function getMovieDetails(id) {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
  }
  
  export async function getMovieVideos(id) {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
  }
  export async function getByGenre(genreId) {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`)
    const data = await response.json()
    return data.results
  }