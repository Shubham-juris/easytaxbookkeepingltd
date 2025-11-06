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
            <li className="hover:text-white cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/Services">Services</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/About">About </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/ContactUs">Contact</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/career">Career</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/AboutTax">About Taxes</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/paralegal">ParaLegal</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} EasyTax And Bookkeeping. All rights
        reserved.
      </div>
    </footer>
  );
}
