import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // تأكد من أنك قمت بإضافة هذه السطر لاستيراد ستايلات الـ Swiper

const Test = () => {
  const swiperRef = useRef(null); // إنشاء Ref للـ Swiper

  const items = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 },
    { name: 'Item 3', price: 300 },
    { name: 'Item 4', price: 400 },
    { name: 'Item 5', price: 500 },
    { name: 'Item 6', price: 600 },
    { name: 'Item 7', price: 700 },
    { name: 'Item 8', price: 800 },
    { name: 'Item 9', price: 900 },
    { name: 'Item 10', price: 1000 },
  ];

  const handleCategoryClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.slides.length - 1);
    }
  };

  return (
    <div>
      <h1 onClick={handleCategoryClick} style={{ cursor: 'pointer', color: 'blue' }}>
        Click to go to the last item
      </h1>

      <Swiper
        ref={swiperRef} // ربط الـ Ref بالـ Swiper
        dir='RTL'
        slidesPerView={2.1}
        spaceBetween={5}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ padding: '10px', border: '1px solid #ddd' }}>
              <h3>{item.name}</h3>
              <p>{item.price} SP</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
