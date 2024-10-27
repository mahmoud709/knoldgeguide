import { CircleCheckBig, Clock8, Users } from "lucide-react"

export default function Achievments() {
   const states = [
      {
         icon: <Users className="w-10 h-10 text-purple-800" />,
         stateNum: 120,
         info: "عملاء راضون",
      },
      {
         icon: <CircleCheckBig className="w-10 h-10 text-green-500" />,
         stateNum: 80,
         info: "مشاريع منجزة",
      },
      {
         icon: <Clock8 className="w-10 h-10 text-main-600" />,
         stateNum: 5,
         info: "سنوات الخبرة"
      }
   ]
   return (
      <div>
         <div className="bg-gradient-to-r from-purple-100 to-main-100 h-100 mb-12 p-12 rounded-lg">
            <div className="grid md:grid-cols-3 grid-cols-1 justify-center gap-12">
               {states.map((el, index) => {
                  return (
                     <div className="clients-nums flex flex-col justify-center items-center gap-3" key={index}>
                        <i>{el.icon}</i>
                        <h5 className="text-3xl font-bold">{el.stateNum}+</h5>
                        <span className="text-lg">{el.info}</span>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
