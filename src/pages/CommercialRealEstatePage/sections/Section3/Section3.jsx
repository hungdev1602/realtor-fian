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
      <div className="mt-[120px] h-[725px] bg-[#E8E7E74D] rounded-[20px] p-[40px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="">
            <div className="text-[64px] font-[400] text-[#333] font-avenir">{title}</div>
            <div className="text-[32px] font-[400] text-[#333] whitespace-pre-line">{desc}</div>
          </div>

          {/* Right */}
          <div className="w-[520px] h-[640px] rounded-[20px] flex flex-col gap-[40px]">
            <img src={image1} alt="" className="w-[520px] h-[300px] object-cover rounded-[20px]"/>
            <img src={image2} alt="" className="w-[520px] h-[300px] object-cover rounded-[20px]"/>
          </div>
        </div>
          <div className="w-[930px] flex items-center gap-[10px] flex-wrap mt-[-430px] mb-[40px]">
            {
              choice.map((item, index) => (
                <div 
                  className={"w-[220px] h-[150px] rounded-[20px] flex items-center justify-center relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff]"}
                  key={index}
                >
                  <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">{item.id}</span>
                  <div className="text-[16px] font-[500] text-center whitespace-pre-line ">{item.title}</div>
                </div>
              ))
            }
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

export default Section3