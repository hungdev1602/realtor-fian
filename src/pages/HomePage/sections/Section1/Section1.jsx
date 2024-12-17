import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6";
import founder from "/images/Founder_1.png"
import './styles.scss'
import BoxInfoTransparent from "../../../../components/BoxInfoTransparent/BoxInfoTransparent";
const Section1 = () => {
  return (
    <>
      <div className="" id="numbers">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-[20px] lg:gap-[100px]">
          {/* Left */}
          <div className="w-[100%] lg:w-[55%] font-avenir text-[18px] sm:text-[30px] xl:text-[37px] 2xl:text-[52px]">
            <div className="uppercase">Ваш путь к </div>
            <div className="uppercase font-[700] mt-[-5px]">идеальной недвижимости</div>
            <div className="uppercase mt-[-5px]">начинается здесь</div>
          </div>
          {/* Right */}
          <div className="w-full sm:w-[400px] lg:w-[100%] lg:flex-1 relative cursor-pointer hover_info">
            <div className="w-full sm:w-[400px] h-[361px] sm:h-[410px] xl:w-[490px] xl:h-[487px] 2xl:w-[670px] 2xl:h-[687px] rounded-[20px] truncate">
              <img src={founder} alt="" className="w-full h-full object-cover"/>
            </div>
  
            <div className="py-[15px] pl-[20px] rounded-[20px] absolute bottom-[10px] sm:bottom-[40px] left-[10px] lg:left-[40px] right-[10px] lg:right-[40px] bg-[#fbfbfbc3] info">
              <div className="text-[26px] sm:text-[30px] xl:text-[40px] 2xl:text-[48px] font-[700] font-avenir text-[#333]">Наталья Фадеева</div>
              <div className="text-[10px] sm:text-[11px] xl:text-[13px] 2xl:text-[20px] font-[400] text-[#333] mb-[5px]">Основатель инвест – агенства по недвижимости FIAN</div>
              <Link to='/info' className="inline-flex items-center gap-[6px] text-[10px] sm:text-[11px] 2xl:text-[18px] font-[400] text-[#333] mt-[15px] xl:mt-[20px] 2xl:mt-[30px] ">
                Подробнее <FaAngleRight size={12}/>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[492px] xl:w-[610px] 2xl:w-[830px] mt-[10px] lg:mt-[-270px] xl:mt-[-315px] 2xl:mt-[-431px]">
          <div className="grid grid-cols-3 gap-[10px] sm:gap-[20px] 2xl:gap-[40px]">
            <BoxInfoTransparent
              widthHeight={'w-[108px] sm:w-[160px] h-[136px] sm:h-[190px] xl:w-[183px] xl:h-[209px] 2xl:w-[250px] 2xl:h-[296px]'}
              text={'35 лет'}
              desc={'на рынке'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[108px] sm:w-[160px] h-[136px] sm:h-[190px] xl:w-[183px] xl:h-[209px] 2xl:w-[250px] 2xl:h-[296px]'}
              text={'1000'}
              desc={'успешных сделок'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[108px] sm:w-[160px] h-[136px] sm:h-[190px] xl:w-[183px] xl:h-[209px] 2xl:w-[250px] 2xl:h-[296px]'}
              text={'100'}
              desc={'выгодных инвестиций'}
            />
          </div>

          <div className="mt-[30px] xl:mt-[45px] 2xl:mt-[60px]">
            <Link 
              to={'/'}
              className="flex lg:inline-flex w-[100%] lg:w-[255px] xl:w-[300px] 2xl:w-[350px] h-[50px] xl:h-[60px] 2xl:h-[75px] justify-center items-center bg-[#333] rounded-[10px] sm:rounded-[15px] xl:rounded-[20px] text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#fff] font-[500] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#fff] hover:text-[#333] transition-all duration-150"
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