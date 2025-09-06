import { Link } from 'react-router-dom'
import ShowHiveLogo from './ShowHiveLogo'

const AdminNavbar = () => {
  return (
    <div  className='flex items-center px-16 md:px-12 h-18 border border-b border-gray-300/30'>
      <Link to='/'>
      <ShowHiveLogo className="w-36 h-12" />
      </Link>
    </div>
  )
}

export default AdminNavbar
