import { FaCheck } from "react-icons/fa6"
import case1_2 from "/images/case1_2.png"
import case3 from "/images/case3_3.png"
import Title from "../../../../components/Title/Title"
import PopupForm from "../../../../components/PopupForm/PopupForm"
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
                <FaCheck /> Пассивный доход 350 000 рублей в месяц
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Сейчас эти 3 помещения стоят 45 млн. руб. 
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
              <PopupForm title={'Консультация'}/>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block w-[500px] xl:w-[594px] 2xl:w-[716px] h-[402px] 2xl:h-[453px]">
            <img src={case3} alt="" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block sm:hidden pt-[20px] pb-[15px] 2xl:pb-[40px] bg-[#8F4449] text-[#fff] rounded-[20px]">
        <div className="container mx-auto">
          <div className="text-[24px] 2xl:text-[64px] font-[400] font-avenir">Результат</div>
          <div className="flex items-center gap-[7px] mt-[5px] 2xl:mt-[15px] text-[12px] font-[400]">
            <FaCheck /> Пассивный доход 350 000 рублей в месяц
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400]">
            <FaCheck /> Сейчас эти 3 помещения стоят 45 млн. руб. 
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400] mb-[15px]">
            <FaCheck /> Довольный клиент
          </div>
          <PopupForm title={'Консультация'}/>
        </div>
      </div>

    </>
  )
}

export default Section2