import { 
  Smartphone, 
  CreditCard, 
  Clock, 
  Shield, 
  Users, 
  Star,
  Zap
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Book tickets on any device with our responsive design. Your cinema experience starts with a tap.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security. Your transactions are always protected.",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "No more waiting in lines. Book your seats in seconds and get instant confirmation.",
      color: "from-violet-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is encrypted and protected. We follow industry-leading security standards.",
      color: "from-purple-600 to-indigo-500"
    },
    {
      icon: Users,
      title: "Group Bookings",
      description: "Book multiple seats for friends and family. Perfect for movie nights and special occasions.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className='relative py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5'></div>
      <div className='absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl'></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4'>
            Why Choose ShowHive?
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Experience the future of movie booking with our cutting-edge features designed to make your cinema experience seamless and enjoyable.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={feature.title}
                className='group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105'
              >
                <div className='text-center'>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            )
          })}
        </div>
        
        {/* CTA Section */}
        <div className='text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Ready to Experience the Future?
          </h3>
          <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
            Join thousands of movie lovers who have already discovered the convenience of ShowHive. Book your next movie experience today!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 overflow-hidden'>
              <span className='relative z-10 flex items-center gap-3'>
                Start Booking Now
                <Zap className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
            </button>
            <button className='group relative px-8 py-4 bg-transparent border-2 border-purple-500/50 hover:border-purple-500 text-purple-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105'>
              <span className='relative z-10 flex items-center gap-3'>
                Learn More
                <Star className='w-5 h-5 group-hover:rotate-12 transition-transform' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
