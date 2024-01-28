'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
import { cardData } from '@/store/data';
const SmallScreenSwiper = () => {
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <img
            src={card.image} 
            alt={`Card ${index + 1}`}
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default SmallScreenSwiper
