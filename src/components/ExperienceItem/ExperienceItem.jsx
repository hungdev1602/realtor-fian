/* eslint-disable react/prop-types */

const ExperienceItem = (props) => {
  const {
    year,
    text
  } = props
  return (
    <>
      <div className="pt-[30px] pl-[40px] pb-[46px] bg-[#A2999E] rounded-[20px] text-[#fff]">
        <span className="w-[200px] h-[46px] inline-flex items-center justify-center border border-[#fff] rounded-[60px] text-[24px]">{year}</span>
        <div className="text-[24px] font-[400] whitespace-pre-line mt-[13px]">{text}</div>
      </div>
    </>
  )
}

export default ExperienceItem