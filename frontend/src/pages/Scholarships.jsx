import { useEffect, useMemo, useState } from 'react';
import ScholarshipCard from '../components/ScholarshipCard';
import { getScholarships, defaultScholarships } from '../shared/clientData';

const filters = {
  country: ['All', 'USA', 'Canada', 'Europe', 'Australia'],
  degree: ['All', 'Bachelors', 'Masters', 'PhD'],
  field: ['All', 'STEM', 'Business', 'Computer Science', 'Engineering'],
};

const Scholarships = () => {
  const [country, setCountry] = useState('All');
  const [degree, setDegree] = useState('All');
  const [field, setField] = useState('All');
  const [data, setData] = useState(defaultScholarships);

  useEffect(() => {
    setData(getScholarships());
  }, []);

  const filtered = useMemo(
    () =>
      data.filter(
        (item) =>
          (country === 'All' || item.country === country) &&
          (degree === 'All' || item.degree === degree) &&
          (field === 'All' || item.field === field)
      ),
    [country, degree, field, data]
  );

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="section-container space-y-10">
        <div className="space-y-3">
          <p className="text-blue-200 text-sm font-semibold">Scholarships</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Find funding for your next degree</h1>
          <p className="text-slate-300 max-w-2xl">
            Explore curated scholarships with coverage for tuition, living expenses, and research grants.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 bg-slate-900 border border-white/5 p-6 rounded-2xl shadow-soft">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filters.country.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Degree Level</label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filters.degree.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Field of Study</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filters.field.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((scholarship) => (
            <ScholarshipCard key={scholarship.id || scholarship.title} {...scholarship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;

