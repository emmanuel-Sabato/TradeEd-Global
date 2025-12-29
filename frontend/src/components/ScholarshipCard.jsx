import { Link } from 'react-router-dom';

const ScholarshipCard = ({ title, country, coverage, deadline, degree, field }) => (
  <div className="rounded-2xl border border-white/5 bg-slate-900 p-6 shadow-soft hover:-translate-y-1 transition">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-blue-200 font-semibold">{country}</p>
        <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      </div>
      <div className="flex flex-col items-end gap-2">
        {/* Dynamic Status Badge */}
        {(() => {
          const now = new Date();
          const deadlineDate = new Date(deadline);
          const isOpen = !deadline || isNaN(deadlineDate.getTime()) || deadlineDate >= now.setHours(0, 0, 0, 0);

          return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${isOpen
                ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30'
                : 'bg-red-500/20 text-red-100 border-red-500/30'
              }`}>
              {isOpen ? 'Open' : 'Closed'}
            </span>
          );
        })()}
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-100 border border-blue-500/30">
          {coverage} Coverage
        </span>
      </div>
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
    <Link
      to="/apply"
      state={{ scholarship: title, country: country, fieldOfStudy: field }}
      className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition shadow-lg shadow-blue-700/30 block text-center"
    >
      Apply Now
    </Link>
  </div>
);

export default ScholarshipCard;

