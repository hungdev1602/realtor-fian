import { Link } from "react-router-dom"
import case1 from "/images/bg-1.png"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import Section3 from "./sections/Section3/Section3"
import SectionFirst from "./sections/SectionFirst/SectionFirst"

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
        <span className="p-[10px] sm:p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px] text-[10px] sm:text-[24px] bg-[#fff]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Кейсы</Link>
          /
          <Link to={'/case1'}>БЦ ЗАО</Link>
        </span>

        <SectionFirst 
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
      </div>
      <Section3 />
    </>
  )
}

export default Case1Page