import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/Appcontext'
import ShowHiveLogo from './ShowHiveLogo'

const Navbar = () => {
  const { favorites } = useAppContext();
  const [isOpen, setisOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-8 lg:px-16 py-5'>
      <Link to='/' onClick={() => { scrollTo(0,0)}} className='max-md:flex-1'>
        <ShowHiveLogo className="w-48 h-16" />
      </Link>
      <div className={`max-md:absolute max-md:top-0 max-md:-left-10 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-6 min-md:px-6 py-3 max-md:px-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
        <XIcon className='min-md:hidden absolute top-6 right-6 w-8 h-8 cursor-pointer' onClick={() => { setisOpen(false) }} />
        <Link to="/" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-primary'>Home</Link>
        <Link to="/movies" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-primary'>Movies</Link>
        <Link to="/theaters" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-primary'>Theaters</Link>
        <Link to="/releases" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-primary'>New Releases</Link>
        {user && <Link to="/favourites" onClick={() => { scrollTo(0,0); setisOpen(false) }} className='hover:text-primary'>Favourites</Link>}
      </div>
      <div className='flex items-center gap-4'>
        <SearchIcon className='max-md:hidden w-6 h-6' />
        {user && (
          <button 
            onClick={() => navigate('/admin')} 
            className='px-4 py-2 bg-purple-500/20 backdrop-blur-sm hover:bg-purple-500/30 text-white rounded-full font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50 max-md:text-sm'
          >
            Admin
          </button>
        )}
        {!user ? (
          <button onClick={openSignIn} className='sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition px-4 py-1 rounded-full font-medium cursor-pointer max-md:text-sm'>Login</button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15} />} onClick={() => { navigate('/my-bookings') }} />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>
      <MenuIcon className='min-md:hidden w-8 h-8 cursor-pointer' onClick={() => { setisOpen(true) }} />
    </div>
  )
}

export default Navbar
