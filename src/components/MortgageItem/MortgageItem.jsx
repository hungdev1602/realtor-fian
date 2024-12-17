/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

export const MortgageItem = (props) => {
  const {
    title,
    desc,
    image,
    start,
    end
  } = props

  const [shadow, setShadow] = useState(false)
  const elementRef = useRef(null);
  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if(rect.bottom + end + start <= window.innerHeight){
          setShadow(false)
        }
        else if (rect.bottom + end <= window.innerHeight) {
          setShadow(true)
        }
        else{
          setShadow(false)
        }
      }
    }
    window.addEventListener('scroll', updatePosition)
    return () => window.removeEventListener('scroll', updatePosition)
  })
  
  return (
    <>
      <div 
        className={`w-auto md:w-[390px] 2xl:w-[520px] h-[163px] sm:h-[222px] 2xl:h-[250px] rounded-[20px] pt-[15px] sm:pt-[20px] px-[5px] sm:px-[18px] 2xl:px-[50px] pb-[20px] sm:pb-[60px] text-center bg-[#fff] ${shadow ? 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' : ''} transition-shadow duration-1000`}
        ref={elementRef}
      >
        <span className="inline-flex w-[26px] sm:w-[50px] h-[26px] sm:h-[50px] items-center justify-center bg-[#8F4449] rounded-full">
          <img src={image} alt="" className="w-[16px] sm:w-[32px] h-[16px] sm:h-[32px]"/>
        </span>
        <div className="w-auto md:w-[355px] 2xl:w-[430px] text-[14px] sm:text-[25px] 2xl:text-[32px] font-[400] whitespace-normal sm:whitespace-pre-line">{title}</div>
        <div className="text-[10px] sm:text-[16px] 2xl:text-[18px] font-[400] mt-[10px] sm:mt-[20px] leading-[14px] sm:leading-[21.7px] whitespace-normal sm:whitespace-pre-line">{desc}</div>
      </div>
    </>
  )
}
