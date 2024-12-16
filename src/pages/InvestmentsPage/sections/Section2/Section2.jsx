/* eslint-disable react/prop-types */

import Title from "../../../../components/Title/Title"

const Section2 = (props) => {
  const {
    choice=[],
    bg="bg-[#E8E7E7] text-[#333]",
    title,
    btnTitle,
    image
  } = props
  const text1Mobile = `Юр. и тех. 
  проверка`
  const text2Mobile = `Инвестиционная 
  стратегия`
  const text3Mobile = `Выбор рассрочек 
  и ипотек`
  const text4Mobile = `Поддержка 
  юриста`
  const text5Mobile = `Обеспечение 
  выгодных условий`
  const text6Mobile = `Консультация`
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title={title} />

        <div className="flex flex-wrap xl:flex-nowrap gap-0 md:gap-[40px] 2xl:gap-[45px]">
          {/* Left */}
          <div className="w-full sm:w-[487px] 2xl:w-[800px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full sm:flex-1 mt-[15px] md:mt-0">            
            {/* 1 Row */}
            <div className="flex justify-between sm:justify-normal gap-[10px] mb-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[120px] md:w-[165px] 2xl:w-[170px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[120px] md:w-[287px] 2xl:w-[310px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text2Mobile : choice[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[120px] md:w-[211px] 2xl:w-[275px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text3Mobile : choice[2].title}</div>
              </div>
            </div>
            
            {/* 2 Row */}
            <div className="flex gap-[10px] mb-[10px]">
              {/* 4 item */}
              <div 
                className={"w-[120px] md:w-[146px] 2xl:w-[170px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[3].title}</div>
              </div>
              {/* 5 item */}
              <div 
                className={"w-[120px] md:w-[293px] 2xl:w-[310px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text1Mobile : choice[4].title}</div>
              </div>
              {/* 6 item */}
              <div 
                className={"w-[120px] md:w-[224px] 2xl:w-[275px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text4Mobile : choice[5].title}</div>
              </div>
            </div>
            {/* 3 Row */}
            <div className="flex gap-[10px] mb-[15px] sm:mb-[80px]">
              {/* 7 item */}
              <div 
                className={"w-[120px] md:w-[226px] 2xl:w-[270px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text5Mobile : choice[6].title}</div>
              </div>
              {/* 8 item */}
              <div 
                className={"w-[120px] md:w-[155px] 2xl:w-[170px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">8</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{choice[7].title}</div>
              </div>
              {/* 9 item */}
              <div 
                className={"w-[120px] md:w-[282px] 2xl:w-[315px] h-[90px] md:h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative " + bg}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">9</span>
                <div className="text-[10px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{window.innerWidth < 576 ? text6Mobile : choice[8].title}</div>
              </div>
            </div>

            <button 
              className="inline-block w-full sm:w-auto py-[16px] sm:py-[23px] px-[76px] 2xl:px-[100px] bg-[#333333] text-[14px] sm:text-[20px] 2xl:text-[24px] text-[#fff] rounded-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
            >
              {btnTitle}
            </button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Section2