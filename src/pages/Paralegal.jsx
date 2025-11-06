import React from "react";
import { Briefcase, FileText, Users, Search } from "lucide-react";

export default function Paralegal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-14">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-6">
          Paralegal Services
        </h1>

        <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-12 py-5">
          Delivering accurate, timely, and professional legal assistance to
          support attorneys, law firms, and corporate legal departments.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Card 1 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200">
            <Search className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              Legal Research
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Comprehensive research on legal precedents, case laws, and
              statutes to support legal strategies and documentation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200">
            <FileText className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              Legal Document Drafting
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Drafting precise legal documents such as contracts, affidavits,
              petitions, agreements, and case summaries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              Case File Management
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Organizing documents, maintaining deadlines, and ensuring every
              case file is accurate and up to date.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              Client Assistance
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Handling client communication with professionalism, scheduling
              meetings, and maintaining confidentiality.
            </p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl shadow-lg text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Paralegal Support?
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We bring precision, discipline, and professionalism to every legal
            task. Our support helps attorneys focus on core arguments while we
            manage the essential backend legal operations.
          </p>
        </div>
      </div>
    </div>
  );
}
