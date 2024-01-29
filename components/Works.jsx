'use client'
import { useEffect, useState } from "react"
import BigScreenSwiper from "./ui/BigScreenSwiper"
import SmallScreenSwiper from "./ui/SmallScreenSwiper"


const Works = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Check if window is defined before adding event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      // Check if window is defined before removing event listener
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); 

  return (
    <section id="punet" className="flex flex-col ">
      <h1 className='header-text underline self-center md:self-start mb-4'>Punet e mia:</h1>
      {
        screenWidth > 400 ?

          <BigScreenSwiper /> :

          //  <div className='m-0 p-0'>

          <SmallScreenSwiper />
        //  </div>
      }
      <>

      </>

    </section>
  )
}

export default Works
