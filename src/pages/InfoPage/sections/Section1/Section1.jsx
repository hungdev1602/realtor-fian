import { FaCheck, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import founder2 from "/images/Founder_2.png"
import BoxInfoTransparent from "../../../../components/BoxInfoTransparent/BoxInfoTransparent";
import { Link } from "react-router-dom";
import { RiTelegram2Line } from "react-icons/ri";
import './styles.scss'
import PopupForm from "../../../../components/PopupForm/PopupForm";
const Section1 = () => {
  const text = `Партнер национального центра 
  реконструкций и перепланировок`
  return (
    <>
      <div className="mt-[40px]">
        <div className="flex gap-[20px] lg:gap-[80px] flex-wrap lg:flex-nowrap">
          {/* Left */}
          <div className="w-[100%] lg:flex-1">
            <div className="text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[63px] font-[400] font-avenir ">Наталья Фадеева</div>
            <div className="text-[12px] sm:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[23px] font-[400] mt-[5px] sm:mt-[-5px]">Основатель инвест – агенства по недвижимости FIAN</div>
            <div className="flex items-center gap-[7px] mt-[10px] sm:mt-0 xl:mt-[5px] 2xl:mt-[15px] text-[12px] xl:text-[15px] 2xl:text-[20px] font-[400] whitespace-pre-line sm:whitespace-normal">
              <FaCheck style={{ color: '#8F4449'}}/> {text}
            </div>
            <div className="flex items-center gap-[7px] mt-[5px] sm:mt-0 xl:mt-[5px] 2xl:mt-[10px] text-[12px] xl:text-[15px] 2xl:text-[20px] font-[400]">
              <FaCheck style={{ color: '#8F4449'}}/> Член гильдии риелторов Москвы
            </div>
          </div>
          {/* Right */}
          <div className="w-[380px] sm:w-[400px] xl:w-[490px] 2xl:w-[765px] h-[391px] sm:h-[410px] xl:h-[487px] 2xl:h-[623px] rounded-[20px] truncate relative cursor-pointer hover_info">
            <img src={founder2} alt="" className="w-full h-full object-cover"/>

            <Link 
              to='#email' 
              className="hidden sm:block py-[15px] xl:py-[25px] 2xl:py-[30px] px-[80px] xl:px-[120px] 2xl:px-[211px] absolute bottom-[34px] left-[40px] right-[40px] text-[15px] 2xl:text-[20px] bg-[#f6f5f5db] rounded-[15px] xl:rounded-[20px] cursor-pointer info"
              onClick={() => {
                const element = document.getElementById('email');
                const offset = element.getBoundingClientRect().top + window.scrollY - 150;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }}
            >
              Получить консультацию
            </Link>
          </div>
        </div>

        <div className="mt-[15px] lg:mt-[-295px] xl:mt-[-320px] 2xl:mt-[-390px] w-full sm:w-[500px] xl:w-[590px] 2xl:w-[736px]">
          <div className="text-[17px] 2xl:text-[20px] font-[400]">В личном арсенале:</div>
          <div className="grid grid-cols-3 gap-[20px] mt-[10px] 2xl:mt-[20px]">
            <BoxInfoTransparent
              widthHeight={'w-[110px] sm:w-[160px] xl:w-[190px] 2xl:w-[232px] h-[89px] sm:h-[190px] xl:h-[220px] 2xl:h-[274px]'}
              text={'17'}
              desc={'квартир'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[110px] sm:w-[160px] xl:w-[190px] 2xl:w-[232px] h-[89px] sm:h-[190px] xl:h-[220px] 2xl:h-[274px]'}
              text={'6'}
              desc={'офисов'}
            />
            <BoxInfoTransparent 
              widthHeight={'w-[110px] sm:w-[160px] xl:w-[190px] 2xl:w-[232px] h-[89px] sm:h-[190px] xl:h-[220px] 2xl:h-[274px]'}
              text={'2'}
              desc={'дома'}
            />
          </div>

          {/* Socials */}
          <div className="hidden sm:flex items-center gap-[8px] h-[40px] mt-[16px] xl:mt-[26px]">
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><RiTelegram2Line size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaWhatsapp size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaInstagram size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaXTwitter  size={25}/></Link>
            <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaYoutube size={25}/></Link>
          </div>

          {/* Consultation */}
          <Link
            to={'/'}
            className="flex sm:hidden w-full h-[50px] justify-center items-center bg-[#333] text-[14px] text-[#fff] rounded-[10px] mt-[10px]"
          >
            Получить консультацию
          </Link>
        </div>
      </div>
    </>
  )
}

export default Section1