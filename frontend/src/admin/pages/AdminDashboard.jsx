import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Lock, MessageCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import StatCard from '../components/StatCard';
import Table from '../components/Table';
import { applicationsMonthly } from '../adminMockData';

const COUNTRY_COLORS = {
  'USA': '#3b82f6',      // Blue (500)
  'Canada': '#f87171',   // Light Red (400)
  'UK': '#1e3a8a',       // Dark Blue (900)
  'Ireland': '#10b981',  // Emerald (500)
  'Australia': '#f59e0b',// Amber (500)
  'China': '#dc2626',    // Red (600)
  'Germany': '#eab308',  // Yellow (500)
};

const COUNTRY_FLAGS = {
  'USA': '🇺🇸',
  'Canada': '🇨🇦',
  'UK': '🇬🇧',
  'Ireland': '🇮🇪',
  'Australia': '🇦🇺',
  'China': '🇨🇳',
  'Germany': '🇩🇪',
};

const statusBadge = (status) => {
  const map = {
    Approved: 'bg-emerald-500/15 text-emerald-100 border border-emerald-400/30',
    Pending: 'bg-amber-500/15 text-amber-100 border border-amber-400/30',
    Rejected: 'bg-red-500/15 text-red-100 border border-red-400/30',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status] || 'bg-white/10 text-slate-100'}`}>{status}</span>;
};

const AdminDashboard = () => {
  const [recentApps, setRecentApps] = useState([]);
  const [countryData, setCountryData] = useState(
    Object.keys(COUNTRY_COLORS).map(name => ({ name, value: 0 }))
  );
  const [stats, setStats] = useState({
    totalApps: 0,
    openSch: 0,
    closedSch: 0,
    messages: 0
  });

  useEffect(() => {
    // Recent Apps & Total Apps Logic
    const storedApps = localStorage.getItem('tradeed_applicants');
    if (storedApps) {
      try {
        const parsed = JSON.parse(storedApps);
        setRecentApps(parsed.slice(0, 3));
        setStats(prev => ({ ...prev, totalApps: parsed.length }));

        // Country Distribution Logic
        // For visual demonstration (showing all colors), we use fixed values
        const distribution = [
          { name: 'USA', value: 35 },
          { name: 'Canada', value: 15 },
          { name: 'UK', value: 15 },
          { name: 'Ireland', value: 10 },
          { name: 'Australia', value: 10 },
          { name: 'China', value: 10 },
          { name: 'Germany', value: 5 },
        ];

        /* Real Data Logic (Commented out for design verification)
        const counts = {};
        Object.keys(COUNTRY_COLORS).forEach(c => counts[c] = 0);
        
        const total = parsed.length;

        parsed.forEach(app => {
          const c = app.country || '';
          if (/USA|United States|America/i.test(c)) counts['USA']++;
          else if (/Canada/i.test(c)) counts['Canada']++;
          else if (/UK|United Kingdom|England/i.test(c)) counts['UK']++;
          else if (/Ireland/i.test(c)) counts['Ireland']++;
          else if (/Australia/i.test(c)) counts['Australia']++;
          else if (/China/i.test(c)) counts['China']++;
          else if (/Germany/i.test(c)) counts['Germany']++;
        });

        const distribution = Object.keys(COUNTRY_COLORS).map(key => ({
          name: key,
          value: total > 0 ? Math.round((counts[key] / total) * 100) : 0
        }));
        */

        setCountryData(distribution);

      } catch (e) {
        console.error('Failed to parse applicants', e);
      }
    }


    // Scholarships Logic
    const storedSch = localStorage.getItem('client_scholarships');
    if (storedSch) {
      try {
        const parsed = JSON.parse(storedSch);
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const open = parsed.filter(s => {
          const d = new Date(s.deadline);
          return !s.deadline || (!isNaN(d.getTime()) && d >= now);
        }).length;

        const closed = parsed.length - open;
        setStats(prev => ({ ...prev, openSch: open, closedSch: closed }));
      } catch (e) {
        console.error('Failed to parse scholarships', e);
      }
    }

    // Messages Logic
    const storedMsgs = localStorage.getItem('tradeed_messages');
    if (storedMsgs) {
      try {
        const parsed = JSON.parse(storedMsgs);
        setStats(prev => ({ ...prev, messages: parsed.length }));
      } catch (e) {
        console.error('Failed to parse messages', e);
      }
    }
  }, []);

  const dynamicCards = [
    { label: 'Total Applications', value: stats.totalApps.toString(), icon: <TrendingUp />, trend: '+12%', color: 'blue' },
    { label: 'Opened Scholarships', value: stats.openSch.toString(), icon: <BookOpen />, trend: 'Active', color: 'emerald' },
    { label: 'Closed Scholarships', value: stats.closedSch.toString(), icon: <Lock />, trend: 'Expired', color: 'red' },
    { label: 'Contact Messages', value: stats.messages.toString(), icon: <MessageCircle />, trend: 'New', color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dynamicCards.map((card) => (
          <StatCard
            key={card.label}
            {...card}
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
                <Pie data={countryData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={4}>
                  {countryData.map((entry, index) => (
                    <Cell key={entry.name} fill={COUNTRY_COLORS[entry.name] || '#94a3b8'} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
            {countryData.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full shrink-0" style={{ background: COUNTRY_COLORS[item.name] || '#94a3b8' }} />
                <span>{COUNTRY_FLAGS[item.name]} {item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Recent Applications</p>
          <Link to="/admin/applicants" className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10">View all</Link>
        </div>
        <Table
          columns={[
            { key: 'fullName', label: 'Applicant' },
            { key: 'scholarship', label: 'Program' },
            { key: 'country', label: 'Country' },
            { key: 'status', label: 'Status', render: (val) => statusBadge(val) },
            { key: 'date', label: 'Date' },
          ]}
          data={recentApps}
          renderActions={() => (
            <Link to="/admin/applicants" className="text-xs px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500">View</Link>
          )}
        />
        {recentApps.length === 0 && (
          <div className="text-center text-slate-500 text-sm py-4">No recent applications</div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

