import test from "/images/test.png"
const FormEmail = () => {
  return (
    <>
      <div className="mt-[120px]">
        <div className="h-[520px] bg-[#DCDADA] rounded-[20px] pt-[40px] pl-[40px] flex">
          {/* Right */}
          <div className="">
            <div className="text-[42px] font-[500]">Превратим вашу недвижимость в актив</div>
            <div className="text-[20px] font-[400] font-avenir">От хорошего к лучшему</div>

            <form className="mt-[42px] w-[590px]">
              <input 
                type="text" 
                placeholder="Имя" 
                className="w-full py-[16px] px-[20px] rounded-[10px] text-[16px] outline-none"
              />
              <input 
                type="text" 
                placeholder="Телефон" 
                className="w-full py-[16px] px-[20px] rounded-[10px] text-[16px] outline-none mt-[10px]"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full py-[16px] px-[20px] rounded-[10px] text-[16px] outline-none mt-[10px]"
              />
              <div className="mt-[15px] flex items-center gap-[20px]">
                <input 
                  id="policy"
                  type="checkbox" 
                  className="w-[30px] h-[30px] cursor-pointer"
                />
                <label htmlFor="policy" className="text-[#00000099] cursor-pointer">Политика конфиденциальности</label>
              </div>

              <button className="mt-[26px] inline-block py-[24px] px-[37px] bg-[#333333] text-[#fff] rounded-[20px]">
                Получить консультацию
              </button>
            </form>
          </div>

          {/* Left */}
          <div className="w-[794px] h-[473px]">
            <img src={test} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormEmail