/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import service1 from "/images/service_1.png"
const ServiceItem = (props) => {
  const {
    title,
    desc,
    image,
    link
  } = props
  return (
    <>
      <div className="w-[790px] h-[299px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[40px] pt-[40px] relative">
        <div className="text-[42px] font-[500]">{title}</div>
        <div className="text-[18px] font-[400] mt-[20px] whitespace-pre-line">{desc}</div>
        
        <Link 
          to={link}
          className="inline-block py-[18px] px-[39px] absolute bottom-[40px] left-[40px] text-[20px] text-[#fff] rounded-[15px] bg-[#333333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          Подробнее
        </Link>

        <div className="w-[204px] absolute bottom-0 right-[40px]">
          <img src={image} alt="" className=""/>
        </div>
      </div>
    </>
  )
}

export default ServiceItem