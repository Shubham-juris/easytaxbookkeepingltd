import React from "react";
import Post from "../components/posts/Post";

const jobListings = [
   {
    title: "Finance Manager",
    postedDate: "November  11, 2025",
    employer: "Easytax & Books keeping",
    location: "Calgary, AB",
    salary: "$39 per hour",
    employmentType: "Permanent employment",
    startDate: "As soon as possible",
    vacancies: 1,
    jobBankId: "TBD",
    language: "English",
    education:
      "A bachelor’s degree in business administration, economics, commerce or a related field is required.",
    experience:
      "Several years of experience in accounting, auditing, budgeting, financial planning and analysis, or other financial activities are required.",
    responsibilities: [
      "Plan, organize, and oversee financial operations of the company.",
      "Develop and implement financial policies and procedures.",
      "Prepare financial statements, reports, and business forecasts.",
      "Coordinate and manage budgeting and financial planning processes.",
      "Evaluate, monitor, and improve financial systems and controls.",
      "Supervise accounting and finance staff.",
      "Analyze financial trends and present reports to senior management.",
    ],
    benefits: ["Health care plan"],
  },
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
