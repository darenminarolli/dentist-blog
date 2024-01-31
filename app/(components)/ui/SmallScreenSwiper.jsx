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
            className=" h-[350px] w-[220px] self-center"
        >
            {cardData.map((card, index) => (
                <SwiperSlide key={index} className=' rounded-md'>
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
