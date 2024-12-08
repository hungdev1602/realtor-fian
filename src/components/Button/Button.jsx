/* eslint-disable react/prop-types */

const Button = ({ title }) => {
  return (
    <>
      <button 
        className="inline-block py-[23px] px-[100px] bg-[#333333] text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
      >
        {title}
      </button>
    </>
  )
}

export default Button