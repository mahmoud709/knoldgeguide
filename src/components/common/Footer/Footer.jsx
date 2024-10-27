import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-800 h-16 flex justify-center items-center">
      <p className="text-white flex justify-center items-center gap-2 md:text-xl text-sm "> <Copyright /> جميع حقوق الطبع والنشر محفوظه للمنصه {new Date().getFullYear()}</p>
    </div>)
}
