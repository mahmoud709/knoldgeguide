import { useEffect } from "react";
import Categories from "../../categories/Categories.jsx";
import PopularServs from "./Popular.jsxgit";

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
