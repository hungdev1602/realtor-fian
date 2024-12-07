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
              <Link to={'/'} className="">Кейсы</Link>
              <Link to={'/'} className="">Услуги</Link>
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