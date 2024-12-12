/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa6";

import './style.scss'
const AdvantageItem = (props) => {
  const {
    title,
    desc,
    image,
    check=false
  } = props
  return (
    <>
      <div className="w-full xl:w-[290px] 2xl:w-[390px] h-[176px] sm:h-[265px] bg-[#A2999E] pt-[10px] sm:pt-[20px] pl-[10px] sm:pl-[20px] rounded-[10px] sm:rounded-[20px] text-[#fff] relative advantage">
        <div className="w-[25px] sm:w-[50px] h-[25px] sm:h-[50px] rounded-full p-[8px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-[25px] sm:mb-[35px] 2xl:mb-[50px]">
          <img src={image} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="text-[15px] sm:text-[24px] font-[700] font-avenir uppercase mb-[10px] sm:mb-0">{title}</div>
        <div className="text-[11px] sm:text-[15px] 2xl:text-[18px] font-[400] whitespace-normal sm:whitespace-pre-line">{desc}</div>

        {
          check &&
          <Link
            to={'/'}
            className="flex items-center absolute gap-[6px] bottom-[10px] sm:bottom-[15px] left-[10px] sm:left-[20px] text-[10px] sm:text-[18px] font-[300]"
          >
            Подробнее <FaChevronRight size={10}/>
          </Link>
        }
      </div>
    </>
  )
}

export default AdvantageItem