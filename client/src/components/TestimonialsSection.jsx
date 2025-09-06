import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Movie Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "ShowHive has completely transformed how I book movies. The interface is so intuitive and I love getting instant confirmations. No more waiting in long lines!"
    },
    {
      name: "Michael Chen",
      role: "Tech Professional",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The group booking feature is amazing! I can easily book seats for my entire family. The app is fast, reliable, and the customer support is outstanding."
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a student, I appreciate the affordable prices and easy booking process. ShowHive makes movie nights with friends so much more convenient!"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The premium features are worth every penny. Early access to tickets and VIP seating options have made my movie experiences truly special."
    }
  ]

  return (
    <section className='relative py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5'></div>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl'></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4'>
            What Our Users Say
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Don't just take our word for it. Here's what real users have to say about their ShowHive experience.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className='group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 h-64 flex flex-col justify-between'
            >
              {/* Quote Icon */}
              <div className='absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500/40 transition-colors'>
                <Quote className='w-6 h-6' />
              </div>
              
              {/* Rating */}
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className='text-gray-300 leading-relaxed text-sm flex-grow'>
                "{testimonial.text}"
              </p>
              
              {/* User Info */}
              <div className='flex items-center gap-3 mt-4'>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className='w-10 h-10 rounded-full object-cover border-2 border-purple-500/30'
                />
                <div>
                  <h4 className='text-white font-semibold text-sm'>{testimonial.name}</h4>
                  <p className='text-gray-400 text-xs'>{testimonial.role}</p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300'></div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
          <div className='text-center bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800'>
            <div className='text-4xl font-bold text-purple-400 mb-2'>50K+</div>
            <div className='text-gray-300'>Happy Users</div>
          </div>
          <div className='text-center bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800'>
            <div className='text-4xl font-bold text-purple-400 mb-2'>4.9/5</div>
            <div className='text-gray-300'>Average Rating</div>
          </div>
          <div className='text-center bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800'>
            <div className='text-4xl font-bold text-purple-400 mb-2'>100K+</div>
            <div className='text-gray-300'>Tickets Booked</div>
          </div>
          <div className='text-center bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800'>
            <div className='text-4xl font-bold text-purple-400 mb-2'>99.9%</div>
            <div className='text-gray-300'>Uptime</div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className='text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Join Our Community
          </h3>
          <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
            Be part of the growing community of movie lovers who trust ShowHive for their cinema experiences.
          </p>
          <button className='group relative px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 overflow-hidden'>
            <span className='relative z-10 flex items-center gap-3'>
              Start Your Journey
              <Star className='w-5 h-5 group-hover:rotate-12 transition-transform' />
            </span>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
