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
      <div className="w-[390px] h-[265px] bg-[#A2999E] pt-[20px] pl-[20px] rounded-[20px] text-[#fff] relative advantage">
        <div className="w-[50px] h-[50px] rounded-full p-[8px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-[50px]">
          <img src={image} alt="" />
        </div>
        <div className="text-[24px] font-[700] font-avenir uppercase">{title}</div>
        <div className="text-[18px] font-[400] whitespace-pre-line">{desc}</div>

        {
          check &&
          <Link
            to={'/'}
            className="flex items-center absolute gap-[6px] bottom-[15px] left-[20px] text-[18px] font-[300]"
          >
            Подробнее <FaChevronRight size={10}/>
          </Link>
        }
      </div>
    </>
  )
}

export default AdvantageItem