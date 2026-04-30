import { IMG_URL } from '../api'

function Watchlist({ watchlist, onRemove }) {
  if (watchlist.length === 0) {
    return (
      <div className="px-6 py-10 border-t border-gray-800">
        <h2 className="text-white text-2xl font-bold mb-4">
          ♡ My <span className="text-yellow-500">Watchlist</span>
        </h2>
        <p className="text-gray-500 text-sm">
          No movies saved yet. Click ♡ on any movie to add it!
        </p>
      </div>
    )
  }

  return (
    <div className="px-6 py-10 border-t border-gray-800">
      <h2 className="text-white text-2xl font-bold mb-6">
        ♡ My <span className="text-yellow-500">Watchlist</span>
      </h2>
      <div className="flex gap-4 flex-wrap">
        {watchlist.map(movie => (
          <div key={movie.id} className="relative w-24">
            <img
              src={IMG_URL + movie.poster_path}
              alt={movie.title}
              className="w-full rounded-lg border border-yellow-700"
            />
            <button
              onClick={() => onRemove(movie.id)}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Watchlist