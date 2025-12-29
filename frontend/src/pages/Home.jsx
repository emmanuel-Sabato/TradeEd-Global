import { GraduationCap, PlaneTakeoff, School, Globe2 } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CountryCard from '../components/CountryCard';
import StepCard from '../components/StepCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import usaImage from '../assets/USA-image.jpg';
import canadaImage from '../assets/Canada-images.jpeg';
import europeImage from '../assets/Scholarships-in-Europe-Image.jpg';
import australiaImage from '../assets/Study-in-Australia.webp';
import ukImage from '../assets/image-to-Study-in-UK.webp';
import irelandImage from '../assets/image-study-in-ireland-for-international-students.webp';
import chinaImage from '../assets/image-Study-in-China.jpg';
import germanyImage from '../assets/image-germany-scholarships.jpeg';
import { useEffect, useState } from 'react';
import { getCountries, defaultCountries } from '../shared/clientData';

const imageFallbacks = {
  USA: usaImage,
  Canada: canadaImage,
  UK: ukImage,
  Ireland: irelandImage,
  Australia: australiaImage,
  China: chinaImage,
  Germany: germanyImage,
};

const services = [
  {
    title: 'University Selection Guidance',
    description: 'Expert advice to choose the right university and program for your career goals.',
    Icon: School,
  },
  {
    title: 'Application Support',
    description: 'Full assistance with admission applications, document preparation, and submission.',
    Icon: Globe2,
  },
  {
    title: 'Scholarships & Loans',
    description: 'Guidance on securing scholarships and education loans to fund your studies.',
    Icon: GraduationCap,
  },
  {
    title: 'Visa Support',
    description: 'Comprehensive support for visa applications, interviews, and documentation.',
    Icon: PlaneTakeoff,
  },
  {
    title: 'Affordable Study in China',
    description: 'Specialized packages for high-quality, cost-effective education in China.',
    Icon: Globe2,
  },
];

const destinationsFallback = [
  {
    id: 'ct-eu',
    name: 'Europe',
    image: europeImage,
    tuition: '$10k - $20k / year',
    livingCost: '$900 - $1,400 / month',
    workRights: '20 hrs/week during study',
    universities: ['TU Munich', 'KU Leuven', 'Sorbonne'],
  },
  {
    id: 'ct-can',
    name: 'Canada',
    image: canadaImage,
    tuition: '$12k - $25k / year',
    livingCost: '$1,000 - $1,600 / month',
    workRights: '20 hrs/week + PGWP',
    universities: ['University of Toronto', 'UBC', 'McGill'],
  },
  {
    id: 'ct-usa',
    name: 'USA',
    image: usaImage,
    tuition: '$15k - $35k / year',
    livingCost: '$1,200 - $1,800 / month',
    workRights: 'CPT & OPT pathways',
    universities: ['NYU', 'UCLA', 'Georgia Tech'],
  },
  {
    id: 'ct-asia',
    name: 'Asia',
    image: australiaImage,
    tuition: '$6k - $15k / year',
    livingCost: '$600 - $1,000 / month',
    workRights: '16-20 hrs/week',
    universities: ['NUS', 'HKU', 'Tokyo Univ.'],
  },
  {
    id: 'ct-au',
    name: 'Australia',
    image: australiaImage,
    tuition: '$14k - $30k / year',
    livingCost: '$1,200 - $1,700 / month',
    workRights: '20 hrs/week + PSW',
    universities: ['UNSW', 'Monash', 'University of Sydney'],
  },
];

const steps = [
  { title: 'Choose Program', description: 'Define your study goals, preferred countries, and target universities.' },
  { title: 'Apply Scholarship', description: 'Submit standout applications with our scholarship specialists.' },
  { title: 'Visa Processing', description: 'Organize documents, submit visa forms, and ace your interview prep.' },
  { title: 'Fly & Study', description: 'Pre-departure guidance, housing tips, and on-arrival support.' },
];

const testimonials = [
  {
    name: 'Sara Mahmoud',
    country: 'Canada',
    quote: 'TradeEd Global secured my scholarship and guided every visa step. I felt supported the entire time.',
    image: canadaImage,
    program: 'MSc Data Science',
  },
  {
    name: 'Leon Zhang',
    country: 'Australia',
    quote: 'From university selection to housing advice, the team was incredibly professional and fast.',
    image: australiaImage,
    program: 'BBA International Business',
  },
  {
    name: 'Amelia Rossi',
    country: 'USA',
    quote: 'I received two admission offers with funding. The counseling sessions were practical and honest.',
    image: usaImage,
    program: 'MBA',
  },
];

const Home = () => {
  const [destinations, setDestinations] = useState(destinationsFallback);

  useEffect(() => {
    const countries = getCountries();
    const remapped = countries.map((c) => ({
      id: c.id,
      name: c.name,
      image:
        typeof c.flag === 'string' && c.flag.includes('/src/')
          ? imageFallbacks[c.name] || usaImage
          : c.flag || imageFallbacks[c.name] || usaImage,
      tuition: c.tuition,
      livingCost: c.livingCost || c.living,
      workRights: c.workRights || 'Work during study',
      universities: c.universities || [],
    }));
    setDestinations(remapped.length ? remapped : defaultCountries);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <Hero />

      <section className="section-container py-16 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-blue-200 text-sm font-semibold">Services</p>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl lg:text-4xl font-bold">End-to-end support for students</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-container py-16 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-blue-200 text-sm font-semibold">Study Destinations</p>
          <h2 className="text-3xl lg:text-4xl font-bold">Popular pathways for all of the time intake</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <CountryCard key={destination.name} {...destination} />
          ))}
        </div>
      </section>

      <section className="section-container py-16 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-blue-200 text-sm font-semibold">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold">A guided process built for results</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={index + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="section-container py-16 space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-blue-200 text-sm font-semibold">Success Stories</p>
          <h2 className="text-3xl lg:text-4xl font-bold">Hear from our students</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <section className="section-container py-16">
        <CTASection />
      </section>
    </div>
  );
};

export default Home;

