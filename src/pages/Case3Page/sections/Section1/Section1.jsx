import Title from "../../../../components/Title/Title"
import case3 from "/images/case3_2.png"
const Section1 = () => {
  const text = [
    {
      title: `500 000 ₽ 
        перепланировка `
    },
    {
      title: `100 000 ₽ 
        раскадастривание`
    },
    {
      title: `1 300 000 ₽ 
        ремонт `
    },
    {
      title: `19 000 000₽ 
        вложения`
    }
  ]
  return (
    <>
      <div className="mt-[120px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-[764px] h-[432px] rounded-[20px] truncate">
            <img src={case3} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="w-[694px] mt-[-15px]">
            <Title title={'Цифры'} />

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
                className={"w-[417px] h-[150px] rounded-[20px] flex items-center justify-center relative bg-[#E8E7E7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}
              >
                <span className="text-[20px] font-[900] absolute top-[15px] left-[15px]">4</span>
                <div className="text-[18px] font-[500] text-center whitespace-pre-line ">{text[3].title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1