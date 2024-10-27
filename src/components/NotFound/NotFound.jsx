import { Link } from "react-router-dom";

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
         <h4 className="text-3xl font-bold text-red-600">404</h4>
         <p className="text-xl font-bold">نعتذر، لكن الصفحة التي كنت تحاول الوصول إليها غير متاحة.</p>
         <Link to="/" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md text-lg">
            عوده للصفحه الرئيسية
         </Link>
      </div>
   )
}
