export default function WhyUs() {
   const features = [
      {
         icon: "🎓",
         title: "خدمات عالية الجودة",
         description: "نقدم خدماتنا بجودة عالية لضمان تلبية جميع احتياجاتك الأكاديمية والإبداعية باحترافية."
      },
      {
         icon: "🤝",
         title: "حلول مخصصة",
         description: "نقدم خدمات مخصصة تناسب احتياجاتك الفردية في الكتابة، الترجمة، التصميم، وأكثر."
      },
      {
         icon: "⚡",
         title: "دعم سريع وموثوق",
         description: "فريقنا جاهز لمساعدتك في أي وقت، مما يضمن حصولك على الدعم الفوري لتحقيق أهدافك."
      },
      {
         icon: "💼",
         title: "فريق متخصص",
         description: "يعمل معنا فريق من الخبراء في مختلف المجالات الأكاديمية والإبداعية لتقديم أفضل النتائج."
      },
      {
         icon: "💰",
         title: "أسعار مناسبة",
         description: "نقدم خدماتنا بأسعار مناسبة تضمن حصولك على الجودة بأفضل قيمة ممكنة."
      },
      {
         icon: "🔒",
         title: "أمان وسرية",
         description: "نحافظ على خصوصية بياناتك ومعلوماتك بشكل كامل لضمان تجربة آمنة وموثوقة."
      }
   ];

   return (
      <section className="py-12">
            <h2 className="heading-title">لماذا تختارنا؟</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
               {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-md border hover:bg-gray-50">
                     <div className="flex gap-3 items-center mb-4">
                        <span className="text-main-600 text-3xl">{feature.icon}</span>
                        <h3 className="ml-4 md:text-2xl font-bold text-main-700">{feature.title}</h3>
                     </div>
                     <p className="text-gray-600 text-lg">
                        {feature.description}
                     </p>
                  </div>
               ))}
            </div>
      </section>
   )
}
