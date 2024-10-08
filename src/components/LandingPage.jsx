import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion'
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1'>
        <div className='textstructure mt-40 px-20'>
        {['We create', 'eye-opening', 'presentations'].map((item, index) => {
           return   <div className='masker'>
                      <div className='w-fit flex'>
                      {index == 1 && (
                        <motion.div 
                        initial={{width: 0}}
                        animate={{width: "9vw"}}
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                         className='mr-[1vw] w-[8vw] rounded-md h-[5.5vw] relative -top-[0.2vw] bg-red-950'>
                         </motion.div>)}
                         <h1 className='uppercase text-[7vw] leading-[7vw] font-["Schabo"] font-medium '>
                           {item}
                         </h1>
                       </div>
                    </div>
        })}
          
        </div>
        <div className='border-t-[1px] font-["Neue"] border-black mt-20 flex justify-between items-center py-5 px-20'>
            {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none capitalize'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-black rounded-full font-medium text-md uppercase'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-black rounded-full'>
                  <span className='rotate-[45deg]'>
                  <FaArrowUpLong />
                  </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage