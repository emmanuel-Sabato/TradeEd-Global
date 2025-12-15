import { useMemo, useState } from 'react';

const steps = [
  { title: 'Personal Info', fields: ['fullName', 'email', 'phone'] },
  { title: 'Education Background', fields: ['degree', 'gpa', 'graduationYear'] },
  { title: 'Desired Country & Program', fields: ['country', 'program', 'intake'] },
  { title: 'Document Upload', fields: ['passport', 'transcripts', 'resume'] },
];

const Apply = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    degree: '',
    gpa: '',
    graduationYear: '',
    country: '',
    program: '',
    intake: '',
    passport: '',
    transcripts: '',
    resume: '',
  });

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted', form);
  };

  const renderFields = () => {
    const current = steps[step];
    return current.fields.map((field) => (
      <div key={field} className="flex flex-col gap-2">
        <label className="text-sm text-slate-300 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
        <input
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={`Enter ${field}`}
          className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    ));
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="section-container space-y-10">
        <div className="space-y-3">
          <p className="text-blue-200 text-sm font-semibold">Apply</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Submit your application</h1>
          <p className="text-slate-300 max-w-2xl">
            Complete the multi-step form. We will review and follow up within 24 hours.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-white/5 p-6 shadow-soft space-y-6">
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center justify-between text-sm text-slate-300">
            <p className="font-semibold text-white">{steps[step].title}</p>
            <p>Step {step + 1} of {steps.length}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">{renderFields()}</div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={step === 0}
                className="px-4 py-2 rounded-xl border border-white/10 text-white disabled:opacity-40"
              >
                Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:-translate-y-0.5 transition"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:-translate-y-0.5 transition"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;

