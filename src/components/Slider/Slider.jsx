import partner1 from "/images/partner_1.png"
import partner2 from "/images/partner_2.png"
import partner3 from "/images/partner_3.png"
import partner4 from "/images/partner_4.png"
import partner5 from "/images/partner_5.png"
import partner6 from "/images/partner_6.png"
import partner7 from "/images/partner_7.png"
import partner8 from "/images/partner_8.png"
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
        slidesPerView={(window.innerWidth > 576) ? 6 : 3}
        spaceBetween={10}
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
          <img src={partner1} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner2} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner3} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner4} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner5} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner6} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner7} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner8} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain"/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider

