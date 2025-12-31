
import React, { useRef, useState } from 'react';
import { X, Share2, Download, Copy, Check } from 'lucide-react';
import { toPng } from 'html-to-image';

const ShareModal = ({ isOpen, onClose, scholarship }) => {
    const cardRef = useRef(null);
    const [downloading, setDownloading] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!isOpen || !scholarship) return null;

    const handleDownload = async () => {
        if (cardRef.current) {
            setDownloading(true);
            try {
                const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
                const link = document.createElement('a');
                link.download = `scholarship-${scholarship.title.replace(/\s+/g, '-').toLowerCase()}.png`;
                link.href = dataUrl;
                link.click();
            } catch (err) {
                console.error('Failed to download image', err);
            }
            setDownloading(false);
        }
    };

    const shareText = `Check out this scholarship: ${scholarship.title} in ${scholarship.country}! 
  
Coverage: ${scholarship.coverage}
Degree: ${scholarship.degree}
Deadline: ${scholarship.deadline}

Apply here: https://tradeedglobal.com/apply`;

    const handleWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('https://tradeedglobal.com/scholarships');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative">

                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <h3 className="text-lg font-semibold text-white">Share Scholarship</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 bg-slate-950/50 flex flex-col items-center">
                    {/* Card to Capture */}
                    <div
                        ref={cardRef}
                        className="w-full aspect-[4/5] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-white/20 p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full -ml-10 -mb-10"></div>

                        <div className="z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-400/20 uppercase tracking-wider">
                                    {scholarship.country}
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-200 border border-emerald-400/20">
                                    {scholarship.coverage}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                                {scholarship.title}
                            </h2>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-300 text-sm">
                                    <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                                    <div>
                                        <p className="text-slate-400 text-xs uppercase">Degree</p>
                                        <p className="font-semibold text-white">{scholarship.degree}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300 text-sm">
                                    <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                                    <div>
                                        <p className="text-slate-400 text-xs uppercase">Field</p>
                                        <p className="font-semibold text-white">{scholarship.field || scholarship.fieldOfStudy}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="z-10 mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-400 text-xs">Deadline</p>
                                    <p className="text-white font-mono">{scholarship.deadline}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">TradeEd Global</p>
                                    <p className="text-[10px] text-slate-500">Apply Now on <span className="font-bold">www.tradeedglobal.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">Preview of the shareable card.</p>
                </div>

                <div className="p-4 grid grid-cols-3 gap-3 bg-slate-900 border-t border-white/5">
                    <button
                        onClick={handleWhatsApp}
                        className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition group"
                    >
                        <Share2 size={20} className="group-hover:scale-110 transition" />
                        <span className="text-xs font-medium">WhatsApp</span>
                    </button>

                    <button
                        onClick={handleDownload}
                        disabled={downloading}
                        className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition group disabled:opacity-50"
                    >
                        <Download size={20} className="group-hover:scale-110 transition" />
                        <span className="text-xs font-medium">{downloading ? 'Saving...' : 'Save image'}</span>
                    </button>

                    <button
                        onClick={handleCopy}
                        className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-slate-700/30 text-slate-300 hover:bg-slate-700/50 transition group"
                    >
                        {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="group-hover:scale-110 transition" />}
                        <span className="text-xs font-medium">{copied ? 'Copied' : 'Copy Link'}</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ShareModal;
