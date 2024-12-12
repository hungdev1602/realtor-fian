/* eslint-disable react/prop-types */

const BoxInfoTransparent = (props) => {
  const {
    widthHeight = "",
    text="",
    desc=""
  } = props;
  return (
    <>
      <div className={`inline-flex flex-col items-center justify-center border border-[#584842] rounded-[20px] ` + widthHeight}>
        <div className="text-[20px] sm:text-[30px] xl:text-[38px] 2xl:text-[48px] font-[700] text-[#000000e5]">{text}</div>
        <div className="text-[10px] sm:text-[12px] 2xl:text-[18px] font-[400] text-[#000000c3]">{desc}</div>
      </div>
    </>
  )
}

export default BoxInfoTransparent