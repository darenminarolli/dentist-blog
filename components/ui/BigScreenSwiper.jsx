'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const BigScreenSwiper = () => {
  return (
    <div className='hidden'>

    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper m-4 rounded-md hidden"
  >
    <SwiperSlide>
      <img className='h-96 w-full ' src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-96 w-full ' src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-96 w-full ' src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-96 w-full ' src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
  </Swiper>
    </div>
  )
}

export default BigScreenSwiper
