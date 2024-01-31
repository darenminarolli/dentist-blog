import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section id='sherbimet' className='w-full h-fit bg-[#CCDDE4] flex flex-col md:flex-row gap-5 md:my-12 justify-between shadow-md rounded-md p-4'>
      <div className='p-4 bg-slate-200 border-none shadow-md  rounded-md'>
    <h2 className=' text-slate-900 text-2xl font-extrabold  text-wrap'>Gjithcka qe ju nevojitet ne nje vend!</h2>
    <img className='mix-blend-multiply' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1oVM7EnpnbgPojO9SPGKefD0FLr14h-s8Q&usqp=CAU" alt="cartoon" />
    </div>
      <div className='flex flex-wrap gap-4  mr-0 self-end items-center'>
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
      </div>
    </section>
  )
}

export default Services
