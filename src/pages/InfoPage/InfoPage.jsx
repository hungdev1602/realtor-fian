import { Link } from "react-router-dom"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import Section3 from "./sections/Section3/Section3"

const InfoPage = () => {
  return (
    <>
      <div className="container mx-auto mt-[40px] text-[24px]">
        {/* Sub link */}
        <span className="p-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] rounded-[20px]">
          <Link to={'/'}>Основное</Link>
          /
          <Link to={'/info'}>Об основателе</Link>
        </span>

        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  )
}

export default InfoPage