import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/Appcontext'
import ShowHiveLogo from './ShowHiveLogo'

const Navbar = () => {
  const { favorites, shows } = useAppContext();
  const [isOpen, setisOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchRef = useRef(null);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter movies based on search query
  const filteredMovies = shows?.filter(movie => 
    movie.originalTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.overview?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genres?.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearchDropdown(false);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
    setSearchQuery('');
    setShowSearchDropdown(false);
  };
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-8 lg:px-16 py-5'>
      <Link to='/' onClick={() => { scrollTo(0,0)}} className='max-md:flex-1'>
        <ShowHiveLogo className="w-48 h-16" />
      </Link>
      <div className={`max-md:absolute max-md:top-0 max-md:-left-10 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-6 min-md:px-6 py-3 max-md:px-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
        <XIcon className='min-md:hidden absolute top-6 right-6 w-8 h-8 cursor-pointer' onClick={() => { setisOpen(false) }} />
        <Link to="/" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-purple-400'>Home</Link>
        <Link to="/movies" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-purple-400'>Movies</Link>
        <Link to="/theaters" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-purple-400'>Theaters</Link>
        <Link to="/releases" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-purple-400'>New Releases</Link>
        {user && <Link to="/favourites" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-purple-400'>Favourites</Link>}
        
        {/* Mobile Search */}
        <div className='md:hidden w-full px-4'>
          <form onSubmit={handleSearch} className='relative'>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full px-4 py-2 pl-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300'
            />
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300' />
          </form>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        {/* Search Functionality */}
        <div className='relative max-md:hidden' ref={searchRef}>
          <form onSubmit={handleSearch} className='relative'>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(e.target.value.length > 0);
              }}
              onFocus={() => setShowSearchDropdown(searchQuery.length > 0)}
              className='w-64 px-4 py-2 pl-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300'
            />
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300' />
          </form>
          
          {/* Search Dropdown */}
          {showSearchDropdown && searchQuery && (
            <div className='absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50'>
              {filteredMovies.length > 0 ? (
                <div className='py-2'>
                  {filteredMovies.slice(0, 5).map((movie) => (
                    <div
                      key={movie._id}
                      onClick={() => handleMovieClick(movie._id)}
                      className='px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors duration-200 flex items-center gap-3'
                    >
                      <img
                        src={movie.primaryImage || '/no-cast.jpg'}
                        alt={movie.originalTitle}
                        className='w-10 h-14 object-cover rounded'
                      />
                      <div className='flex-1'>
                        <h4 className='text-white font-medium text-sm'>{movie.originalTitle}</h4>
                        <p className='text-gray-300 text-xs truncate'>{movie.overview}</p>
                      </div>
                    </div>
                  ))}
                  {filteredMovies.length > 5 && (
                    <div className='px-4 py-2 border-t border-white/10'>
                      <button
                        onClick={handleSearch}
                        className='text-purple-400 text-sm hover:text-purple-300 transition-colors'
                      >
                        View all {filteredMovies.length} results
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className='px-4 py-3 text-gray-300 text-sm'>
                  No movies found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
        {user && (
          <button 
            onClick={() => navigate('/admin')} 
            className='px-4 py-2 bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 text-white rounded-full font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50 max-md:text-sm'
          >
            Admin
          </button>
        )}
        {!user ? (
          <button onClick={openSignIn} className='sm:px-7 sm:py-2 bg-purple-500 hover:bg-purple-600 transition px-4 py-1 rounded-full font-medium cursor-pointer max-md:text-sm'>Login</button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15} />} onClick={() => { navigate('/my-bookings') }} />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
      <div className='flex items-center gap-2 min-md:hidden'>
        <SearchIcon className='w-6 h-6 cursor-pointer' onClick={() => { setisOpen(true) }} />
        <MenuIcon className='w-8 h-8 cursor-pointer' onClick={() => { setisOpen(true) }} />
      </div>
    </div>
  )
}

export default Navbar
