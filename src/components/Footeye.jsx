import React, { useEffect, useState } from 'react'

function Footeye() {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180)
        })
    })
  return (
    <div className='eye w-full h-full overflow-hidden bg-[#CDEA68]'>
          <div className='relative w-full h-full bg-cover bg-center'>
              <div className='w-full text-center mt-[15vh]'>
              
                  <h1 className='text-[16vw] font-bold leading-none tracking-tighter text-zinc-950'>READY<br />TO START<br />THE PROJECT?</h1>
        
              </div>
              <div className=' flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                  <div className=' flex justify-center items-center w-[15vw] rounded-full h-[15vw] bg-zinc-100'>
                  <div className='relative w-1/2 rounded-full h-1/2 bg-black'>
                          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                              <div className='w-4 m-1 rounded-full h-4 bg-zinc-100'>
                    </div>
                  </div>
                          
                    </div>
                  </div>
                  <div className='flex justify-center items-center w-[15vw] rounded-full h-[15vw] bg-zinc-100'>
                      <div className='relative w-1/2 rounded-full h-1/2 bg-black'>
                          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                              <div className='w-4 m-1 rounded-full h-4 bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className='w-full flex flex-col justify-center items-center mt-6 mb-10'>
                  <button className='flex uppercase gap-8 items-center mt-3 px-10 py-3 bg-zinc-900 rounded-full text-white'>
                      Start the project
                      <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                  </button>
                  <p className='text-l mt-3 uppercase font-thin text-black'>or</p>
                  <button className='flex uppercase gap-8 items-center mt-3 px-10 py-3 border-[1px] border-black rounded-full text-black'>
                      Start the project
                      <div className='w-2 h-2 bg-zinc-900 rounded-full'></div>
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Footeye