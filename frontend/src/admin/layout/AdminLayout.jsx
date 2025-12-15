import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-slate-900 text-slate-100 flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Topbar />
      <main className="p-6 lg:p-8 space-y-6">{children || <Outlet />}</main>
    </div>
  </div>
);

export default AdminLayout;

