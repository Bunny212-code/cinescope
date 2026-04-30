import { useEffect, useState } from 'react'
import { getTrending, searchMovies, getByGenre } from '../api'
import MovieCard from './MovieCard'
import Modal from './Modal'

function MovieGrid({ searchQuery, activeGenre, watchlist, onWatchlist }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    setLoading(true)

    let fetchMovies

    if (searchQuery) {
      fetchMovies = searchMovies(searchQuery)
    } else if (activeGenre) {
      fetchMovies = getByGenre(activeGenre)
    } else {
      fetchMovies = getTrending()
    }

    fetchMovies.then(data => {
      setMovies(data)
      setLoading(false)
    })

  }, [searchQuery, activeGenre])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-yellow-500 text-sm">Loading movies...</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-10">
      <h2 className="text-white text-2xl font-bold mb-6">
        {searchQuery
          ? `Results for "${searchQuery}"`
          : activeGenre
          ? '🎭 Genre Movies'
          : '🔥 Trending Today'}
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={setSelectedId}
              onWatchlist={onWatchlist}
              isInWatchlist={watchlist.some(w => w.id === movie.id)}
            />
          ))}
        </div>
      )}

      {selectedId && (
        <Modal
          movieId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  )
}

export default MovieGrid