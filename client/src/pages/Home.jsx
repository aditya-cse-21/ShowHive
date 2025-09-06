import React from 'react'
import HeroSection from '../components/HeroSection'
import MovieFeatured from '../components/MovieFeatured'
import MovieTrailer from '../components/MovieTrailer'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MovieFeatured/>
      <MovieTrailer/>
      <FeaturesSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default Home
