import { Link } from "react-router-dom";

export default function ServCard({ service }) {
   return (
      <div className="rounded-lg border shadow-sm  bg-gray-50 h-full">
         <div className="p-3 flex flex-col items-center justify-start gap-3">
            <i className="pb-4">{service.icon}</i>
            <h3 className="md:text-2xl text-xl text-center font-semibold text-gray-900 line-clamp-2">{service.title}</h3>
            <p className="text-gray-600 text-lg text-center h-14">{service.description}</p>
            <Link to={`/services/${service.id}`} className="w-full">
               <button className="main-btn 
               !w-full">المزيد</button>
            </Link>
         </div>
      </div>)
}
