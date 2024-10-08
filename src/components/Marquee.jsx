import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scoll-speed=".1" className='w-full pt-10 bg-[#034a07] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-[#ffe19b] text-[#ffe19b] flex justify-center overflow-hidden align-middle whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[20vw] leading-none font-["Ruska"] uppercase font-medium py-5 -mb-9 mr-28'>
        we are Tushkie
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[20vw] leading-none font-["Ruska"] uppercase font-medium py-5 -mb-9 mr-28'>
        we are Tushkie
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[20vw] leading-none font-["Ruska"] uppercase font-medium py-5 -mb-9 mr-28'>
        we are Tushkie
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee