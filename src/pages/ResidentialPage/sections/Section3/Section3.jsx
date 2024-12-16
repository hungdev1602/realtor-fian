import { Link } from "react-router-dom"
import { MortgageItem } from "../../../../components/MortgageItem/MortgageItem"
import Title from "../../../../components/Title/Title"
import { FaArrowRightLong } from "react-icons/fa6";
import mortgage1 from "/images/mortgage_1.svg"
import mortgage2 from "/images/mortgage_2.svg"
import mortgage3 from "/images/mortgage_3.svg"
import mortgage4 from "/images/mortgage_4.svg"
import mortgage5 from "/images/mortgage_5.svg"
import { useEffect, useRef, useState } from "react";

const Section3 = () => {
  const [shadow, setShadow] = useState(false)
    const elementRef = useRef(null);
    useEffect(() => {
      const updatePosition = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          if(rect.bottom + 100 + 250 <= window.innerHeight){
            setShadow(false)
          }
          else if (rect.bottom + 100 <= window.innerHeight) {
            setShadow(true)
          }
          else{
            setShadow(false)
          }
        }
      }
      window.addEventListener('scroll', updatePosition)
      return () => window.removeEventListener('scroll', updatePosition)
    })
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <div className="hidden sm:block text-[34px] xl:text-[48px] 2xl:text-[64px] font-[500] font-avenir mb-[15px] sm:mb-[40px] leading-[40px] sm:leading-normal">Ипотека, только у нас</div>
        <div className="block sm:hidden text-[34px] xl:text-[48px] 2xl:text-[64px] font-[500] font-avenir mb-[15px] sm:mb-[40px] leading-[40px] sm:leading-normal">Ипотека, <br /> только у нас</div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-[20px]">
          <MortgageItem 
            title={'Быстрое одобрение ипотеки'}
            desc={`После подачи заявки ответ может быть 
              предоставлен в течение 2-х часов`}
            image={mortgage1}
            start={150}
            end={0}
          />
          <MortgageItem 
            title={'Подбор выгодных условий'}
            desc={`Из множества банковских предложений мы 
              определим самое подходящее для вас`}
            image={mortgage2}
            start={200}
            end={50}
          />
          <MortgageItem 
            title={'Индивидуальный подход'}
            desc={`Мы адаптируемся к решению вашего запроса, 
              учитывая все рыночные возможности`}
            image={mortgage3}
            start={250}
            end={100}
          />
          <MortgageItem 
            title={'Согласуем после отказов'}
            desc={`Найдем оптимальное предложение, даже 
              если есть серьезные причины для отказа`}
            image={mortgage4}
            start={150}
            end={0}
          />
          <MortgageItem 
            title={'Крупная сумма'}
            desc={`С нами вы можете рассчитывать на максимум. 
              Одобрим любую необходимую вам сумму`}
            image={mortgage5}
            start={200}
            end={50}
          />
          <div 
            className={`w-auto md:w-[390px] 2xl:w-[520px] h-[163px] sm:h-[222px] 2xl:h-[250px] bg-[#8F4449] rounded-[20px] flex items-center justify-center relative cursor-pointer ${shadow ? 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' : ''} transition-shadow duration-1000`}
            ref={elementRef}
          >
            <div className="text-[14px] sm:text-[28px] 2xl:text-[32px] font-[600] text-[#fff]">Получить ипотеку</div>
            <Link 
              to={'/'} 
              className="inline-flex w-[25px] sm:w-[60px] h-[25px] sm:h-[60px] items-center justify-center absolute bottom-[20px] right-[20px] bg-[#fff] rounded-full"
            >
              <FaArrowRightLong size={window.innerWidth > 576 ? 25 : 15}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3