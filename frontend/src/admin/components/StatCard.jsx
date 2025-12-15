const toneMap = {
  blue: 'from-blue-600/15 to-blue-500/5 text-blue-200',
  emerald: 'from-emerald-500/15 to-emerald-400/5 text-emerald-200',
  amber: 'from-amber-500/15 to-amber-400/5 text-amber-200',
  purple: 'from-purple-500/15 to-purple-400/5 text-purple-200',
};

const StatCard = ({ label, value, delta, tone = 'blue', icon }) => (
  <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-4 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${toneMap[tone]} flex items-center justify-center text-white`}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
    <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full">
      {delta}
    </span>
  </div>
);

export default StatCard;

