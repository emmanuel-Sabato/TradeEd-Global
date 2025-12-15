const CountryCard = ({ image, name, tuition, livingCost, workRights, universities }) => (
  <div className="group rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-soft hover:-translate-y-1 transition">
    <div className="relative h-44 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
      <p className="absolute bottom-3 left-4 text-white font-semibold text-lg">{name}</p>
    </div>
    <div className="p-5 space-y-2 text-sm text-slate-200">
      <p><span className="text-slate-400">Tuition:</span> {tuition}</p>
      <p><span className="text-slate-400">Living Cost:</span> {livingCost}</p>
      <p><span className="text-slate-400">Work Opportunities:</span> {workRights}</p>
      <p className="text-slate-400 text-xs mt-3">Popular Universities</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {universities.map((uni) => (
          <span key={uni} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-100">
            {uni}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default CountryCard;

