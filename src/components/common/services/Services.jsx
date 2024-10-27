import { useEffect } from "react";
import Categories from "../../categories/categories";
import PopularServs from "./Popular";

export default function Services() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <>
         <Categories />
         <PopularServs numsOfServs={12} />
      </>
   )
}
