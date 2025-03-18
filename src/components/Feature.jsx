import React from 'react'
import { motion } from "framer-motion";

function Feature() {
  return (
      <motion.div 
        initial={{opacity: 0}} 
        whileInView={{opacity: 1}} 
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className='w-full py-20'
      >
          <motion.div 
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className='w-full px-20 border-b-2 border-zinc-600 pb-16'
          >
              <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'> Featured </h1>
          </motion.div>
          <div className='px-20'>
              <div className='cards w-full flex gap-10 mt-10'>
                  <motion.div 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    viewport={{once: true}}
                    className='cardcontainer relative w-1/2 h-[75vh]'
                  >
                      {/* FYDE Card */}
                      <motion.div 
                        whileHover={{y: -5, scale: 1.02}}
                        transition={{duration: 0.3}}
                        className='card rounded-xl w-full h-full overflow-hidden group relative'
                      >
                          {/* Image */}
                          <img 
                            className='w-full h-full object-cover bg-cover transition-all duration-500 group-hover:scale-105' 
                            src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' 
                            alt='Fyde project'
                          />
                          
                          {/* Overlay that appears on hover */}
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                          >
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                              className='text-white text-center'
                            >
                              <h2 className='text-2xl font-bold mb-2'>FYDE</h2>
                              <p className='text-sm'>A revolutionary fintech solution</p>
                              <p className='text-xs mt-4 text-white/70'>View Project</p>
                            </motion.div>
                          </motion.div>
                      </motion.div>

                      {/* The large text on the side */}
                      <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl pointer-events-none'>
                        {"".split('').map((item, index) => (
                          <motion.span 
                            key={index} 
                            initial={{y: 100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.4 + index * 0.1}}
                            viewport={{once: true}}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </h1>
                  </motion.div>

                  <motion.div 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                    viewport={{once: true}}
                    className='cardcontainer relative w-1/2 h-[75vh]'
                  >
                      {/* VISE Card */}
                      <motion.div 
                        whileHover={{y: -5, scale: 1.02}}
                        transition={{duration: 0.3}}
                        className='card rounded-xl w-full h-full overflow-hidden group relative'
                      >
                          {/* Image */}
                          <img 
                            className='w-full h-full object-cover bg-cover transition-all duration-500 group-hover:scale-105' 
                            src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' 
                            alt='Vise project'
                          />
                          
                          {/* Overlay that appears on hover */}
                          <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                          >
                            <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                              className='text-white text-center'
                            >
                              <h2 className='text-2xl font-bold mb-2'>VISE</h2>
                              <p className='text-sm'>Premium brand identity</p>
                              <p className='text-xs mt-4 text-white/70'>View Project</p>
                            </motion.div>
                          </motion.div>
                      </motion.div>

                      {/* The large text on the side */}
                      <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl pointer-events-none'>
                          {"".split('').map((item, index) => (
                            <motion.span 
                              key={index} 
                              initial={{y: 100, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              transition={{duration: 0.5, delay: 0.4 + index * 0.1}}
                              viewport={{once: true}}
                            >
                              {item}
                            </motion.span>
                          ))}
                      </h1>
                  </motion.div>
              </div>
          </div>
      </motion.div>
  )
}

export default Feature