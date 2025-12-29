import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAdminAuth } from '../AdminAuthContext';

const AdminLogin = () => {
  const { login, isAuthenticated, creds } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: 'admin@tradeedglobal.com', password: 'Admin@123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = login(form.email.trim(), form.password);
    if (result.success) {
      const redirectTo = location.state?.from?.pathname || '/admin';
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.message || 'Login failed');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-white text-2xl font-semibold">TradeEd Global <span className="text-2xl text-emerald-300">S.A.S.P</span></p>
          <p className="text-slate-400 text-sm">Use your admin credentials to access the</p>
          <p className="text-slate-400 text-sm"> <span className="text-xl text-emerald-300">S</span>mart <span className="text-xl text-emerald-300">A</span>dmin <span className="text-xl text-emerald-300">S</span>taff <span className="text-xl text-emerald-300">P</span>anel.</p>
          {/* <p className="text-xs text-emerald-300">Email: {creds.email}</p> */}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              required
              className="bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:-translate-y-0.5 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login as Admin'}
          </button>
        </form>
        <div className="text-center pt-2">
          <Link to="/" className="text-xs text-slate-500 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

