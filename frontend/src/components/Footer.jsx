import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="section-container py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-slate-100">
        <div>
          <p className="text-xl font-semibold text-white">TradeEd Global</p>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Empowering students with scholarships, visa support, and admissions guidance for a seamless study abroad journey.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {[
              { Icon: Linkedin, label: 'LinkedIn', href: '#' },
              { Icon: Facebook, label: 'Facebook', href: '#' },
              { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/tradeedglobal/' },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {['Scholarships', 'Visa Services', 'Study Abroad', 'Countries'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Support</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <a href="mailto:info@tradeedglobal.com" className="hover:text-white transition">
              info@tradeedglobal.com
            </a>
            <p>+250 791 799 287</p>
            <p>+250 783 106 399</p>
            <p>+86 156 2162 9912</p>
            <p>+86 132 3755 2919</p>
            <Link to="/contact" className="hover:text-white transition text-emerald-400">
              Contact Us &rarr;
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Locations</p>
          <div className="mt-4 flex flex-col gap-4 text-sm text-slate-300">
            <div>
              <p className="text-emerald-400 font-medium mb-1">Rwanda</p>
              <p className="opacity-80">KN 2 Ave, MIC Building, Ground Floor B66, Nyarugenge, Kigali</p>
            </div>
            <div>
              <p className="text-blue-400 font-medium mb-1">China</p>
              <p className="opacity-80">Room 904, South Building Block C, Shangpin International, No. 88 Gaoxin Road, Xi’an</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-400">
        © TradeEd Global – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

