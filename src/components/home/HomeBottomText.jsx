import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font-500] text-white flex items-center justify-center gap-4 '>
      <p className='absolute lg:w-80 w-72 lg:right-2 right-3 lg:bottom-36 bottom-30 text-md font-[font-300] leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
      <div className='border-3  lg:h-24 flex items-center  px-4 lg:px-10 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
        <Link to={'/works'} className='text-[7vw] lg:text-[6vw]  lg:mt-3'>Work</Link>
      </div>
      <div className='border-3  lg:h-24 flex items-center  px-4 lg:px-10 border-white hover:border-[#D3FD50] hover:text-[#D3FD50]  rounded-full uppercase'>
        <Link to={'/agence'} className='text-[7vw] lg:text-[6vw] lg:mt-3'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomtext