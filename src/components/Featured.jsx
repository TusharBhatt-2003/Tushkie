import { motion } from "framer-motion"
import { useState } from "react"
import { Power4} from "gsap/all"

function Featured() {
    const [isHovering, setHovering] = useState(false);
    const [isHovering2, setHovering2] = useState(false);

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-black pb-20'>
            <h1 className='text-7xl font-["Neue] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'> 
            <div className='cards w-full flex gap-10 mt-10'>
                <div
                      onMouseEnter={() => setHovering(true)}
                     onMouseLeave={() => setHovering(false)}
                     className='cardcontainer relative w-1/2 h-[75vh] '>
                <h1 className='absolute  overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#e0aa15] z-[9] text-8xl leading-none tracking-tight -pb-20 font-[Schabo]'>
                {'AH2'.split('').map((item, index) => (
                    <motion.span
                     initial={{y: "100%"}} 
                     animate={isHovering ? ({y: "0"}) : ({y: "100%"})} 
                     transition={{ease: [0.22, 1, 0.36, 1], delay: index * .1}}
                     className='inline-block translate-y-0 overflow-hidden'>
                     {item}
                     </motion.span>
                    ))}
                </h1>
                    <div className='card rounded-xl w-full h-full overflow-hidden'>
                        <img className='w-full h-full bg-cover'
                             src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png'
                             alt=''>
                             </img>
                    </div>
                </div>
                <div 
                onMouseEnter={() => setHovering2(true)}
                onMouseLeave={() => setHovering2(false)}
                className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='absolute overflow-hidden flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#e0aa15] z-[9] text-8xl leading-none tracking-tight -pb-20 font-[Schabo]'>
                    {'VISE'.split('').map((item, index) => (
                        <motion.span
                     initial={{y: "100%"}} 
                     animate={isHovering2 ? ({y: "0"}) : ({y: "100%"})} 
                     transition={{ease: [0.22, 1, 0.36, 1], delay: index * .1}}
                     className='inline-block translate-y-full overflow-hidden'>
                     {item}
                     </motion.span>
                        ))}
                </h1>
                <div className='card rounded-xl w-full h-full overflow-hidden'>
                        <img className='w-full h-full bg-cover'
                             src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png'
                             alt=''>
                             </img>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Featured