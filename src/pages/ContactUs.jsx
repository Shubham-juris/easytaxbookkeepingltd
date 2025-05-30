import React from 'react';
import Map from '../components/contactus/map';

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#769AA4] mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Have questions or want to work with us? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8 md:p-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#769AA4] mb-4">Contact Info</h3>
            <p className="text-gray-700 mb-4">
              Fill out the form and we’ll get back to you as soon as possible. You can also reach us via:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Email:</strong> easytaxandbookkeeping@gmail.com</li>
              <li><strong>Phone:</strong> +1 589-604-5808</li>
              <li><strong>Address:</strong> 2115 27 Ave NE Calgary AB T2E 7E4</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#769AA4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#769AA4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#769AA4]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#769AA4] text-white py-3 rounded-xl hover:bg-[#5e828e] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Map/>
    </section>
    
  );
  
};

export default ContactUs;
