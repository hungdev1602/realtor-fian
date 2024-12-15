import { Link } from "react-router-dom"
import case3 from "/images/case3_1.png"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import SectionFirst from "./sections/SectionFirst/SectionFirst"
const Case3Page = () => {
  const cards = ["Аренда", "Капитализация", "Продажа ГАБ"]
  const minititle = [
    {
      title: "19 000 000",
      desc: "Стоимость 3х помещений"
    },
    {
      title: "120 кв. м.",
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
          <Link to={'/case3'}>Кейс 3</Link>
        </span>

        <SectionFirst 
          card={cards}
          title={"БЦ «Баумонский»"}
          subtitle={`Получили 3 помещения стоимостью по 15 млн. каждое, 
            всего за 19 миллионов рублей`}
          minititle={minititle}
          image={case3}
          btnTitle={`Читать подробнее`}
        />

        <Section1 />
      </div>
      <Section2 />
    </>
  )
}

export default Case3Page