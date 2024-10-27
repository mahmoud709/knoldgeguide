import { Link } from "react-router-dom";
import { Services } from "../../../data/services.jsx";
import ServCard from "./ServCard.jsx";

export default function PopularServs({ numsOfServs, category }) {
   const servs = Services;
   return (
      <>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start gap-8 pb-4">
            {
               category === "allServices" || ""
                  ? servs.slice(0, numsOfServs).map((service, index) => (
                     <ServCard service={service} key={index} />
                  ))
                  : servs
                     .filter((el) => el.category === category)
                     .slice(0, numsOfServs).map((service, index) => (
                        <ServCard service={service} key={index} />
                     ))
            }
         </div>
         {numsOfServs <= 4 && <div className="flex justify-center items-center pt-8">
            <Link to='services'>
               <button className="main-btn"> المزيد من الخدمات</button>
            </Link>
         </div>}
      </>
   );
}
