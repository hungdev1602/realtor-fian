
import FAQItem from "../../../../components/FAQItem/FAQItem"
import Title from "../../../../components/Title/Title"

const Section6 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]" id="faq">
        <Title title={'Часто задаваемые вопросы'}/>

        <div className="flex flex-col gap-[20px]">
          <FAQItem
            question={'Какая география вашей работы?'}
            answer={'Москва и Мо.'}
          />
          <FAQItem
            question={'Можете ли вы помочь с получением ипотеки?'}
            answer={'Да, мы сотрудничаем с большим количеством банков и найдем максимально выгодный вариант для вас.'}
          />
          <FAQItem
            question={'Какие у вас гарантии безопасности и доходности?'}
            answer={'У нас работают лучшие брокеры и страховщики с огромным стажем, а наш основатель имеет опыт с 1989 года и является практиком на рынке.'}
          />
        </div>
      </div>
    </>
  )
}

export default Section6