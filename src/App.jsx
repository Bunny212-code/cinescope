import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import GenrePills from './components/GenrePills'
import MovieGrid from './components/MovieGrid'
import Watchlist from './components/Watchlist'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeGenre, setActiveGenre] = useState(null)
  const [watchlist, setWatchlist] = useState([])
  const [isDark, setIsDark] = useState(true)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setActiveGenre(null)
  }

  const handleGenre = (genreId) => {
    setActiveGenre(genreId)
    setSearchQuery('')
  }

  const handleWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.some(w => w.id === movie.id)
      if (exists) {
        return prev.filter(w => w.id !== movie.id)
      }
      return [...prev, movie]
    })
  }

  const handleRemove = (id) => {
    setWatchlist(prev => prev.filter(w => w.id !== id))
  }

  const handleTheme = () => {
    setIsDark(prev => !prev)
  }

  return (
    <div className={isDark ? 'bg-black min-h-screen' : 'bg-white min-h-screen'}>
      <Navbar
        watchlist={watchlist}
        onToggleTheme={handleTheme}
        isDark={isDark}
      />
      <Hero onSearch={handleSearch} />
      <GenrePills onGenreSelect={handleGenre} activeGenre={activeGenre} />
      <MovieGrid
        searchQuery={searchQuery}
        activeGenre={activeGenre}
        watchlist={watchlist}
        onWatchlist={handleWatchlist}
      />
      <Watchlist watchlist={watchlist} onRemove={handleRemove} />

      <footer className="text-center py-8 border-t border-gray-800 mt-10">
  <p className="text-gray-600 text-sm">
    Made with ❤️ by <span className="text-yellow-500">You</span> · Powered by TMDB
  </p>
</footer>
    </div>
  )
}

export default App