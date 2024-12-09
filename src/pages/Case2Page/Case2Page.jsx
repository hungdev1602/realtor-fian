import { Link } from "react-router-dom"
import ServiceInfoType1 from "../../components/ServiceInfo/ServiceInfoType1/ServiceInfoType1"
import case2 from "/images/case2_1.png"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
const Case2Page = () => {
  const cards = ["покупка", "коммерческая", "ипотека"]
  const minititle = [
    {
      title: "12 780 000 ₽",
      desc: "Бюджет"
    },
    {
      title: "80,2 кв. м.",
      desc: "Площадь помещения"
    }
  ]
  return (
    <>
      <div className="container mx-auto mt-[40px]">
        {/* Sub link */}
        <span className="p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[24px]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Кейсы</Link>
          /
          <Link to={'/case2'}>Кейс 2</Link>
        </span>

        <ServiceInfoType1 
          card={cards}
          title={"Покупка офиса в БЦ СЗАО"}
          subtitle={`Помещение покупали за 6 месяцев до окнчания реконстуркции 
            в ипотеку в бизнес-центре на Смольной 2`}
          minititle={minititle}
          image={case2}
          btnTitle={`Читать подробнее`}
        />

        <Section1 />
        <Section2 />
      </div>
    </>
  )
}

export default Case2Page