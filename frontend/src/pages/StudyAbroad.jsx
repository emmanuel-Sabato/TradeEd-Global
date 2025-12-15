const benefits = [
  'Access globally ranked universities and faculty',
  'Strengthen career prospects with international exposure',
  'Scholarship and assistantship pathways reduce costs',
  'Cultural immersion and language acquisition',
];

const comparison = [
  { country: 'USA', tuition: '$15k - $35k', work: 'CPT / OPT', visa: 'F1', living: '$1.2k - $1.8k' },
  { country: 'Canada', tuition: '$12k - $25k', work: '20 hrs + PGWP', visa: 'Study Permit', living: '$1k - $1.6k' },
  { country: 'Australia', tuition: '$14k - $30k', work: '24 hrs + PSW', visa: 'Subclass 500', living: '$1.2k - $1.7k' },
];

const StudyAbroad = () => (
  <div className="bg-slate-950 text-white min-h-screen py-16">
    <div className="section-container space-y-12">
      <div className="space-y-3">
        <p className="text-blue-200 text-sm font-semibold">Study Abroad</p>
        <h1 className="text-3xl lg:text-4xl font-bold">Plan a future-ready international degree</h1>
        <p className="text-slate-300 max-w-2xl">
          Compare destinations, understand work rights, and secure an admission strategy tailored to you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Benefits</p>
          <ul className="space-y-3 text-slate-200 text-sm">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Admission Guidance</p>
          <div className="rounded-2xl bg-slate-900 border border-white/5 p-6 shadow-soft space-y-3 text-sm text-slate-200">
            <p>Program shortlisting aligned to your career outcomes.</p>
            <p>Personal statement and CV polish with admissions coaches.</p>
            <p>Interview preparation and scholarship negotiation support.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-lg font-semibold text-white">Country Comparison</p>
        <div className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="min-w-full bg-slate-900 text-sm text-slate-200">
            <thead className="bg-white/5">
              <tr>
                {['Country', 'Tuition (Year)', 'Work Rights', 'Visa Type', 'Living Cost'].map((head) => (
                  <th key={head} className="px-4 py-3 text-left font-semibold text-white">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.country} className="border-t border-white/5">
                  <td className="px-4 py-3 font-semibold text-white">{row.country}</td>
                  <td className="px-4 py-3">{row.tuition}</td>
                  <td className="px-4 py-3">{row.work}</td>
                  <td className="px-4 py-3">{row.visa}</td>
                  <td className="px-4 py-3">{row.living}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default StudyAbroad;

