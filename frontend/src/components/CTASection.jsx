import { Link } from 'react-router-dom';
import ctaBg from '../assets/Study-in-Australia.webp';

const CTASection = () => (
  <section className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft">
    <img
      src={ctaBg}
      alt="CTA background"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
    <div className="relative p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="space-y-3">
        <p className="text-blue-100 text-sm font-semibold">Ready to begin?</p>
        <h3 className="text-3xl lg:text-4xl font-bold text-white">Start Your Study Abroad Journey Today</h3>
        <p className="text-slate-200 max-w-2xl">
          Get personalized guidance on scholarships, visa processing, and university admissions. Our advisors support you end-to-end.
        </p>
      </div>
      <Link
        to="/apply"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition"
      >
        Apply Now
      </Link>
    </div>
  </section>
);

export default CTASection;

