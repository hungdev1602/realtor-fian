import { Link } from "react-router-dom"
import Title from "../../../../components/Title/Title"
import { useEffect, useRef, useState } from "react"
const Section3 = () => {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const [bg, setBg] = useState(false)
  const [bg2, setBg2] = useState(false)
  const [bg3, setBg3] = useState(false)
  useEffect(() => {
    const updatePosition = () => {
      if (elementRef1.current && elementRef2.current && elementRef3.current) {
        if(window.innerWidth < 576){
          const rect = elementRef1.current.getBoundingClientRect();
          if(rect.bottom + 150 <= window.innerHeight){
            setBg(false)
          }
          else if (rect.bottom + 50 <= window.innerHeight) {
            setBg(true)
          }
          else{
            setBg(false)
          }
          const rect2 = elementRef2.current.getBoundingClientRect();
          if(rect2.bottom + 150 <= window.innerHeight){
            setBg2(false)
          }
          else if (rect2.bottom + 50 <= window.innerHeight) {
            setBg2(true)
          }
          else{
            setBg2(false)
          }
          const rect3 = elementRef3.current.getBoundingClientRect();
          if(rect3.bottom + 150 <= window.innerHeight){
            setBg3(false)
          }
          else if (rect3.bottom + 50 <= window.innerHeight) {
            setBg3(true)
          }
          else{
            setBg3(false)
          }
        }
      }
    }
    window.addEventListener('scroll', updatePosition)
    return () => window.removeEventListener('scroll', updatePosition)
  })
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]" id="cases">
        <Title title="Кейсы" />
        <div className="flex gap-[30px] 2xl:gap-[40px] flex-wrap lg:flex-nowrap">
          {/* Left */}
          <div 
            className="bg-bg1 w-full lg:w-[684px] 2xl:w-[910px] h-[380px] sm:h-[620px] 2xl:h-[650px] bg-cover rounded-[20px] relative cursor-pointer group"
            ref={elementRef1}
          >
            <div className="w-[158px] sm:w-[200px] h-[40px] sm:h-[55px] 2xl:w-[223px] 2xl:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[15px] sm:top-[20px] left-[15px] sm:left-[20px] 2xl:left-[40px]">БЦ ЗАО</div>

            <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
              <div className="w-[111px] sm:w-[163px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center">Коммерческая</div>
              <div className="w-[111px] sm:w-[163px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex items-center justify-center mt-[10px]">Покупка</div>
            </div>

            <Link 
              to={'/case1'} 
              className={`group-hover:bg-white transition-colors duration-300 h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[15px] sm:bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[12px] sm:text-[20px] 2xl:text-[24px] rounded-[10px] sm:rounded-[20px] flex items-center justify-center ${bg ? 'bg-[#fff]' : 'bg-[#ffffffbc]'}`}
            >
              Подробнее
            </Link>
          </div>
          {/* Right */}
          <div className="w-full lg:w-fit">
            {/* Item 2 */}
            <div 
              className="w-full lg:w-[516px] 2xl:w-[670px] h-[380px] sm:h-[300px] 2xl:h-[305px] bg-bg2 bg-center-bottom bg-cover rounded-[20px] relative cursor-pointer group"
              ref={elementRef2}
            >
              <div className="w-[158px] sm:w-[200px] h-[40px] sm:h-[55px] 2xl:w-[223px] 2xl:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[15px] sm:top-[20px] left-[15px] sm:left-[20px] 2xl:left-[40px]">БЦ СЗАО</div>

              <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="hidden w-[75px] sm:w-[110px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] sm:flex items-center justify-center">Покупка</div>
                  <div className="w-[119px] sm:w-[110px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex sm:hidden items-center justify-center">Коммерческая</div>
                  <div className="hidden w-[110px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] sm:flex items-center justify-center">Ипотека</div>
                </div>
                <div className="hidden w-[119px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] sm:flex items-center justify-center mt-[10px] ml-auto">Коммерческая</div>
                <div className="w-[75px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex sm:hidden items-center justify-center mt-[10px]">Покупка</div>
              </div>

              <Link 
                to={'/case2'} 
                className={`group-hover:bg-white transition-colors duration-300 h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[10px] sm:text-[20px] 2xl:text-[24px] rounded-[10px] sm:rounded-[20px] flex items-center justify-center ${bg2 ? 'bg-[#fff]' : 'bg-[#ffffffbc]'}`}
              >
                Подробнее
              </Link>
            </div>
            {/* Item 3 */}
            <div 
              className="w-full lg:w-[516px] 2xl:w-[670px] h-[380px] sm:h-[300px] 2xl:h-[305px] bg-bg3 bg-cover bg-center rounded-[20px] relative mt-[20px] 2xl:mt-[40px] cursor-pointer group"
              ref={elementRef3}
            >
              <div className="w-[158px] sm:w-[238px] h-[40px] sm:h-[66px] flex items-center justify-center rounded-[10px] sm:rounded-[20px] text-[12px] sm:text-[28px] text-[#fff] bg-[#ffffff66] absolute top-[20px] left-[20px] 2xl:left-[40px]">БЦ Баумонский</div>

              <div className="absolute top-[15px] sm:top-[20px] right-[15px] sm:right-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="hidden w-[75px] sm:w-[105px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] sm:flex items-center justify-center">Аренда</div>
                  <div className="w-[111px] sm:w-[105px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex sm:hidden items-center justify-center">Продажа ГАБ</div>
                  <div className="hidden w-[162px] h-[40px] border border-[#fff] text-[#fff] rounded-[60px] 2xl:flex items-center justify-center">Капитализация</div>
                </div>
                <div className="hidden w-[111px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] sm:flex items-center justify-center mt-[10px] ml-auto">Продажа ГАБ</div>
                <div className="w-[75px] sm:w-[182px] h-[28px] sm:h-[40px] border border-[#fff] text-[10px] sm:text-[16px] text-[#fff] rounded-[60px] flex sm:hidden items-center justify-center mt-[10px]">Аренда</div>
              </div>

              <Link 
                to={'/case3'} 
                className={`group-hover:bg-white transition-colors duration-300 h-[52px] sm:h-[65px] 2xl:h-[75px] absolute bottom-[20px] left-[15px] sm:left-[40px] right-[15px] sm:right-[40px] text-[10px] sm:text-[20px] 2xl:text-[24px] rounded-[10px] sm:rounded-[20px] flex items-center justify-center ${bg3 ? 'bg-[#fff]' : 'bg-[#ffffffbc]'}`}
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3