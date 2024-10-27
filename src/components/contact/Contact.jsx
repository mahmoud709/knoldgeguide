import { useState } from "react";

export default function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      message: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      setFormData({
         name: "",
         phone: "",
         message: "",
      })
   };

   return (
      <section className="bg-gray-100 mb-12 py-12 rounded-md">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
               تواصل معنا
            </h2>
            <p className="text-center text-gray-600 mb-12">
               نحن هنا لمساعدتك! يرجى ملء النموذج أدناه وسنقوم بالتواصل معك في أقرب وقت ممكن.
            </p>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
               <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">
                     الاسم الكامل
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="أدخل اسمك الكامل"
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
               </div>

               <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-lg font-semibold mb-2">
                     رقم الهاتف
                  </label>
                  <input
                     type="text"
                     id="phone"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     placeholder="أدخل رقم هاتفك"
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
               </div>

               <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">
                     الرسالة
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows="5"
                     placeholder="أدخل رسالتك هنا"
                     className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  ></textarea>
               </div>

               <div className="text-center">
                  <button
                     type="submit"
                     className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                  >
                     إرسال الرسالة
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}
