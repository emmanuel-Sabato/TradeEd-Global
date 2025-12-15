import { useState } from 'react';
import { useAdminAuth } from '../AdminAuthContext';

const Settings = () => {
  const { changePassword } = useAdminAuth();
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (key, value) => setPasswords((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    setMessage('');
    setError('');
    if (!passwords.current || !passwords.next || !passwords.confirm) {
      setError('Please fill all fields.');
      return;
    }
    if (passwords.next !== passwords.confirm) {
      setError('New passwords do not match.');
      return;
    }
    const result = changePassword(passwords.current, passwords.next);
    if (result.success) {
      setMessage('Password updated. Use the new password to log in next time.');
      setPasswords({ current: '', next: '', confirm: '' });
    } else {
      setError(result.message || 'Unable to update password.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xl font-semibold text-white">Settings</p>
        <p className="text-sm text-slate-300">Update admin access credentials.</p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-5 space-y-4 max-w-xl">
        <p className="text-sm font-semibold text-white">Change Password</p>
        <div className="flex flex-col gap-3">
          {[
            { key: 'current', label: 'Current Password' },
            { key: 'next', label: 'New Password' },
            { key: 'confirm', label: 'Confirm New Password' },
          ].map((field) => (
            <div key={field.key} className="flex flex-col gap-1">
              <label className="text-xs text-slate-400">{field.label}</label>
              <input
                type="password"
                value={passwords[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
              />
            </div>
          ))}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {message && <p className="text-xs text-emerald-300">{message}</p>}
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500" onClick={handleSave}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

