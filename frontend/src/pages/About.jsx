const reasons = [
  'Experienced advisors',
  'Personalized service',
  'Global reach',
];

import { useState, useEffect } from 'react';
import { getFeedback } from '../shared/clientData';

const getEmbedUrl = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
};

const About = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    setFeedback(getFeedback());
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="section-container space-y-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-blue-200 text-sm font-semibold">About Us</p>
            <h1 className="text-3xl lg:text-4xl font-bold">Who We Are</h1>
            <p className="text-slate-300 leading-relaxed">
              TradeEd Global is a leading international education consultancy committed to providing accessible, high-quality support to students worldwide. Our mission is to empower individuals to pursue global education opportunities and achieve academic success.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              TradeEd Global is an international education and consulting service dedicated to helping students pursue bachelor’s, master’s, and PhD programs abroad. We work with over 1,700 universities worldwide and have partnerships with institutions in the USA, Canada, UK, Ireland, Australia, China, and Germany.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-white">50%</p>
                <p className="text-xs text-emerald-200">DISCOUNT TILL JUNE 30</p>
              </div>
              <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-center">
                <p className="text-2xl font-bold text-white">$0</p>
                <p className="text-xs text-blue-200">START PRICE</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 via-emerald-500/10 to-slate-900 p-10 border border-white/5 shadow-soft space-y-4">
            <p className="text-xl font-semibold text-white">What We Offer</p>
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> University Selection Guidance</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Application Support</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Scholarships & Education Loans</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Visa Support</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Affordable Study in China</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">Why Choose TradeEd Global</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-200">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-xl bg-slate-900 border border-white/5 p-4 flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="space-y-8 pt-8 border-t border-white/5">
          <div className="text-start">
            <h2 className="text-2xl lg:text-3xl font-bold">Student Success Stories</h2>
            <p className="text-slate-400 mt-2">Hear from those we've helped on their global education journey.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedback.map((item) => (
              <div key={item.id} className="group space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl relative">
                  {getEmbedUrl(item.videoUrl) ? (
                    <iframe
                      src={getEmbedUrl(item.videoUrl)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={item.name}
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs italic">
                      Video unavailable
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-xs text-blue-300 font-medium">
                    {item.fromCountry} → {item.studyCountry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

