
import FAQItem from "../../../../components/FAQItem/FAQItem"
import Title from "../../../../components/Title/Title"

const Section6 = () => {
  return (
    <>
      <div className="mt-[120px]">
        <Title title={'Часто задаваемые вопросы'}/>

        <div className="flex flex-col gap-[20px]">
          <FAQItem
            question={'Какая география вашей работы?'}
            answer={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quibusdam molestiae, distinctio iusto ea repellat illo vel dicta iste sint enim non sit nam, ad aut natus itaque sequi numquam.'}
          />
          <FAQItem
            question={'Можете ли вы помочь с получением ипотеки?'}
            answer={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quibusdam molestiae, distinctio iusto ea repellat illo vel dicta iste sint enim non sit nam, ad aut natus itaque sequi numquam.'}
          />
          <FAQItem
            question={'Какие у вас гарантии безопасности и доходности?'}
            answer={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quibusdam molestiae, distinctio iusto ea repellat illo vel dicta iste sint enim non sit nam, ad aut natus itaque sequi numquam.'}
          />
        </div>
      </div>
    </>
  )
}

export default Section6