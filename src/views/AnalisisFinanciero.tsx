import { useState } from 'react';
import { TICKS_DATA, TickerData } from '../types';
import { FileDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { TickerDrawer } from '../components/TickerDrawer';

export function AnalisisFinanciero() {
  const [selectedTicker, setSelectedTicker] = useState<TickerData | null>(null);

  return (
    <div className="flex flex-col h-full bg-workspace-bg">
      {/* Top filter area */}
      <section className="p-6 border-b border-border-subtle bg-surface-bright shrink-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-on-surface">Análisis Financiero - CEDEARs</h2>
          <button className="bg-primary hover:opacity-90 text-white px-4 py-2 flex items-center gap-2 rounded-lg transition-opacity font-medium text-sm">
            <FileDown size={18} /> Descargar Excel
          </button>
        </div>
        
        <div className="flex flex-wrap items-end gap-6 text-sm">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-secondary uppercase tracking-wider">Exchange</label>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-pill-bg text-on-surface font-semibold border-l-4 border-primary shadow-sm">NASDAQ</button>
              <button className="px-4 py-1.5 rounded-full bg-pill-bg text-secondary hover:bg-border-subtle transition-colors border border-transparent">NYSE</button>
              <button className="px-4 py-1.5 rounded-full bg-pill-bg text-secondary hover:bg-border-subtle transition-colors border border-transparent">BYMA</button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-secondary uppercase tracking-wider">PER (0-50)</label>
            <div className="flex items-center gap-2">
              <input type="number" placeholder="Min" className="w-20 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
              <span className="text-secondary">-</span>
              <input type="number" placeholder="Max" className="w-20 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-secondary uppercase tracking-wider">Deuda / EBITDA (0-10)</label>
            <div className="flex items-center gap-2">
              <input type="number" placeholder="Min" className="w-20 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
              <span className="text-secondary">-</span>
              <input type="number" placeholder="Max" className="w-20 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-secondary uppercase tracking-wider">Precio USD</label>
            <div className="flex items-center gap-2">
              <input type="number" placeholder="Min" className="w-24 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
              <span className="text-secondary">-</span>
              <input type="number" placeholder="Max" className="w-24 px-3 py-1.5 text-right border border-border-subtle rounded focus:outline-none focus:border-primary text-on-surface" />
            </div>
          </div>

          <div className="flex gap-3 ml-auto">
            <button className="px-6 py-2 rounded border border-border-subtle text-[#474746] hover:bg-pill-bg transition-colors font-medium">Limpiar</button>
            <button className="px-6 py-2 rounded bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-sm">Aplicar</button>
          </div>
        </div>
      </section>

      {/* Table Area */}
      <section className="flex-1 overflow-hidden flex flex-col p-6 pb-0 relative">
        <div className="flex-1 overflow-auto custom-scrollbar border border-border-subtle rounded-t-lg bg-workspace-bg">
          <table className="w-full text-left whitespace-nowrap min-w-max">
            <thead className="sticky top-0 bg-[#F9FAFB] border-b border-border-subtle shadow-[0_1px_0_0_#E2E8F0] z-10">
              <tr>
                {['Ticker', 'Nombre', 'Exchange'].map((h) => <th key={h} className="px-4 py-3 text-[11px] font-bold text-secondary uppercase tracking-wider">{h}</th>)}
                {['Precio USD', 'PER', 'Máx 52s', 'Dif. Máx', 'Mín 52s', 'Dif. Mín', 'D/EBITDA', 'EPS', 'Crec. EPS', 'Margen', 'ROE 5y', 'FCFonCE', 'Payout'].map((h) => 
                  <th key={h} className="px-4 py-3 text-[11px] font-bold text-secondary uppercase tracking-wider text-right">{h}</th>
                )}
              </tr>
            </thead>
            <tbody className="text-[13px] divide-y divide-border-subtle cursor-pointer">
              {TICKS_DATA.map((row) => (
                <tr key={row.ticker} onClick={() => setSelectedTicker(row)} className="hover:bg-pill-bg transition-colors">
                  <td className="px-4 py-3 font-bold text-on-surface">{row.ticker}</td>
                  <td className="px-4 py-3 text-secondary">{row.name}</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 rounded text-[10px] bg-pill-bg border-l-2 border-primary">{row.exchange}</span></td>
                  <td className="px-4 py-3 text-right font-mono">{row.price.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.per}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.max52.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono text-data-red">{row.difMax}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.min52.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono text-data-green">{row.difMin}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.dEbitda}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.eps.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-mono text-data-green">{row.epsGrowth}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.margin}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.roe}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.fcf}</td>
                  <td className="px-4 py-3 text-right font-mono">{row.payout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="h-14 flex items-center justify-between border border-t-0 border-border-subtle rounded-b-lg bg-workspace-bg px-4 shrink-0 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-secondary">Filas por página:</span>
            <select className="border border-border-subtle rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded text-secondary hover:bg-pill-bg transition-colors"><ChevronLeft size={18} /></button>
            <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold">1</button>
            <button className="w-8 h-8 rounded text-on-surface hover:bg-pill-bg flex items-center justify-center transition-colors">2</button>
            <button className="w-8 h-8 rounded text-on-surface hover:bg-pill-bg flex items-center justify-center transition-colors">3</button>
            <button className="w-8 h-8 rounded text-on-surface hover:bg-pill-bg flex items-center justify-center transition-colors">4</button>
            <button className="px-2 py-1 rounded text-secondary hover:bg-pill-bg transition-colors"><ChevronRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* Drawer */}
      {selectedTicker && (
        <TickerDrawer ticker={selectedTicker} onClose={() => setSelectedTicker(null)} />
      )}
    </div>
  );
}
