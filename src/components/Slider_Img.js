import { Pagination } from 'swiper/modules';
import logo from '../Assests/item.png';
import mobile from '../Assests/mobile.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function SliderImg  (){
  return (
    <div className='Slider_Img'>
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={logo} width="100%" className='imgs' /></SwiperSlide>
      <SwiperSlide><img src={mobile} width="100%" className='imgs' /></SwiperSlide>
      <SwiperSlide><img src={logo} width="100%" className='imgs'/></SwiperSlide>
      <SwiperSlide><img src={mobile} width="100%" className='imgs'/></SwiperSlide>
    </Swiper></div>
  );
};
export default SliderImg;