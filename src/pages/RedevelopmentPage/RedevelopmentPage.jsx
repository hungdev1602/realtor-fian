import { Link } from "react-router-dom"
import ServiceInfoType2 from "../../components/ServiceInfo/ServiceInfoType2/ServiceInfoType2"
import redevelopment from "/images/redevelopment_1.png" 
import redevelopment1 from "/images/redevelopment_2.png" 
import risk2 from "/images/risk_2.png"
import risk3 from "/images/risk_3.png"
import risk4 from "/images/risk_4.png"
import ServiceDetailType1 from "../../components/ServiceDetail/ServiceDetailType1/ServiceDetailType1"
import FormEmail from "../../components/FormEmail/FormEmail"
import Title from "../../components/Title/Title"
import RiskItem from "../../components/RiskItem/RiskItem"
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
        <span className="p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[24px]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Наши услуги</Link>
          /
          <Link to={'/redevelopment'}>Перепланировка и реконструкции</Link>
        </span>

        <ServiceInfoType2 
          title={`Перепланировка 
            и реконструкция`}
          checkedItem={checkedItem}
          minititle={minititle}
          image={redevelopment}
          btnTitle={'Консультация'}
        />

        <ServiceDetailType1 
          choice={choice}
          bg={"bg-[#E8E7E7] text-[#333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
          title={'Продажа жилой недвижимости'}
          subtitle={`Оптимизируем вашу недвижимость и повысим ее 
            инвестиционную привлекательность.`}
          btnTitle={'Модернизировать'}
          image={redevelopment1}
          check={false}
        />

        <div className="mt-[120px]">
          <Title title={'С нами нет рисков'} />

          <div className="grid grid-cols-4 gap-[20px]">
            <RiskItem 
              title={'Экспертный подход'}
              desc={`Системный анализ и оценка 
                всех аспектов 
                проектируемых изменений.`}
              image={risk2}
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