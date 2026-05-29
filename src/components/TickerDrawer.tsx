import { X, TrendingUp } from 'lucide-react';
import { TickerData } from '../types';

interface DrawerProps {
  ticker: TickerData;
  onClose: () => void;
}

export function TickerDrawer({ ticker, onClose }: DrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 transition-opacity">
      {/* Click outside target */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-slide-in-right overflow-hidden relative z-10">
        {/* Drawer Header */}
        <div className="p-6 border-b border-border-subtle flex items-center justify-between bg-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pill-bg flex items-center justify-center text-primary font-bold">
              {ticker.ticker.substring(0, 1)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-on-surface">{ticker.ticker}</h2>
                <span className="px-2 py-0.5 rounded text-[10px] bg-pill-bg text-secondary border-l-2 border-primary">{ticker.exchange}</span>
              </div>
              <p className="text-sm text-secondary">{ticker.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-pill-bg text-secondary transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 bg-workspace-bg">
          {/* Price Section */}
          <div>
            <div className="text-[40px] font-bold text-on-surface leading-none font-mono">${ticker.price.toFixed(2)}</div>
            <div className="flex items-center gap-1 mt-1 text-data-green font-semibold text-sm">
              <TrendingUp size={16} />
              <span>+1.24% (+2.32)</span>
              <span className="text-secondary font-normal ml-1 tracking-tight">• Hoy</span>
            </div>
          </div>

          {/* 52-Week Range */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold text-secondary uppercase">
              <span>Mín 52s</span>
              <span>Máx 52s</span>
            </div>
            <div className="relative h-2 bg-pill-bg rounded-full">
              <div className="absolute h-full bg-primary/20 rounded-full" style={{ left: '0%', right: '0%' }}></div>
              <div className="absolute w-1 h-4 bg-primary -top-1 rounded-full" style={{ left: '85%' }}></div>
            </div>
            <div className="flex justify-between text-[13px] font-mono">
              <span className="font-bold text-on-surface">${ticker.min52.toFixed(2)}</span>
              <span className="font-bold text-on-surface">${ticker.max52.toFixed(2)}</span>
            </div>
          </div>

          {/* Gauges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-border-subtle rounded-xl flex flex-col items-center gap-2 bg-white">
              <span className="text-[11px] font-bold text-secondary uppercase">PER</span>
              <div className="relative flex items-center justify-center w-full py-2">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle className="text-pill-bg" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
                  <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="176" strokeDashoffset="50" strokeWidth="6" strokeLinecap="round"></circle>
                </svg>
                <span className="absolute text-sm font-bold font-mono">{ticker.per}</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-data-red/10 text-data-red text-[10px] font-bold uppercase">Alto</span>
            </div>
            <div className="p-4 border border-border-subtle rounded-xl flex flex-col items-center gap-2 bg-white">
              <span className="text-[11px] font-bold text-secondary uppercase">Deuda/EBITDA</span>
              <div className="relative flex items-center justify-center w-full py-2">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle className="text-pill-bg" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
                  <circle className="text-data-green" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="176" strokeDashoffset="140" strokeWidth="6" strokeLinecap="round"></circle>
                </svg>
                <span className="absolute text-sm font-bold font-mono">{ticker.dEbitda}x</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-data-green/10 text-data-green text-[10px] font-bold uppercase">Saludable</span>
            </div>
          </div>

          {/* Data Groups */}
          <div className="space-y-6">
            <section>
              <h3 className="text-[11px] font-bold text-secondary uppercase border-b border-border-subtle pb-2 mb-3">Valoración</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-secondary">PER</span><span className="font-bold font-mono">{ticker.per}</span></div>
                <div className="flex justify-between"><span className="text-secondary">Price/Book</span><span className="font-bold font-mono">48.2</span></div>
                <div className="flex justify-between"><span className="text-secondary">EV/EBITDA</span><span className="font-bold font-mono">22.1</span></div>
                <div className="flex justify-between"><span className="text-secondary">Payout</span><span className="font-bold font-mono">{ticker.payout}</span></div>
              </div>
            </section>
            
            <section>
              <h3 className="text-[11px] font-bold text-secondary uppercase border-b border-border-subtle pb-2 mb-3">Rentabilidad</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-secondary">ROE 5y</span><span className="font-bold font-mono">{ticker.roe}</span></div>
                <div className="flex justify-between"><span className="text-secondary">Margen</span><span className="font-bold font-mono">{ticker.margin}</span></div>
                <div className="flex justify-between"><span className="text-secondary">FCFonCE</span><span className="font-bold font-mono">{ticker.fcf}</span></div>
              </div>
            </section>
            
            <section>
              <h3 className="text-[11px] font-bold text-secondary uppercase border-b border-border-subtle pb-2 mb-3">Solvencia</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-secondary">D/EBITDA</span><span className="font-bold font-mono">{ticker.dEbitda}</span></div>
                <div className="flex justify-between"><span className="text-secondary">Current Ratio</span><span className="font-bold font-mono">1.0</span></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
