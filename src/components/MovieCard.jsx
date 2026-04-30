import { IMG_URL } from '../api'

function MovieCard({ movie, onClick, onWatchlist, isInWatchlist }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300">

      <div className="relative" onClick={() => onClick(movie.id)}>
        <img
          src={IMG_URL + movie.poster_path}
          alt={movie.title}
          className="w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-80 text-yellow-400 text-xs px-2 py-1 rounded-lg border border-yellow-700">
          ★ {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
        <p className="text-gray-500 text-xs mt-1">
          {movie.release_date?.substring(0, 4)}
        </p>
        <button
          onClick={() => onWatchlist(movie)}
          className={`mt-2 w-full text-xs py-1 rounded-full border transition
            ${isInWatchlist
              ? 'bg-yellow-500 text-black border-yellow-500'
              : 'border-yellow-700 text-gray-400 hover:bg-yellow-900 hover:text-yellow-400'
            }`}
        >
          {isInWatchlist ? '✓ Saved' : '♡ Watchlist'}
        </button>
      </div>

    </div>
  )
}

export default MovieCard