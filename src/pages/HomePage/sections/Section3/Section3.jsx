import { Link } from "react-router-dom"
import Title from "../../../../components/Title/Title"

const Section3 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title="Кейсы" />
        <div className="flex gap-[30px] 2xl:gap-[40px] flex-wrap lg:flex-nowrap">
          {/* Left */}
          <div className="bg-bg1 w-full lg:w-[684px] 2xl:w-[910px] h-[380px] sm:h-[620px] 2xl:h-[650px] bg-cover rounded-[20px] relative">
            <div className="w-[158px] sm:w-[200px] h-[40px] sm:h-[55px] 2xl:w-[223px] 2xl:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[15px] sm:top-[20px] left-[15px] sm:left-[20px] 2xl:left-[40px]">БЦ ЗАО</div>

            <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
              <div className="w-[111px] sm:w-[163px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center">Коммерческая</div>
              <div className="w-[111px] sm:w-[163px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px]">Покупка</div>
            </div>

            <Link to={'/case1'} className="h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[15px] sm:bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[12px] sm:text-[20px] 2xl:text-[24px] bg-[#fff] rounded-[10px] sm:rounded-[20px] flex items-center justify-center">Подробнее</Link>
          </div>
          {/* Right */}
          <div className="w-full lg:w-fit">
            {/* Item 2 */}
            <div className="w-full lg:w-[516px] 2xl:w-[670px] h-[380px] sm:h-[300px] 2xl:h-[305px] bg-bg2 bg-center-bottom bg-cover rounded-[20px] relative">
              <div className="w-[158px] sm:w-[200px] h-[40px] sm:h-[55px] 2xl:w-[223px] 2xl:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[15px] sm:top-[20px] left-[15px] sm:left-[20px] 2xl:left-[40px]">БЦ СЗАО</div>

              <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[75px] sm:w-[110px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center">Покупка</div>
                  <div className="hidden w-[110px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] sm:flex items-center justify-center">Ипотека</div>
                </div>
                <div className="w-[119px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px] ml-auto">Коммерческая</div>
              </div>

              <Link to={'/case2'} className="h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[10px] sm:text-[20px] 2xl:text-[24px] bg-[#fff] rounded-[10px] sm:rounded-[20px] flex items-center justify-center">Подробнее</Link>
            </div>
            {/* Item 3 */}
            <div className="w-full lg:w-[516px] 2xl:w-[670px] h-[380px] sm:h-[300px] 2xl:h-[305px] bg-bg3 bg-cover bg-center rounded-[20px] relative mt-[20px] 2xl:mt-[40px]">
              <div className="w-[158px] sm:w-[238px] h-[40px] sm:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[20px] left-[20px] 2xl:left-[40px]">БЦ Баумонский</div>

              <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[75px] sm:w-[105px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center">Аренда</div>
                  <div className="hidden w-[162px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] 2xl:flex items-center justify-center">Капитализация</div>
                </div>
                <div className="w-[111px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px] ml-auto">Продажа ГАБ</div>
              </div>

              <Link to={'/case3'} className="h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[10px] sm:text-[20px] 2xl:text-[24px] bg-[#fff] rounded-[10px] sm:rounded-[20px] flex items-center justify-center">Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3