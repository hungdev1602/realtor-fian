import PopupForm from "../../../../components/PopupForm/PopupForm"
import Title from "../../../../components/Title/Title"
import case1 from "/images/case1_1.png"
import case1_2 from "/images/case1_2.png"
const Section1 = () => {
  const text = [
    {
      title: `от 250 
      кв.м.`
    },
    {
      title: `бюжет 1.000.000 - 1.200.000 руб 
      (за арендную плату)`
    },
    {
      title: `Бц “Барклай Плаза” метро в 
      пешей доступности`
    },
    {
      title: `2 парковочных 
      места`
    },
    {
      title: `Удобный 
      трафик`
    },
    {
      title: `Современный 
      Бизнес-центр`
    },
    {
      title: `Санузел и кухня 
      в офисе`
    },
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title={'Запрос клиента'} />

        <div className="flex flex-wrap xl:flex-nowrap gap-[30px] 2xl:gap-[63px]">
          {/* Left */}
          <div className="w-full xl:w-[339px] 2xl:w-[550px] h-auto xl:h-[428px] 2xl:h-[603px] truncate rounded-none sm:rounded-[20px]">
            <div className="block sm:hidden w-[951px] text-[11px] 2xl:text-[32px] font-[400] mt-0 2xl:mt-[55px] leading-[14px]">По запрошенным критериям помещения на рынке в столице не<br /> нашлось и клиент принял решение купить помещение.</div>
            <img src={case1} alt="" className="hidden sm:block w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[832px] 2xl:w-auto">
            {/* On PC */}
            {/* 1 row */}
            <div className="hidden sm:flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[165px] 2xl:w-[200px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[331px] 2xl:w-[380px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[316px] 2xl:w-[407px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="hidden sm:flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[213px] 2xl:w-[251px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[140px] 2xl:w-[156px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[225px] 2xl:w-[300px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 4 item */}
              <div 
                className={"w-[224px] 2xl:w-[270px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>

            {/* On Mobile */}
            {/* 1 row */}
            <div className="flex sm:hidden items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[120px] 2xl:w-[200px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[250px] 2xl:w-[380px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex sm:hidden items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] 2xl:w-[251px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] 2xl:w-[156px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
            </div>
            {/* 3 row */}
            <div className="flex sm:hidden items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[98px] 2xl:w-[251px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[114px] 2xl:w-[156px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">6</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[148px] 2xl:w-[300px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] md:text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">7</span>
                <div className="text-[12px] md:text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>


            <div className="hidden md:block w-[951px] text-[24px] 2xl:text-[32px] text-[#333] font-[400] mt-[30px] 2xl:mt-[55px] leading-[29px]">По запрошенным критериям помещения на рынке в столице <br /> не нашлось и клиент принял решение <b>купить помещение.</b> </div>

            <div className="hidden sm:flex items-center gap-[111px] mt-[40px] 2xl:mt-[67px]">
              {/* Left */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[70px] 2xl:w-[75px] h-[70px] 2xl:h-[75px] truncate rounded-full">
                  <img src={case1_2} alt="" />
                </div>
                <div className="">
                  <div className="text-[20px] font-[400] font-avenir">Наталья Фадеева</div>
                  <div className="text-[16px] font-[500] text-[#ccc]">Основатель FIAN</div>
                </div>
              </div>
              {/* Right */}
              <PopupForm title={'Консультация'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1