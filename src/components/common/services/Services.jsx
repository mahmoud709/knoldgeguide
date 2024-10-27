import { useEffect, useState } from "react";
import PopularServs from "./Popular.jsx";

export default function Services() {
   const [categories] = useState([
      { name: "جميع الخدمات", value: "allServices" },
      { name: "الخدمات الأكاديمية", value: "Academic" },
      { name: "الخدمات الرقمية", value: "Digital" },
      { name: "خدمات التصميم والهوية", value: "Design" }
   ]);
   const [selectedCategory, setSelectedCategory] = useState("allServices");
   function hanldeSelectCategory(cat) {
      setSelectedCategory(cat.value);
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <>
         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-6 md:w-2/3">
            {categories.map((cat, index) => (
               <button
                  key={index}
                  onClick={() => hanldeSelectCategory(cat)}
                  className={`py-2 rounded ${selectedCategory === cat.value ? "bg-main-600 text-white" : "bg-gray-200 text-black"}`}
               >
                  {cat.name}
               </button>
            ))}
         </div>
         <PopularServs category={selectedCategory} />
      </>
   )
}
