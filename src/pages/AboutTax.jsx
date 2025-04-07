import React from 'react'
import ContactButton from '../components/ContactButton'
import abouttaximg1 from '../assets/Abouttax/abouttaximg1.jpg'
import abouttaximg2 from '../assets/Abouttax/abouttaximg2.jpg'
import abouttaximg3 from '../assets/Abouttax/abouttaximg3.jpg'
import abouttaximg4 from '../assets/Abouttax/abouttaximg4.jpg'


function AboutTax() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div>
        <h2 className="text-pink-600 uppercase tracking-wide text-md ms-20 mb-10">THINGS YOU NEED TO KNOW ABOUT TAXES  </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={abouttaximg1} className="h-[300px] w-[90%] rounded-xl shadow" />
          </div>
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>You may not have to file a federal income tax return  </h5>
            <p className="text-gray-700 sm:text-lg mb-6 ">Not every person who receive income during the calendar year has to file a federal income tax return. There are a number of factors that affect whether you have to file including how much you earned and the source of that income as well as your filling status and your age. </p>
            <ContactButton />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>You Don't have to Itemize to take Advantage of Certain Deduction like the student loan interest deduction.   </h5>
            <p className="text-gray-700 sm:text-lg mb-6 ">To take Advantage of most deductions, you have to itemize - and most taxpayers (2/3) don't itemize. But all is not lost. The IRS still allows for certain deduction (called adjustment to income) that you don't have to itemize to claim. </p>
            <ContactButton />
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={abouttaximg2}  className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={abouttaximg3} className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>You should file a return even if you can't pay your tax bill    </h5>
            <p className="text-gray-700 sm:text-lg mb-6">Pantiles apply for failure to file a return and failure to pay your tax. To reduce the hit to your wallet from penalties, be sure to file your return even if you're going to owe and you can't pay up. options are available</p>
            <ContactButton />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className='md:w-1/2 text-center'>
            <h5 className='text-3xl mb-5'>Due Dates Matter    </h5>
            <p className="text-gray-700 sm:text-lg mb-6">if you don't file and pay by your due dates, you can get socked with penalties and interest, which can add up quickly. Your employer and financial institutions have their own set of due dates to get info to you. </p>
            <ContactButton />
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={abouttaximg4}  className="h-[300px] w-[90%]  rounded-xl shadow" />
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default AboutTax
