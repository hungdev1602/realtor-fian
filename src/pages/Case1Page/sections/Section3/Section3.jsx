import { FaCheck } from "react-icons/fa6"
import Title from "../../../../components/Title/Title"
import case1_2 from "/images/case1_2.png"
const Section3 = () => {
  const text = [
    {
      title: `Оценка 
      объекта `
    },
    {
      title: `Тех. анализ`
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
      <div className="mt-[120px]">
        <Title title={'Этапы'} />

        <div className="flex justify-between">
          {/* Left */}
          <div className="w-[572px]">
            {/* 1 row */}
            <div className="flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[150px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[200px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[200px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[256px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[306px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>
            {/* 3 row */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[339px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[223px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-[868px]">
            <div className="pt-[20px] px-[20px] pb-[40px] bg-[#A2999E] text-[#fff] rounded-[20px]">
              <div className="text-[64px] font-[400] font-avenir">Результат</div>
              <div className="flex items-center gap-[7px] mt-[15px] text-[20px] font-[400]">
                <FaCheck /> Помещение куплено с выгодой 35 миллионов рублей
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Сделка оформлена за 1 неделю
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Довольный клиент
              </div>
            </div>

            <div className="flex items-center gap-[111px] mt-[117px]">
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

export default Section3