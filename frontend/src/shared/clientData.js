import usaImage from '../assets/USA-image.jpg';
import canadaImage from '../assets/Canada-images.jpeg';
import europeImage from '../assets/Scholarships-in-Europe-Image.jpg';
import australiaImage from '../assets/Study-in-Australia.webp';
import ukImage from '../assets/image-to-Study-in-UK.webp';
import irelandImage from '../assets/image-study-in-ireland-for-international-students.webp';
import chinaImage from '../assets/image-Study-in-China.jpg';
import germanyImage from '../assets/image-germany-scholarships.jpeg';

const isBrowser = typeof window !== 'undefined';

const SCHOLARSHIPS_KEY = 'client_scholarships';
const COUNTRIES_KEY = 'client_countries_v3';

const safeParse = (value, fallback) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

export const defaultScholarships = [
  { id: 'sch-1', title: 'Global Excellence Scholarship', country: 'Canada', coverage: 'Full', deadline: 'Mar 15, 2025', status: 'Open', degree: 'Masters', field: 'STEM' },
  { id: 'sch-2', title: 'Emerging Leaders Award', country: 'USA', coverage: 'Partial', deadline: 'Apr 02, 2025', status: 'Open', degree: 'Bachelors', field: 'Business' },
  { id: 'sch-3', title: 'Innovation in Tech Fellowship', country: 'Europe', coverage: 'Full', deadline: 'May 30, 2025', status: 'Review', degree: 'Masters', field: 'Computer Science' },
  { id: 'sch-4', title: 'Asia Pacific Merit Scholarship', country: 'Australia', coverage: 'Partial', deadline: 'Jun 10, 2025', status: 'Closed', degree: 'PhD', field: 'Engineering' },
];

export const defaultCountries = [
  { id: 'ct-usa', name: 'USA', tuition: '$15k - $35k / year', livingCost: '$1,200 - $1,800 / month', workRights: 'CPT / OPT pathways', flag: usaImage, universities: ['UCLA', 'NYU', 'Georgia Tech'] },
  { id: 'ct-can', name: 'Canada', tuition: '$12k - $25k / year', livingCost: '$1,000 - $1,600 / month', workRights: '20 hrs + PGWP', flag: canadaImage, universities: ['McGill', 'University of Toronto', 'UBC'] },
  { id: 'ct-uk', name: 'UK', tuition: '£12k - £25k / year', livingCost: '£1,000 - £1,500 / month', workRights: '20 hrs + 2yr PSW', flag: ukImage, universities: ['Oxford', 'Cambridge', 'Imperial'] },
  { id: 'ct-ire', name: 'Ireland', tuition: '€10k - €20k / year', livingCost: '€1,000 - €1,500 / month', workRights: '20 hrs + 2yr PSW', flag: irelandImage, universities: ['Trinity College', 'UCD', 'NUI Galway'] },
  { id: 'ct-au', name: 'Australia', tuition: '$14k - $30k / year', livingCost: '$1,200 - $1,700 / month', workRights: '24 hrs + PSW', flag: australiaImage, universities: ['Monash', 'ANU', 'University of Sydney'] },
  { id: 'ct-chn', name: 'China', tuition: '$3k - $10k / year', livingCost: '$400 - $800 / month', workRights: 'Internships allowed', flag: chinaImage, universities: ['Tsinghua', 'Peking', 'Fudan'] },
  { id: 'ct-ger', name: 'Germany', tuition: '€0 - €3k / year', livingCost: '€850 - €1,200 / month', workRights: '20 hrs/week', flag: germanyImage, universities: ['TU Munich', 'Heidelberg', 'RWTH Aachen'] },
];

export const getScholarships = () => {
  if (!isBrowser) return defaultScholarships;
  const stored = localStorage.getItem(SCHOLARSHIPS_KEY);
  return stored ? safeParse(stored, defaultScholarships) : defaultScholarships;
};

export const setScholarships = (data) => {
  if (!isBrowser) return;
  localStorage.setItem(SCHOLARSHIPS_KEY, JSON.stringify(data));
};

export const getCountries = () => {
  if (!isBrowser) return defaultCountries;
  const stored = localStorage.getItem(COUNTRIES_KEY);
  return stored ? safeParse(stored, defaultCountries) : defaultCountries;
};

export const setCountries = (data) => {
  if (!isBrowser) return;
  localStorage.setItem(COUNTRIES_KEY, JSON.stringify(data));
};

