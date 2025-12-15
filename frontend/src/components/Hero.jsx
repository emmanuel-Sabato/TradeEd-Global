import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/Scholarships-in-Europe-Image.jpg';
import heroSide from '../assets/USA-image.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20" />

      <div className="section-container relative grid lg:grid-cols-2 gap-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold border border-white/10">
            Trusted by thousands of international students
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Your Global Education Journey Starts Here
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
            Scholarships, visa support, and admissions to top universities worldwide. We guide you from application to arrival with expert advisors and proven success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/scholarships"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 transition"
            >
              Explore Scholarships
            </Link>
            <Link
              to="/apply"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              Apply Now
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-slate-200 text-sm pt-4">
            <div>
              <p className="text-3xl font-bold text-white">45+</p>
              <p>Partner Countries</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2500+</p>
              <p>Scholarship Offers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p>Visa Approval Rate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/50">
            <img
              src={heroSide}
              alt="Students"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/10 backdrop-blur rounded-2xl px-5 py-4 text-sm text-white shadow-xl">
            <p className="font-semibold">Dedicated Advisors</p>
            <p className="text-blue-100">Personalized guidance in every step</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

