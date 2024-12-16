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
      <div className="container mx-auto mt-[80px] sm:mt-[120px]">
        <Title title={'Этапы'} />

        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {/* Left */}
          <div className="w-full lg:w-[520px] xl:w-[572px] mb-[20px] lg:mb-0">
            {/* On PC */}
            {/* 1 row */}
            <div className="hidden sm:flex items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[150px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[15px] left-[15px]">1</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[15px] left-[15px]">2</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[200px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[15px] left-[15px]">3</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="hidden sm:flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[256px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[306px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[18px] 2xl:text-[20px] font-[900] absolute top-[15px] left-[15px]">5</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>
            {/* 3 row */}
            <div className="hidden sm:flex items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[339px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">6</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[223px] h-[120px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">7</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>

            {/* On Mobile */}
            {/* 1 row */}
            <div className="flex sm:hidden items-center gap-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">1</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[0].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">2</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[1].title}</div>
              </div>
            </div>
            {/* 2 row */}
            <div className="flex sm:hidden items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[103px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">3</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[2].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[102px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">4</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
              {/* 3 item */}
              <div 
                className={"w-[155px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">5</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[4].title}</div>
              </div>
            </div>
            {/* 3 row */}
            <div className="flex sm:hidden items-center gap-[10px] mt-[10px]">
              {/* 1 item */}
              <div 
                className={"w-[185px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">6</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[5].title}</div>
              </div>
              {/* 2 item */}
              <div 
                className={"w-[185px] h-[90px] 2xl:h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[10px] 2xl:text-[20px] font-[900] absolute top-[10px] left-[10px]">7</span>
                <div className="text-[12px] font-[500] text-center whitespace-pre-line ">{text[6].title}</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hidden sm:block w-[600px] 2xl:w-[868px]">
            <div className="pt-[20px] px-[20px] pb-[30px] 2xl:pb-[40px] bg-[#8F4449] text-[#fff] rounded-[20px]">
              <div className="text-[48px] 2xl:text-[64px] font-[400] font-avenir">Результат</div>
              <div className="flex items-center gap-[7px] mt-[5px] 2xl:mt-[15px] text-[20px] font-[400]">
                <FaCheck /> Помещение куплено с выгодой 35 миллионов рублей
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Сделка оформлена за 1 неделю
              </div>
              <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
                <FaCheck /> Довольный клиент
              </div>
            </div>

            <div className="flex items-center justify-between 2xl:gap-[111px] mt-[35px] xl:mt-[74px] 2xl:mt-[117px]">
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
              <button className="w-[290px] 2xl:w-[350px] h-[70px] 2xl:h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[20px] 2xl:text-[24px] rounded-[20px]">Консультация</button>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden pt-[20px] pb-[15px] 2xl:pb-[40px] bg-[#8F4449] text-[#fff] rounded-[20px] mt-[80px]">
        <div className="container mx-auto">
          <div className="text-[24px] 2xl:text-[64px] font-[400] font-avenir">Результат</div>
          <div className="flex items-center gap-[7px] mt-[5px] 2xl:mt-[15px] text-[12px] font-[400]">
            <FaCheck /> Помещение куплено с выгодой 35 миллионов рублей
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400]">
            <FaCheck /> Сделка оформлена за 1 неделю
          </div>
          <div className="flex items-center gap-[7px] mt-[10px] text-[12px] font-[400]">
            <FaCheck /> Довольный клиент
          </div>
          <button className="w-full 2xl:w-[350px] h-[50px] 2xl:h-[75px] inline-flex items-center justify-center bg-[#333] text-[#fff] text-[14px] 2xl:text-[24px] rounded-[20px] mt-[15px]">Консультация</button>
        </div>
      </div>
    </>
  )
}

export default Section3