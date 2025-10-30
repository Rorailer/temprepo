import React from 'react'

const Title = ({ text }) => {
  return (
    <div className='flex items-center min-h-40 gap-4 sm:gap-8 w-full'>
      <div className="grow h-px bg-gray-400"></div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center shrink-0'>
        {text}
      </h1>
      <div className="grow h-px bg-gray-400"></div>
    </div>
  )
}

export default Title
