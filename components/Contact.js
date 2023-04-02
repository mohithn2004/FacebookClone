
import React from 'react'

function Contact({src, name}) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <img  
        alt=""
        className = "rounded-full h-8 w-8"
        src={src}
        />
        <p className=''>{name}</p>
        <div className='absolute bottom-2 left-5 bg-green-400 h-3 w-3 rounded-full animate-bounce ' />
    </div>
  )
}

export default Contact