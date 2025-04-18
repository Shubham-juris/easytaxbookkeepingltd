import React from 'react';
import aboutimg1 from '../assets/About/aboutimg1.jpg';
import aboutimg2 from '../assets/About/aboutimg2.jpg';
import aboutimg3 from '../assets/About/aboutimg3.jpg';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-12 space-y-20">
      {/* About Section */}
      <div>
        <h2 className="text-pink-600 uppercase tracking-wide text-md text-center mb-10">
          About Easytax and Bookkeeping
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="h-[300px] w-[90%]">
              <img
                src={aboutimg1}
                className="h-full w-full object-cover rounded-xl shadow"
                alt="About Easytax"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg text-center md:text-left">
              At Easytax and Bookkeeping, we specialize in providing accounting services for small businesses and startups.
              Our team has extensive experience working with entrepreneurs and helping them navigate the financial
              challenges of starting a business.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div>
        <h3 className="text-4xl font-semibold text-center mb-4">Our Services</h3>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg text-center md:text-left">
              We offer a full range of accounting services including tax preparation, payroll processing, financial
              reporting, and more. We understand that each client has unique needs, and we work closely with our clients
              to provide customized solutions that meet their specific needs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="h-[300px] w-[90%]">
              <img
                src={aboutimg2}
                className="h-full w-full object-cover rounded-xl shadow"
                alt="Our Services"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div>
        <h3 className="text-4xl font-semibold text-center mb-4">Our Approach</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 flex justify-center">
            <div className="h-[300px] w-[90%]">
              <img
                src={aboutimg3}
                className="h-full w-full object-cover rounded-xl shadow"
                alt="Our Approach"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg text-center md:text-left">
              Our approach is centered around building long-term relationships with our clients. We take the time to
              understand your business and tailor our services to your specific goals, ensuring you stay compliant and
              financially strong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
