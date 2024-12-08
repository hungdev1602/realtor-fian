import { FaCheck, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import founder2 from "/images/Founder_2.png"
import BoxInfoTransparent from "../../../../components/BoxInfoTransparent/BoxInfoTransparent";
import { Link } from "react-router-dom";
import { RiTelegram2Line } from "react-icons/ri";
const Section1 = () => {
  return (
    <>
      <div className="mt-[40px]">
        <div className="flex gap-[200px]">
          {/* Left */}
          <div className="flex-1">
            <div className="text-[64px] font-[400] font-avenir ">Наталья Фадеева</div>
            <div className="text-[24px] font-[400] mt-[-5px]">Основатель инвест – агенства по недвижимости FIAN</div>
            <div className="flex items-center gap-[7px] mt-[15px] text-[20px] font-[400]">
              <FaCheck style={{ color: '#8F4449'}}/> Партнер национального центра реконструкций и перепланировок
            </div>
            <div className="flex items-center gap-[7px] mt-[10px] text-[20px] font-[400]">
              <FaCheck style={{ color: '#8F4449'}}/> Член гильдии риелторов Москвы
            </div>
          </div>
          {/* Right */}
          <div className="w-[765px] h-[623px] rounded-[20px] truncate relative">
            <img src={founder2} alt="" className="w-full h-full object-cover"/>

            <div className="py-[30px] px-[211px] absolute bottom-[34px] left-[40px] right-[40px] bg-[#f6f5f5db] rounded-[20px] cursor-pointer">Получить консультацию</div>
          </div>
        </div>

        <div className="mt-[-390px] w-[736px]">
          <div className="text-[20px] font-[400]">В личном арсенале:</div>
          <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
            <BoxInfoTransparent
              widthHeight={'w-[232px] h-[274px]'}
              text={'17'}
              desc={'квартир'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[232px] h-[274px]'}
              text={'6'}
              desc={'офисов'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[232px] h-[274px]'}
              text={'2'}
              desc={'дома'}
            />
          </div>

          {/* Socials */}
          <div className="flex items-center gap-[8px] h-[40px] mt-[26px]">
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><RiTelegram2Line size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaWhatsapp size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaInstagram size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaXTwitter  size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaYoutube size={25}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1