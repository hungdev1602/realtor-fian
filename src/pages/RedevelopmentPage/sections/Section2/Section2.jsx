/* eslint-disable react/prop-types */

import Title from "../../../../components/Title/Title"

const Section2 = (props) => {
  const {
    choice=[],
    bg="bg-[#E8E7E7] text-[#333]",
    title,
    subtitle,
    btnTitle,
    image
  } = props
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title={title} />
        <div className="block sm:hidden w-[80%] sm:w-auto text-[12px] sm:text-[24px] 2xl:text-[32px] font-[400] mb-[15px] sm:mb-[40px] whitespace-normal sm:whitespace-pre-line">{subtitle}</div>
        <div className="flex flex-wrap xl:flex-nowrap gap-[15px] sm:gap-[30px] 2xl:gap-[95px]">
          {/* Left */}
          <div className="w-full xl:w-[339px] 2xl:w-[720px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full xl:w-auto">
            <div className="hidden sm:block text-[12px] sm:text-[24px] 2xl:text-[32px] text-[#333] font-[400] mb-[40px] whitespace-pre-line">{subtitle}</div>
            
            {/* On PC */}
            {/* 1 Row */}
            <div className="hidden sm:flex gap-[10px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[165px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[331px] 2xl:w-[380px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[316px] 2xl:w-[407px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="hidden sm:flex gap-[10px] mb-[30px]">
              {/* 4 Item */}
              <div 
                className={"w-[213px] 2xl:w-[251px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
              {/* 5 Item */}
              <div 
                className={"w-[140px] 2xl:w-[156px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 6 Item */}
              <div 
                className={"w-[225px] 2xl:w-[300px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 7 Item */}
              <div 
                className={"w-[224px] 2xl:w-[270px] h-[120pxtext-[18px] 2xl:] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>

            {/* On Mobile */}
            {/* 1 Row */}
            <div className="flex sm:hidden gap-[10px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[185px] 2xl:w-[380px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="flex sm:hidden gap-[10px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[120px] 2xl:w-[380px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[120px] 2xl:w-[380px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
            </div>
            {/* 3 Row */}
            <div className="flex sm:hidden gap-[10px] mb-[20px]">
              {/* 1 Item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[185px] 2xl:w-[380px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[15px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>
            <button 
              className="inline-block w-full sm:w-auto py-[17px] sm:py-[23px] px-[62px] 2xl:px-[100px] bg-[#333333] text-[14px] sm:text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
            >
              {btnTitle}
            </button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Section2