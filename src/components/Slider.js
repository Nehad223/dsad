import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // تأكد من استيراد استايلات Swiper
import Item from './item';
import { Link } from 'react-router-dom';

const Slider = forwardRef((props, ref) => {
  const swiperRef = useRef(null);

  // استدعاء الـ ref ليتمكن الكود في صفحة `Doctors_Students` من التحكم بالـ Slider
  useImperativeHandle(ref, () => ({
    scrollToLastSlide: () => {
      if (swiperRef.current && props.items?.length ==10) {
        const swiperInstance = swiperRef.current.swiper;
        const totalSlides = swiperInstance.slides.length;
        swiperInstance.slideTo(totalSlides - 1); // التمرير إلى آخر شريحة
      }
    }
  }));

  return (
    <div id={props.id}>
      <Swiper
        ref={swiperRef}
        dir="RTL"
        slidesPerView={2.1}
        spaceBetween={5}
      >
        {props.items?.map((item, itemIndex) => (
          <SwiperSlide key={itemIndex}>
            <Item item={item} />
          </SwiperSlide>
        ))}
        {props.items?.length === 10 && (
          <SwiperSlide>
            <Link className="See_More" to={`catg/${props.catgId}`}>
              See More <span className="arrow">←</span>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
});

export default Slider;
