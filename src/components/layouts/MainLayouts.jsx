import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import WhatsappIcon from "../common/contact/whatsappIcon";

export default function MainLayouts() {
   return (
      <div className="min-h-screen flex flex-col justify-between ">
         <Header />
         <div className="container mx-auto md:px-0 px-3">
            <WhatsappIcon />
            {<Outlet />}
         </div>
         <Footer />
      </div>
   )
}
