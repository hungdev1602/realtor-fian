/* eslint-disable no-unused-vars */
import Viewer from 'viewerjs';
import Title from "../../../../components/Title/Title"
import award1 from "/images/award_1.png"
import award2 from "/images/award_2.png"
import award3 from "/images/award_3.png"
import award4 from "/images/award_4.png"
import award5 from "/images/award_5.png"
import { useEffect } from 'react';
import SliderAwards from '../../../../components/SliderAwards/SliderAwards';
const Section3 = () => {

  useEffect(() => {
    const gallery = new Viewer(document.getElementById('images'));
  })

  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title="Награды" />

        <div className="bg-[#E4E3E3CC] py-[21px] px-[20px] md:px-[70px] hidden sm:flex items-center justify-between gap-[3px] md:gap-[10px] 2xl:gap-0 rounded-[20px]" id='images'>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award1} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award2} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award3} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award4} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award3} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[205px] h-[120px] lg:h-[180px] xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer">
            <img src={award5} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="block sm:hidden bg-[#E4E3E3CC] rounded-[20px] py-[10px]">
          <SliderAwards />
        </div>
      </div>
    </>
  )
}

export default Section3