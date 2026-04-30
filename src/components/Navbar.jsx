function Navbar({ watchlist, onToggleTheme, isDark }) {
    return (
      <nav className="bg-black border-b border-yellow-600 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
  
        <div className="text-2xl font-bold text-yellow-500">
          Cine<span className="text-white font-light">Scope</span>
        </div>
  
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="text-gray-400 border border-yellow-700 px-4 py-1 rounded-full text-sm hover:bg-yellow-900 hover:text-yellow-400"
          >
            {isDark ? '☀ Light' : '☽ Dark'}
          </button>
  
          <button className="text-sm text-gray-400 border border-yellow-700 px-4 py-1 rounded-full hover:bg-yellow-900 hover:text-yellow-400">
            ♡ Watchlist ({watchlist.length})
          </button>
        </div>
  
      </nav>
    )
  }
  
  export default Navbar
