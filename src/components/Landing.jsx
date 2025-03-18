import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import img1 from "../assets/content-image01.jpg";
import { motion } from "framer-motion";

function Landing() {
  return (
      <div className=' w-full h-screen bg-zinc-900 font-["Founders Grotesk"] pt-1'>
          <div className='textstructure mt-40 px-20'>
              <div className='masker overflow-hidden'>
                  <motion.h1 
                    initial={{y: 100, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    className='uppercase leading-[6.5vw] tracking-tighter font-semibold text-8xl'
                  >
                    We create
                  </motion.h1>
              </div>
              <div className='masker flex justify-start overflow-hidden'>
                  <motion.div 
                    initial={{y: 100, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 0.8, delay: 0.2, ease: "easeInOut"}}
                  >
                    <img src={img1} alt='img' className='w-[120px] mr-2 rounded-md h-[75px] relative top-3 object-cover'/>
                  </motion.div>
                  <motion.h1 
                    initial={{y: 100, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 0.8, delay: 0.2, ease: "easeInOut"}}
                    className='uppercase leading-[6.5vw] tracking-tighter font-semibold text-8xl'
                  >
                      eye-opening
                  </motion.h1>
              </div>
              <div className='masker overflow-hidden'>
                  <motion.h1 
                    initial={{y: 100, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 0.8, delay: 0.4, ease: "easeInOut"}}
                    className='uppercase leading-[6.5vw] tracking-tighter font-semibold text-8xl'
                  >
                      presentations
                  </motion.h1>
              </div>
          </div>
          <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 1, delay: 1}}
            className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-10'
          >
              {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                  <motion.p 
                    key={index} 
                    initial={{y: 20, opacity: 0}} 
                    animate={{y: 0, opacity: 1}} 
                    transition={{duration: 0.5, delay: 1 + index * 0.2}}
                    className='text-md font-light tracking-tight leading-none'
                  >
                      {item}
                  </motion.p>
              )}
            <div className='start flex items-center gap-5 mt-1'>
                <motion.div 
                  whileHover={{backgroundColor: '#ffffff20', scale: 1.05}} 
                  transition={{duration: 0.3}}
                  className='px-2 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase cursor-pointer'
                >
                    Start The Project
                </motion.div>
                <motion.div 
                  whileHover={{scale: 1.1, backgroundColor: '#ffffff20'}} 
                  whileTap={{scale: 0.95}}
                  transition={{duration: 0.3}}
                  className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full cursor-pointer'
                >
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong/>
                    </span>
                </motion.div>
            </div>
          </motion.div>
    </div>
  )
}

export default Landing