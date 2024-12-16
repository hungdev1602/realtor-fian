/* eslint-disable react/no-unknown-property */
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [widthForVideo, setWidthForVideo] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [size, setSize] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateWidthAndHeight = () => {
      if (width >= 1620) {
        setWidthForVideo(910);
        setHeight(387);
      } else if (width > 1200 && width < 1620) {
        setWidthForVideo(700);
        setHeight(387);
        setSize(15)
      }
      else if (width > 992 && width < 1200) {
        setWidthForVideo(600);
        setHeight(387);
        setSize(14)
      } else if(width > 768 && width < 992) {
        setWidthForVideo(600);
        setHeight((width / 1160) * 545);
      } else if(width > 576 && width < 768) {
        setWidthForVideo(576);
        setHeight((width / 1160) * 545);
      }
      else{
        setWidthForVideo(195);
        setHeight(230);
        setSize(15)
      }
    };

    calculateWidthAndHeight();
  }, [width]);

  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop - 150, behavior: 'smooth' });
      }, 100); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <>
      <footer className="mt-[80px] sm:mt-[120px] bg-[#A2999E] py-[40px]">
        <div className="container mx-auto">
          <div className="flex gap-[20px] 2xl:gap-[40px] text-[#fff]">
            {/* Left */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
              <a href="https://yandex.ru/maps/org/mirea_rossiyskiy_tekhnologicheskiy_universit..." style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>МИРЭА, Российский технологический университет</a>
              <a href="https://yandex.ru/maps/213/moscow/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>ВУЗ в Москве</a>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.480409%2C55.669986&mode=search&oid=1084832794&ol=biz&z=16.63" 
                width={widthForVideo} 
                height={height} 
                frameborder="1" 
                allowfullscreen="true" 
                style={{ position: 'relative', borderRadius: '10px' }}
              />
            </div>

            {/* Right */}
            <div className="font-avenir w-[166px] sm:w-[350px] lg:w-[500px] 2xl:flex-1">
              <div className="text-[12px] sm:text-[18px] font-[500]">Социальные сети</div>
              <div className="mt-[10px] sm:mt-[20px] flex flex-wrap lg:flex-nowrap gap-[10px] lg:gap-[20px] text-[10px] 2xl:text-[16px]">
                {/* Left 4 item */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] sm:gap-[20px]">
                  {/* Socials */}
                  <div className="flex items-center gap-[4px] sm:gap-[8px] h-[25px] sm:h-[30px] 2xl:h-[40px]">
                    <Link to={'/'} target="_blank" className="w-[20px] sm:w-[30px] 2xl:w-[40px] h-[20px] sm:h-[30px] 2xl:h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[5px] sm:rounded-[10px]"><RiTelegram2Line size={size}/></Link>
                    <Link to={'/'} target="_blank" className="w-[20px] sm:w-[30px] 2xl:w-[40px] h-[20px] sm:h-[30px] 2xl:h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[5px] sm:rounded-[10px]"><FaWhatsapp size={size}/></Link>
                    <Link to={'/'} target="_blank" className="w-[20px] sm:w-[30px] 2xl:w-[40px] h-[20px] sm:h-[30px] 2xl:h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[5px] sm:rounded-[10px]"><FaInstagram size={size}/></Link>
                    <Link to={'/'} target="_blank" className="w-[20px] sm:w-[30px] 2xl:w-[40px] h-[20px] sm:h-[30px] 2xl:h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[5px] sm:rounded-[10px]"><FaXTwitter  size={size}/></Link>
                    <Link to={'/'} target="_blank" className="w-[20px] sm:w-[30px] 2xl:w-[40px] h-[20px] sm:h-[30px] 2xl:h-[40px] bg-[#fff] text-[#000] flex items-center justify-center rounded-[5px] sm:rounded-[10px]"><FaYoutube size={size}/></Link>
                  </div>
                  {/* Address */}
                  <div className="w-[166px] sm:w-[158px] 2xl:w-[237px] flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] font-[400] rounded-[10px] h-[25px] sm:h-[30px] 2xl:h-[40px]">
                    <FaMapMarkerAlt size={size}/> Большой тишинский 8с1
                  </div>
                  {/* Email */}
                  <div className="w-[166px] sm:w-[158px] 2xl:w-[237px] flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] font-[400] rounded-[10px] h-[25px] sm:h-[30px] 2xl:h-[40px]">
                    <MdOutlineEmail size={size}/> fianrealestate@yandex.ru
                  </div>
                  {/* Phone */}
                  <div className="w-[166px] sm:w-[158px] 2xl:w-[237px] flex items-center gap-[8px] pl-[6px] bg-[#fff] text-[#000] font-[400] rounded-[10px] h-[25px] sm:h-[30px] 2xl:h-[40px]">
                    <FiPhone size={size} className="mr-[18px] sm:mr-[32px]"/> +7 999 999 99 99
                  </div>
                </div>
                {/* Right schedule */}
                <div className="bg-[#fff] text-[#000] rounded-[10px] w-[166px] sm:w-[193px] pb-[5px] sm:pb-0 pt-[5px] sm:pt-[8px] pl-[8px] sm:pl-[15px]">
                  <div className="text-[12px] sm:text-[15px] 2xl:text-[18px] font-[500]">Часы работы</div>
                  <div className="mt-[5px] sm:mt-[10px] font-[400]">пн - пт: 10:00 - 19:00</div>
                  <div className="font-[400]">cб - вс: 11:00 - 18:00</div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="mt-[70px]">Навигация</div>
                <div className="grid grid-cols-3 gap-[5px] mt-[20px] w-[550px] 2xl:w-[651px] text-[12px] 2xl:text-[16px]">
                  <Link to={'/info'} className="text-[#fff]">Об основателе</Link>
                  <Link to={'#cases'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#cases')}>Кейсы</Link>
                  <Link to={'#advantages'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#advantages')}>Преимущества</Link>
                  <Link to={'#numbers'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#numbers')}>Цифры</Link>
                  <Link to={'#services'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#services')}>Услуги</Link>
                  <Link to={'#faq'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#faq')}>Часто задаваемые вопросы</Link>
                </div>
  
                <Link to={'/'} className="inline-block mt-[60px] text-[12px] text-[#fff]">Политика конфиденциальности</Link>
              </div>
            </div>
          </div>
          {/* Policy */}
          <div className="block lg:hidden text-[#FFF] mt-[20px]">
            <div className="">Навигация</div>
            <div className="grid grid-cols-[1fr_0.5fr_2fr] gap-[10px] sm:gap-[5px] mt-[20px] w-[330px] sm:w-[550px] 2xl:w-[651px] text-[12px] 2xl:text-[16px]">
              <Link to={'/info'} className="text-[#fff]">Об основателе</Link>
              <Link to={'#cases'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#cases')}>Кейсы</Link>
              <Link to={'#advantages'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#advantages')}>Преимущества</Link>
              <Link to={'#numbers'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#numbers')}>Цифры</Link>
              <Link to={'#services'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#services')}>Услуги</Link>
              <Link to={'#faq'} className="text-[#fff]" onClick={(e) => handleScrollToSection(e, '#faq')}>Часто задаваемые вопросы</Link>
            </div>

            <Link to={'/'} className="inline-block mt-[30px] lg:mt-[60px] text-[12px] text-[#fff]">Политика конфиденциальности</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
