import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
