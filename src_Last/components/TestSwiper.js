import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductSlider = () => {
  return (
    <Swiper spaceBetween={2} slidesPerView={5.2} dir='RTL'   centeredSlides={false} >
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 1</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 2</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 3</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 1</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 2</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 3</div></SwiperSlide> 
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 1</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 2</div></SwiperSlide>
      <SwiperSlide><div className="bg-gray-300 p-4 rounded-lg">منتج 3</div></SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg cursor-pointer"
          onClick={() => alert("فتح صفحة المزيد")}>
          See More
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
