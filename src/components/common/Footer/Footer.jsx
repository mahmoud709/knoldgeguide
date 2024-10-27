import { Copyright, Mail, PhoneCall, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 md:h-20 w-full flex md:flex-row flex-col justify-between items-center px-5 md:py-0 gap-y-5 py-4">
      <>
        <p className="text-white flex  items-center gap-x-0.5 text-center md:text-xl text-lg "> <Copyright /> جميع حقوق الطبع والنشر محفوظه للمنصه {new Date().getFullYear()}</p>
      </>
      <div className="social-icons flex gap-3 items-center">
        <Link to='mailto:' target="_blank">
          <Mail className="text-white w-8 h-8" />
        </Link>
        <Link to='' target="_blank">
          <Send className="text-white w-8 h-8" />
        </Link>
        <Link to='' target="_blank">
          <PhoneCall className="text-white w-8 h-8" />
        </Link>
      </div>

    </div>
  )
}
