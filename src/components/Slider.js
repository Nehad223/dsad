import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item";
import { Link } from "react-router-dom";

const Slider = (props) => {
  return (
    <div>
      <Swiper dir="RTL" slidesPerView={2.1} spaceBetween={4}>
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
};

export default Slider;
