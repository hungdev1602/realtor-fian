import Title from "../../../../components/Title/Title"
import case2 from "/images/case2_2.png"
const Section1 = () => {
  const text = [
    {
      title: `6 000 000 ₽ 
        собственные деньги`
    },
    {
      title: `6 780 000 ₽ 
        ипотека (ставка 10,4%)`
    },
    {
      title: `78 000₽
        ежемесячный платеж`
    },
    {
      title: `157 000₽
        доход с аренды `
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {/* Left */}
          <div className="hidden md:block w-[566px] 2xl:w-[820px] h-[369px] 2xl:h-[432px] rounded-[20px] truncate">
            <img src={case2} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full md:w-[520px] xl:w-[600px] 2xl:w-[694px] mt-[-15px]">
            <Title title={'Цифры'} />

            {/* 1 row */}
            <div className="flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[148px] sm:w-[288px] 2xl:w-[281px] h-[90px] sm:h-[130px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] sm:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] sm:top-[15px] left-[10px] sm:left-[15px]">1</span>
                <div className="text-[10px] sm:text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[223px] sm:w-[302px] 2xl:w-[403px] h-[90px] sm:h-[130px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] sm:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] sm:top-[15px] left-[10px] sm:left-[15px]">2</span>
                <div className="text-[10px] sm:text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] sm:w-[267px] h-[90px] sm:h-[130px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] sm:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] sm:top-[15px] left-[10px] sm:left-[15px]">3</span>
                <div className="text-[10px] sm:text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] sm:w-[323px] 2xl:w-[417px] h-[90px] sm:h-[130px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] sm:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] sm:top-[15px] left-[10px] sm:left-[15px]">4</span>
                <div className="text-[10px] sm:text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1