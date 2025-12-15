import usaImage from '../assets/USA-image.jpg';
import canadaImage from '../assets/Canada-images.jpeg';
import europeImage from '../assets/Scholarships-in-Europe-Image.jpg';
import australiaImage from '../assets/Study-in-Australia.webp';

export const statCards = [
  { label: 'Total Applications', value: 1240, delta: '+12%', tone: 'blue' },
  { label: 'Active Scholarships', value: 86, delta: '+4%', tone: 'emerald' },
  { label: 'Visa Requests', value: 312, delta: '+9%', tone: 'amber' },
  { label: 'Registered Users', value: 5400, delta: '+6%', tone: 'purple' },
];

export const applicationsMonthly = [
  { month: 'Jan', applications: 120 },
  { month: 'Feb', applications: 140 },
  { month: 'Mar', applications: 180 },
  { month: 'Apr', applications: 200 },
  { month: 'May', applications: 230 },
  { month: 'Jun', applications: 260 },
  { month: 'Jul', applications: 280 },
  { month: 'Aug', applications: 310 },
  { month: 'Sep', applications: 330 },
  { month: 'Oct', applications: 350 },
  { month: 'Nov', applications: 370 },
  { month: 'Dec', applications: 400 },
];

export const applicationsByCountry = [
  { name: 'USA', value: 32 },
  { name: 'Canada', value: 26 },
  { name: 'Europe', value: 18 },
  { name: 'Australia', value: 14 },
  { name: 'Asia', value: 10 },
];

export const recentApplications = [
  { name: 'Sara Mahmoud', country: 'Canada', program: 'MSc Data Science', status: 'Pending', date: '2025-02-10' },
  { name: 'Leon Zhang', country: 'Australia', program: 'BBA International Business', status: 'Approved', date: '2025-02-08' },
  { name: 'Amelia Rossi', country: 'USA', program: 'MBA', status: 'Pending', date: '2025-02-06' },
  { name: 'Omar Khalid', country: 'Europe', program: 'MEng Robotics', status: 'Rejected', date: '2025-02-04' },
];

export const scholarships = [
  { id: 'sch-1', title: 'Global Excellence Scholarship', country: 'Canada', coverage: 'Full', deadline: 'Mar 15, 2025', status: 'Open', degree: 'Masters', field: 'STEM' },
  { id: 'sch-2', title: 'Emerging Leaders Award', country: 'USA', coverage: 'Partial', deadline: 'Apr 02, 2025', status: 'Open', degree: 'Bachelors', field: 'Business' },
  { id: 'sch-3', title: 'Innovation in Tech Fellowship', country: 'Europe', coverage: 'Full', deadline: 'May 30, 2025', status: 'Review', degree: 'Masters', field: 'Computer Science' },
  { id: 'sch-4', title: 'Asia Pacific Merit Scholarship', country: 'Australia', coverage: 'Partial', deadline: 'Jun 10, 2025', status: 'Closed', degree: 'PhD', field: 'Engineering' },
];

export const countries = [
  { id: 'ct-usa', name: 'USA', tuition: '$15k - $35k', living: '$1.2k - $1.8k', flag: usaImage },
  { id: 'ct-can', name: 'Canada', tuition: '$12k - $25k', living: '$1k - $1.6k', flag: canadaImage },
  { id: 'ct-eu', name: 'Europe', tuition: '$10k - $20k', living: '$900 - $1.4k', flag: europeImage },
  { id: 'ct-au', name: 'Australia', tuition: '$14k - $30k', living: '$1.2k - $1.7k', flag: australiaImage },
];

