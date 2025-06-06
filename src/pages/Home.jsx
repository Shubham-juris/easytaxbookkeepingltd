import React from "react";
import img1 from "../assets/Home/img1.jpg";
import taxplan from "../assets/Home/taxplan.jpg";
import financial from "../assets/Home/financial.jpg";
import payroll from "../assets/Home/payroll.jpg";
import business from "../assets/Home/business.jpg";
import taxpre from "../assets/Home/taxpre.jpg";
import accsoft from "../assets/Home/Accsoft.webp";
import comperhance from "../assets/Home/comperhan.png";
import proffesinal from "../assets/Home/proffesional.webp";
import simacco from "../assets/Home/simplified.avif";
import art from "../assets/Home/artaccount.png";
import value from "../assets/Home/value.jpg";
import popular from "../assets/Home/popular.jpg";
import search from "../assets/Home/seacrch.jpg";
import { Link } from "react-router-dom";
import FlipCards from "../components/home/card";

const Home = () => {
  return (
    <section className="w-full bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-16">
      
      {/* Image Section - 60% Width */}
      <div className="w-full md:w-[60%]">
        <img
          src={img1}
          alt="Smart Money Management"
          className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Section - 40% Width */}
      <div className="w-full md:w-[40%] flex items-center">
        <div className="w-full space-y-6 text-center md:text-left">
          <h2 className="text-pink-500 text-lg font-semibold uppercase tracking-wide">Welcome</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Smart Money <br /> Management
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            Helping You Make Informed <br /> Financial Decisions
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/Contactus">
              <button
                className="bg-[#769AA4] hover:bg-[#5e828e] text-white text-base md:text-lg font-medium px-6 py-3 rounded-xl shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#769AA4]"
              >
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>

<FlipCards/>
      

      <div className="max-w-7xl mx-auto flex flex-col mt-15 lg:flex-row items-center md:items-stretch gap-10">
        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Tax planning
          </h2>
          <img
            src={taxplan}
            alt="New Products"
            className="w-full h-[45%] object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">
              Tax planning is the process of analyzing your financial situation
              to ensure that you maximize tax breaks and minimize tax liability
              legally. It involves using various tax exemptions, deductions,
              rebates, and benefits available under tax laws to reduce the
              amount of taxes owed.Investing in government-backed schemes (like
              PPF, ELSS, etc. in India). Declaring HRA, rent receipts, or home
              loan interest for deductions.
            </p>
          </div>
        </div>

        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Financial Statement
          </h2>
          <img
            src={financial}
            alt="Most Popular"
            className="w-full h-[45%] object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">
              A financial statement is a formal record of the financial
              activities and position of a business, person, or organization.
              These statements provide an overview of a company's financial
              condition over a period of time.Balance Sheet – shows assets,
              liabilities, and equity. Income Statement – shows revenue and
              expenses (profit/loss). Cash Flow Statement – shows how cash moves
              in and out.
            </p>
          </div>
        </div>

        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Payroll Service
          </h2>
          <img src={payroll} alt="Best Value" className="w-full h-[45%] object-cover" />
          <div className="p-4">
            <p className="text-gray-600">
              A payroll service is a system or company that helps businesses
              manage everything related to employee compensationIf a company
              uses a payroll service but fails to pay the required payroll taxes
              (like TDS, EPF, ESI, or income tax withholdings), the government
              can file a tax lien against the company. This means the company’s
              assets could be legally claimed to recover the unpaid taxes.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col mt-15 lg:flex-row items-center md:items-stretch gap-10">
        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Business Formation
          </h2>
          <img
            src={business}
            alt="New Products"
            className="w-full h-[45%] object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">
              Business formation refers to the legal process of creating a new
              business entity. This includes choosing a business structure (like
              sole proprietorship, partnership, LLP, or private limited
              company), registering the business, getting licenses, tax IDs,
              etc. Key Steps in Business Formation: Choosing a business name
              Selecting the legal structure Registering with government
              authorities
            </p>
          </div>
        </div>

        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Tax Preparation
          </h2>
          <img
            src={taxpre}
            alt="Most Popular"
            className="w-full h-[45%] object-cover"
          />
          <div className="p-4">
            <p className="text-gray-600">
              Tax preparation is the process of gathering financial information,
              calculating taxes owed or refundable, and filing income tax
              returns with the government (like the IRS in the U.S. or the
              Income Tax Department in India). This can be done by: An
              individual (self-prepared) A tax professional/accountant A tax
              preparation service (like ClearTax, TurboTax, etc.)
            </p>
          </div>
        </div>

        <div className="bg-pink-200 shadow-md rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-8 mt-5 text-center">
            Accounting Software
          </h2>
          <img src={accsoft} alt="Best Value" className="w-full h-[45%] object-cover" />
          <div className="p-4">
            <p className="text-gray-600">
              Accounting software is a digital tool or program used by
              businesses to record, track, and manage financial transactions
              like income, expenses, assets, liabilities, payroll, and taxes.
              Popular examples: Tally, QuickBooks, Zoho Books, FreshBooks, etc.
              Functions typically include: Bookkeeping (recording financial
              entries) Invoicing and billing Bank reconciliation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div>
          <h3 className="text-pink-500">About Easytax And Bookkeeping </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          <img
            src={comperhance}
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center">
              Comprehensiv Accounting Service
            </h2>

            <p className="mt-2 text-gray-700 text-center">
              Comprehensive accounting services refer to a complete set of
              financial and accounting solutions provided to individuals or
              businesses. These services go beyond basic bookkeeping and cover
              all financial areas to keep the business compliant, profitable,
              and organized. They typically include: Bookkeeping Financial
              statement preparation
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center">
              Experienced Professionals
            </h2>

            <p className="mt-2 text-gray-700 text-center">
              Experienced professionals are individuals with extensive
              knowledge, training, and hands-on experience in a particular
              field—such as accounting, law, finance, business management, tax
              advisory, etc. Key traits: Years of practical work in their domain
              Strong problem-solving and analytical skills
            </p>
          </div>
          <img
            src={proffesinal}
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          <img
            src={simacco}
            alt="Development"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-center">
              Simplified Accounting
            </h2>

            <p className="mt-2 text-gray-700 text-center">
              Simplified accounting means using basic and easy methods to record
              and manage your business finances. It’s usually used by small
              businesses, freelancers, or startups who don’t need full, complex
              accounting systems. It includes: Recording income and expenses
              Keeping basic financial records
            </p>
          </div>
        </div>

        <div className=" mt-20">
          <h1 className="text-pink-400 ">
            THE ART OF ACCOUNTING : A GALLERY OF ESYTEX AND BOOKKEEPING'S BEST
            WORKS
          </h1>
          <img
            src={art}
            alt="Development"
            className="w-full rounded-lg shadow-lg mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
