import React from 'react'
import img2 from "../assets/img2.jpg"
import { motion } from "framer-motion"

function About() {
  return (
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'
      >
          <motion.h1 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className='font-["Neue Montreal"] text-[3.7vw] text-black leading-[4.5vw] tracking-tight'
          >
              Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
          </motion.h1>
          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className='font-["Neue Montreal"] w-full border-t-[1px] text-lg mt-20 border-[#5f6b34] flex flex-row justify-evenly items-start pt-5 text-black'
          >
              <div className='w-[80vw]'>
                  What you can expect:
              </div>
              <div className='flex flex-col gap-10 px-44'>
                  <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.3}}
                    viewport={{once: true}}
                  >
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                  </motion.div>
                  <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.4}}
                    viewport={{once: true}}
                  >
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                  </motion.div>
              </div>
              <div className='flex flex-col mt-12'>
                  {["S ", "Linkdin ", "Instagram ", "Behance","Facebook"].map((items, index) => (
                    <motion.a 
                      key={index} 
                      initial={{y: 20, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{duration: 0.5, delay: 0.5 + index * 0.1}}
                      whileHover={{x: 5, color: "#000000"}}
                      viewport={{once: true}}
                      className={`capitalize underline ${index===1 && "mt-8"}`}
                    >
                      {items}
                    </motion.a>
                  ))}
              </div>
          </motion.div>
          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.4}}
            viewport={{once: true}}
            className='font-["Neue Montreal"] w-full border-t-[1px] text-lg mt-20 border-[#5f6b34] flex flex-row justify-evenly items-start pt-5 text-black'
          >
              <div className='w-1/2'>
                  <motion.h1
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.5}}
                    viewport={{once: true}}
                    className='text-7xl'
                  >
                    Our approach:
                  </motion.h1>
                  <motion.button
                    whileHover={{scale: 1.05, backgroundColor: "#111"}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.3}}
                    className='flex gap-8 items-center mt-3 px-10 py-3 bg-zinc-900 rounded-full text-white'
                  >
                      Read More
                      <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                  </motion.button>
              </div>
              <motion.div
                initial={{y: 50, opacity: 0, scale: 0.9}}
                whileInView={{y: 0, opacity: 1, scale: 1}}
                transition={{duration: 0.8, delay: 0.5}}
                viewport={{once: true}}
                className='w-1/2 rounded-3xl h-[80vh] overflow-hidden'
              >
                  <img src={img2} alt='img2' className='object-cover h-[80vh]' />
              </motion.div>
          </motion.div>
      </motion.div>
  )
}

export default About