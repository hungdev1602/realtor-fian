import { Link } from "react-router-dom"
import Title from "../../../../components/Title/Title"

const Section3 = () => {
  return (
    <>
      <div className="mt-[120px]">
        <Title title="Кейсы" />
        {/* Left */}
        <div className="flex gap-[40px]">
          <div className="bg-bg1 w-[910px] h-[650px] bg-cover rounded-[20px] relative">
            <div className="w-[223px] h-[66px] flex items-center justify-center rounded-[20px] text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[20px] left-[40px]">БЦ ЗАО</div>

            <div className="absolute top-[20px] right-[20px]">
              <div className="w-[163px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center">Коммерческая</div>
              <div className="w-[163px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px]">Покупка</div>
            </div>

            <Link to={'/case1'} className="h-[75px] absolute bottom-[20px] left-[40px] right-[40px] text-[24px] bg-[#fff] rounded-[20px] flex items-center justify-center">Подробнее</Link>
          </div>
          {/* Right */}
          <div className="">
            {/* Item 2 */}
            <div className="w-[670px] h-[305px] bg-bg2 bg-center-bottom bg-cover rounded-[20px] relative">
              <div className="w-[223px] h-[66px] flex items-center justify-center rounded-[20px] text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[20px] left-[40px]">БЦ СЗАО</div>

              <div className="absolute top-[20px] right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[110px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center">Покупка</div>
                  <div className="w-[110px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center">Ипотека</div>
                </div>
                <div className="w-[182px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px] ml-auto">Коммерческая</div>
              </div>

              <Link to={'/case2'} className="h-[75px] absolute bottom-[20px] left-[40px] right-[40px] text-[24px] bg-[#fff] rounded-[20px] flex items-center justify-center">Подробнее</Link>
            </div>
            {/* Item 3 */}
            <div className="w-[670px] h-[305px] bg-bg3 bg-cover rounded-[20px] relative mt-[40px]">
              <div className="w-[238px] h-[66px] flex items-center justify-center rounded-[20px] text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[20px] left-[40px]">БЦ Баумонский</div>

              <div className="absolute top-[20px] right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[105px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center">Аренда</div>
                  <div className="w-[162px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center">Капитализация</div>
                </div>
                <div className="w-[182px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px] ml-auto">Продажа ГАБ</div>
              </div>

              <Link to={'/case3'} className="h-[75px] absolute bottom-[20px] left-[40px] right-[40px] text-[24px] bg-[#fff] rounded-[20px] flex items-center justify-center">Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3