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
         <div className="flex gap-4 mb-6">
            {categories.map((cat, index) => (
               <button
                  key={index}
                  onClick={() => hanldeSelectCategory(cat)}
                  className={`px-4 py-2 rounded ${selectedCategory === cat.value ? "bg-main-600 text-white" : "bg-gray-200 text-black"}`}
               >
                  {cat.name}
               </button>
            ))}
         </div>
         <PopularServs category={selectedCategory} />
      </>
   )
}
