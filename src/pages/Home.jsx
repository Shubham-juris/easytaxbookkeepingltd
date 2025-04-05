import React from "react";
import img1 from '../assets/Home/img1.jpg';

const Home = () => {
  return (
    <section className="w-full bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-[60%]">
          <img
            src={img1}
            alt="Sample"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[40%] flex items-center">
          <div className="w-full text-center md:text-left space-y-4">
            <h2 className="text-pink-400 text-xl md:text-2xl font-semibold">WELCOME</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
              Smart Money <br /> Management
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Helping You Make Informed <br /> Financial Decisions
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition">
                Tell us what you need
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
