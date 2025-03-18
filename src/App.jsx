import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footeye from './components/Footeye'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion'
import 'locomotive-scroll/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll with smooth scrolling options
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
      multiplier: 1,
      class: "is-revealed",
      lerp: 0.05, // Linear interpolation, adjust for smoothness
      getDirection: true, // Enable for direction-aware animations
      getSpeed: true,     // Enable for speed-aware animations
    });

    // Refresh scroll on window resize
    const handleResize = () => {
      if (locomotiveScroll) {
        // locomotiveScroll.update();
      }
    };

    window.addEventListener('resize', handleResize);

    // Refresh locomotive scroll on page load
    setTimeout(() => {
      // locomotiveScroll.update();
    }, 500);

    // Clean up locomotive scroll instance
    return () => {
      window.removeEventListener('resize', handleResize);
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full min-h-screen overflow-hidden'
    >
      <div 
        className='w-full select-none min-h-screen bg-zinc-900 text-white'
        ref={scrollRef}
        data-scroll-container
      >
        <Navbar />
        <div data-scroll-section>
          <Landing />
        </div>
        <div data-scroll-section>
          <Marquee />
        </div>
        <div data-scroll-section>
          <About />
        </div>
        <div data-scroll-section>
          <Eyes />
        </div>
        <div data-scroll-section>
          <Feature />
        </div>
        <div data-scroll-section>
          <Cards />
        </div>
        <div data-scroll-section>
          <Footeye />
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </motion.div>
  )
}

export default App