import { useState } from 'react';
import { CloudDownload, Receipt, TrendingUp, DollarSign, PieChart, LineChart, Play, Lock, Square, ArrowRight } from 'lucide-react';

interface ProcesosProps {
  onNavigateToScreener: () => void;
}

export function Procesos({ onNavigateToScreener }: ProcesosProps) {
  const [precioActive, setPrecioActive] = useState(false);
  const [ratiosActive, setRatiosActive] = useState(false);

  return (
    <div className="p-8 pb-20 max-w-7xl mx-auto space-y-12">
      {/* Automáticos */}
      <section>
        <div className="mb-6 border-b border-border-subtle pb-2">
          <h2 className="text-xl font-semibold text-gray-800 inline-block relative pb-2">
            Procesos Automáticos
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-brand-red to-transparent rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white mb-5 shadow-sm">
                <CloudDownload size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Descargar Estado de Cuenta (Bull Market)</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">Inicia el proceso de scraping para obtener los estados de cuenta de Bull Market</p>
              <button className="w-full bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center">
                <Play size={14} className="mr-2 fill-current" /> Iniciar
              </button>
           </div>
           
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
              <div className="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center text-white mb-5 opacity-90">
                <Receipt size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Generar Reporte Mensual</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">Genera el reporte consolidado de actividades del mes anterior.</p>
              <button className="w-full bg-brand-red-light text-white font-medium py-2.5 rounded-lg opacity-80 cursor-not-allowed flex items-center justify-center">
                <Lock size={14} className="mr-2" /> Próximamente
              </button>
           </div>
           
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative">
              <div className="w-16 h-16 bg-brand-red-light rounded-xl flex items-center justify-center text-white mb-5 opacity-90">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Calcular Honorarios</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">Ejecuta el cálculo de honorarios para el período actual.</p>
              <button className="w-full bg-brand-red-light text-white font-medium py-2.5 rounded-lg opacity-80 cursor-not-allowed flex items-center justify-center">
                <Lock size={14} className="mr-2" /> Próximamente
              </button>
           </div>
        </div>
      </section>

      {/* Análisis Financiero */}
      <section>
        <div className="mb-6 border-b border-border-subtle pb-2">
          <h2 className="text-xl font-semibold text-gray-800 inline-block relative pb-2">
            Análisis Financiero - CEDEARs
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-brand-red to-transparent rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 align-stretch h-full">
           {/* Card 1: Actualizar Precios */}
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white mb-5 shadow-sm shrink-0">
                <DollarSign size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Actualizar Precios</h3>
              
              {!precioActive ? (
                <>
                  <p className="text-sm text-gray-500 mb-8 flex-grow">Muestra el log en tiempo real con los tickers procesados (BIIB, AMAT, INTC).</p>
                  <button onClick={() => setPrecioActive(true)} className="w-full mt-auto bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                    <Play size={14} className="mr-2 fill-current" /> Iniciar
                  </button>
                </>
              ) : (
                <>
                  <div className="w-full text-left mb-8 flex-grow bg-white">
                    <div className="mb-2">
                      <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-600 font-medium">Backend A</span><span className="text-gray-500">65%</span></div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-red h-1.5 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-600 font-medium">Backend B</span><span className="text-gray-500">40%</span></div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-1.5 rounded-full w-[40%]"></div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3 text-[10px] font-mono text-green-400 overflow-y-auto custom-scrollbar h-32">
                      <div className="text-gray-400">{'>'} POST /api/jobs/ratios/precios</div>
                      <div className="text-gray-400">{'>'} Polling frontend (every 3s)...</div>
                      <div>{'>'} Processing BIIB, AMAT, INTC...</div>
                      <div className="text-yellow-400 mt-1">{'>'} Warning: Yahoo Finance Rate Limiting detected. Retrying automatically...</div>
                    </div>
                  </div>
                  <button onClick={() => setPrecioActive(false)} className="w-full mt-auto bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                    <Square size={14} className="mr-2 fill-current" /> Detener
                  </button>
                </>
              )}
           </div>

           {/* Card 2: Actualizar Ratios */}
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white mb-5 shadow-sm shrink-0">
                <PieChart size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Actualizar Ratios Fundamentales</h3>
              
              {!ratiosActive ? (
                <>
                  <p className="text-sm text-gray-500 mb-8 flex-grow">Actualiza PER, EPS, FCF y Deuda/EBITDA.</p>
                  <button onClick={() => setRatiosActive(true)} className="w-full mt-auto bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                    <Play size={14} className="mr-2 fill-current" /> Iniciar
                  </button>
                </>
              ) : (
                <>
                  <div className="w-full text-left mb-8 flex-grow">
                    <div className="mb-3">
                      <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-600 font-medium">Backend A (Investing.com)</span><span className="text-gray-500">80%</span></div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-brand-red h-1.5 rounded-full w-[80%]"></div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-600 font-medium">Backend B (SEC EDGAR)</span><span className="text-gray-500">30%</span></div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-yellow-500 h-1.5 rounded-full w-[30%]"></div>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3 text-[10px] font-mono text-green-400 overflow-y-auto custom-scrollbar h-32">
                      <div>{'>'} [A] Scraping PER/EPS from Investing.com...</div>
                      <div>{'>'} [B] Calculating FCF and Debt/EBITDA from SEC EDGAR...</div>
                      <div className="text-yellow-400 mt-1">{'>'} Timeout detected. Retrying... Success.</div>
                      <div className="text-blue-400 mt-1">{'>'} Estimated time: 8-12 min (100 tickers).</div>
                    </div>
                  </div>
                  <button onClick={() => setRatiosActive(false)} className="w-full mt-auto bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                    <Square size={14} className="mr-2 fill-current" /> Detener
                  </button>
                </>
              )}
           </div>

           {/* Card 3: Ver Screener */}
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white mb-5 shadow-sm shrink-0">
                <LineChart size={28} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Ver Screener CEDEARs</h3>
              <p className="text-sm text-gray-500 mb-8 flex-grow">Redirige al módulo de Análisis Financiero.</p>
              <button 
                onClick={onNavigateToScreener}
                className="w-full mt-auto bg-brand-red hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
              >
                <ArrowRight size={14} className="mr-2" /> Ir a Screener
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
