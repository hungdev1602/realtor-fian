/* eslint-disable no-unused-vars */
import award1 from "/images/award_1.png"
import award2 from "/images/award_2.png"
import award3 from "/images/award_3.png"
import award4 from "/images/award_4.png"
import award5 from "/images/award_5.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';

const SliderAwards = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (image) => {
    setActiveImage(image);
    setIsFullScreen(true);
  };

  const handleFullScreenClose = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {isFullScreen && (
        <div className="fixed top-0 left-0 z-[9999] w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <img
            src={activeImage}
            alt=""
            className="w-full h-full object-contain"
            onClick={handleFullScreenClose}
          />
        </div>
      )}
      <Swiper
        slidesPerView={3.4}
        spaceBetween={5}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={award1} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain" onClick={() => handleClick(award1)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={award2} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain" onClick={() => handleClick(award2)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={award3} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain" onClick={() => handleClick(award3)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={award4} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain" onClick={() => handleClick(award4)}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={award5} alt="" className="w-[132px] h-[53px] sm:w-[220px] sm:h-[80px] 2xl:w-[250px] 2xl:h-[100px] object-contain" onClick={() => handleClick(award5)}/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderAwards


