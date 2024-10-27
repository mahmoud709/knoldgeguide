import { Link } from 'react-router-dom'
import { MessageCircle } from "lucide-react";
export default function WhatsappIcon() {
  return (
     <div className="fixed md:bottom-10 bottom-5 md:left-10 left-5 z-50">
        <Link to="https://wa.me/+" target="_blank">
           <div className="icon bg-[#25D366] rounded-full h-full w-fit p-2 mx-auto md:mx-0">
              <MessageCircle className="w-8 h-8 text-white" />
           </div>
        </Link>
     </div>  )
}
