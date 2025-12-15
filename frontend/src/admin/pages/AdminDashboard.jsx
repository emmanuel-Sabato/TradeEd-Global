import { TrendingUp, BadgeCheck, Plane, Users as UsersIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../components/StatCard';
import Table from '../components/Table';
import { statCards, applicationsMonthly, applicationsByCountry, recentApplications } from '../adminMockData';

const colors = ['#60a5fa', '#34d399', '#fbbf24', '#a78bfa', '#38bdf8'];

const statusBadge = (status) => {
  const map = {
    Approved: 'bg-emerald-500/15 text-emerald-100 border border-emerald-400/30',
    Pending: 'bg-amber-500/15 text-amber-100 border border-amber-400/30',
    Rejected: 'bg-red-500/15 text-red-100 border border-red-400/30',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status] || 'bg-white/10 text-slate-100'}`}>{status}</span>;
};

const AdminDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {statCards.map((card, idx) => (
        <StatCard
          key={card.label}
          {...card}
          icon={[<TrendingUp />, <BadgeCheck />, <Plane />, <UsersIcon />][idx]}
        />
      ))}
    </div>

    <div className="grid xl:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-5 xl:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-white">Applications per month</p>
          <span className="text-xs text-slate-400">Last 12 months</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={applicationsMonthly}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
              <Line type="monotone" dataKey="applications" stroke="#60a5fa" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-5">
        <p className="text-sm font-semibold text-white mb-4">Applications by country</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={applicationsByCountry} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={4}>
                {applicationsByCountry.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
          {applicationsByCountry.map((item, idx) => (
            <div key={item.name} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: colors[idx] }} />
              <span>{item.name}</span>
              <span className="text-slate-400">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Recent Applications</p>
        <button className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10">View all</button>
      </div>
      <Table
        columns={[
          { key: 'name', label: 'Applicant' },
          { key: 'program', label: 'Program' },
          { key: 'country', label: 'Country' },
          { key: 'status', label: 'Status', render: (val) => statusBadge(val) },
          { key: 'date', label: 'Date' },
        ]}
        data={recentApplications}
        renderActions={() => (
          <button className="text-xs px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500">View</button>
        )}
      />
    </div>
  </div>
);

export default AdminDashboard;

