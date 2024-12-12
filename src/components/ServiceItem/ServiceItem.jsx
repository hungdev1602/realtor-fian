/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
const ServiceItem = (props) => {
  const {
    title,
    desc,
    image,
    link,
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
        className={`w-full xl:w-[580px] 2xl:w-[790px] h-[150px] sm:h-[299px] rounded-[20px] bg-[#fff] ${shadow ? 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' : ''} transition-shadow duration-1000 px-[15px] sm:px-[40px] pt-[15px] sm:pt-[40px] relative`} 
        ref={elementRef}
      >
        <div className="text-[18px] sm:text-[30px] 2xl:text-[42px] font-[500]">{title}</div>
        <div className="w-[217px] sm:w-full text-[12px] sm:text-[18px] font-[400] mt-[0px] sm:mt-[20px] whitespace-normal sm:whitespace-pre-line">{desc}</div>
        
        <Link 
          to={link}
          className="inline-block py-[10px] sm:py-[18px] px-[17px] sm:px-[39px] absolute bottom-[10px] sm:bottom-[40px] left-[10px] sm:left-[40px] text-[12px] sm:text-[20px] text-[#fff] rounded-[15px] bg-[#333333] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          Подробнее
        </Link>

        <div className="w-[80px] sm:w-[150px] 2xl:w-[204px] h-[68px] sm:h-[130px] 2xl:h-[189px] absolute bottom-0 right-[15px] sm:right-[40px]">
          <img src={image} alt="" className="w-full h-full object-contain"/>
        </div>
      </div>
    </>
  )
}

export default ServiceItem



