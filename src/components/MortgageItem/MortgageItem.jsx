/* eslint-disable react/prop-types */

export const MortgageItem = (props) => {
  const {
    title,
    desc,
    image
  } = props
  return (
    <>
      <div className="w-[520px] h-[250px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] pt-[20px] px-[50px] pb-[60px] text-center">
        <span className="inline-flex w-[50px] h-[50px] items-center justify-center bg-[#8F4449] rounded-full">
          <img src={image} alt="" className="w-[32px] h-[32px]"/>
        </span>
        <div className="w-[430px] text-[32px] font-[400] whitespace-pre-line">{title}</div>
        <div className="text-[18px] font-[400] mt-[20px] leading-[21,7px] whitespace-pre-line">{desc}</div>
      </div>
    </>
  )
}
