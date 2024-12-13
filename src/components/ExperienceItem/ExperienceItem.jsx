/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react"

const ExperienceItem = (props) => {
  const {
    year,
    text,
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
  }, [])

  return (
    <>
      <div 
        className={`pt-[15px] sm:pt-[30px] pl-[15px] sm:pl-[40px] pb-[15px] sm:pb-[46px] rounded-[20px] ${shadow ? 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#000]' : 'bg-[#A2999E] text-[#fff]'} transition-all duration-1000`}
        ref={elementRef}
      >
        <span className={`w-[84px] sm:w-[150px] lg:w-[200px] h-[26px] sm:h-[35px] lg:h-[46px] inline-flex items-center justify-center border rounded-[60px] text-[9px] md:text-[15px] lg:text-[20px] 2xl:text-[24px] ${shadow ? 'border-[#000]' : 'border-[#fff]'} transition-[border-color] duration-1000`}>{year}</span>
        <div className="text-[9px] md:text-[15px] lg:text-[20px] 2xl:text-[24px] font-[400] whitespace-pre-line mt-[13px]">{text}</div>
      </div>
    </>
  )
}

export default ExperienceItem