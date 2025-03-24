import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // تأكد من استيراد استايلات Swiper
import Item from './item';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Slider = (props) => {
  const navigate=useNavigate();
  const Go_To_Catg=()=>{
      navigate(`catg/${props.catgId}/${props.doctor_student}`,
        {state:{name:props.catgName,description:props.catgDescription}});}

  return (
    <div id={props.id}>
      <Swiper
        dir="RTL"
        slidesPerView={2.1}
        spaceBetween={5}
      >
        {props.items?.map((item, itemIndex) => (
          <SwiperSlide key={itemIndex}>
            <Item item={item} />
          </SwiperSlide>
        ))}
       
          <SwiperSlide>
            <div className="See_More" onClick={Go_To_Catg}>
              See More <span className="arrow">←</span>
            </div>
          </SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Slider;
