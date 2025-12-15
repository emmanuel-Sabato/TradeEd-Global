import { useEffect, useState } from 'react';
import Table from '../components/Table';
import { countries as seedCountries } from '../adminMockData';
import { getCountries, setCountries } from '../../shared/clientData';

const CountriesAdmin = () => {
  const [rows, setRows] = useState(() => getCountries());

  useEffect(() => {
    if (!localStorage.getItem('client_countries')) {
      setCountries(seedCountries);
      setRows(seedCountries);
    }
  }, []);

  const updateField = (id, key, value) => {
    const updated = rows.map((c) => (c.id === id ? { ...c, [key]: value } : c));
    setRows(updated);
    setCountries(updated);
    console.log('Updated country', id, key, value);
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xl font-semibold text-white">Countries</p>
        <p className="text-sm text-slate-300">Manage supported countries and costs.</p>
      </div>

      <Table
        columns={[
          { key: 'name', label: 'Country' },
          {
            key: 'flag',
            label: 'Flag',
            render: (val, row) => <img src={val} alt={row.name} className="w-12 h-8 object-cover rounded-md border border-white/10" />,
          },
          {
            key: 'tuition',
            label: 'Tuition',
            render: (val, row) => (
              <input
                value={val}
                onChange={(e) => updateField(row.id, 'tuition', e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs w-40"
              />
            ),
          },
          {
            key: 'living',
            label: 'Living Cost',
            render: (val, row) => (
              <input
                value={val}
                onChange={(e) => updateField(row.id, 'living', e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs w-40"
              />
            ),
          },
          {
            key: 'workRights',
            label: 'Work Rights',
            render: (val, row) => (
              <input
                value={val || ''}
                onChange={(e) => updateField(row.id, 'workRights', e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs w-48"
              />
            ),
          },
        ]}
        data={rows}
      />
    </div>
  );
};

export default CountriesAdmin;

