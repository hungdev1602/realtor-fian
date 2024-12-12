
import service1 from "/images/service_1.png"
import service2 from "/images/service_2.png"
import service3 from "/images/service_3.png"
import service4 from "/images/service_4.png"
import discount from "/images/discount.png"
import ServiceItem from "../../../../components/ServiceItem/ServiceItem"
import Title from "../../../../components/Title/Title"
const Section4 = () => {
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title="Услуги" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px] 2xl:gap-[40px]">
          <ServiceItem 
            title={"Коммерческая недвижимость"}
            desc={`Покупка, продажа, упаковка, готовые 
              арендные бизнесы для инвесторов`}
            image={service1}
            link={"/commercial"}
            start={150}
            end={0}
          />
          <ServiceItem 
            title={"Жилая недвижимость"}
            desc={`Услуги по покупке и продажи жилой недвижимости: 
              вторичный рынок и новостройки`}
            image={service2}
            link={"/residential"}
            start={80}
            end={120}
          />
          <ServiceItem 
            title={"Инвестиции в недвижимость"}
            desc={`Минимизируем риски и 
              обеспечиваем высокую доходность`}
            image={service3}
            link={"/investments"}
            start={150}
            end={0}
          />
          <ServiceItem 
            title={"Перепланировка и реконструкция"}
            desc={`Оптимизируем вашу недвижимость и 
              повысим ее инвестиционную привлекательность`}
            image={service4}
            link={"/redevelopment"}
            start={80}
            end={120}
          />
        </div>

        <div className="bg-[#8F4449] py-[15px] sm:py-[20px] lg:py-[38px] px-[10px] sm:px-[40px] mt-[46px] rounded-[10px] sm:rounded-[20px] flex justify-between items-center">
          <div className="flex items-center gap-[20px]">
            <img src={discount} alt="" className="w-[40px] md:w-[63px] h-auto"/>
            <div className="text-[#fff]">
              <div className="text-[16px] sm:text-[20px] md:text-[32px] font-[400]">Скидка 5%</div>
              <div className="text-[10px] md:text-[18px] font-[400]">При принятии решения до 2х дней</div>
            </div>
          </div>

          <div className="py-[10px] md:py-[23px] px-[21px] md:px-[59px] bg-[#fff] text-[10px] sm:text-[12px] md:text-[24px] font-[400] rounded-[10px] md:rounded-[20px] cursor-pointer">Получить</div>
        </div>
      </div>
    </>
  )
}

export default Section4