import { BadgeCheck, FileText, Timer } from 'lucide-react';

const visas = [
  {
    type: 'Student Visa',
    documents: ['Offer Letter', 'Financial Proof', 'Language Test', 'Medical'],
    processing: '4-8 weeks',
    success: '98% success rate',
  },
  {
    type: 'Tourist Visa',
    documents: ['Itinerary', 'Bank Statements', 'Employment Letter', 'Insurance'],
    processing: '2-4 weeks',
    success: '95% success rate',
  },
  {
    type: 'Work Visa',
    documents: ['Job Offer', 'Employer Sponsorship', 'Experience Letters', 'References'],
    processing: '6-10 weeks',
    success: '93% success rate',
  },
];

const VisaServices = () => (
  <div className="bg-slate-950 text-white min-h-screen py-16">
    <div className="section-container space-y-10">
      <div className="space-y-3">
        <p className="text-blue-200 text-sm font-semibold">Visa Services</p>
        <h1 className="text-3xl lg:text-4xl font-bold">Expert visa preparation and filing</h1>
        <p className="text-slate-300 max-w-2xl">
          Dedicated visa consultants guide you through documentation, timelines, and interviews.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visas.map((visa) => (
          <div key={visa.type} className="rounded-2xl bg-slate-900 border border-white/5 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-emerald-400" size={20} />
              <h3 className="text-xl font-semibold text-white">{visa.type}</h3>
            </div>
            <div className="mt-4 text-sm text-slate-200">
              <p className="text-slate-400 text-xs mb-2">Required Documents</p>
              <ul className="space-y-2">
                {visa.documents.map((doc) => (
                  <li key={doc} className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-300" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-5 text-xs text-slate-300">
                <span className="flex items-center gap-2"><Timer size={16} className="text-blue-300" /> {visa.processing}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-100 border border-emerald-400/30">
                  {visa.success}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VisaServices;

