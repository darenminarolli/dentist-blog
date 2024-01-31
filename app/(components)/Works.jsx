'use client'
import { useEffect, useState } from "react"
import BigScreenSwiper from "./ui/BigScreenSwiper"
import SmallScreenSwiper from "./ui/SmallScreenSwiper"


const Works = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, []);

  return (
    <section id="punet" className="flex flex-col ">
      <h1 className='header-text underline self-center md:self-start mb-4'>Punet e mia:</h1>
      {
        screenWidth > 400 ?

          <BigScreenSwiper /> :

          <SmallScreenSwiper />
      }
    </section>
  )
}

export default Works
