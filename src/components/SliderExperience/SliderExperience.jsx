
// import './style.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ExperienceItem from "../ExperienceItem/ExperienceItem";
const SliderExperience = () => {
  const text1 = `1.Первая сделка - размен своей квартиры
2.Помощь в обменах и разменах, трудоустройство в агентство
3.За 6 месяцев работы - лучший агент компании
4.Самая большая сделка - 12 квартир в сделке
5.Уход из агентства и открытие своего собственного.`
  const text2 = `1.Покупка квартиры под офис.
2.Строительство 2-х собственных офисов
3.Открыла отдел через расселение коммунальных квартир
4.Создала пассивный доход из коммерческих помещений
5.Появилась мечта работать в Москве`
  const text3 = `1.Устройство в АН риелтором
2.Назначена руководителем отдела
3.Через год жизни в Москве куплена своя первая квартира
4.2014 год – генеральный директор АН
5.2018 год уход с руководящей должности для саморазвития`
  const text4 = `1.РГУ Косыгина оформление перепланировок и реконструкций
2.Как частный брокер занимала лидирующие позиции
3.Приобретение и наращивание капитала в своем арсенале 
4.Приглашения на ТВ, подкасты, написание книги 
5.Основание FIAN - финансово - инвестиционного агентства`
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        className="mySwiper"
      >
        <SwiperSlide>
          <ExperienceItem 
            year={'1989 - 2000'}
            text={text1}
            start={0}
            end={0}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceItem 
            year={'2000-2010'}
            text={text2}
            start={0}
            end={0}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceItem 
            year={'2010-2020'}
            text={text3}
            start={0}
            end={0}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ExperienceItem 
            year={'2020-2024'}
            text={text4}
            start={0}
            end={0}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderExperience

