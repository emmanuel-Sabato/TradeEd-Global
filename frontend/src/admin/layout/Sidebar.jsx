import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, Globe2, Settings, ChevronLeft, Users, MessageCircle } from 'lucide-react';

const links = [
  { to: '/admin', label: 'Dashboard', Icon: LayoutDashboard },
  { to: '/admin/applicants', label: 'Applicants', Icon: Users },
  { to: '/admin/messages', label: 'Messages', Icon: MessageCircle },
  { to: '/admin/scholarships', label: 'Scholarships', Icon: GraduationCap },
  { to: '/admin/countries', label: 'Countries', Icon: Globe2 },
  { to: '/admin/feedback', label: 'Feedback', Icon: MessageCircle },
  { to: '/admin/settings', label: 'Settings', Icon: Settings },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`h-screen sticky top-0 bg-slate-950 border-r border-white/5 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold">TG</div>
          {!collapsed && (
            <div>
              <p className="text-white font-semibold">TradeEd Global</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          )}
        </div>
        <button
          className="p-2 rounded-lg hover:bg-white/5 text-slate-300"
          onClick={() => setCollapsed((p) => !p)}
          aria-label="Toggle sidebar"
        >
          <ChevronLeft className={`transition ${collapsed ? 'rotate-180' : ''}`} size={18} />
        </button>
      </div>

      <nav className="px-3 space-y-1">
        {links.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition',
                isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5',
              ].join(' ')
            }
          >
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

