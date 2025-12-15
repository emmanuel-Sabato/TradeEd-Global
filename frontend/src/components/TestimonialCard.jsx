import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, country, quote, image, program }) => (
  <div className="rounded-2xl border border-white/5 bg-slate-900 p-6 shadow-soft flex flex-col gap-4">
    <Quote className="text-blue-200" size={24} />
    <p className="text-slate-200 leading-relaxed">{quote}</p>
    <div className="flex items-center gap-3 mt-auto">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-xs text-slate-400">{program} · {country}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;

