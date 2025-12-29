import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash } from 'lucide-react';
import Table from '../components/Table';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import { scholarships as seedScholarships } from '../adminMockData';
import { getScholarships, setScholarships } from '../../shared/clientData';

const ScholarshipsAdmin = () => {
  const [list, setList] = useState(() => getScholarships());
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', country: '', coverage: '', deadline: '', degree: '', field: '' });

  useEffect(() => {
    // if local storage empty, seed it
    if (!localStorage.getItem('client_scholarships')) {
      setScholarships(seedScholarships);
      setList(seedScholarships);
    }
  }, []);

  const openModal = (item) => {
    setEditing(item);
    setForm(item || { title: '', country: '', coverage: '', deadline: '', degree: '', field: '' });
    setModalOpen(true);
  };

  const save = () => {
    if (editing) {
      const updated = list.map((s) => (s.id === editing.id ? { ...form, id: editing.id } : s));
      setList(updated);
      setScholarships(updated);
      console.log('Updated scholarship', form);
    } else {
      const newItem = { ...form, id: `sch-${Date.now()}` };
      const updated = [...list, newItem];
      setList(updated);
      setScholarships(updated);
      console.log('Added scholarship', newItem);
    }
    setModalOpen(false);
    setEditing(null);
  };

  const remove = (item) => {
    const updated = list.filter((s) => s.id !== item.id);
    setList(updated);
    setScholarships(updated);
    console.log('Deleted scholarship', item);
    setConfirmOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-white">Scholarships</p>
          <p className="text-sm text-slate-300">Manage scholarship listings and deadlines.</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
          onClick={() => openModal(null)}
        >
          <Plus size={16} /> Add Scholarship
        </button>
      </div>

      <Table
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'country', label: 'Country' },
          { key: 'coverage', label: 'Coverage' },
          { key: 'deadline', label: 'Deadline' },
          {
            key: 'deadline',
            label: 'Status',
            render: (deadline) => {
              const now = new Date();
              const deadlineDate = new Date(deadline);
              const isOpen = !deadline || isNaN(deadlineDate.getTime()) || deadlineDate >= now.setHours(0, 0, 0, 0);
              return (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${isOpen
                  ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30'
                  : 'bg-red-500/20 text-red-100 border-red-500/30'
                  }`}>
                  {isOpen ? 'Open' : 'Closed'}
                </span>
              );
            }
          },
        ]}
        data={list}
        renderActions={(row) => (
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" onClick={() => openModal(row)}>
              <Pencil size={14} />
            </button>
            <button className="p-2 rounded-lg bg-red-600/80 text-white hover:bg-red-500" onClick={() => { setEditing(row); setConfirmOpen(true); }}>
              <Trash size={14} />
            </button>
          </div>
        )}
      />

      <Modal
        open={modalOpen}
        title={editing ? 'Edit Scholarship' : 'Add Scholarship'}
        onClose={() => setModalOpen(false)}
        footer={
          <>
            <button className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500" onClick={save}>
              Save
            </button>
          </>
        }
      >
        {['title', 'country', 'coverage', 'deadline', 'degree', 'field'].map((field) => (
          <div key={field} className="flex flex-col gap-1">
            <label className="text-xs text-slate-400 capitalize">{field}</label>
            <input
              type={field === 'deadline' ? 'date' : 'text'}
              value={form[field]}
              onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
              className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
      </Modal>

      <ConfirmDialog
        open={confirmOpen}
        title="Delete scholarship?"
        message="This action cannot be undone."
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => remove(editing)}
      />
    </div>
  );
};

export default ScholarshipsAdmin;

