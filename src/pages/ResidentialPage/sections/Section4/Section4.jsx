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
      <div className="mt-[120px] h-[777px]">
        <div className="text-[64px] font-[400] text-[#333] font-avenir mb-[40px]">{title}</div>
        <div className="flex justify-between">
          {/* Left */}
          <div className="">
            
            <div className="text-[32px] font-[400] text-[#333] whitespace-pre-line">{desc}</div>
          </div>

          {/* Right */}
          <div className="w-[595px] h-[603px] rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>
        <div className="mt-[-450px]">
          {/* 1 Row */}
          <div className="w-[890px] flex gap-[10px] flex-wrap mb-[10px]">
            {/* 1 Item */}
            <div 
              className={"w-[200px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
            </div>
            {/* 2 Item */}
            <div 
              className={"w-[390px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
            </div>
            {/* 3 Item */}
            <div 
              className={"w-[280px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
            </div>
          </div>
          {/* 2 Row */}
          <div className="w-[890px] flex gap-[10px] flex-wrap mb-[60px]">
            {/* 4 Item */}
            <div 
              className={"w-[208px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
            </div>
            {/* 5 Item */}
            <div 
              className={"w-[252px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
            </div>
            {/* 6 Item */}
            <div 
              className={"w-[170px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
            </div>
            {/* 7 Item */}
            <div 
              className={"w-[230px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#A2999E] text-[#fff]"}
            >
              <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
              <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
            </div>
          </div>
        </div>
        
        <button 
          className="inline-block py-[23px] px-[100px] bg-[#333333] text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
        >
          {btnTitle}
        </button>
      </div>
    </>
  )
}

export default Section4