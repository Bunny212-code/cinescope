import { useEffect, useState } from 'react'
import { getMovieDetails, getMovieVideos } from '../api'

function Modal({ movieId, onClose }) {
  const [movie, setMovie] = useState(null)
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    Promise.all([
      getMovieDetails(movieId),
      getMovieVideos(movieId)
    ]).then(([details, videos]) => {
      setMovie(details)
      const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube')
      setTrailerKey(trailer?.key)
    })
  }, [movieId])

  if (!movie) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <p className="text-yellow-500">Loading...</p>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl w-full max-w-3xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >

        {/* Trailer Thumbnail with play button */}
        <div className="relative w-full">
          <img
            src={`https://img.youtube.com/vi/${trailerKey}/maxresdefault.jpg`}
            alt="Trailer"
            className="w-full object-cover"
          />
          {trailerKey && (
            <a
              href={`https://www.youtube.com/watch?v=${trailerKey}`}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center hover:bg-yellow-400 transition">
                <span className="text-black text-2xl ml-1">▶</span>
              </div>
            </a>
          )}
        </div>

        {/* Movie Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-white text-2xl font-bold">{movie.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl ml-4"
            >
              ✕
            </button>
          </div>

          {/* Badges */}
          <div className="flex gap-3 mb-4">
            <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
              ★ {movie.vote_average?.toFixed(1)}
            </span>
            <span className="border border-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full">
              {movie.release_date?.substring(0, 4)}
            </span>
            <span className="border border-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full">
              {movie.runtime} min
            </span>
          </div>

          {/* Genres */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {movie.genres?.map(g => (
              <span key={g.id} className="border border-yellow-700 text-yellow-600 text-xs px-3 py-1 rounded-full">
                {g.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {movie.overview}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Modal