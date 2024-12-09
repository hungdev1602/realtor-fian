import { FaCheck } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const ServiceInfoType2 = (props) => {
  const {
    title,
    checkedItem,
    minititle,
    image,
    btnTitle
  } = props
  return (
    <>
      <div className="mt-[80px] h-[524px]">

        <div className="mt-[30px] flex justify-between">
          {/* Left */}
          <div className="">
            <div className="text-[64px] font-[400] font-avenir leading-[57px] whitespace-pre-line">{title}</div>

            <div className="mt-[20px] text-[20px] font-[400]">
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
          <div className="w-[603px] h-[456px] rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>

        <div className="w-[785px] mt-[-197px]">
          <div className="grid grid-cols-2 gap-[42px] mb-[40px]">
            <div className="">
              <div className="text-[32px] font-[600]">{minititle[0]["title"]}</div>
              <div className="text-[18px] font-[400] text-[#00000099]">{minititle[0]["desc"]}</div>
            </div>
            <div className="">
              <div className="text-[32px] font-[600]">{minititle[1]["title"]}</div>
              <div className="text-[18px] font-[400] text-[#00000099]">{minititle[1]["desc"]}</div>
            </div>
          </div>

          <button 
            className="inline-block py-[23px] px-[100px] bg-[#333333] text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  )
}

export default ServiceInfoType2