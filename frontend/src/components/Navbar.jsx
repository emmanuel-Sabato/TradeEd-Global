import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/tradeedglobal-image.svg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Visa Services', path: '/visa-services' },
  { label: 'Study Abroad', path: '/study-abroad' },
  { label: 'Countries', path: '/countries' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-white/5">
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-blue-500/30 overflow-hidden">
            <img src={logo} alt="TradeEd Global" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg leading-tight">TradeEd Global</p>
            <p className="text-xs text-blue-100">International Education</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-slate-200 hover:text-white',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/apply"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition"
          >
            Apply Now
          </Link>

        </div>

        <button
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-white/5">
          <div className="section-container flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'text-sm font-semibold px-3 py-2 rounded-md',
                    isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-center text-sm font-semibold shadow-lg shadow-blue-500/25"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

