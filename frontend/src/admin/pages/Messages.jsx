
import { useState, useEffect } from 'react';
import Table from '../components/Table';
import { Mail, MessageCircle, XCircle, Trash2, Reply } from 'lucide-react';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('tradeed_messages');
        if (stored) {
            try {
                setMessages(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse messages', e);
            }
        }
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            const updated = messages.filter(msg => msg.id !== id);
            setMessages(updated);
            localStorage.setItem('tradeed_messages', JSON.stringify(updated));
            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Messages</h1>
                    <p className="text-slate-400">View inquiries from the contact form</p>
                </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-950 shadow-soft p-1">
                <Table
                    columns={[
                        { key: 'date', label: 'Date' },
                        { key: 'name', label: 'Sender' },
                        { key: 'email', label: 'Email' },
                        { key: 'message', label: 'Preview', render: (msg) => <span className="text-slate-400 truncate max-w-xs block">{msg}</span> },
                    ]}
                    data={messages}
                    renderActions={(row) => (
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedMessage(row)}
                                className="p-2 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20"
                                title="Read Message"
                            >
                                <Mail size={16} />
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
                {messages.length === 0 && (
                    <div className="p-8 text-center text-slate-400">
                        No messages received yet.
                    </div>
                )}
            </div>

            {/* Message Detail Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">Message Details</h2>
                            <button onClick={() => setSelectedMessage(null)} className="text-slate-400 hover:text-white">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">From</p>
                                <p className="text-white font-medium">{selectedMessage.name} <span className="text-slate-500 text-sm">({selectedMessage.email})</span></p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Date</p>
                                <p className="text-white font-medium">{selectedMessage.date}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <p className="text-slate-300 whitespace-pre-wrap">{selectedMessage.message}</p>
                            </div>
                        </div>
                        <div className="p-6 border-t border-white/5 bg-slate-950/50 flex justify-end gap-3">
                            <a
                                href={`mailto:${selectedMessage.email}?subject=Re: Enquiry from TradeEd Global`}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 font-medium shadow-lg shadow-blue-700/20"
                            >
                                <Reply size={18} />
                                <span>Reply via Email</span>
                            </a>
                            <button onClick={() => setSelectedMessage(null)} className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Messages;
