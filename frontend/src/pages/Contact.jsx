import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => (
  <div className="bg-slate-950 text-white min-h-screen py-16">
    <div className="section-container space-y-12">
      <div className="space-y-3">
        <p className="text-blue-200 text-sm font-semibold">Contact</p>
        <h1 className="text-3xl lg:text-4xl font-bold">Let’s talk about your study plans</h1>
        <p className="text-slate-300 max-w-2xl">
          Reach out to our advisors for scholarship guidance, visa queries, or university shortlisting.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <form
          className="rounded-2xl bg-slate-900 border border-white/5 p-6 shadow-soft space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const newMessage = {
              id: Date.now().toString(),
              ...data,
              date: new Date().toLocaleDateString(),
              timestamp: new Date().toISOString(),
              status: 'Unread'
            };

            const existing = JSON.parse(localStorage.getItem('tradeed_messages') || '[]');
            localStorage.setItem('tradeed_messages', JSON.stringify([newMessage, ...existing]));

            alert('Message sent successfully! We will get back to you soon.');
            e.target.reset();
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Full Name</label>
              <input name="name" required className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" rows="4" required className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:-translate-y-0.5 transition">
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-900 border border-white/5 p-6 shadow-soft">
            <p className="text-lg font-semibold text-white mb-3">Find us</p>
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-emerald-400 font-semibold mb-1">Rwanda Office</p>
                <p>KN 2 Ave, MIC Building, Ground Floor B66, Nyarugenge, Kigali</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold mb-1">China Office</p>
                <p>Room 904, South Building Block C, Shangpin International, No. 88 Gaoxin Road, Xi’an, Shaanxi Province</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Working Time</p>
                <p>Monday – Saturday: 09:00 AM – 06:00 PM</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <a href="https://wa.me/250783106399" className="flex flex-col items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-4 text-emerald-100 hover:-translate-y-0.5 transition">
              <MessageCircle />
              WhatsApp
            </a>
            <a href="mailto:info@tradeedglobal.com" className="flex flex-col items-center gap-2 rounded-xl bg-blue-500/15 border border-blue-400/30 p-4 text-blue-100 hover:-translate-y-0.5 transition">
              <Mail />
              Email
            </a>
            <a href="tel:+250783106399" className="flex flex-col items-center gap-2 rounded-xl bg-white/10 border border-white/20 p-4 text-slate-100 hover:-translate-y-0.5 transition">
              <Phone />
              Call
            </a>
          </div>
          <div className="text-xs text-slate-300 space-y-1">
            <p>Direct lines:</p>
            <p>+250791 799287 / +250783106399</p>
            <p>+8615621629912 / +8613237552919</p>
            <p>Instagram: <a href="https://www.instagram.com/tradeedglobal/" className="text-emerald-200 underline">@TradeEdGlobal</a></p>
            <p>Email: info@tradeedglobal.com</p>
            {/* <p>Web: www.tradeedglobal.com</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;

