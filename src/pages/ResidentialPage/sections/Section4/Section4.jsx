/* eslint-disable react/prop-types */

const Section4 = (props) => {
  const {
    title,
    desc,
    choice=[],
    btnTitle,
    image
  } = props
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px] h-fit 2xl:h-[777px]">
        <div className="text-[33px] sm:text-[48px] 2xl:text-[64px] font-[400] text-[#333] font-avenir mb-[15px] sm:mb-[40px] leading-[32px]">{title}</div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {/* Left */}
          <div className="">
            
            <div className="text-[12px] sm:text-[24px] 2xl:text-[32px] font-[300] text-[#333] whitespace-pre-line mt-0 sm:mt-[-25px] 2xl:mt-0">{desc}</div>
          </div>

          {/* Right */}
          <div className="hidden sm:block w-[402px] 2xl:w-[595px] h-[438px] 2xl:h-[603px] rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>
        <div className="w-full md:w-[570px] xl:w-[759px] 2xl:w-[890px] mt-[15px] lg:mt-[-366px] 2xl:mt-[-450px]">
          {/* On PC */}
          {/* 1 Row */}
          <div className="hidden sm:flex gap-[10px] mb-[10px]">
            {/* 1 Item */}
            <div 
              className={"w-[164px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
            </div>
            {/* 2 Item */}
            <div 
              className={"w-[323px] 2xl:w-[390px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
            </div>
            {/* 3 Item */}
            <div 
              className={"w-[252px] 2xl:w-[280px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
            </div>
          </div>
          {/* 2 Row */}
          <div className="hidden sm:flex gap-[10px] mb-[40px] 2xl:mb-[60px]">
            {/* 4 Item */}
            <div 
              className={"w-[159px] 2xl:w-[208px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
            </div>
            {/* 5 Item */}
            <div 
              className={"w-[225px] 2xl:w-[252px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
            </div>
            {/* 6 Item */}
            <div 
              className={"w-[140px] 2xl:w-[170px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
            </div>
            {/* 7 Item */}
            <div 
              className={"w-[205px] 2xl:w-[230px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
            </div>
          </div>

          {/* On Mobile */}
          {/* 1 Row */}
          <div className="flex sm:hidden gap-[10px] mb-[10px]">
            {/* 1 Item */}
            <div 
              className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
            </div>
            {/* 2 Item */}
            <div 
              className={"w-[185px] 2xl:w-[390px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
            </div>
          </div>
          {/* 2 Row */}
          <div className="flex sm:hidden gap-[10px] mb-[10px]">
            {/* 1 Item */}
            <div 
              className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
            </div>
            {/* 2 Item */}
            <div 
              className={"w-[120px] 2xl:w-[390px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
            </div>
            {/* 3 Item */}
            <div 
              className={"w-[120px] 2xl:w-[390px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
            </div>
          </div>
          {/* 3 Row */}
          <div className="flex sm:hidden gap-[10px] mb-[20px]">
            {/* 1 Item */}
            <div 
              className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
            </div>
            {/* 2 Item */}
            <div 
              className={"w-[185px] 2xl:w-[390px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
              <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
            </div>
          </div>
        </div>
        
        <button 
          className="w-full sm:w-auto inline-block py-[17px] sm:py-[23px] px-[113px] 2xl:px-[100px] bg-[#333333] text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
        >
          {btnTitle}
        </button>
      </div>
    </>
  )
}

export default Section4