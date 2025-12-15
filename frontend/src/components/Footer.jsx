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
            <a href="mailto:colettenshimyumuremyi@gmail.com" className="hover:text-white transition">
              colettenshimyumuremyi@gmail.com
            </a>
            <a href="tel:+250783106399" className="hover:text-white transition">
              +250 783106399
            </a>
            <a href="tel:+250791799287" className="hover:text-white transition">
              +250 791799287
            </a>
            <Link to="/contact" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Locations</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <p>New York, USA</p>
            <p>Toronto, Canada</p>
            <p>London, UK</p>
            <p>Sydney, Australia</p>
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

