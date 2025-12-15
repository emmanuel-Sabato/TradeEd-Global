const ServiceCard = ({ Icon, title, description }) => (
  <div className="group p-6 rounded-2xl bg-slate-900 border border-white/5 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
      <Icon size={22} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;

