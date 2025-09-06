import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Search as SearchIcon, ArrowLeft } from 'lucide-react'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import { useAppContext } from '../context/Appcontext'

const Search = () => {
  const [searchParams] = useSearchParams()
  const { shows } = useAppContext()
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  const query = searchParams.get('q') || ''

  useEffect(() => {
    if (shows && query) {
      // Filter movies based on search query
      const filtered = shows.filter(movie => 
        movie.originalTitle?.toLowerCase().includes(query.toLowerCase()) ||
        movie.overview?.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres?.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
      )
      setSearchResults(filtered)
    }
    setLoading(false)
  }, [shows, query])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-12 mt-28 max-md:mt-15'>
      <div className='relative'>
        <BlurCircle top='0' left='0' />
      </div>
      
      {/* Header */}
      <div className='flex items-center gap-4 mb-8'>
        <button 
          onClick={() => navigate(-1)}
          className='p-2 hover:bg-white/10 rounded-full transition-colors'
        >
          <ArrowLeft className='w-5 h-5 text-white' />
        </button>
        <div className='flex items-center gap-3'>
          <SearchIcon className='w-6 h-6 text-purple-400' />
          <h1 className='text-2xl md:text-3xl font-bold text-white'>
            Search Results
          </h1>
        </div>
      </div>

      {/* Search Query Display */}
      {query && (
        <div className='mb-8'>
          <p className='text-gray-300 text-lg'>
            Showing results for: <span className='text-purple-400 font-semibold'>"{query}"</span>
          </p>
          <p className='text-gray-400 text-sm mt-1'>
            {searchResults.length} movie{searchResults.length !== 1 ? 's' : ''} found
          </p>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {searchResults.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='text-center py-16'>
          <SearchIcon className='w-16 h-16 text-gray-500 mx-auto mb-4' />
          <h3 className='text-xl font-semibold mb-4 text-white'>
            {query ? 'No movies found' : 'Search for movies'}
          </h3>
          <p className='text-gray-300 mb-6'>
            {query 
              ? `No movies found matching "${query}". Try different keywords.`
              : 'Enter a search term to find your favorite movies.'
            }
          </p>
          {query && (
            <button
              onClick={() => navigate('/movies')}
              className='px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors'
            >
              Browse All Movies
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
