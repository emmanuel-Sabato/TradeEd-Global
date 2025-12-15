const ScholarshipCard = ({ title, country, coverage, deadline, degree, field }) => (
  <div className="rounded-2xl border border-white/5 bg-slate-900 p-6 shadow-soft hover:-translate-y-1 transition">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-blue-200 font-semibold">{country}</p>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      </div>
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-100 border border-blue-500/30">
        {coverage} Coverage
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mt-5">
      <div>
        <p className="text-slate-400 text-xs">Degree Level</p>
        <p className="font-medium text-white">{degree}</p>
      </div>
      <div>
        <p className="text-slate-400 text-xs">Field of Study</p>
        <p className="font-medium text-white">{field}</p>
      </div>
      <div>
        <p className="text-slate-400 text-xs">Deadline</p>
        <p className="font-medium text-white">{deadline}</p>
      </div>
    </div>
    <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-blue-700/30">
      Apply Now
    </button>
  </div>
);

export default ScholarshipCard;

