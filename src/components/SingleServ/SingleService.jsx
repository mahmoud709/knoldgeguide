import { Link, useParams } from "react-router-dom"
import { Services } from "../../data/services";
import { useEffect, useState } from "react";

export default function SingleService() {
   const { id } = useParams();
   const allServs = Services;
   const [allServices, setallServs] = useState(allServs);
   const [singleServ, setsingleServ] = useState(null);
   function getSingleService() {
      const [singleService] = allServices.filter((el) => el.id == id);
      setsingleServ(singleService);
   }
   useEffect(() => {
      getSingleService();
   }, [id])
   return (
      <>{
         singleServ !== null && <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 md:py-0 py-6">
            <div className="serv-info flex flex-col gap-2">
               <h3 className="text-3xl font-bold py-2 text-main-700">{singleServ.title}</h3>
               <p className="font-bold">{singleServ.description}</p>
               <article className="md:text-xl text-lg text-gray-700 py-3">
                  {singleServ.info}
               </article>
               <div className="flex gap-x-2 items-center">
                  <Link to='https://wa.me/+201006679604' terget="_blank">
                     <button className="main-btn">طلب الخدمة</button>
                  </Link>
               </div>
            </div>
            <div className="serv-img">
               <img src={singleServ.image} className="rounded" alt={singleServ.title}/>
            </div>
         </div>
      }</>

   )
}
