import PopularSevs from '../common/services/Popular';
import heroImg from '/images/hero.png';
export default function Hero() {
   return (
      <div>
         <div className="hero-info min-h-screen flex items-center justify-center">
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
         <PopularSevs />
      </div>
   )
}
