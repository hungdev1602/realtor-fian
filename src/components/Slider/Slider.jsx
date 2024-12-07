import logo from "/images/logo.png"
import pepsi from "/images/pepsi.png"
import './style.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true} //important for autoplay
        speed={5000} //important for autoplay
        autoplay={{ //important for autoplay
          // enabled: true,
          delay: 1,
          disableOnInteraction: false
        }}
        modules={[Autoplay]} //important for autoplay
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider


