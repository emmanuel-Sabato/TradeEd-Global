import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import VisaServices from './pages/VisaServices';
import StudyAbroad from './pages/StudyAbroad';
import Countries from './pages/Countries';
import About from './pages/About';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import AdminRoutes from './admin/AdminRoutes';

const PublicShell = () => (
  <div className="min-h-screen bg-slate-950">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/visa-services" element={<VisaServices />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const AppContent = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) {
    return <AdminRoutes />;
  }
  return <PublicShell />;
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;

