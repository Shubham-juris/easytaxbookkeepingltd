import React from "react";
import Post from "../components/posts/Post";

const jobListings = [
  {
    title: "Bookkeeper",
    postedDate: "April 22, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    workplace: "On site",
    salary: "$37.00 hourly / 30 to 40 hours per week",
    employmentType: "Permanent employment, Full time",
    startDate: "As soon as possible",
    vacancies: 2,
    jobBankId: "3286326",
    language: "English",
    education: "College/CEGEP",
    experience: "1 year to less than 2 years",
    responsibilities: [
      "Keep financial records and establish, maintain and balance various accounts using manual and computerized bookkeeping systems",
      "Maintain general ledgers and financial statements",
      "Post journal entries",
      "Prepare other statistical, financial and accounting reports",
      "Prepare tax returns",
      "Reconcile accounts",
    ],
    benefits: ["Dental plan", "Health care plan"],
  },
  {
    title: "Office Manager",
    postedDate: "April 28, 2025",
    employer: "Easytax & Books keeping",
    location: "2115 27 avenue ne, Calgary, AB T2E 7E4",
    workplace: "On site",
    salary: "$36.50 hourly / 30 to 40 hours per week",
    employmentType: "Permanent employment, Full time",
    startDate: "As soon as possible",
    vacancies: 2,
    jobBankId: "3293540",
    language: "English",
    education: "College/CEGEP",
    experience: "1 year to less than 2 years",
    responsibilities: [
      "Implement new administrative procedures",
      "Review and evaluate new administrative procedures",
      "Establish work priorities and ensure procedures are followed and deadlines are met",
      "Carry out administrative activities of establishment",
      "Administer policies and procedures related to the release of records in processing requests under government access to information and privacy legislation",
      "Co-ordinate and plan for office services such as accommodation, relocation, equipment, supplies, forms, disposal of assets, parking, maintenance and security services",
      "Assist in the preparation of operating budget and maintain inventory and budgetary controls",
      "Assemble data and prepare periodic and special reports, manuals and correspondence",
      "Train staff",
      "Oversee and co-ordinate office administrative procedures",
      "Resolve conflict situations",
      "Monitor and evaluate",
    ],
    benefits: ["Dental plan", "Health care plan"],
  },
  {
    title: "Receptionist",
    postedDate: "April 25, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    workplace: "On site",
    salary: "$20.00 hourly / 30 to 40 hours per week",
    employmentType: "Permanent employment, Full time",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education: "High school diploma",
    experience: "Experience an asset",
    responsibilities: [
      "Answer telephone and relay calls and messages",
      "Greet people and direct them to contacts or service areas",
      "Schedule appointments",
      "Perform clerical duties, such as filing and data entry",
    ],
    benefits: ["Health care plan"],
  },
  {
    title: "Office Administrative Assistant",
    postedDate: "April 26, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    workplace: "On site",
    salary: "$22.00 hourly / 35 hours per week",
    employmentType: "Permanent employment, Full time",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education: "College/CEGEP",
    experience: "1 year to less than 2 years",
    responsibilities: [
      "Answer electronic enquiries",
      "Compile data, statistics and other information",
      "Order office supplies and maintain inventory",
      "Type and proofread correspondence, forms and other documents",
    ],
    benefits: ["Dental plan", "Health care plan"],
  },
  {
    title: "Office Clerk",
    postedDate: "April 27, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    workplace: "On site",
    salary: "$21.00 hourly / 30 to 40 hours per week",
    employmentType: "Permanent employment, Full time",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education: "Secondary (high) school graduation certificate",
    experience: "Experience an asset",
    responsibilities: [
      "Receive and forward telephone or electronic enquiries",
      "Process incoming and outgoing mail",
      "Sort, process and verify applications, receipts and other documents",
      "File material in storage area",
    ],
    benefits: ["Health care plan"],
  },
  {
    title: "Office Assistant",
    postedDate: "April 27, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    workplace: "On site",
    salary: "$19.00 hourly / 30 hours per week",
    employmentType: "Permanent employment, Part time",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education: "High school diploma",
    experience: "Experience an asset",
    responsibilities: [
      "Organize office filing systems",
      "Assist with administrative procedures",
      "Photocopy and collate documents",
      "Support staff with clerical tasks",
    ],
    benefits: ["Health care plan"],
  },
  {
    title: "Finance Manager",
    postedDate: "23-10-2025",
    employer: "Lamont Brown Group",
    location: "Calgary, AB",
    workplace: "In Person",
    salary: "Not specified",
    employmentType: "Full-time, Permanent",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education:
      "Relevant post-secondary education in finance, accounting, or related field",
    experience:
      "5+ years in financial management, accounting, or investment finance",
    responsibilities: [
      "Lead financial management and reporting for the organization and its portfolio companies",
      "Manage full-cycle accounting, bookkeeping, and financial statement preparation",
      "Establish and maintain financial controls, policies, and procedures",
      "Act as a fractional controller or accountant for portfolio companies",
      "Support investment due diligence, financial modeling, and transaction analysis",
      "Monitor investment and portfolio performance with dashboards and reporting",
      "Assist with financial planning, budgeting, tax strategy, and cash flow management",
      "Communicate financial insights to leadership and stakeholders",
    ],
    benefits: [
      "Paid time off",
      "Dental care",
      "Vision care",
      "Life insurance",
      "Disability insurance",
      "Extended health care",
      "Work from home options",
      "Company events",
    ],
  },
  {
    title: "Clinic Finance Manager",
    postedDate: "17-11-2025",
    employer: "Passion Dental Group",
    location: "855 42nd Avenue SE, Calgary, AB T2G 1Y8",
    workplace: "On Site",
    salary: "Not specified",
    employmentType: "Full-time",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education:
      "Post-secondary education in Accounting, Finance, or Business Administration",
    experience:
      "3–5 years of financial management or accounting experience, preferably in healthcare or multi-site operations",
    responsibilities: [
      "Oversee reconciliation processes for day-end, week-end, and month-end across all clinics",
      "Verify payment accuracy across insurance, patient payments, and third-party sources",
      "Investigate discrepancies within the Practice Management System and related tools",
      "Ensure clinics follow standardized reconciliation timelines and reporting",
      "Review delayed or rejected claims and ensure proper documentation",
      "Manage accounts receivable aging and reduce outstanding balances",
      "Track and report on DSO, collection rates, bad debt ratios, and other key metrics",
      "Enforce AR policies, escalation steps, and write-off procedures",
      "Audit billing practices for consistency and compliance with clinic standards",
      "Support improvements in billing accuracy, timelines, and system enhancements",
      "Develop and maintain standardized financial reports and dashboards",
      "Identify process inefficiencies and opportunities for automation",
      "Partner with IT and vendors to improve PMS and related systems",
      "Create training resources and support coaching of clinic financial staff",
      "Promote continuous improvement, accountability, and transparency in financial processes",
    ],
    benefits: [
      "People-first work culture",
      "Growth and career development opportunities",
      "Collaboration and cross-functional teamwork",
      "Opportunity to contribute to improving financial systems and clinic operations",
      "Purpose-driven work supporting clinics that serve patients daily",
    ],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Careers</h1>
          <p className="text-gray-600 mt-2">
            Explore current opportunities and join our growing team.
          </p>
        </header>

        {/* Stretch full width by removing grid or limiting it */}
        <div className="space-y-6">
          {jobListings.map((job, index) => (
            <Post key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
