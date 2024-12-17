import { FaCheck } from "react-icons/fa6";
import PopupForm from "../../../../components/PopupForm/PopupForm";

/* eslint-disable react/prop-types */
const Section1 = (props) => {
  const {
    title,
    checkedItem,
    minititle,
    image,
    btnTitle
  } = props
  return (
    <>
      <div className="mt-[20px] sm:mt-[80px] h-fit lg:h-[335px] xl:h-[403px] 2xl:h-[524px]">

        <div className="mt-[30px] flex justify-between flex-wrap md:flex-nowrap">
          {/* Left */}
          <div className="">
            <div className="text-[22px] sm:text-[43px] xl:text-[48px] 2xl:text-[64px] font-[400] font-avenir leading-[21px] sm:leading-[57px] whitespace-pre-line">{title}</div>

            <div className="mt-[15px] sm:mt-[20px] text-[12px] sm:text-[18px] xl:text-[20px] font-[400]">
              <div className="flex items-center gap-[10px]">
                <FaCheck style={{ color: '#8F4449'}}/> {checkedItem[0]}
              </div>
              <div className="flex items-center gap-[10px] mt-[5px]">
                <FaCheck style={{ color: '#8F4449'}}/> {checkedItem[1]}
              </div>
              <div className="flex items-center gap-[10px] mt-[5px]">
                <FaCheck style={{ color: '#8F4449'}}/> {checkedItem[2]}
              </div>
            </div>
          </div>
          
          {/* Right */}
          <div className="w-full sm:w-[360px] xl:w-[577px] 2xl:w-[603px] h-auto sm:h-[335px] lg:h-[400px] xl:h-[436px] 2xl:h-[456px] rounded-[20px] mt-[15px] sm:mt-0">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>

        <div className="w-full sm:w-[539px] 2xl:w-[700px] mt-[15px] lg:mt-[-155px] xl:mt-[-180px] 2xl:mt-[-197px]">
          <div className="grid grid-cols-2 gap-[42px] mb-[10px] sm:mb-[35px] xl:mb-[40px] 2xl:mb-[40px]">
            <div className="">
              <div className="text-[14px] sm:text-[20px] xl:text-[24px] 2xl:text-[32px] font-[600] sm:font-[500]">{minititle[0]["title"]}</div>
              <div className="text-[10px] sm:text-[14px] xl:text-[18px] font-[400] text-[#00000099]">{minititle[0]["desc"]}</div>
            </div>
            <div className="">
              <div className="text-[14px] sm:text-[20px] xl:text-[24px] 2xl:text-[32px] font-[600] sm:font-[500]">{minititle[1]["title"]}</div>
              <div className="text-[10px] sm:text-[14px] xl:text-[18px] font-[400] text-[#00000099]">{minititle[1]["desc"]}</div>
            </div>
          </div>

          <PopupForm title={btnTitle}/>
        </div>
      </div>
    </>
  )
}

export default Section1