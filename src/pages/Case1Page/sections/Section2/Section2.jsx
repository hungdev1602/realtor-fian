import Title from "../../../../components/Title/Title"
import case1 from "/images/case1_3.png"
const Section2 = () => {
  const text = [
    {
      title: `клиент находился 
      за рубежом `
    },
    {
      title: `тех. анализ и 
      заключение`
    },
    {
      title: `юр. проверка 
      продавца и помещения`
    },
    {
      title: `согласование  
      ДКП`
    },
    {
      title: `Большая вероятность 
      срыва сделки`
    }
  ]
  return (
    <>
      <div className="mt-[80px] sm:mt-[120px]">
        <Title title={'Решение'}/>

        <div className="flex flex-wrap xl:flex-nowrap gap-[15px] xl:gap-[30px] 2xl:gap-[180px]">
          {/* Left */}

          <div className="w-full xl:w-auto text-[#fff]">
            <div className="w-full xl:w-[615px] 2xl:w-[694px] py-[18px] bg-[#8F4449] text-[14px] sm:text-[20px] 2xl:text-[28px] font-[500] text-center rounded-[10px] sm:rounded-[20px]">Определили бюджет 100.000.000 руб. </div>
            <div className="w-full xl:w-[615px] 2xl:w-[694px] py-[18px] bg-[#8F4449] text-[14px] sm:text-[20px] 2xl:text-[28px] font-[500] text-center rounded-[10px] sm:rounded-[20px] mt-[10px] sm:mt-[20px]">Нашли единственное отвечающее запросу: <br />Подобные помещения стоили от 130.000.000 руб. </div>
          </div>

          {/* Right */}
          <div className="w-full xl:w-[555px] 2xl:w-[746px] h-[270px] sm:h-[558px] 2xl:h-[695px] truncate rounded-[20px]">
            <img src={case1} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="mt-[20px] xl:mt-[-343px] 2xl:mt-[-450px]">
          <Title title={'Сложности'} />

          <div className="">
            {/* On PC */}
            {/* 1 row */}
            <div className="hidden sm:flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[273px] 2xl:w-[281px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[331px] 2xl:w-[403px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="hidden sm:flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[230px] 2xl:w-[267px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[140px] 2xl:w-[170px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[225px] 2xl:w-[237px] h-[110px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>

            {/* On Mobile */}
            {/* 1 row */}
            <div className="flex sm:hidden  items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[120px] 2xl:w-[281px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">1</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[93px] 2xl:w-[403px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">2</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[146px] 2xl:w-[403px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex sm:hidden items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[172px] 2xl:w-[267px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">3</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[198px] 2xl:w-[170px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] 2xl:top-[15px] left-[10px] 2xl:left-[15px]">4</span>
                <div className="text-[10px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
            </div>
            <button className="inline-flex sm:hidden w-full 2xl:w-[350px] h-[50px] 2xl:h-[75px] items-center justify-center bg-[#333] text-[#fff] text-[14px] 2xl:text-[24px] rounded-[20px] mt-[15px]">Консультация</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2