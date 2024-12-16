import { Link } from "react-router-dom"
import redevelopment from "/images/redevelopment_1.png" 
import redevelopment1 from "/images/redevelopment_2.png" 
import risk1_hover from "/images/risk_1-hover.png"
import risk2 from "/images/risk_2.png"
import risk3 from "/images/risk_3.png"
import risk4 from "/images/risk_4.png"
import FormEmail from "../../components/FormEmail/FormEmail"
import Title from "../../components/Title/Title"
import RiskItem from "../../components/RiskItem/RiskItem"
import Section2 from "./sections/Section2/Section2"
import Section1 from "./sections/Section1/Section1"
const RedevelopmentPage = () => {
  const checkedItem = ["Оптимизация вашей недвижимости", "Повышаем инвестиционную привлекательность", "Без юридических и финансовых рисков"]
  const minititle = [
    {
      title: `От 3 до 6 месяцев`,
      desc: `Перепланировка`
    },
    {
      title: `От 6 до 12 месяцев`,
      desc: `Реконструкция`
    }
  ]
  const choice = [
    {
      id: "1",
      title: `Анализ 
      объекта`
    },
    {
      id: "2",
      title: `Проверка на технические и 
      юридические характеристики`
    },
    {
      id: "3",
      title: `Выявление потенциала и 
      повышение стоимости объекта`
    },
    {
      id: "4",
      title: `Разработка проектной 
      документации`
    },
    {
      id: "5",
      title: `Получение 
      разрешений`
    },
    {
      id: "6",
      title: `Организация, согласование 
      и сопровождение сделки`
    },
    {
      id: "7",
      title: `Документальное 
      оформление изменений`
    },
  ]
  return (
    <>
      <div className="container mx-auto mt-[40px]">
        {/* Sub link */}
        <span className="p-[10px] md:p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[10px] md:text-[20px] 2xl:text-[24px] bg-[#fff]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Наши услуги</Link>
          /
          <Link to={'/redevelopment'}>Перепланировка и реконструкции</Link>
        </span>

        <Section1 
          title={`Перепланировка 
            и реконструкция`}
          checkedItem={checkedItem}
          minititle={minititle}
          image={redevelopment}
          btnTitle={'Консультация'}
        />

        <Section2 
          choice={choice}
          bg={"bg-[#E8E7E7] text-[#333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
          title={'Модернизируй свой бизнес'}
          subtitle={`Оптимизируем вашу недвижимость и повысим ее 
            инвестиционную привлекательность.`}
          btnTitle={'Модернизировать'}
          image={redevelopment1}
          check={false}
        />

        <div className="mt-[80px] sm:mt-[120px]">
          <Title title={'С нами нет рисков'} />

          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-[10px] sm:gap-[20px]">
            <RiskItem 
              title={'Экспертный подход'}
              desc={`Системный анализ и оценка 
                всех аспектов 
                проектируемых изменений.`}
              image={risk2}
              image2={risk1_hover}
            />
            <RiskItem 
              title={'Тех. экспертиза'}
              desc={`Оценка проектных решений, 
                соответствие строительным 
                нормам и правилам.`}
              image={risk2}
            />
            <RiskItem 
              title={`Минимизация 
                фин. рисков`}
              desc={`Составление стратегий и действий, 
                направленных на обеспечение 
                финансовой устойчивости проекта.`}
              image={risk3}
            />
            <RiskItem 
              title={`Минимизация 
                юр. рисков`}
              desc={`Составление стратегий, 
                направленных на защиту 
                прав и законных интересов.`}
              image={risk4}
            />
          </div>
        </div>
        
        <FormEmail />
      </div>
    </>
  )
}

export default RedevelopmentPage