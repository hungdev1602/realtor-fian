import { Link } from "react-router-dom"
import residential from "/images/residential_1.png"
import residential1 from "/images/residential_2.png"
import residential2 from "/images/residential_3.png"
import residential3 from "/images/residential_4.png"
import Section3 from "./sections/Section3/Section3"
import FormEmail from "../../components/FormEmail/FormEmail"
import Section2 from "./sections/Section2/Section2"
import Section4 from "./sections/Section4/Section4"
import Section5 from "./sections/Section5/Section5"
import Section1 from "./sections/Section1/Section1"
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
        <span className="p-[10px] sm:p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[10px] sm:text-[24px] bg-[#fff]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Наши услуги</Link>
          /
          <Link to={'/residential'}>Жилая недвижимость</Link>
        </span>

        <Section1 
          card={cards}
          title={"Жилая недвижимость"}
          subtitle={'Услуги по покупке и продажи жилой недвижимости'}
          minititle={minititle}
          image={residential}
          btnTitle={'Консультация'}
        />

        <Section2 
          choice={choice}
          bg={"bg-[#E8E7E7] text-[#333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
          title={'Продажа жилой недвижимости'}
          subtitle={`Продажа вашей квартиры быстро и
            на максимально выгодных условиях.`}
          btnTitle={'Продать'}
          image={residential1}
        />

        <Section3 />
        
        <Section4 
          title={'Покупка квартиры на вторичном рынке'}
          desc={`Гарантия безопасности и комфорта, никаких забот, 
            только выгода. Найдем именно ваше жилье`}
          choice={choice2}
          btnTitle={'Купить'}
          image={residential2}
        />
      </div>
      <Section5 
        title={'Квартиры в новостройке'}
        desc={`Сделаем покупку квартиры комфортной и выгодной. 
          Ваша недвижимость принесет вам лучшую жизнь.`}
        choice={choice3}
        btnTitle={'Купить'}
        image={residential3}
      />
      <div className="container mx-auto">
        <FormEmail />
      </div>
    </>
  )
}

export default ResidentialPage