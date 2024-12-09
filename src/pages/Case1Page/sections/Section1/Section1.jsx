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
      <div className="mt-[120px]">
        <Title title={'Запрос клиента'} />

        <div className="flex gap-[63px]">
          {/* Left */}
          <div className="w-[550px] h-[603px] truncate rounded-[20px]">
            <img src={case1} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="">
            {/* 1 row */}
            <div className="flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[200px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[380px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[407px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[251px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[156px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[300px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 4 item */}
              <div 
                className={"w-[270px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>

            <div className="w-[951px] text-[32px] font-[400] mt-[55px]">По запрошенным критериям помещения на рынке в столице не нашлось и клиент принял решение <b>купить помещение.</b> </div>

            <div className="flex items-center gap-[111px] mt-[67px]">
              {/* Left */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[75px] h-[75px] truncate rounded-full">
                  <img src={case1_2} alt="" />
                </div>
                <div className="">
                  <div className="text-[20px] font-[400] font-avenir">Наталья Фадеева</div>
                  <div className="text-[16px] font-[500] text-[#ccc]">Основатель FIAN</div>
                </div>
              </div>
              {/* Right */}
              <button className="w-[350px] h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[24px] rounded-[20px]">Консультация</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1