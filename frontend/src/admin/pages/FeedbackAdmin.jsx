import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash, Video } from 'lucide-react';
import Table from '../components/Table';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import { feedback as seedFeedback } from '../adminMockData';
import { getFeedback, setFeedback } from '../../shared/clientData';

const FeedbackAdmin = () => {
    const [list, setList] = useState(() => getFeedback());
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ name: '', fromCountry: '', studyCountry: '', videoUrl: '' });

    useEffect(() => {
        if (!localStorage.getItem('client_feedback')) {
            setFeedback(seedFeedback);
            setList(seedFeedback);
        }
    }, []);

    const openModal = (item) => {
        setEditing(item);
        setForm(item || { name: '', fromCountry: '', studyCountry: '', videoUrl: '' });
        setModalOpen(true);
    };

    const save = () => {
        if (editing) {
            const updated = list.map((f) => (f.id === editing.id ? { ...form, id: editing.id } : f));
            setList(updated);
            setFeedback(updated);
        } else {
            const newItem = { ...form, id: `fb-${Date.now()}` };
            const updated = [...list, newItem];
            setList(updated);
            setFeedback(updated);
        }
        setModalOpen(false);
        setEditing(null);
    };

    const remove = (item) => {
        const updated = list.filter((f) => f.id !== item.id);
        setList(updated);
        setFeedback(updated);
        setConfirmOpen(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl font-semibold text-white">Feedback</p>
                    <p className="text-sm text-slate-300">Manage student video testimonials and success stories.</p>
                </div>
                <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500"
                    onClick={() => openModal(null)}
                >
                    <Plus size={16} /> Add Feedback
                </button>
            </div>

            <Table
                columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'fromCountry', label: 'Origin' },
                    { key: 'studyCountry', label: 'Destination' },
                    {
                        key: 'videoUrl',
                        label: 'Video',
                        render: (url) => (
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                <Video size={14} /> View
                            </a>
                        )
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
                title={editing ? 'Edit Feedback' : 'Add Feedback'}
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
                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-400">Student Name</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="e.g. John Doe"
                            className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-slate-400">From Country</label>
                            <input
                                type="text"
                                value={form.fromCountry}
                                onChange={(e) => setForm((prev) => ({ ...prev, fromCountry: e.target.value }))}
                                placeholder="e.g. Kenya"
                                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-slate-400">Study Country</label>
                            <input
                                type="text"
                                value={form.studyCountry}
                                onChange={(e) => setForm((prev) => ({ ...prev, studyCountry: e.target.value }))}
                                placeholder="e.g. Canada"
                                className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs text-slate-400">YouTube Video URL</label>
                        <input
                            type="text"
                            value={form.videoUrl}
                            onChange={(e) => setForm((prev) => ({ ...prev, videoUrl: e.target.value }))}
                            placeholder="https://www.youtube.com/watch?v=..."
                            className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
            </Modal>

            <ConfirmDialog
                open={confirmOpen}
                title="Delete feedback?"
                message="This action cannot be undone."
                onCancel={() => setConfirmOpen(false)}
                onConfirm={() => remove(editing)}
            />
        </div>
    );
};

export default FeedbackAdmin;
