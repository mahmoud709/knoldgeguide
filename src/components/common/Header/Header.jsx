import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/images/Logo.png";

export default function Header() {
  const [toggle, settoggle] = useState(false);
  function handlToggle() {
    settoggle(!toggle);
  }
  return (
    <header className="bg-gray-50 flex justify-between items-center py-3 px-8 shadow-sm fixed top-0 left-0 right-0 md:h-[80px] h-[60px] z-50">
      <Link to='/' className="logo">
        <img src={logo} alt="logo" style={{ width: "150px" }} />
      </Link>
      <ul className={`md:flex gap-5 items-center hidden `}>
        <li className="text-xl font-medium" >
          <NavLink to='/'>الرئيسية</NavLink>
        </li>
        <li className="text-xl font-medium" >
          <NavLink to='/about-us'>من نحن</NavLink>
        </li>
        <li className="text-xl font-medium" >
          <NavLink to='/services'>الخدمات</NavLink>
        </li>
        <li className="text-xl font-medium" >
          <NavLink to='/contact'>تواصل معنا</NavLink>
        </li>
      </ul>
      <ul className={`${toggle ? 'flex flex-col items-center gap-y-4 absolute top-[60px] left-0 right-0 w-full bg-gray-50 py-6' : "hidden"}`}>
        <li className="text-xl font-medium" onClick={handlToggle}>
          <NavLink to='/'>الرئيسية</NavLink>
        </li>
        <li className="text-xl font-medium" onClick={handlToggle}>
          <NavLink to='/about-us'>من نحن</NavLink>
        </li>
        <li className="text-xl font-medium" onClick={handlToggle}>
          <NavLink to='/services'>الخدمات</NavLink>
        </li>
        <li className="text-xl font-medium" onClick={handlToggle}>
          <NavLink to='/contact'>تواصل معنا</NavLink>
        </li>
      </ul>
      <div className="md:hidden flex" onClick={handlToggle}>
        <Menu className="w-10 h-10" />
      </div>
    </header>
  )
}
