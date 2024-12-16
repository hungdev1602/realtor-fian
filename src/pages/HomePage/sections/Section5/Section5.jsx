import AdvantageItem from "../../../../components/AdvantageItem/AdvantageItem"
import Title from "../../../../components/Title/Title"

import advantage1 from "/images/advantage_1.png"
import advantage2 from "/images/advantage_2.png"
import advantage3 from "/images/advantage_3.png"
import advantage4 from "/images/advantage_4.png"
const Section5 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]" id="advantages">
        <Title title={'Наши преимущества'}/>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[10px] 2xl:gap-[20px]">
          <AdvantageItem 
            title={'Основатель'}
            desc={`Основатель компании является 
              действующим практиком на рынке.`}
            image={advantage1}
            check={true}
          />
          <AdvantageItem 
            title={'Команда'}
            desc={`У нас работают лучшие брокеры и страховщики, с огромным стажем. `}
            image={advantage2}
          />
          <AdvantageItem 
            title={'Доход'}
            desc={`С нами у вас будет доход от 
              15% годовых и 30% заработка`}
            image={advantage3}
          />
          <AdvantageItem 
            title={'Оперативность'}
            desc={`Наша команда всегда на связи, мы 
              быстро подберем решение и 
              предложим выгодные условия.`}
            image={advantage4}
          />
        </div>
      </div>
    </>
  )
}

export default Section5