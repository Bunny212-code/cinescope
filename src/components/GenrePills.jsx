const genres = [
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
    { id: 27, name: 'Horror' },
    { id: 878, name: 'Sci-Fi' },
    { id: 10749, name: 'Romance' },
    { id: 53, name: 'Thriller' },
    { id: 16, name: 'Animation' },
    { id: 99, name: 'Documentary' },
  ]
  
  function GenrePills({ onGenreSelect, activeGenre }) {
    return (
      <div className="flex flex-wrap gap-2 justify-center px-6 pb-8">
        {genres.map(genre => (
          <button
            key={genre.id}
            onClick={() => onGenreSelect(genre.id)}
            className={`px-4 py-1 rounded-full text-sm border transition
              ${activeGenre === genre.id
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'border-yellow-700 text-gray-400 hover:bg-yellow-900 hover:text-yellow-400'
              }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    )
  }
  
  export default GenrePills