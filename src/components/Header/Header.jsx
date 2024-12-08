import { Link } from "react-router-dom"
import logo from "/images/logo.svg"
const Header = () => {
  return (
    <>
      <header className=" py-[20px] sticky top-0 left-0 right-0 bg-[#f8f8f8f3] z-[999]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
  
            <div className="flex items-center gap-[40px] py-[39px] px-[40px] bg-[#fff] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)]">
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
  
            <Link to='/' className="inline-block py-[14px] px-[81px] text-[#fff] bg-[#333333] rounded-[15px]">
              Связаться
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header