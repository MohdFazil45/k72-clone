import React from 'react'

const Footer = () => {
  const currentTime = new Date()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className='flex flex-col'>
        <div className="w-full flex justify-between lg:h-96 h-48 bg-black">
            <div className="flex w-full h-1/2 items-center justify-between lg:p-2 p-4">
                <div className="flex gap-3 ">

                    <div className="lg:text-6xl text-xl text-white border-2 border-white rounded-full lg:px-6 px-2 lg:py-1 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer">FG</div>

                    <div className="lg:text-6xl text-xl text-white border-2 border-white rounded-full lg:px-6 px-2 lg:py-1 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer">IG</div>

                    <div className="lg:text-6xl text-xl text-white border-2 border-white rounded-full lg:px-6 px-2 lg:py-1 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer">IN</div>

                    <div className="lg:text-6xl text-xl  text-white border-2 border-white rounded-full lg:px-6 px-2 lg:py-1 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer">BE</div>

                </div>
                <div>

                <div className="lg:text-6xl text-xl text-white border-2 border-white rounded-full lg:px-6 px-2 lg:py-1 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] cursor-pointer">Contact</div>

                </div>
            </div>
        </div>
        <div className="h-2/3 w-full bg-black p-4 flex lg:flex-row flex-col items-center justify-between gap-4">
            <div className='lg:text-xl text-md text-white'>
              🌐 Montreal_ <span className=' text-lg '>{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="flex gap-8">
              <div className='hover:text-[#D3FD50]  cursor-pointer uppercase text-white'>privacy policy</div>
              <div className='hover:text-[#D3FD50]  cursor-pointer uppercase text-white'>privacy notice</div>
              <div className='hover:text-[#D3FD50]  cursor-pointer uppercase text-white'>ethics report</div>
              <div className='hover:text-[#D3FD50]  cursor-pointer uppercase text-white'>consent choices</div>
            </div>
            <div >
              <a className='hover:text-[#D3FD50] hover:underline cursor-pointer uppercase text-white'
                  onClick={scrollToTop}
                  href="/">back to top</a>
            </div>t
        </div>
    </div>
  )
}

export default Footer