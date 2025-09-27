import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font-500] flex items-center justify-center gap-4 '>
      <div className='border-3 h-24 flex items-center px-10 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
        <Link to={'/works'} className='text-[6vw] mt-3'>Work</Link>
      </div>
      <div className='border-3 h-24 flex items-center px-10 border-white hover:border-[#D3FD50] hover:text-[#D3FD50]  rounded-full uppercase'>
        <Link to={'/agence'} className='text-[6vw] mt-3'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomtext