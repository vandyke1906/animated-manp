import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, EffectCoverflow, FreeMode } from 'swiper/modules';
import 'swiper/css';
import "../swiper.css";


// if you want to use array
const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const Carousel = () => {
  return (
    <div className="main-swiper">
      <Swiper
        modules={[Autoplay, Parallax, EffectCoverflow, FreeMode]}
        effect={"coverflow"}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {/* using array */}
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;