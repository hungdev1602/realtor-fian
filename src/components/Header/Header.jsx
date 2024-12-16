import { Link } from "react-router-dom"
import logo from "/images/logo_fian.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const Header = () => {
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
      <header className="py-[10px] sm:py-[20px] sticky top-0 left-0 right-0 bg-[#f3f3f3] z-[999]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to='/' className="w-[28px] h-[32px] sm:w-[60px] sm:h-[70px] 2xl:w-[73px] 2xl:h-[83px]">
              <img 
                src={logo} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </Link>
  
            <div className="hidden lg:flex items-center gap-[40px] p-[39px] 2xl:p-[40px] bg-[#fff] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] 2xl:ml-[320px]">
              <Link to={'/info'} className="">Об основателе</Link>
              <Link 
                to={'#numbers'} 
                className=""
                onClick={(e) => handleScrollToSection(e, '#numbers')}
              >
                Цифры
              </Link>
              <div className="group relative">
                <div className="cursor-pointer" onClick={(e) => handleScrollToSection(e, '#cases')}>Кейсы •</div>
                <div className="absolute left-[-15px] hidden group-hover:block w-[300px] text-[18px] 2xl:text-[20px] bg-white shadow-md rounded-md">
                  <Link to={'/case1'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">БЦ ЗАО</Link>
                  <Link to={'/case2'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">БЦ СЗАО</Link>
                  <Link to={'/case3'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">БЦ Баумонский</Link>
                </div>
              </div>
              <div className="group relative">
                <div className="cursor-pointer" onClick={(e) => handleScrollToSection(e, '#services')}>Услуги •</div>
                <div className="absolute left-[-15px] hidden group-hover:block w-[300px] text-[20px] bg-white shadow-md rounded-md">
                  <Link to={'/commercial'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Коммерческая недвижимость</Link>
                  <Link to={'/residential'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Жилая недвижимость</Link>
                  <Link to={'/investments'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Инвестиции в недвижимость</Link>
                  <Link to={'/redevelopment'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Перепланировка и реконструкции</Link>
                </div>
              </div>
              <Link 
                to={'#advantages'} 
                className=""
                onClick={(e) => handleScrollToSection(e, '#advantages')}
              >
                Преимущества
              </Link>
            </div>
  
            <div className="flex items-center gap-[20px]">
              <Link to='/' className="inline-block py-[9px] sm:py-[14px] px-[20px] sm:px-[40px] lg:px-[70px] 2xl:px-[81px] text-[10px] sm:text-[16px] text-[#fff] bg-[#333333] rounded-[10px] sm:rounded-[15px]">
                Связаться
              </Link>
  
              <button className="inline-block lg:hidden">
                <RxHamburgerMenu size={25}/>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header