/* eslint-disable react/prop-types */

const Section3 = (props) => {
  const {
    title,
    desc,
    choice=[],
    btnTitle,
    image1,
    image2
  } = props
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px] h-fit xl:h-[618px] 2xl:h-[725px] bg-[#E8E7E74D] rounded-[20px] pt-[30px] sm:pt-[40px] sm:p-[40px] sm:container sm:mx-auto">
        <div className={" " + (window.innerWidth < 576 ? "container mx-auto" : "")}>
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            {/* Left */}
            <div className="">
              <div className="text-[24px] sm:text-[48px] 2xl:text-[64px] font-[400] text-[#333] font-avenir">{title}</div>
              <div className="text-[12px] sm:text-[24px] 2xl:text-[32px] font-[300] text-[#333] whitespace-normal sm:whitespace-pre-line mb-[15px] sm:mb-0">{desc}</div>
            </div>
  
            {/* Right */}
            <div className="w-full lg:w-[332px] 2xl:w-[520px] h-fit lg:h-[538px] 2xl:h-[640px] rounded-[20px] flex flex-col gap-[20px] 2xl:gap-[40px]">
              <img src={image1} alt="" className="w-full lg:w-[332px] 2xl:w-[520px] h-auto lg:h-[259px] 2xl:h-[300px] object-cover rounded-[20px]"/>
              <img src={image2} alt="" className="hidden lg:block w-[332px] 2xl:w-[520px] h-[259px] 2xl:h-[300px] object-cover rounded-[20px]"/>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            {/* On PC */}
            {/* 1 Row */}
            <div className="w-[930px] hidden sm:flex items-center gap-[10px] flex-wrap mt-0 xl:mt-[-366px] 2xl:mt-[-430px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[149px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[176px] 2xl:w-[220px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[149px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
              {/* 4 Item */}
              <div 
                className={"w-[234px] 2xl:w-[280px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="w-[930px] hidden sm:flex items-center gap-[10px] flex-wrap mb-[40px]">
              {/* 5 Item */}
              <div 
                className={"w-[149px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 6 Item */}
              <div 
                className={"w-[176px] 2xl:w-[220px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 7 Item */}
              <div 
                className={"w-[149px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
              {/* 8 Item */}
              <div 
                className={"w-[234px] 2xl:w-[280px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">8</span>
                <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[7].title}</div>
              </div>
            </div>
  
            {/* On Mobile */}
            {/* 1 Row */}
            <div className="w-full flex sm:hidden items-center gap-[10px] mt-[15px] xl:mt-[-366px] 2xl:mt-[-430px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[120px] 2xl:w-[220px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="w-full flex sm:hidden items-center gap-[10px] mt-0 xl:mt-[-366px] 2xl:mt-[-430px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[139px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[100px] 2xl:w-[220px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
            </div>
            {/* 3 Row */}
            <div className="w-full flex sm:hidden items-center gap-[10px] mt-0 xl:mt-[-366px] 2xl:mt-[-430px] mb-[15px]">
              {/* 1 Item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[185px] 2xl:w-[220px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">8</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[7].title}</div>
              </div>
            </div>
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

export default Section3