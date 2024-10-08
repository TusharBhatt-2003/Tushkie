import React from 'react'

function Footer() {
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
     <div data-scroll data-scroll-speed="-.7" className=' flex gap-5 w-full h-full bg-black text-white '>
    <div className='w-1/2 h-full flex flex-col justify-between '>
       <div className='heading mt-20 font-["Schabo"] px-20 text-[8vw] leading-none uppercase -mb-10'>
       <h1>EYE-</h1>
       <h1>OPENING</h1>
       </div>
       <h1 className='font-["Ruska"] p-20 text-[1vw] leading-none uppercase -mb-10 font-thin '>TUSHKIE</h1>
    </div>
    <div className='w-1/2'>
    <h1 className='heading mt-20 font-["Schabo"] px-20 text-[8vw] leading-none uppercase -mb-10'>
      presentation
    </h1>
     <div className='dets font-["Neue"] px-20 py-5 flex flex-col gap-1 underline'>
       <div className='socials flex flex-col py-5 gap-1'>
            <h1 className='py-5'>S:</h1>
           <a href='#'>Facebook</a>
           <a href='#'>Linkedin</a>
           <a href='#'>Behance</a>
           <a href='#'>Instagram</a>
           <a href='#'>Twitter</a>
       </div>
       <div className='mid flex justify-between flex-row py-5 gap-1 jus'>
             <div className='left  flex flex-col'>
             <h1 className='py-5'>L:</h1>
             <div className='flex flex-col mb-5'>
             <a href='#'>202-1965 W 4th Ave</a>
             <a href='#'>Vancouver, Canada</a>
             </div>
             <div className=' flex flex-col'>
             <a href='#'>30 Chukarina St</a>
             <a href='#'>Lviv, Ukraine</a>
             </div>
             </div>
             <div className='right'>
             <div className='menu flex flex-col py-5 gap-1'>
            <h1 className='py-5'>S:</h1>
           <a href='#'>Home</a>
           <a href='#'>Services</a>
           <a href='#'>Our Work</a>
           <a href='#'>About</a>
           <a href='#'>Insights</a>
           <a href='#'>Contact us</a>
       </div>
             </div>
       </div>
       <div className='emial flex flex-col py-5 gap-1'>
            <h1 className='py-5'>E:</h1>
           <a href='#'>hello@tuskie.design</a>
       </div>
     </div>
    </div>
  </div></div>
  )
}

export default Footer