const Modal = ({ open, title, onClose, children, footer }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur">
      <div className="bg-slate-950 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button className="text-slate-400 hover:text-white" onClick={onClose}>✕</button>
        </div>
        <div className="space-y-3 text-slate-100">{children}</div>
        {footer && <div className="pt-2 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

