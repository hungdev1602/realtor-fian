/* eslint-disable react/no-unknown-property */
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-[120px] bg-[#A2999E] py-[40px]">
        <div className="container mx-auto">
          <div className="flex gap-[40px] text-[#fff]">
            {/* Left */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
              <a href="https://yandex.ru/maps/org/mirea_rossiyskiy_tekhnologicheskiy_universit..." style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>МИРЭА, Российский технологический университет</a>
              <a href="https://yandex.ru/maps/213/moscow/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>ВУЗ в Москве</a>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.480409%2C55.669986&mode=search&oid=1084832794&ol=biz&z=16.63" 
                width="910" 
                height="387" 
                frameborder="1" 
                allowfullscreen="true" 
                style={{ position: 'relative', borderRadius: '10px' }}
              />
            </div>

            {/* Right */}
            <div className="font-avenir">
              <div className="text-[18px] font-[500]">Социальные сети</div>
              <div className="mt-[20px] flex gap-[20px]">
                {/* Left 4 item */}
                <div className="grid grid-cols-2 gap-[20px]">
                  {/* Socials */}
                  <div className="flex items-center gap-[8px] h-[40px]">
                    <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[10px]"><RiTelegram2Line size={25}/></Link>
                    <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[10px]"><FaWhatsapp size={25}/></Link>
                    <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[10px]"><FaInstagram size={25}/></Link>
                    <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[10px]"><FaXTwitter  size={25}/></Link>
                    <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[10px]"><FaYoutube size={25}/></Link>
                  </div>
                  {/* Address */}
                  <div className="flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] rounded-[10px] h-[40px]">
                    <FaMapMarkerAlt size={25}/> Москва, Арбат 29к2
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] rounded-[10px] h-[40px]">
                    <MdOutlineEmail size={25}/> fianrealestate@yandex.ru
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] rounded-[10px] h-[40px]">
                    <FiPhone  size={25}/> +7 999 999 99 99
                  </div>
                </div>
                {/* Right schedule */}
                <div className="bg-[#fff] text-[#000] rounded-[10px] w-[193px] pt-[8px] pl-[15px]">
                  <div className="text-[18px]">Часы работы</div>
                  <div className="mt-[10px]">пн - пт: 10:00 - 19:00</div>
                  <div className="">cб - вс: 11:00 - 18:00</div>
                </div>
              </div>

              <div className="mt-[70px]">Навигация</div>
              <div className="grid grid-cols-3 gap-[5px] mt-[20px] w-[651px]">
                <Link to={'/info'} className="text-[#fff]">Об основателе</Link>
                <Link to={'/about'} className="text-[#fff]">Кейсы</Link>
                <Link to={'/services'} className="text-[#fff]">Преимущества</Link>
                <Link to={'/news'} className="text-[#fff]">Цифры</Link>
                <Link to={'/blog'} className="text-[#fff]">Услуги</Link>
                <Link to={'/contact'} className="text-[#fff]">Часто задаваемые вопросы</Link>
              </div>

              <Link to={'/'} className="inline-block mt-[60px] text-[12px] text-[#fff]">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
