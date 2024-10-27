import { useEffect } from 'react'
import Achievments from '../Achievments/Achievments'
import ContactBanner from '../common/contact/ContactBanner'
import aboutUsImgs from '/images/aboutus.jpg'
export default function AboutUs() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])
   return (
      <>
         <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:py-0 py-5">
            <div className='h-full'>
               <h3 className="heading-title !text-right !mb-0">مهمتنا ورؤيتنا</h3>
               <p className="text-gray-700 text-lg py-5">
                  نحن في خدمات الأكاديمية نسعى جاهدين لتمكين الطلاب والباحثين من تحقيق أهدافهم الأكاديمية والمهنية. مهمتنا هي توفير خدمات عالية الجودة ودعم شامل في مجالات البحث العلمي، الكتابة الأكاديمية، والترجمة المتخصصة.
                  رؤيتنا هي أن نصبح المزود الرائد للخدمات الأكاديمية في العالم العربي، معروفين بالتميز والابتكار والنزاهة في كل ما نقوم به.</p>
               <h3 className="heading-title !text-right !mb-3">قيمنا</h3>
               <ul className='list-disc pr-5'>
                  <li className='text-lg py-1'><span className='font-semibold'>التعاون</span> : نؤمن بقوة العمل الجماعي والشراكات المثمرة.

                  </li>
                  <li className='text-lg py-1'><span className='font-semibold'>الابتكار</span> : نسعى دائمًا لتطوير حلول مبتكرة لتلبية احتياجات عملائنا.</li>
                  <li className='text-lg py-1'><span className='font-semibold'>الجودة</span> : نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا.</li>
               </ul>

            </div>
            <div className="about-usImage h-full">
               <img src={aboutUsImgs} className='rounded-md' alt="aboutus-img" />
            </div>
         </div>
         <div className='py-12'>
            <Achievments />
         </div>
         <ContactBanner />

      </>
   )
}
