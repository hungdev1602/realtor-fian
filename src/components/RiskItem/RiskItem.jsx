/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

import './style.scss'
import { useState } from "react";
const RiskItem = (props) => {
  const {
    title,
    desc,
    image,
    image2
  } = props
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        className="w-auto sm:w-[285px] 2xl:w-[390px] h-[176px] sm:h-[269px] 2xl:h-[281px] bg-[#8F4449] p-[8px] sm:p-[20px] 2xl:p-[40px] rounded-[20px] text-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative advantage"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className={`w-[26px] sm:w-[50px] h-[26px] sm:h-[50px] rounded-full p-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-[15px] sm:mb-[20px] ${hover ? 'bg-[#A2999E]' : 'bg-[#fff]'}`}>
          <img src={hover ? image2 : image} alt="" />
        </div>
        <div className="text-[16px] sm:text-[24px] font-[400] font-avenir uppercase leading-[25px] whitespace-pre-line">{title}</div>
        <div className="text-[9px] sm:text-[18px] font-[400] whitespace-normal 2xl:whitespace-pre-line leading-[20px] absolute top-[105px] sm:top-[168px] 2xl:bottom-[40px]">{desc}</div>

      </div>
    </>
  )
}

export default RiskItem
