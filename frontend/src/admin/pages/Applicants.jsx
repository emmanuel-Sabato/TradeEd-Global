
import { useState, useEffect } from 'react';
import Table from '../components/Table';
import { FileText, Download, CheckCircle, XCircle, Clock, MessageCircle, Mail, Trash2 } from 'lucide-react';

const Applicants = () => {
    const [applicants, setApplicants] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('tradeed_applicants');
        if (stored) {
            try {
                setApplicants(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse applicants', e);
            }
        }
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this applicant?')) {
            const updated = applicants.filter(app => app.id !== id);
            setApplicants(updated);
            localStorage.setItem('tradeed_applicants', JSON.stringify(updated));
            if (selectedApplicant?.id === id) {
                setSelectedApplicant(null);
            }
        }
    };

    const handleStatusChange = (id, newStatus) => {
        const updated = applicants.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        );
        setApplicants(updated);
        localStorage.setItem('tradeed_applicants', JSON.stringify(updated));

        // Update selected applicant locally to reflect change immediately in modal
        if (selectedApplicant?.id === id) {
            setSelectedApplicant(prev => ({ ...prev, status: newStatus }));
        }
    };

    const statusBadge = (status) => {
        const map = {
            Approved: 'bg-emerald-500/15 text-emerald-100 border border-emerald-400/30',
            Pending: 'bg-amber-500/15 text-amber-100 border border-amber-400/30',
            Rejected: 'bg-red-500/15 text-red-100 border border-red-400/30',
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${map[status] || 'bg-white/10 text-slate-100'}`}>
                {status}
            </span>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Applicants</h1>
                    <p className="text-slate-400">Manage and review student applications</p>
                </div>
                <div className="flex gap-2">
                    {/* Placeholder for export functionality */}
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition">
                        <Download size={18} />
                        <span>Export CSV</span>
                    </button>
                </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-1">
                <Table
                    columns={[
                        { key: 'fullName', label: 'Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'country', label: 'Target Country' },
                        { key: 'scholarship', label: 'Scholarship' },
                        { key: 'date', label: 'Date Applied' },
                        { key: 'status', label: 'Status', render: statusBadge },
                    ]}
                    data={applicants}
                    renderActions={(row) => (
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedApplicant(row)}
                                className="p-2 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20"
                                title="View Details"
                            >
                                <FileText size={16} />
                            </button>
                            <button
                                onClick={() => handleDelete(row.id)}
                                className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                                title="Delete"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    )}
                />
                {applicants.length === 0 && (
                    <div className="p-8 text-center text-slate-400">
                        No applications found via specific form submission yet.
                    </div>
                )}
            </div>

            {/* Application Detail Modal */}
            {selectedApplicant && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">Application Details</h2>
                            <button onClick={() => setSelectedApplicant(null)} className="text-slate-400 hover:text-white">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Applicant Name</p>
                                    <p className="text-white font-medium">{selectedApplicant.fullName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                                    <p className="text-white font-medium">{selectedApplicant.email}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
                                    <p className="text-white font-medium">{selectedApplicant.phone}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                    {statusBadge(selectedApplicant.status)}
                                </div>
                            </div>

                            <div className="border-t border-white/5 pt-4">
                                <h3 className="text-sm font-semibold text-blue-200 mb-4">Academic Background</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Degree</p>
                                        <p className="text-white">{selectedApplicant.degree}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">GPA</p>
                                        <p className="text-white">{selectedApplicant.gpa}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Graduation Year</p>
                                        <p className="text-white">{selectedApplicant.graduationYear}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/5 pt-4">
                                <h3 className="text-sm font-semibold text-blue-200 mb-4">Scholarship & Program Interest</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Scholarship</p>
                                        <p className="text-white">{selectedApplicant.scholarship}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Target Country</p>
                                        <p className="text-white">{selectedApplicant.country}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Field of Study</p>
                                        <p className="text-white">{selectedApplicant.fieldOfStudy || selectedApplicant.program}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="p-6 border-t border-white/5 bg-slate-950/50 flex justify-between gap-3">
                            <div className="flex gap-2">
                                <a
                                    href={`https://wa.me/${selectedApplicant.phone?.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition"
                                >
                                    <MessageCircle size={18} />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href={`mailto:${selectedApplicant.email}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
                                >
                                    <Mail size={18} />
                                    <span>Email</span>
                                </a>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setSelectedApplicant(null)} className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Close</button>
                                <button
                                    onClick={() => handleStatusChange(selectedApplicant.id, 'Approved')}
                                    disabled={selectedApplicant.status === 'Approved'}
                                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 font-medium shadow-lg shadow-emerald-700/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {selectedApplicant.status === 'Approved' ? 'Approved' : 'Approve Application'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Applicants;
