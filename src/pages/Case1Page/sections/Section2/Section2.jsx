import Title from "../../../../components/Title/Title"
import case1 from "/images/case1_3.png"
const Section2 = () => {
  const text = [
    {
      title: `клиент находился 
      за рубежом `
    },
    {
      title: `технический анализ и 
      заключение`
    },
    {
      title: `юридическая проверка 
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
      <div className="mt-[120px]">
        <Title title={'Решение'}/>

        <div className="flex gap-[180px]">
          {/* Left */}

          <div className="text-[#fff]">
            <div className="w-[694px] py-[24px] bg-[#A2999E] text-[28px] font-[500] text-center rounded-[20px]">Определили бюджет 100.000.000 руб. </div>
            <div className="w-[694px] py-[24px] bg-[#A2999E] text-[28px] font-[500] text-center rounded-[20px] mt-[20px]">Нашли единственное отвечающее запросу: Подобные помещения стоили от 130.000.000 руб. </div>
          </div>

          {/* Right */}
          <div className="w-[746px] h-[695px] truncate rounded-[20px]">
            <img src={case1} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="mt-[-450px]">
          <Title title={'Сложности'} />

          <div className="">
            {/* 1 row */}
            <div className="flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[281px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[403px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[267px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[170px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[237px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2