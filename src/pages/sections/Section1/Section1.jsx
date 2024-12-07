import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6";
import founder from "/images/Founder_1.png"
import './styles.scss'
import BoxInfoTransparent from "../../../components/BoxInfoTransparent/BoxInfoTransparent";
const Section1 = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-between gap-[116px]">
          {/* Left */}
          <div className="w-[52%] font-avenir text-[53px]">
            <div className="uppercase">Ваш путь к </div>
            <div className="uppercase font-[700] mt-[-5px]">идеальной недвижимости</div>
            <div className="uppercase mt-[-5px]">начинается здесь</div>
          </div>
          {/* Right */}
          <div className="flex-1 relative cursor-pointer hover_info">
            <div className="w-[670px] h-[687px] rounded-[20px] truncate">
              <img src={founder} alt="" className="w-full h-full object-cover"/>
            </div>
  
            <div className="py-[15px] pl-[20px] rounded-[20px] absolute bottom-[40px] left-[40px] right-[40px] bg-[#fbfbfbc3] info">
              <div className="text-[48px] font-[700] font-avenir text-[#333]">Наталья Фадеева</div>
              <div className="text-[20px] font-[400] text-[#333] mb-[5px]">Основатель инвест – агенства по недвижимости FIAN</div>
              <Link to='/info' className="inline-flex items-center gap-[6px] text-[18px] font-[400] text-[#333] mt-[30px] ">
                Подробнее <FaAngleRight size={12}/>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[830px] mt-[-431px]">
          <div className="grid grid-cols-3 gap-[40px]">
            <BoxInfoTransparent 
              widthHeight={'w-[250px] h-[296px]'}
              text={'35 лет'}
              desc={'на рынке'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[250px] h-[296px]'}
              text={'1000'}
              desc={'успешных сделок'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[250px] h-[296px]'}
              text={'100'}
              desc={'выгодных инвестиций'}
            />
          </div>

          <div className="mt-[60px]">
            <Link 
              to={'/'}
              className="inline-flex w-[350px] h-[75px] justify-center items-center bg-[#333] rounded-[20px] text-[24px] text-[#fff] font-[500]"
            >
              Начать работу
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1