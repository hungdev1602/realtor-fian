import { Link } from "react-router-dom"
import case2 from "/images/case2_1.png"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import SectionFirst from "./sections/SectionFirst/SectionFirst"
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
        <span className="p-[10px] sm:p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[10px] sm:text-[24px] bg-[#fff]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Кейсы</Link>
          /
          <Link to={'/case2'}>БЦ СЗАО</Link>
        </span>

        <SectionFirst 
          card={cards}
          title={"Покупка офиса в БЦ СЗАО"}
          subtitle={`Помещение покупали за 6 месяцев до окнчания реконстуркции 
            в ипотеку в бизнес-центре на Смольной 2`}
          minititle={minititle}
          image={case2}
          btnTitle={`Читать подробнее`}
        />

        <Section1 />
      </div>
      <Section2 />
    </>
  )
}

export default Case2Page