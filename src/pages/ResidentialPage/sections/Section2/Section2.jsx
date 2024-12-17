/* eslint-disable react/prop-types */

import PopupForm from "../../../../components/PopupForm/PopupForm"
import Title from "../../../../components/Title/Title"

const Section2 = (props) => {
  const {
    choice=[],
    bg="bg-[#E8E7E7] text-[#333]",
    title,
    subtitle,
    btnTitle,
    image,
  } = props
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title={title} />

        <div className="flex flex-wrap lg:flex-nowrap gap-[30px] 2xl:gap-[95px]">
          {/* Left */}
          <div className="hidden sm:block w-[487px] 2xl:w-[720px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full md:w-auto">
            <div className="text-[12px] sm:text-[24px] 2xl:text-[32px] text-[#333] font-[300] mb-[20px] sm:mb-[40px] whitespace-pre-line">{subtitle}</div>
            {/* On PC */}
            {/* 1 Row */}
            <div className="hidden sm:flex gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[139px] 2xl:w-[150px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[159px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[168px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
              {/* 4 item */}
              <div 
                className={"w-[187px] 2xl:w-[225px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="hidden sm:flex gap-[10px] mt-[10px] mb-[100px]">
              {/* 5 item */}
              <div 
                className={"w-[227px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 6 item */}
              <div 
                className={"w-[293px] 2xl:w-[360px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 7 item */}
              <div 
                className={"w-[143px] 2xl:w-[225px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>
                
            {/* On Mobile */}
            {/* 1 Row */}
            <div className="flex sm:hidden gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="flex sm:hidden gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[120px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
            </div>
            {/* 3 Row */}
            <div className="flex sm:hidden gap-[10px] mt-[10px] mb-[20px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>
            <PopupForm title={btnTitle}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default Section2