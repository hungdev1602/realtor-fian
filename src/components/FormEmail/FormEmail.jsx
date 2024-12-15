import test from "/images/test.png"
const FormEmail = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <div className="h-[360px] sm:h-[520px] bg-[#DCDADA] rounded-[20px] pt-[20px] md:pt-[40px] pl-[20px] md:pl-[40px] pr-[20px] md:pr-0 flex flex-wrap xl:flex-nowrap">
          {/* Left */}
          <div className="w-full md:flex-1 relative z-[2]">
            <div className="text-[23px] sm:text-[30px] 2xl:text-[40px] font-[500]">Превратим вашу недвижимость в актив</div>
            <div className="text-[12px] sm:text-[20px] font-[400] font-avenir">От хорошего к лучшему</div>

            <form className="mt-[15px] sm:mt-[42px] w-full md:w-[590px]">
              <input 
                type="text" 
                placeholder="Имя" 
                className="w-full py-[10px] sm:py-[16px] px-[10px] sm:px-[20px] rounded-[8px] sm:rounded-[10px] text-[10px] sm:text-[16px] outline-none"
              />
              <input 
                type="text" 
                placeholder="Телефон" 
                className="w-full py-[10px] sm:py-[16px] px-[10px] sm:px-[20px] rounded-[8px] sm:rounded-[10px] text-[10px] sm:text-[16px] outline-none mt-[7px] sm:mt-[10px]"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full py-[10px] sm:py-[16px] px-[10px] sm:px-[20px] rounded-[8px] sm:rounded-[10px] text-[10px] sm:text-[16px] outline-none mt-[7px] sm:mt-[10px]"
              />
              <div className="mt-[10px] sm:mt-[15px] flex items-center gap-[5px] sm:gap-[20px]">
                <input 
                  id="policy"
                  type="checkbox" 
                  className="w-[15px] sm:w-[30px] h-[15px] sm:h-[30px] cursor-pointer"
                />
                <label htmlFor="policy" className="text-[#00000099] text-[10px] sm:text-[16px] cursor-pointer">Политика конфиденциальности</label>
              </div>

              <button className="flex w-full sm:w-[350px] h-[50px] sm:h-[75px] items-center justify-center bg-[#333333] text-[16px] xl:text-[24px] text-[#fff] rounded-[10px] sm:rounded-[20px] mt-[26px]">
                Получить консультацию
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="w-[360px] sm:w-[772px] 2xl:w-[772px] h-[198px] sm:h-[476px] 2xl:h-[465px] mt-[-210px] sm:mt-[-500px] xl:mt-0 relative z-[1]">
            <img src={test} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormEmail