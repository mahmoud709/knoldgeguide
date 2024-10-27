import { useState } from "react"

export default function Categories() {
   const [categories] = useState(["الخدمات الأكاديمية", "الخدمات الرقمية", "خدمات التصميم والهوية"]);
   const [currentIndex, setcurrentIndex] = useState(0)
   function handleClick() {

   }
   return (
      <div className="grid lg:grid-cols-3 grdic-cols-2 justify-start items-start gap-y-2 pb-8 w-fit">
         {categories?.map((el, index) => {
            return (
               <div className="catgory-box pt-6" key={index}>
                  <div className="cursor-pointer">
                     <h3 className="text-xl">{el}</h3>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
