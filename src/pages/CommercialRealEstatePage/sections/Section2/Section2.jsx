/* eslint-disable react/prop-types */

import PopupForm from "../../../../components/PopupForm/PopupForm"

const Section2 = (props) => {
  const {
    choice=[],
    bg="bg-[#E8E7E7] text-[#333]",
    title,
    btnTitle,
    image
  } = props
  const text = [
    {
      title: `Оценка 
      объекта`
    },
    {
      title: `Проф. съемка 
      объекта`
    },
    {
      title: `Рекламное 
      продвижение`
    },
    {
      title: `Переговоры с 
      покупателем`
    },
    {
      title: `Проверка и подготовка 
      документов`
    },
    {
      title: `Организация, согласование 
      и сопровождение сделки`
    },
    {
      title: `Передача 
      объекта`
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
      <div className="text-[24px] xl:text-[48px] 2xl:text-[64px] font-[500] font-avenir mb-[15px] sm:mb-[40px] leading-[21px] sm:leading-normal">{title}</div>

        <div className="flex flex-wrap lg:flex-nowrap gap-[30px] 2xl:gap-[95px]">
          {/* Left */}
          <div className="hidden sm:block w-[487px] 2xl:w-[720px] truncate rounded-[20px]">
            <img src={image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full sm:w-auto">
            <div className="text-[12px] sm:text-[32px] text-[#333] font-[300] mb-[15px] sm:mb-[40px]">Выгодная продажа за короткий срок.</div>
            {/* On PC */}
            {/* 1 row */}
            <div className="hidden sm:flex gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[139px] 2xl:w-[150px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[168px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[159px] 2xl:w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 4 item */}
              <div 
                className={"w-[187px] 2xl:w-[223px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="hidden sm:flex gap-[10px] mt-[10px] mb-[116px]">
              {/* 5 item */}
              <div 
                className={"w-[227px] 2xl:w-[260px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
              {/* 6 item */}
              <div 
                className={"w-[293px] 2xl:w-[300px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 7 item */}
              <div 
                className={"w-[143px] 2xl:w-[223px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>
            
            {/* On Mobile */}
            {/* 1 row */}
            <div className="flex sm:hidden gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex sm:hidden gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[120px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 3 row */}
            <div className="flex sm:hidden gap-[10px] mt-[10px] mb-[15px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] 2xl:w-[150px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative " + bg}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>
            <PopupForm title={btnTitle}/>
          </div>

        </div>

      </div>
    </>
  )
}

export default Section2