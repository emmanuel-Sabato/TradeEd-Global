const Table = ({ columns, data, renderActions }) => (
  <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950 shadow-soft">
    <div className="overflow-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-slate-300">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-semibold">{col.label}</th>
            ))}
            {renderActions && <th className="px-4 py-3 text-left font-semibold">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-white/5 transition">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-slate-100">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {renderActions && <td className="px-4 py-3">{renderActions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Table;

