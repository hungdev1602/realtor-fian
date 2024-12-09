import { Link } from "react-router-dom"
import { MortgageItem } from "../../../../components/MortgageItem/MortgageItem"
import Title from "../../../../components/Title/Title"
import { FaArrowRightLong } from "react-icons/fa6";
import mortgage1 from "/images/mortgage_1.svg"
import mortgage2 from "/images/mortgage_2.svg"
import mortgage3 from "/images/mortgage_3.svg"
import mortgage4 from "/images/mortgage_4.svg"
import mortgage5 from "/images/mortgage_5.svg"

const Section3 = () => {
  return (
    <>
      <div className="mt-[120px]">
        <Title title={'Ипотека, только у нас'}/>

        <div className="grid grid-cols-3 gap-[20px]">
          <MortgageItem 
            title={'Быстрое одобрение ипотеки'}
            desc={`После подачи заявки ответ может быть 
              предоставлен в течение 2-х часов`}
            image={mortgage1}
          />
          <MortgageItem 
            title={'Подбор выгодных условий'}
            desc={`Из множества банковских предложений мы 
              определим самое подходящее для вас`}
            image={mortgage2}
          />
          <MortgageItem 
            title={'Индивидуальный подход'}
            desc={`Мы адаптируемся к решению вашего запроса, 
              учитывая все рыночные возможности`}
            image={mortgage3}
          />
          <MortgageItem 
            title={'Согласуем после отказов'}
            desc={`Найдем оптимальное предложение, даже 
              если есть серьезные причины для отказа`}
            image={mortgage4}
          />
          <MortgageItem 
            title={'Крупная сумма'}
            desc={`С нами вы можете рассчитывать на максимум. 
              Одобрим любую необходимую вам сумму`}
            image={mortgage5}
          />
          <div className="w-[520px] h-[250px] bg-[#8F4449] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] flex items-center justify-center relative">
            <div className="text-[32px] font-[600] text-[#fff]">Получить ипотеку</div>
            <Link 
              to={'/'} 
              className="inline-flex w-[60px] h-[60px] items-center justify-center absolute bottom-[20px] right-[20px] bg-[#fff] rounded-full"
            >
              <FaArrowRightLong size={25}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3