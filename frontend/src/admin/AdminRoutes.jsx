import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import ScholarshipsAdmin from './pages/ScholarshipsAdmin';
import CountriesAdmin from './pages/CountriesAdmin';
import Settings from './pages/Settings';
import AdminLogin from './pages/AdminLogin';
import { AdminAuthProvider, useAdminAuth } from './AdminAuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAdminAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};

const AdminRoutesContent = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route
      element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/scholarships" element={<ScholarshipsAdmin />} />
      <Route path="/admin/countries" element={<CountriesAdmin />} />
      <Route path="/admin/settings" element={<Settings />} />
    </Route>
  </Routes>
);

const AdminRoutes = () => (
  <AdminAuthProvider>
    <AdminRoutesContent />
  </AdminAuthProvider>
);

export default AdminRoutes;

