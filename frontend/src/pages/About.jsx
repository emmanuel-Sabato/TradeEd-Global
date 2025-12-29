

const reasons = [
  'Experienced advisors',
  'Personalized service',
  'Global reach',
];

const About = () => (
  <div className="bg-slate-950 text-white min-h-screen py-16">
    <div className="section-container space-y-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-blue-200 text-sm font-semibold">About Us</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Who We Are</h1>
          <p className="text-slate-300 leading-relaxed">
            TradeEd Global is a leading international education consultancy committed to providing accessible, high-quality support to students worldwide. Our mission is to empower individuals to pursue global education opportunities and achieve academic success.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            TradeEd Global is an international education and consulting service dedicated to helping students pursue bachelor’s, master’s, and PhD programs abroad. We work with over 1,700 universities worldwide and have partnerships with institutions in the USA, Canada, UK, Ireland, Australia, China, and Germany.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center">
              <p className="text-2xl font-bold text-white">50%</p>
              <p className="text-xs text-emerald-200">DISCOUNT TILL JUNE 30</p>
            </div>
            <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-center">
              <p className="text-2xl font-bold text-white">$0</p>
              <p className="text-xs text-blue-200">START PRICE</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 via-emerald-500/10 to-slate-900 p-10 border border-white/5 shadow-soft space-y-4">
          {/* Replaced Mission/Vision with image or empty for now as it's not in brochure, but keeping the layout balanced. 
               Actually, I will put the second paragraph of About Us here to balance layout if needed, or maybe the 'What We Offer' highlights? 
               The brochure has 'What We Offer' on a separate panel. 
               Let's put 'What We Offer' highlights here for the 'About' page context.
           */}
          <p className="text-xl font-semibold text-white">What We Offer</p>
          <ul className="space-y-3 text-slate-200">
            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> University Selection Guidance</li>
            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Application Support</li>
            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Scholarships & Education Loans</li>
            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Visa Support</li>
            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Affordable Study in China</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-lg font-semibold text-white">Why Choose TradeEd Global</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-xl bg-slate-900 border border-white/5 p-4 flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;

