import React, { useEffect, useState } from 'react'
import img3 from '../assets/img3.jpg'
function Eyes() {
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
      <div className='eye w-full h-screen overflow-hidden'>
          <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
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
          </div>
    </div>
  )
}

export default Eyes