import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [toggle, settoggle] = useState(false);
  function handlToggle() {
    settoggle(!toggle);
  }
  return (
    <header className="bg-gray-50 flex justify-between items-center p-3 shadow-sm fixed top-0 left-0 right-0 h-[70px] z-50">
      <div className="logo">
      </div>
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
      <ul className={`${toggle ? 'flex flex-col items-center gap-y-4 absolute top-[70px] left-0 right-0 w-full bg-gray-50 py-6' : "hidden"}`}>
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
