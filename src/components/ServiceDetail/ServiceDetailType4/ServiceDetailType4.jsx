/* eslint-disable react/prop-types */
import Title from "../../Title/Title"

const ServiceDetailType4 = (props) => {
  const {
    choice=[],
    bg="bg-[#E8E7E7] text-[#333]",
    title,
    btnTitle,
    image
  } = props
  return (
    <>
      <div className="mt-[120px]">
        <Title title={title} />

        <div className="flex gap-[45px]">
          {/* Left */}
          <div className="w-[800px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="">            
            <div className="grid grid-cols-3 gap-[10px] mb-[87px]">
              {
                choice.map((item, index) => (
                  <div 
                    className={"w-[257px] h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
                    key={index}
                  >
                    <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">{item.id}</span>
                    <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{item.title}</div>
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

        </div>

      </div>
    </>
  )
}

export default ServiceDetailType4