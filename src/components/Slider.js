import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from './item';
const Slider = (props) => {
  return (
    <div>
        <Swiper dir='RTL' slidesPerView={2.2} spaceBetween={2}>
        {props.items?.map((item,itemIndex)=>{return(
    <SwiperSlide key={itemIndex} ><Item item={item}/></SwiperSlide>
)})
}
        </Swiper>
    </div>
  )
}

export default Slider


