import { Link } from "react-router-dom";

export default function ContactBanner() {
   return (
      <div className="bg-gradient-to-r from-purple-500 to-main-500 text-center text-white rounded-lg py-8 mb-6">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى مساعدة لتحقيق أهدافك الأكاديمية والإبداعية؟</h2>
            <p className="text-lg mb-6">
               تواصل معنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكننا مساعدتك في تحقيق أهدافك. فريقنا جاهز للإجابة على جميع استفساراتك.
            </p>
            <Link to="https://wa.me/+" className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-all">
               ابدأ التواصل الآن
            </Link>
         </div>
      </div>
   )
}
