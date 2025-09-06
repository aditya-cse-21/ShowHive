import React from 'react'
import Title from '../components/Title'
import BlurCircle from '../components/BlurCircle'

const Theaters = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-12 mt-28 max-md:mt-15'>
      <Title text1="Our" text2="Theaters" />
      <div className='relative'>
        <BlurCircle top='0' left='0' />
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {/* Theater cards will go here */}
        <div className='bg-primary/10 border border-primary/20 rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>CineMax Downtown</h3>
          <p className='text-gray-300 mb-4'>Premium theater with IMAX and Dolby Atmos</p>
          <div className='text-sm text-gray-400'>
            <p>📍 123 Main Street, Downtown</p>
            <p>📞 (555) 123-4567</p>
            <p>🕒 Open: 10:00 AM - 11:00 PM</p>
          </div>
        </div>
        
        <div className='bg-primary/10 border border-primary/20 rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>MegaPlex Mall</h3>
          <p className='text-gray-300 mb-4'>Family-friendly theater with luxury seating</p>
          <div className='text-sm text-gray-400'>
            <p>📍 456 Mall Drive, Shopping District</p>
            <p>📞 (555) 987-6543</p>
            <p>🕒 Open: 9:00 AM - 12:00 AM</p>
          </div>
        </div>
        
        <div className='bg-primary/10 border border-primary/20 rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>ArtHouse Cinema</h3>
          <p className='text-gray-300 mb-4'>Independent films and classic movies</p>
          <div className='text-sm text-gray-400'>
            <p>📍 789 Arts Quarter, Cultural District</p>
            <p>📞 (555) 456-7890</p>
            <p>🕒 Open: 2:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theaters
