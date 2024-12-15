import { Link } from "react-router-dom"
import logo from "/images/logo_fian.png"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
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
  
            <div className="hidden lg:flex items-center gap-[40px] p-[30px] 2xl:p-[40px] bg-[#fff] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)]">
              <Link to={'/info'} className="">Об основателе</Link>
              <Link to={'/'} className="">Цифры</Link>
              <div className="group relative">
                <div className="cursor-pointer">Кейсы •</div>
                <div className="absolute left-[-15px] hidden group-hover:block w-[300px] text-[20px] bg-white shadow-md rounded-md">
                  <Link to={'/case1'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Кейс 1</Link>
                  <Link to={'/case2'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Кейс 2</Link>
                  <Link to={'/case3'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Кейс 3</Link>
                </div>
              </div>
              <div className="group relative">
                <div className="cursor-pointer">Услуги •</div>
                <div className="absolute left-[-15px] hidden group-hover:block w-[300px] text-[20px] bg-white shadow-md rounded-md">
                  <Link to={'/commercial'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Коммерческая недвижимость</Link>
                  <Link to={'/residential'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Жилая недвижимость</Link>
                  <Link to={'/investments'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Инвестиции в недвижимость</Link>
                  <Link to={'/redevelopment'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Перепланировка и реконструкции</Link>
                </div>
              </div>
              <Link to={'/'} className="">Преимущества</Link>
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