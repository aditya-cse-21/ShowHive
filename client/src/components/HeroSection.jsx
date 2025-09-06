import { ArrowRight, Play, Star, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ShowHiveLogo from './ShowHiveLogo'

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className='relative h-screen overflow-hidden'>
            {/* Large Background Image - ShowHive Style */}
            <div className='absolute inset-0'>
                <img 
                    src="/hero-image.png" 
                    alt="Hero Background" 
                    className='w-full h-full object-cover object-center'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10'></div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-2xl">
                        {/* Logo */}
                        <div className='mb-8'>
                            <ShowHiveLogo className="w-96 h-3" />
                        </div>
                        
                        {/* Subtitle */}
                        <h2 className='text-xl md:text-2xl font-semibold text-purple-300 mb-6'>
                            From Screen to Seat in Seconds
                        </h2>
                        
                        {/* Features */}
                        <div className='flex flex-wrap items-center gap-6 mb-6'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className='w-5 h-5 fill-purple-400 text-purple-400' />
                                    ))}
                                </div>
                                <span className='text-white font-semibold'>Premium Experience</span>
                            </div>
                            
                            <div className='flex items-center gap-2 text-gray-300'>
                                <Calendar className='w-4 h-4' />
                                <span>2025</span>
                            </div>
                            
                            <div className='flex items-center gap-2 text-gray-300'>
                                <Clock className='w-4 h-4' />
                                <span>Instant Booking</span>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <p className='text-lg text-gray-300 mb-8 leading-relaxed max-w-xl'>
                            Experience the ultimate movie booking platform with seamless seat selection, secure payments, and instant confirmations. Your cinematic journey starts here with ShowHive.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <button 
                                className='group flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dull text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                                onClick={() => { navigate('/movies') }}
                            >
                                <Play className='w-5 h-5' />
                                Explore Movies
                                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                            </button>
                            
                            <button 
                                className='flex items-center justify-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50'
                                onClick={() => { navigate('/MyBookings') }}
                            >
                                <Star className='w-5 h-5' />
                                My Bookings
                            </button>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <div className='w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center'>
                    <div className='w-1 h-3 bg-purple-400/50 rounded-full mt-2 animate-pulse'></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
