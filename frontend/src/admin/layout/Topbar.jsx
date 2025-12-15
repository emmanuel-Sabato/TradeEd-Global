import { Bell, LogOut, Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../AdminAuthContext';

const Topbar = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/90 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            className="bg-slate-900 border border-white/10 rounded-xl pl-10 pr-3 py-2 text-sm text-slate-100 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search applications, users..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">
          <Bell size={18} className="text-slate-200" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500" />
          <div className="text-xs text-left">
            <p className="text-white font-semibold">Admin User</p>
            <p className="text-slate-400">Super Admin</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
        <button
          className="px-3 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition"
          onClick={handleLogout}
        >
          <LogOut size={16} className="inline mr-1" /> Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;

