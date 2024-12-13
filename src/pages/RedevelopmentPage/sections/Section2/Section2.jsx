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
      <div className="mt-[120px]">
        <Title title={title} />

        <div className="flex gap-[95px]">
          {/* Left */}
          <div className="w-[720px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="">
            <div className="text-[32px] font-[400] mb-[40px] whitespace-pre-line">{subtitle}</div>
            
            {/* 1 Row */}
            <div className="flex gap-[10px] mb-[10px]">
              {/* 1 Item */}
              <div 
                className={"w-[200px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 Item */}
              <div 
                className={"w-[380px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[1].title}</div>
              </div>
              {/* 3 Item */}
              <div 
                className={"w-[407px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[2].title}</div>
              </div>
            </div>
            {/* 2 Row */}
            <div className="flex gap-[10px] mb-[30px]">
              {/* 4 Item */}
              <div 
                className={"w-[251px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
              {/* 5 Item */}
              <div 
                className={"w-[156px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[4].title}</div>
              </div>
              {/* 6 Item */}
              <div 
                className={"w-[300px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[5].title}</div>
              </div>
              {/* 7 Item */}
              <div 
                className={"w-[270px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{choice[6].title}</div>
              </div>
            </div>

            <button 
              className="inline-block py-[23px] px-[100px] bg-[#333333] text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
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