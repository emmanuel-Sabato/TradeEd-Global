import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import { getCountries, defaultCountries } from '../shared/clientData';
import usaImage from '../assets/USA-image.jpg';
import canadaImage from '../assets/Canada-images.jpeg';
import europeImage from '../assets/Scholarships-in-Europe-Image.jpg';
import australiaImage from '../assets/Study-in-Australia.webp';

const imageFallbacks = {
  USA: usaImage,
  Canada: canadaImage,
  Europe: europeImage,
  Australia: australiaImage,
};

const resolveImage = (country) => {
  const hasInvalidSrcPath = typeof country.flag === 'string' && country.flag.includes('/src/');
  if (country.flag && !hasInvalidSrcPath) return country.flag;
  return imageFallbacks[country.name] || usaImage;
};

const Countries = () => {
  const [countries, setCountries] = useState(defaultCountries);

  useEffect(() => {
    const data = getCountries();
    const mapped = data.map((c) => ({
      ...c,
      image: resolveImage(c),
      livingCost: c.livingCost || c.living || '—',
      workRights: c.workRights || 'Work during study',
      universities: c.universities || [],
    }));
    setCountries(mapped);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen py-16">
      <div className="section-container space-y-10">
        <div className="space-y-3">
          <p className="text-blue-200 text-sm font-semibold">Countries</p>
          <h1 className="text-3xl lg:text-4xl font-bold">Compare destination profiles</h1>
          <p className="text-slate-300 max-w-2xl">
            Review tuition, living costs, work opportunities, and top universities for each region.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.id || country.name} {...country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;

