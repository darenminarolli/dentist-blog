'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { cardData } from '@/store/data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const BigScreenSwiper = () => {
  return (
<div>
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className=" m-4 rounded-md w-[1050px] h-[450px] shadow-md "
  >
         {cardData.map((card, index) => (
                    <SwiperSlide key={index} >
                        <img
                            src={card.image}
                            alt={`Card ${index + 1}`}
                            className="object-cover h-full w-full"
                        />
                    </SwiperSlide>
                ))}
  </Swiper>
</div>

  )
}

export default BigScreenSwiper
