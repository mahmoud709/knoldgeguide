import { Link } from 'react-router-dom'
import {WhatsApp } from "lucide-react";
export default function WhatsappIcon() {
  return (
     <div className="fixed bottom-10 right-10 z-50">
        <Link href="https://wa.me/+" target="_blank">
           <div className="icon bg-[#25D366] rounded-full h-full w-fit p-2 mx-auto md:mx-0">
              <WhatsApp className="w-10 h-10 text-secondary" />
           </div>
        </Link>
     </div>  )
}
