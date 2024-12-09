import { FaCheck } from "react-icons/fa6"
import case1_2 from "/images/case1_2.png"
import case3 from "/images/case3_3.png"
const Section2 = () => {
  return (
    <>
      <div className="mt-[120px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-[828px]">
            <div className="pt-[20px] px-[20px] pb-[40px] bg-[#A2999E] text-[#fff] rounded-[20px]">
              <div className="text-[64px] font-[400] font-avenir">Результат</div>
              <div className="flex items-center gap-[7px] mt-[15px] text-[20px] font-[400]">
                <FaCheck /> Пассивный доход 350 000 рублей в месяц
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Сейчас эти 3 помещения стоят 45 млн. руб. 
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Довольный клиент
              </div>
            </div>
            <div className="flex items-center gap-[111px] mt-[117px]">
              {/* Left */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[75px] h-[75px] truncate rounded-full">
                  <img src={case1_2} alt="" />
                </div>
                <div className="">
                  <div className="text-[20px] font-[400] font-avenir">Наталья Фадеева</div>
                  <div className="text-[16px] font-[500] text-[#ccc]">Основатель FIAN</div>
                </div>
              </div>
              {/* Right */}
              <button className="w-[350px] h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[24px] rounded-[20px]">Консультация</button>
            </div>
          </div>

          {/* Right */}
          <div className="w-[716px] h-[453px]">
            <img src={case3} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2