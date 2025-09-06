import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard';
import { useAppContext } from '../context/Appcontext';

const MovieFeatured = () => {
  const {shows} = useAppContext();
  const navigate = useNavigate();
  return (
    <section className='relative py-20 px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5'></div>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl'></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div className='mb-6 md:mb-0 flex-1'>
            <div className='flex items-center gap-3 mb-4'>
              <Sparkles className='w-8 h-8 text-purple-400 flex-shrink-0' />
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight'>
                Now Showing
              </h2>
            </div>
            <p className='text-gray-400 text-lg max-w-md'>
              Discover the latest blockbusters and cinematic masterpieces
            </p>
          </div>
          
          <button 
            onClick={() => {navigate('/movies'); scrollTo(0,0)}} 
            className='group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 rounded-full transition-all duration-300 text-purple-300 hover:text-purple-200 flex-shrink-0'
          >
            View All Movies
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
        
        {/* Movies Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 justify-items-center'>
          {shows?.filter(Boolean).slice(0,5).map((show) => (
            <div key={show._id} className='transform hover:scale-105 transition-all duration-300 w-full max-w-sm'>
              <MovieCard movie={show} />
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className='flex justify-center'>
          <button 
            onClick={() => {navigate('/movies'); scrollTo(0,0)}} 
            className='group relative px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 overflow-hidden'
          >
            <span className='relative z-10 flex items-center gap-3'>
              Show More Movies
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MovieFeatured
