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
        className="w-[390px] h-[281px] bg-[#A2999E] p-[40px] rounded-[20px] text-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative advantage"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className={`w-[50px] h-[50px] rounded-full p-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-[20px] ${hover ? 'bg-[#A2999E]' : 'bg-[#fff]'}`}>
          <img src={hover ? image2 : image} alt="" />
        </div>
        <div className="text-[24px] font-[400] font-avenir uppercase leading-[25px] whitespace-pre-line">{title}</div>
        <div className="text-[18px] font-[400] whitespace-pre-line leading-[20px] absolute bottom-[40px]">{desc}</div>

      </div>
    </>
  )
}

export default RiskItem
