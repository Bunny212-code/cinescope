import { useState } from 'react'


function Hero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="bg-black py-20 px-6 text-center">

      <p className="text-yellow-500 text-xs tracking-widest uppercase mb-4">
        Your Cinema Universe
      </p>

      <h1 className="text-5xl font-bold text-white mb-4">
        Discover <span className="text-yellow-500 italic">Films</span> Worth Watching
      </h1>

      <p className="text-gray-400 text-sm mb-10">
        Search millions of movies. Watch trailers. Read ratings. Build your watchlist.
      </p>

      <div className="flex max-w-xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search movies, actors, directors..."
          className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-l-full border border-yellow-700 outline-none placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-black px-6 py-3 rounded-r-full font-semibold hover:bg-yellow-400"
        >
          Search
        </button>
      </div>

    </div>
  )
}

export default Hero