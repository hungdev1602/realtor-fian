/* eslint-disable react/prop-types */

import SliderBlock from "../../components/SliderBlock/SliderBlock"

const Section5 = (props) => {
  const {
    title,
    desc,
    choice=[],
    btnTitle,
    image
  } = props
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px] h-fit lg:h-[537px] 2xl:h-[777px] bg-[#E8E7E74D] rounded-[20px] py-[25px] sm:p-0 2xl:p-[40px] sm:container sm:mx-auto">
        <div className={" " + (window.innerWidth < 576 ? "container mx-auto" : "")}>
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            {/* Left */}
            <div className="">
              <div className="text-[36px] sm:text-[48px] 2xl:text-[64px] font-[400] text-[#333] font-avenir leading-[32px] sm:leading-normal mb-[15px] sm:mb-0">{title}</div>
              <div className="text-[12px] sm:text-[24px] 2xl:text-[32px] font-[300] text-[#333] whitespace-pre-line mb-[15px] sm:mb-0">{desc}</div>
            </div>
  
            {/* Right */}
            <div className="w-full sm:w-[364px] 2xl:w-[595px] h-[360px] sm:h-[537px] 2xl:h-[700px] rounded-[20px]">
              <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
            </div>
          </div>

          <div className="hidden sm:block w-full lg:w-[590px] xl:w-[757px] 2xl:w-[930px] mt-[15px] lg:mt-[-366px] 2xl:mt-[-450px]">
            {/* 1 Row */}
            <div className="flex gap-[10px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[139px] 2xl:w-[170px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[252px] 2xl:w-[310px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[168px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
              {/* 4 Item */}
              <div 
                className={"w-[168px] 2xl:w-[190px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="flex gap-[10px] mb-[40px] 2xl:mb-[70px]">
              {/* 5 Item */}
              <div 
                className={"w-[227px] 2xl:w-[280px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 6 Item */}
              <div 
                className={"w-[263px] 2xl:w-[280px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 7 Item */}
              <div 
                className={"w-[247px] 2xl:w-[320px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>
          </div>

          {/* Slider On Mobile */}
          <div className="block sm:hidden mt-[15px] ">
            <SliderBlock />
          </div>
          <button 
            className="w-full sm:w-auto inline-block py-[17px] sm:py-[23px] px-[113px] 2xl:px-[100px] bg-[#333333] text-[14px] sm:text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  )
}

export default Section5