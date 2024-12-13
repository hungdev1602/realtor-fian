import { Link } from "react-router-dom"
import ServiceInfoType2 from "../../components/ServiceInfo/ServiceInfoType2/ServiceInfoType2"
import investment from "/images/investment_1.png"
import investment1 from "/images/investment_2.png"
import FormEmail from "../../components/FormEmail/FormEmail"
import Section2 from "./sections/Section2/Section2"
const InvestmentsPage = () => {
  const checkedItem = ["Минимизируем риски", "Обеспечиваем высокую доходность", "Превращаем недвижимость в актив"]
  const minititle = [
    {
      title: `От 30%`,
      desc: `Заработок на капитализации`
    },
    {
      title: `От 15%`,
      desc: `Годовых`
    }
  ]
  const choice = [
    {
      id: "1",
      title: `Анализ задач`
    },
    {
      id: "2",
      title: `Определение 
      инвестиционной стратегии`
    },
    {
      id: "3",
      title: `Выбор рассрочек и 
      ипотек`
    },
    {
      id: "4",
      title: `Подбор 
      объектов`
    },
    {
      id: "5",
      title: `Юридическая и техническая 
      проверка`
    },
    {
      id: "6",
      title: `Поддержка юриста 
      практика`
    },
    {
      id: "7",
      title: `Обеспечение выгодных 
      условий`
    },
    {
      id: "8",
      title: `Подбор 
      арендаторов`
    },
    {
      id: "9",
      title: `Консультация по 
      планированию и управлению`
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
          <Link to={'/investments'}>Инвестиции в недвижимость</Link>
        </span>

        <ServiceInfoType2 
          title={"Инвестиции в недвижимость"}
          checkedItem={checkedItem}
          minititle={minititle}
          image={investment}
          btnTitle={'Консультация'}
        />

        <Section2 
          choice={choice}
          bg={"bg-[#E8E7E7] text-[#333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
          title={'Инвестируй с нами'}
          
          btnTitle={'Инвестировать'}
          image={investment1}
        />
        <FormEmail />
      </div>
    </>
  )
}

export default InvestmentsPage