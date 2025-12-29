import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const steps = [
  { title: 'Personal Info', fields: ['fullName', 'email', 'phone'] },
  { title: 'Education Background', fields: ['degree', 'gpa', 'graduationYear'] },
];

const Apply = () => {
  const { state } = useLocation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    degree: '',
    gpa: '',
    graduationYear: '',
    // Removed explicit country/program fields from UI, but captured from context
  });
  // Pre-fill program if scholarship is passed
  // Better to just show it visually as requested "Catch the Scholarship card... help Admin to know".
  // I will add a hidden field or just visual indication.
  // Actually, I should probably include it in the form submission.

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newApplicant = {
      id: Date.now().toString(),
      ...form,
      scholarship: state?.scholarship || 'General Application',
      country: state?.country || 'Not Specified',
      program: state?.scholarship || 'General',
      fieldOfStudy: state?.fieldOfStudy || 'General',
      status: 'Pending',
      date: new Date().toLocaleDateString(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('tradeed_applicants') || '[]');
    const updated = [newApplicant, ...existing];
    try {
      localStorage.setItem('tradeed_applicants', JSON.stringify(updated));
      console.log('Application submitted', newApplicant);
      alert('Application submitted successfully!');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        degree: '',
        gpa: '',
        graduationYear: '',
      });
      setStep(0);
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        alert('File size too large! Local storage is full. Please use smaller files for this demo.');
      } else {
        console.error('Storage error', e);
        alert('Failed to save application.');
      }
    }
  };

  const renderFields = () => {
    const current = steps[step];
    return current.fields.map((field) => {

      let inputType = 'text';
      if (field === 'email') inputType = 'email';
      else if (field === 'phone') inputType = 'tel';
      else if (['gpa', 'graduationYear'].includes(field)) inputType = 'number';

      return (
        <div key={field} className="flex flex-col gap-2">
          <label className="text-sm text-slate-300 capitalize">
            {field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            name={field}
            type={inputType}
            onChange={handleChange}
            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-slate-700/50 transition-colors"
            required
            value={form[field]}
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="section-container space-y-10">
        <div className="space-y-3">
          <p className="text-blue-200 text-sm font-semibold">Apply</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Submit your application</h1>
          {state?.scholarship && (
            <div className="inline-block px-4 py-2 mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              Applying for: {state.scholarship}
            </div>
          )}
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

