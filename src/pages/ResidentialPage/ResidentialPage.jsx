import { Link } from "react-router-dom"
import ServiceInfoType1 from "../../components/ServiceInfo/ServiceInfoType1/ServiceInfoType1"
import ServiceDetailType1 from "../../components/ServiceDetail/ServiceDetailType1/ServiceDetailType1"
import residential from "/images/residential_1.png"
import residential1 from "/images/residential_2.png"
import residential2 from "/images/residential_3.png"
import residential3 from "/images/residential_4.png"
import Section3 from "./sections/Section3/Section3"
import ServiceDetailType3 from "../../components/ServiceDetail/ServiceDetailType3/ServiceDetailType3"
import ServiceDetailType2 from "../../components/ServiceDetail/ServiceDetailType2/ServiceDetailType2"
import FormEmail from "../../components/FormEmail/FormEmail"
const ResidentialPage = () => {
  const cards = ["новостройки", "вторичный рынок"]
  const minititle = [
    {
      title: "От 1 дня до 2х месяцев",
      desc: "Подбор квартиры"
    },
    {
      title: "От 1 дня до 6 месяцев",
      desc: "Продажа квартиры"
    }
  ]
  const choice = [
    {
      id: "1",
      title: `Оценка 
      объекта`
    },
    {
      id: "2",
      title: `Рекомендации 
      по подготовке`
    },
    {
      id: "3",
      title: `Проф. съемка 
      объекта`
    },
    {
      id: "4",
      title: `Рекламное 
      продвижение`
    },
    {
      id: "5",
      title: `Переговоры с 
      покупателем`
    },
    {
      id: "6",
      title: `Проверка и подготовка 
      документов`
    },
    {
      id: "7",
      title: `Передача 
      объекта`
    },
  ]
  const choice2 = [
    {
      id: "1",
      title: `Анализ задач`
    },
    {
      id: "2",
      title: `Профессиональная помощь 
      ипотечного брокера`
    },
    {
      id: "3",
      title: `Подбор безрисковых 
      объектов`
    },
    {
      id: "4",
      title: `Рекомендация по 
      подготовке`
    },
    {
      id: "5",
      title: `Юридическая и 
      техническая проверка`
    },
    {
      id: "6",
      title: `Переговоры с 
      продавцом`
    },
    {
      id: "7",
      title: `Согласование и 
      организация сделки`
    }
  ]
  const choice3 = [
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
      <div className="container mx-auto mt-[40px]">
        {/* Sub link */}
        <span className="p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[24px]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Наши услуги</Link>
          /
          <Link to={'/residential'}>Жилая недвижимость</Link>
        </span>

        <ServiceInfoType1 
          card={cards}
          title={"Жилая недвижимость"}
          subtitle={'Услуги по покупке и продажи жилой недвижимости'}
          minititle={minititle}
          image={residential}
          btnTitle={'Консультация'}
        />

        <ServiceDetailType1 
          choice={choice}
          bg={"bg-[#E8E7E7] text-[#333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
          title={'Продажа жилой недвижимости'}
          subtitle={`Продажа вашей квартиры быстро и
            на максимально выгодных условиях.`}
          btnTitle={'Продать'}
          image={residential1}
        />

        <Section3 />
        
        <ServiceDetailType3 
          title={'Покупка квартиры на вторичном рынке'}
          desc={`Гарантия безопасности и комфорта, никаких забот, 
            только выгода. Найдем именно ваше жилье`}
          choice={choice2}
          btnTitle={'Купить'}
          image={residential2}
        />

        <ServiceDetailType2 
          title={'Арендный бизнес'}
          desc={`Покупка готового арендного бизнеса, который 
            сразу приносит доход.`}
          choice={choice3}
          btnTitle={'Купить'}
          image={residential3}
        />

        <FormEmail />
      </div>
    </>
  )
}

export default ResidentialPage