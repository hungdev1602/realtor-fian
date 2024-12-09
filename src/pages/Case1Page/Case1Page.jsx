import { Link } from "react-router-dom"
import ServiceInfoType1 from "../../components/ServiceInfo/ServiceInfoType1/ServiceInfoType1"
import case1 from "/images/bg-1.png"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import Section3 from "./sections/Section3/Section3"

const Case1Page = () => {
  const cards = ["покупка", "коммерческая"]
  const minititle = [
    {
      title: "100 000 000 руб.",
      desc: "Бюджет"
    },
    {
      title: "1 неделя",
      desc: "Выход на сделку"
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
          <Link to={'/case1'}>Кейс 1</Link>
        </span>

        <ServiceInfoType1 
          card={cards}
          title={"Покупка офиса в Бц ЗАО"}
          subtitle={`Покупка помещения от 268 кв. м. с выгодой 35 млн. руб. 
            в современном бизнес-центре`}
          minititle={minititle}
          image={case1}
          btnTitle={`Читать подробнее`}
        />

        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  )
}

export default Case1Page