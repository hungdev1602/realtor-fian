
/* eslint-disable react/prop-types */
const ServiceInfoType1 = (props) => {
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
      <div className="mt-[80px] h-[524px]">
        {/* card */}
        <div className="flex items-center gap-[15px]">
          {card.map((item, index) => (
            <span 
              className="py-[8px] px-[20px] border border-[#000000CC] rounded-[50px] text-[20px]"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-[30px] flex justify-between">
          {/* Left */}
          <div className="">
            <div className="text-[64px] font-[400] font-avenir leading-[57px]">{title}</div>
            <div className="text-[20px] font-[400] mt-[5px]">{subtitle}</div>
          </div>
          
          {/* Right */}
          <div className="w-[729px] h-[440px] rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover rounded-[20px]"/>
          </div>
        </div>

        <div className="w-[785px] mt-[-280px]">
          <div className="grid grid-cols-2 gap-[42px] mb-[40px]">
            <div className="">
              <div className="text-[32px] font-[600]">От 1 дня до 2х месяцев</div>
              <div className="text-[18px] font-[400]">Подбор {minititle}</div>
            </div>
            <div className="">
              <div className="text-[32px] font-[600]">От 1 дня до 2х месяцев</div>
              <div className="text-[18px] font-[400]">Подбор {minititle}</div>
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

export default ServiceInfoType1