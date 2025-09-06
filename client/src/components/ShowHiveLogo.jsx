import React from 'react'

const ShowHiveLogo = ({ className = "w-48 h-16" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Text Only */}
      <div className="flex items-center">
        <span className="text-3xl md:text-4xl font-bold">
          <span className="text-purple-500">S</span>
          <span className="text-white">how</span>
          <span className="text-purple-500">H</span>
          <span className="text-white">ive</span>
        </span>
      </div>
    </div>
  )
}

export default ShowHiveLogo
