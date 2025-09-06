import { useState } from 'react';
import BlurCircle from './BlurCircle';
import { dummyTrailers } from '../assets/assets';
import { PlayCircleIcon, Video } from 'lucide-react';

const MovieTrailer = () => {
  const [currentVideo, setCurrentVideo] = useState(dummyTrailers[0]);

  return (
    <section className='relative py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5'></div>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl'></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className='flex items-center gap-3 mb-4'>
            <Video className='w-8 h-8 text-purple-400' />
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
              Trailers
            </h2>
          </div>
          <p className='text-gray-400 text-lg max-w-md pl-6 sm:pl-0'>
            Watch the latest movie trailers and get excited for upcoming releases
          </p>
        </div>

      <div className="relative mt-6">
        <BlurCircle top='0px' left='-100px' />
      </div>


      <div className="relative w-full max-w-6xl mx-auto mt-10">
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src={currentVideo.videoUrl + "?rel=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="relative">
        <BlurCircle top='-150px' right='80px' />
      </div>


      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto px-2'>
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className='relative group transition-transform transform hover:-translate-y-1 cursor-pointer'
            onClick={() => setCurrentVideo(trailer)}
          >
            <img
              src={trailer.image}
              alt={`Trailer thumbnail ${index + 1}`}
              className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className='absolute top-1/2 left-1/2 w-6 h-6 md:w-8 md:h-8 transform -translate-x-1/2 -translate-y-1/2 text-white'
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default MovieTrailer;
