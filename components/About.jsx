import React from 'react'
import Button from './ui/Button'

const About = () => {
  return (
    <article id='rreth-meje' className='w-full flex flex-col md:flex-row flex-wrap justify-between gap-5 md:gap-20'>
      <img className=' w-full md:w-[400px] h-[400px] md:h-auto  rounded-md shadow-2xl' src="https://burst.shopifycdn.com/photos/male-dentist.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="profile-photo" />
      <div className='w-full md:w-[500px] flex flex-col flex-wrap'>
        <h1 className='self-center mb-4 header-text'>Rreth meje</h1>
        <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti laudantium vel, suscipit pariatur asperiores laboriosam, consequuntur necessitatibus iusto maiores quae sapiente et aspernatur placeat, voluptatem molestiae voluptatibus in similique?
          Quisquam ab pariatur porro ratione vitae, esse illo rerum odit ut aliquam repellat velit animi iste natus aspernatur sint obcaecati fugiat amet voluptate corrupti itaque! Quisquam repellat ut reiciendis quia!</p>

        <Button text='Flasim?!' style='self-center py-2 px-4 my-4' />
      </div>

      <div className='w-full md:w-fit flex flex-col flex-wrap'>
        <h1 className='self-start header-text'>Sherbime dentare,</h1>
        <h1 className='self-start mb-4 header-text'>nga ekspert te fushes!</h1>

        <div className="card_about mt-6  rounded-md  text-black bg-slate-100">
          <div className="card_container">
            <h1 className="card_header">Ekperienc</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="card_container">
            <h1 className="card_header">Cmimet me te mira</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="card_container">
            <h1 className="card_header">Cmimet me te mira</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="card_container">
            <h1 className="card_header">Profesionalizem</h1>
            <div className="small_card ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>

        <Button text='Lere nje takim!' style='self-center py-2 px-4 mt-4' />
      </div>
      <img className=' w-full md:w-[306px] h-[400px] md:h-[332px] self-end rounded-md shadow-2xl' src="https://www.mainlinefamilydentistry.com/wp-content/uploads/2022/03/dental-service-1024x683.jpg" alt="profile-photo" />
      

    </article>
  )
}

export default About
