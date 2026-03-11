// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12 px-6 mt-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Company Info */}
//         <div>
//           <h2 className="text-2xl font-bold tracking-wide mb-3">
//             EASYTAX AND PARALEGALS
//           </h2>
//           <p className="text-gray-300">www.easytaxbookkeeping.com</p>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
//           <p className="text-gray-300">2115 27 Ave NE Calgary AB T2E 7E4</p>
//           <p className="mt-2 text-gray-300">+1 589-604-5808</p>
//           <p className="mt-2 text-gray-300">easytaxandbookkeeping@gmail.com</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li className="hover:text-white cursor-pointer">
//               <a href="/">Home</a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/Services">Services</a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/About">About </a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/ContactUs">Contact</a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/career">Career</a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/AboutTax">About Taxes</a>
//             </li>
//             <li className="hover:text-white cursor-pointer">
//               <a href="/paralegal">ParaLegal</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} EasyTax And Bookkeeping. All rights
//         reserved.
//       </div>
//     </footer>
//   );
// }
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-3">
            EASYTAX AND PARALEGALS
          </h2>
          <p className="text-gray-300">www.easytaxbookkeeping.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Easytaxandparalegal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.8V12h2.8V9.8c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.4.2 2.4.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/easytaxandparalegal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 
                0 3 1.3 3 3v10c0 1.7-1.3 3-3 
                3H7c-1.7 0-3-1.3-3-3V7c0-1.7 
                1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 
                0 16.5 12 4.5 4.5 0 0 0 12 
                7.5zm0 7.2A2.7 2.7 0 1 1 
                14.7 12 2.7 2.7 0 0 1 12 
                14.7zM17.8 6.2a1.1 1.1 0 1 
                0 1.1 1.1 1.1 1.1 0 0 
                0-1.1-1.1z"/>
              </svg>
            </a>

            {/* Twitter X */}
            <a
              href="https://x.com/AndEasytax2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.9 2H21l-6.6 7.5L22 22h-6.9l-5.4-7.1L3.8 
                22H1.7l7.1-8.1L2 2h7l4.9 
                6.5L18.9 2zm-2.4 18h1.9L7.6 
                4H5.6l10.9 16z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">2115 27 Ave NE Calgary AB T2E 7E4</p>
          <p className="mt-2 text-gray-300">+1 589-604-5808</p>
          <p className="mt-2 text-gray-300">easytaxandbookkeeping@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white"><a href="/">Home</a></li>
            <li className="hover:text-white"><a href="/Services">Services</a></li>
            <li className="hover:text-white"><a href="/About">About</a></li>
            <li className="hover:text-white"><a href="/ContactUs">Contact</a></li>
            <li className="hover:text-white"><a href="/career">Career</a></li>
            <li className="hover:text-white"><a href="/AboutTax">About Taxes</a></li>
            <li className="hover:text-white"><a href="/paralegal">ParaLegal</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} EasyTax And Bookkeeping. All rights reserved.
      </div>
    </footer>
  );
}
