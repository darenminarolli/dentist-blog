'use client'
import { useEffect, useState } from "react"
import BigScreenSwiper from "./ui/BigScreenSwiper"
import SmallScreenSwiper from "./ui/SmallScreenSwiper"


const Works = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
 
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };


  window.addEventListener('resize', handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <section id="punet" className="flex flex-col ">
      <h1 className='header-text underline self-center md:self-start mb-4'>Punet e mia:</h1>
      {
        screenWidth > 400?

        <BigScreenSwiper/>:

//  <div className='m-0 p-0'>

   <SmallScreenSwiper/>
//  </div>
      }
      <>
     
    </>

 </section>
  )
}

export default Works
