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
        slidesPerView={(window.innerWidth > 576) ? 5 : 3}
        spaceBetween={30}
        loop={true} //important for autoplay
        speed={2000} //important for autoplay
        autoplay={{ //important for autoplay
          // enabled: true,
          delay: 0,
          disableOnInteraction: false
        }}
        modules={[Autoplay]} //important for autoplay
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pepsi} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider

