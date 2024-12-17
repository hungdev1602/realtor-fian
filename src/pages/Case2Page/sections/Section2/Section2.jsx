import { FaCheck } from "react-icons/fa6"
import case1_2 from "/images/case1_2.png"
import case2 from "/images/case2_3.png"
import Title from "../../../../components/Title/Title"
const Section2 = () => {
  return (
    <>
      <div className="container mx-auto mt-[80px] sm:mt-[120px]">
        <div className="hidden sm:flex flex-wrap lg:flex-nowrap justify-between">
          {/* Left */}
          <div className="w-[566px] 2xl:w-[828px]">
            <Title title={'Результат'}/>
            <div className="pt-[30px] 2xl:pt-[40px] px-[20px] pb-[30px] 2xl:pb-[46px] bg-[#8F4449] text-[#fff] rounded-[20px] mt-[-30px] xl:mt-0">
              <div className="flex items-center gap-[7px] text-[20px] font-[400]">
                <FaCheck /> Пассивный доход
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Сейчас это помещение стоит 25 млн. руб. 
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Довольный клиент
              </div>
            </div>
            <div className="flex items-center justify-between gap-[39px] 2xl:gap-[111px] mt-[24px] 2xl:mt-[45px]">
              {/* Left */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[70px] 2xl:w-[75px] h-[70px] 2xl:h-[75px] truncate rounded-full">
                  <img src={case1_2} alt="" />
                </div>
                <div className="">
                  <div className="text-[20px] font-[400] font-avenir">Наталья Фадеева</div>
                  <div className="text-[16px] font-[500] text-[#ccc]">Основатель FIAN</div>
                </div>
              </div>
              {/* Right */}
              <button className="w-[267px] 2xl:w-[350px] h-[70px] 2xl:h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[20px] 2xl:text-[24px] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150">Консультация</button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block w-[500px] xl:w-[594px] 2xl:w-[716px] h-[402px] 2xl:h-[453px]">
            <img src={case2} alt="" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block sm:hidden pt-[20px] pb-[15px] 2xl:pb-[40px] bg-[#8F4449] text-[#fff] rounded-[20px]">
        <div className="container mx-auto">
          <div className="text-[24px] 2xl:text-[64px] font-[400] font-avenir">Результат</div>
          <div className="flex items-center gap-[7px] mt-[5px] 2xl:mt-[15px] text-[12px] font-[400]">
            <FaCheck /> Пассивный доход
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400]">
            <FaCheck /> Сейчас это помещение стоит 25 миллионов рублей
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400]">
            <FaCheck /> Довольный клиент
          </div>
          <button className="w-full 2xl:w-[350px] h-[50px] 2xl:h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[14px] 2xl:text-[24px] rounded-[20px] mt-[15px]">Консультация</button>
        </div>
      </div>
    </>
  )
}

export default Section2