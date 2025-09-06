import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import BlurCircle from '../components/BlurCircle'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'
import { useAppContext } from '../context/Appcontext'
import { Calendar } from 'lucide-react'

const Releases = () => {
  const { shows } = useAppContext();
  const [newReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shows && shows.length > 0) {
      // Sort shows by creation date (newest first) and get the first 4
      const sortedShows = [...shows].sort((a, b) => {
        // Sort by _id (which usually contains timestamp) or createdAt if available
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        // Fallback: sort by _id (MongoDB ObjectIds contain timestamp)
        return b._id.localeCompare(a._id);
      });
      
      // Get the first 4 (most recent) shows
      const latestShows = sortedShows.slice(0, 4);
      setNewReleases(latestShows);
    }
    setLoading(false);
  }, [shows]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-12 mt-28 max-md:mt-15'>
      <Title text1="New" text2="Releases" />
      <div className='relative'>
        <BlurCircle top='0' left='0' />
      </div>
      
      <p className='text-gray-300 text-lg mb-8'>
        Discover the latest movies that have just hit the theaters
      </p>
      
      {/* New Releases Section */}
      <div className='mb-16'>
        <div className='flex items-center gap-3 mb-8'>
          <Calendar className='w-6 h-6 text-purple-400' />
          <h2 className='text-2xl font-bold text-white'>Latest Releases</h2>
        </div>
        
        {newReleases.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {newReleases.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className='text-center py-16'>
            <h3 className='text-xl font-semibold mb-4'>No New Releases</h3>
            <p className='text-gray-300'>
              Check back soon for the latest movie releases!
            </p>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Releases
