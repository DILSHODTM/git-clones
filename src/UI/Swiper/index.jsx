import React,{useState , useRef} from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/images/slides/slide-1.webp";
import Slide2 from "../../assets/images/slides/slide-2.webp";
import Slide3 from "../../assets/images/slides/slide-3.jpg";
import "./App.scss";

const index = () => {
  return (
    <>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={Slide1} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt=""   /></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt=""   /></SwiperSlide>
     
      </Swiper>
    </>
  )
}

export default index