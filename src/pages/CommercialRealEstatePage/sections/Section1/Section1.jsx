
/* eslint-disable react/prop-types */
const Section1 = (props) => {
  const {
    card=[],
    title,
    subtitle="",
    minititle,
    image,
    btnTitle
  } = props
  return (
    <>
      <div className="mt-[20px] sm:mt-[80px] h-fit">
        <div className="mt-[30px] flex justify-between flex-wrap lg:flex-nowrap">
          {/* Left */}
          <div className="w-[660px] 2xl:w-auto">
            {/* card */}
            <div className="hidden sm:flex items-center gap-[15px] mb-[30px]">
              {card.map((item, index) => (
                <span 
                  className="py-[8px] px-[20px] border border-[#000000CC] rounded-[50px] text-[14px] xl:text-[18px] 2xl:text-[20px]"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-[21px] sm:text-[48px] 2xl:text-[64px] font-[400] font-avenir leading-[48px]">{title}</div>
            <div className="text-[20px] font-[400] mt-[15px] whitespace-pre-line">{subtitle}</div>

            {/* card */}
            <div className="flex sm:hidden items-center flex-wrap gap-[10px] mt-[-15px]">
              {card.map((item, index) => (
                <span 
                  className="py-[6px] px-[15px] border border-[#000000CC] rounded-[50px] text-[10px]"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right */}
          <div className="w-[473px] 2xl:w-[729px] h-[402px] 2xl:h-[440px] rounded-[20px] mt-[15px] sm:mt-0">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>

        <div className="w-full sm:w-[560px] xl:w-[640px] 2xl:w-[785px] mt-[15px] lg:mt-[-220px] xl:mt-[-168px] 2xl:mt-[-197px]">
          <div className="grid grid-cols-2 gap-[24px] 2xl:gap-[42px] mb-[15px] sm:mb-[40px]">
            <div className="">
              <div className="text-[12px] sm:text-[22px] 2xl:text-[32px] font-[600]">{minititle[0]["title"]}</div>
              <div className="text-[8px] sm:text-[18px] 2xl:text-[18px] font-[400] text-[#000000CC]">{minititle[0]["desc"]}</div>
            </div>
            <div className="">
              <div className="text-[12px] sm:text-[22px] 2xl:text-[32px] font-[600]">{minititle[1]["title"]}</div>
              <div className="text-[8px] sm:text-[18px] 2xl:text-[18px] font-[400] text-[#000000CC]">{minititle[1]["desc"]}</div>
            </div>
          </div>

          <button 
            className="inline-block w-full sm:w-auto py-[18px] 2xl:py-[23px] px-[82px] 2xl:px-[100px] bg-[#333333] text-[14px] sm:text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  )
}

export default Section1