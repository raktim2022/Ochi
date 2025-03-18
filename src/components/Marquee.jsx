import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
      <motion.div 
        initial={{opacity: 0}} 
        whileInView={{opacity: 1}} 
        transition={{duration: 1}}
        viewport={{once: true}}
        className='w-full py-20 rounded-3xl bg-[#004D43] overflow-hidden'
      >
          <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap'>
              <motion.h1 
                initial={{ x: 0 }} 
                animate={{ x: "-100%" }} 
                transition={{ 
                  ease:"linear", 
                  repeat:Infinity, 
                  duration:20,
                }} 
                className='text-[24vw] font-semibold leading-none uppercase pt-10 -mt-20 pr-20'
              >
                We are ochi
              </motion.h1>
              <motion.h1 
                initial={{ x: 0 }} 
                animate={{ x: "-100%" }} 
                transition={{ 
                  ease:"linear", 
                  repeat:Infinity, 
                  duration:20,
                }} 
                className='text-[24vw] font-semibold leading-none uppercase pt-10 -mt-20 pr-20'
              >
                We are ochi
              </motion.h1>
          </div>
      </motion.div>
  )
}

export default Marquee