import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const FAQ_Questions = [
    {
      id: 1,
      question: "كيف يمكنني طلب خدمة ؟",
      answer: "للحصول على الخدمة، يُرجى التواصل مباشرة، حيث إننا نقدم الدعم والمساعدة من خلال الاتصال. نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الخدمة المناسبة لك.",
    },
    {
      id: 2,
      question: "ما هي مدة تنفيذ الخدمات ؟",
      answer: "يتم تنفيذ الخدمات بشكل سريع وفي الوقت المناسب. يمكننا تحديد الوقت المناسب للتنفيذ والتسليم، ونتيح لك المرونة في اختيار الوقت المناسب لك.",
    },
    {
      id: 3,
      question: "هل يمكنني طلب تعديلات على العمل المنجز ؟",
      answer: "نحن نقدم التعديلات على العمل المنجز للتأكد من أنه يتوافق مع متطلباتك وتوقعاتك. يمكنك الاتصال بنا للحصول على التعديلات المطلوبة.",
    },
    {
      id: 4,
      question: "ما هي طرق الدفعة المتاحة ؟",
      answer: "تتضمن طرق الدفع المتاحة لدينا: فودافون كاش، كما يمكنك استخدام إنستا باي لإجراء المدفوعات بشكل سريع وفعال. نحن نضمن لك خيارات دفع مرنة تناسب احتياجاتك."
    }
  ];

  function toggleHandler(index) {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div>
      <h3 className="heading-title">الأسئلة الشائعة</h3>
      <div className="according-items">
        {FAQ_Questions.map((item, index) => {
          return (
            <div className="item my-5" key={item.id} onClick={() => toggleHandler(index)}>
              <div className="FaQuestion cursor-pointer hover:bg-gray-200 flex items-center justify-between w-100 p-4 rounded-lg bg-gray-100">
                <h3 className="md:text-xl text-lg md:font-semibold">{item.question}</h3>
                <div className="chevron-icon">
                  {openIndex != index ? <ChevronDown />
                    : <ChevronUp />}
                </div>
              </div>
              <p className={`py-4 md:text-xl text-lg md:w-2/3 w-full ${openIndex === index ? "flex" : "hidden"}`}>{item.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
