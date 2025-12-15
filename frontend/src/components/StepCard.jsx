const StepCard = ({ step, title, description }) => (
  <div className="rounded-2xl bg-slate-900 border border-white/5 p-6 shadow-soft hover:-translate-y-1 transition">
    <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center text-lg font-bold">
      {step}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{description}</p>
  </div>
);

export default StepCard;

