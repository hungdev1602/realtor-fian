// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const SliderBlock = () => {
  const choice = [
    {
      id: "1",
      title: `Анализ задач`
    },
    {
      id: "2",
      title: `Определение параметров 
      недвижимости`
    },
    {
      id: "3",
      title: `Подбор лучших 
      предложений`
    },
    {
      id: "4",
      title: `Проверка 
      застройщика`
    },
    {
      id: "5",
      title: `Предоставляем 
      скидки и бонусы`
    },
    {
      id: "6",
      title: `Помощь ипотечного 
      брокера`
    },
    {
      id: "7",
      title: `Согласование и 
      сопровождение сделки`
    }
  ]
  return (
    <>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={10}
        className="mySwiper"
        height={100}
      >
        <SwiperSlide>
          <div 
            className={" 2xl:w-[170px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff] mb-[15px]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[310px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[190px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[190px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[190px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div 
            className={" 2xl:w-[190px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
          >
            <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
            <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderBlock

