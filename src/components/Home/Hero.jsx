import Achievments from '../Achievments/Achievments';
import PopularServs from '../common/services/Popular';
import FAQ from '../faq/FAQ';
import heroImg from '/images/hero.png';
import WhyUs from './../WhyUs/WhyUs';
export default function Hero() {
   return (
      <main>
         <div className="hero-info min-h-screen flex items-start justify-center mt-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
               <div className="text">
                  <h1 className='md:text-3xl text-xl font-bold pb-2 text-main-600'>
                     مرحبًا بكم في منصتنا المخصصة للطلاب!
                  </h1>
                  <h2 className='md:text-xl text-lg font-semibold '>
                     نحن هنا لنقدم لكم تجربة فريدة من نوعها تسهم في تحقيق أهدافكم الأكاديمية والإبداعية. تهدف منصتنا إلى توفير بيئة مثالية لدعم الطلاب في مسيرتهم التعليمية، حيث يمكنكم الاستفادة من مجموعة متنوعة من الخدمات المصممة خصيصًا لتلبية احتياجاتكم.
                  </h2>
               </div>
               <div className="hero-image">
                  <img src={heroImg} alt="hero-image" />
               </div>
            </div>
         </div>
         <>
            <h2 className="heading-title"> خدماتنا الأكثر طلب</h2>
            <PopularServs category="allServices" numsOfServs={3} />
         </>
         <div className='py-12'>
            <WhyUs />
         </div>
         <div className='py-12'>
            <h2 className="heading-title">إنجازاتنا</h2>
            <Achievments />
         </div>
         <div className='py-12'>
            <FAQ />
         </div>
      </main>
   )
}
