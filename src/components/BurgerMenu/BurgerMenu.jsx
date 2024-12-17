/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom"
import { IoMdCloseCircle } from "react-icons/io";
import logo from "/images/logo_fian.png"
import { useState } from "react";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      setOpenBurgerMenu(false)
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 100); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <>
      <div className={"fixed top-0 left-0 right-0 h-[1000px] bg-[#F3F3F3] z-[9999] pt-[10px] overflow-y-scroll " + (openBurgerMenu ? "visible opacity-100" : "invisible opacity-0")}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div 
              className="w-[28px] h-[32px]"
              onClick={() => setOpenBurgerMenu(false)}
            >
              <img src={logo} alt="" />
            </div>
            <div className="">
              <div className="flex items-center gap-[10px]">
                <Link to='/' className="inline-block py-[9px] sm:py-[14px] px-[20px] sm:px-[40px] lg:px-[70px] 2xl:px-[81px] text-[10px] sm:text-[16px] text-[#fff] bg-[#333333] rounded-[10px] sm:rounded-[15px]">
                  Связаться
                </Link>
    
                <button 
                  className="inline-block lg:hidden"
                  onClick={() => setOpenBurgerMenu(false)}
                >
                  <IoMdCloseCircle size={31} style={{color: "#333"}}/>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="flex flex-col gap-[10px] text-[20px]">
              <Link 
                to={'/'} 
                className="flex h-[50px] items-center justify-center bg-[#fff] rounded-[20px]"
                onClick={() => setOpenBurgerMenu(false)}
              >
                Главная
              </Link>
              <Link 
                to={'/info'} 
                className="flex h-[50px] items-center justify-center bg-[#fff] rounded-[20px]"
                onClick={() => setOpenBurgerMenu(false)}
              >
                Об основателе
              </Link>
              <div 
                className="p-[10px] bg-[#fff] rounded-[20px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="text-center">Кейсы</div>
                <div 
                  className={`mt-[10px] text-[16px] flex flex-col gap-[10px] transition-all duration-300 linear ${isOpen ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
                  style={{ maxHeight: isOpen ? '10000px' : '0', opacity: isOpen ? '1' : '0', marginTop: isOpen ? '30px' : '0' }}
                >
                  <Link 
                    to={'/case1'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Бц ЗАО
                  </Link>
                  <Link 
                    to={'/case2'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Бц СЗАО
                  </Link>
                  <Link 
                    to={'/case3'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Бц Баумонский
                  </Link>
                </div>
              </div>
              {/* Services */}
              <div 
                className="p-[10px] bg-[#fff] rounded-[20px]"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <div className="text-center">Услуги</div>
                <div 
                  className={`mt-[10px] text-[16px] flex flex-col gap-[10px] transition-all duration-300 linear ${isOpen2 ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
                  style={{ maxHeight: isOpen2 ? '10000px' : '0', opacity: isOpen2 ? '1' : '0', marginTop: isOpen2 ? '30px' : '0' }}
                >
                  <Link 
                    to={'/commercial'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                   >
                    Коммерческая недвижимость
                  </Link>
                  <Link 
                    to={'/residential'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Жилая недвижимость
                  </Link>
                  <Link 
                    to={'/investments'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Инвестиции в недвижимость
                  </Link>
                  <Link 
                    to={'/redevelopment'} 
                    className="flex h-[40px] items-center justify-center bg-[#333333] text-[#fff] rounded-[20px]"
                    onClick={() => setOpenBurgerMenu(false)}
                  >
                    Перепланировка и реконструкция
                  </Link>
                </div>
              </div>
              <Link 
                to={'#advantages'} 
                className="flex h-[50px] items-center justify-center bg-[#fff] rounded-[20px]"
                onClick={(e) => handleScrollToSection(e, '#advantages')}
              >
                Премущества
              </Link>
            </div>
            <div className="mt-[40px]">
              <div className="text-[14px] font-[400] text-center">fianrealestate@yandex.ru</div>
              <div className="font-avenir text-[12px] font-[400] text-center mt-[10px]">+7 999 999 99 99</div>
              <div className="flex items-center justify-center gap-[8px] h-[40px] mt-[20px]">
                <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><RiTelegram2Line size={15}/></Link>
                <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaWhatsapp size={15}/></Link>
                <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaInstagram size={15}/></Link>
                <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaXTwitter  size={15}/></Link>
                <Link to={'/'} target="_blank" className="w-[40px] h-[40px] bg-[#999] text-[#fff] flex items-center justify-center rounded-[10px]"><FaYoutube size={15}/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
