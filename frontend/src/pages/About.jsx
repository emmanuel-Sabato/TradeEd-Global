const stats = [
  { label: 'Visa Success Rate', value: '98%' },
  { label: 'Partner Institutions', value: '320+' },
  { label: 'Scholarships Secured', value: '2,500+' },
  { label: 'Student Nationalities', value: '45+' },
];

const reasons = [
  'Dedicated advisors with regional expertise',
  'Transparent timelines and document checklists',
  'Scholarship-first approach to reduce costs',
  'Ongoing pre-departure and on-arrival support',
];

const About = () => (
  <div className="bg-slate-950 text-white min-h-screen py-16">
    <div className="section-container space-y-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-blue-200 text-sm font-semibold">About Us</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Who We Are</h1>
          <p className="text-slate-300 leading-relaxed">
            TradeEd Global is a team of international education strategists, former admissions officers, and visa experts. We deliver end-to-end solutions for students seeking scholarships, admissions, and smooth visa approvals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-slate-900 border border-white/5 p-4">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 via-emerald-500/10 to-slate-900 p-10 border border-white/5 shadow-soft space-y-4">
          <p className="text-xl font-semibold text-white">Mission</p>
          <p className="text-slate-200 leading-relaxed">
            Democratize access to world-class education by simplifying scholarships and visa processes for ambitious students everywhere.
          </p>
          <p className="text-xl font-semibold text-white">Vision</p>
          <p className="text-slate-200 leading-relaxed">
            Become the most trusted global education partner, known for integrity, transparency, and student success.
          </p>
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

