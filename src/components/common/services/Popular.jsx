import { BookOpen, PenTool, Globe, Code } from "lucide-react";

export default function PopularSevs() {
   const services = [
      {
         icon: <BookOpen className="h-10 w-10 text-main-800" />,
         title: "كتابة الابحاث العلمية",
         description: "خدمة متميزة لكتابة الأبحاث العلمية بجودة عالية"
      },
      {
         icon: <PenTool className="h-10 w-10 text-green-600" />,
         title: "تنسيق الرسائل العلمية",
         description: "تنسيق احترافي للرسائل العلمية وفق المعايير الأكاديمية"
      },
      {
         icon: <Globe className="h-10 w-10 text-blue-600" />,
         title: "ترجمة الابحاث العلمية",
         description: "ترجمة دقيقة للأبحاث العلمية بمختلف اللغات"
      },
      {
         icon: <Code className="h-10 w-10 text-red-600" />,
         title: "مشاريع برمجية",
         description: "تطوير مشاريع برمجية متكاملة لمختلف التخصصات"
      },
   ];

   return (
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
               خدماتنا الأكثر شعبية
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg border shadow-sm">
                     <div className="p-6 flex flex-col items-center justify-center">
                        <i className="pb-4">{service.icon}</i>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-main-700">{service.title}</h3>
                        <p className="text-gray-600 text-lg text-center">{service.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
