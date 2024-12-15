import { Link } from "react-router-dom"
import commercial from "/images/commercial_1.png"
import commercial1 from "/images/commercial_2.png"
import commercial2 from "/images/commercial_3.png"
import commercial3 from "/images/commercial_4.png"
import FormEmail from "../../components/FormEmail/FormEmail"
import Section3 from "./sections/Section3/Section3"
import Section2 from "./sections/Section2/Section2"
import Section1 from "./sections/Section1/Section1"
const CommercialRealEstatePage = () => {
  const cards = ["покупка", "продажа", "упаковка", "готовые арендные бизнесы"]
  const minititle = [
    {
      title: "От 1 дня до 2х месяцев",
      desc: "Подбор коммерческого помещения"
    },
    {
      title: "От 1 дня до 6 месяцев",
      desc: "Продажа коммерческого помещения"
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
      title: `Проф. съемка 
      объекта`
    },
    {
      id: "3",
      title: `Рекламное 
      продвижение`
    },
    {
      id: "4",
      title: `Переговоры с 
      покупателем`
    },
    {
      id: "5",
      title: `Проверка и подготовка 
      документов`
    },
    {
      id: "6",
      title: `Организация, согласование 
      и сопровождение сделки`
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
      title: `Поиск и подбор`
    },
    {
      id: "2",
      title: `Полная проверка 
      сделки`
    },
    {
      id: "3",
      title: `Полный анализ`
    },
    {
      id: "4",
      title: `Оценка окупаемости 
      и доходности`
    },
    {
      id: "5",
      title: `Согласование 
      условий`
    },
    {
      id: "6",
      title: `Наилучшие 
      условия и цена`
    },
    {
      id: "7",
      title: `Оформление 
      сделки`
    },
    {
      id: "8",
      title: `Передача объекта 
      в управление(по запросу)`
    }
  ]
  return (
    <>
      <div className="container mx-auto mt-[40px]">
        {/* Sub link */}
        <span className="p-[10px] sm:p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[10px] sm:text-[20px] 2xl:text-[24px]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Наши услуги</Link>
          /
          <Link to={'/commercial'}>Коммерческая недвижимость</Link>
        </span>

        <Section1 
          card={cards}
          title={"Коммерческая недвижимость"}
          minititle={minititle}
          image={commercial}
          btnTitle={'Консультация'}
        />

        <Section2 
          choice={choice}
          bg={"bg-[#A2999E] text-[#fff]"}
          title={'Продажа коммерческой недвижимости'}
          subtitle={'Выгодная продажа за короткий срок.'}
          btnTitle={'Продать'}
          image={commercial1}
        />
      </div>
      <Section3 
        title={'Арендный бизнес'}
        desc={`Покупка готового арендного бизнеса, который 
          сразу приносит доход.`}
        choice={choice2}
        btnTitle={'Купить'}
        image1={commercial2}
        image2={commercial3}
      />

      <div className="container mx-auto">
        <FormEmail />
      </div>
    </>
  )
}

export default CommercialRealEstatePage