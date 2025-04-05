import React from 'react'
import serviceimg1 from '../assets/Services/serviceimg1.jpg'
import serviceimg2 from '../assets/Services/serviceimg2.jpg'
import serviceimg3 from '../assets/Services/serviceimg3.jpg'
import serviceimg4 from '../assets/Services/serviceimg4.jpg'
import serviceimg5 from '../assets/Services/serviceimg5.jpg'
import ContactButton from '../components/ContactButton'

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div>
        <h2 className="text-pink-600 uppercase tracking-wide text-md ms-20 mb-10">WHAT EASYTAX AND BOOKKEEPING DO </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={serviceimg1} className="h-[300px] w-[90%] rounded-xl shadow" />
          </div>
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Personal Tax Return Services </h5>
            <p className="text-gray-700 sm:text-lg mb-6 ">Tax Return Services are one of the most crucial services for any business, or individual. Every private citizen, or business owner has to go through this process once a year. Filing for tax returns also require some special planning and preparation. Not everyone is capable of doing it. You need proper experience and qualification to properly deal with tax returns; if you wish to avoid mistakes. </p>
            <ContactButton />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Business Tax Return Services  </h5>
            <p className="text-gray-700 sm:text-lg mb-6 ">Tax return for businesses is very crucial annual ritual. Too much taxes, and you risk losing profits; too little taxes, and you risk non-compliance. Easytax and Bookkeeping can ensure you never miss a tax deduction, all the while complying with the established laws. our deep study of tax code ensures our clients receive maximum advantages. </p>
            <ContactButton />
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={serviceimg2} className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={serviceimg3} className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Bookkeeping & Payrolls Services   </h5>
            <p className="text-gray-700 sm:text-lg mb-6">Using the best in cloud accounting and bookkeeping technology, we customize streamlined processes to fit your business needs. Our team of experienced bookkeepers - will partner with you throughout, from reconciling accounts to coding unsupported transactions. We'll keep your books up to date and in tip-top shape through the year.  </p>
            <ContactButton />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Incorporation Services   </h5>
            <p className="text-gray-700 sm:text-lg mb-6">Businesses and organizations must register, file documents and update records, which are kept as a matter of public record. 
            Incorporated companies.  </p>
            <ContactButton />
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={serviceimg4} className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={serviceimg5} className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Financial Planning  </h5>
            <p className="text-gray-700 sm:text-lg mb-6">Careful planning is key to achieving your financial goals. Whatever your goals may be from sending children to college and retiring comfortably to passing your hard-earned estate assets on to loved ones-our professionals will evaluate your situation and help you determine which strategies are right for you.
              While developing a customized financial program, we will walk you through a step-by-step process that will help make you feel confident in your decisions.
              Once your goals have been established, we will customize appropriate strategies to suit your vision and objectives. We can help you execute a sound financial program. </p>
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
