import { Link, useParams } from "react-router-dom"
import { Services } from "../../data/services";
import { useEffect, useState } from "react";

export default function SingleService() {
   const { id } = useParams();
   // const allServs = Services;
   const [allServs, setallServs] = useState(Services);
   const [singleServ, setsingleServ] = useState(null);
   useEffect(() => {
      const [singleService] = allServs.filter((el) => el.id == id);
      setsingleServ(singleService);
   }, [])
   return (
      <>{
         singleServ !== null && <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 md:py-0 py-6">
            <div className="serv-info flex flex-col gap-2">
               <h3 className="text-3xl font-bold py-2 text-main-700">{singleServ.title}</h3>
               <p className="font-bold">{singleServ.description}</p>
               <article className="md:text-xl text-lg text-gray-700 py-3">
                  {singleServ.info}
               </article>
               <Link to='https://wa.me/+' terget="_blank">
                  <button className="main-btn">طلب الخدمه</button>
               </Link>
            </div>
            <div className="serv-img">
               <img src={singleServ.image} className="rounded" alt={singleServ.title} loading="lazy" />
            </div>
         </div>
      }</>

   )
}
