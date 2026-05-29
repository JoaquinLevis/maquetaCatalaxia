import { LayoutDashboard, Shield, Settings, Receipt, Gem, TrendingUp, PieChart, Briefcase, HelpCircle } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="w-[260px] bg-sidebar-bg flex-col h-full hidden md:flex shrink-0 border-r border-[#1f1f1f]">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-white/5 mb-4 px-6 pt-2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Catala<span className="text-brand-red">X</span>ia
          </h1>
          <span className="text-[9px] text-[#A0AEC0] tracking-widest mt-1">CONSTRUYENDO VALOR</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-4">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] hover:bg-white/5 hover:text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
              <LayoutDashboard size={20} className="mr-3 text-gray-400" /> Dashboard
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] hover:bg-white/5 hover:text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
              <Shield size={20} className="mr-3 text-gray-400" /> Administración
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('procesos')}
              className={`w-full flex items-center px-4 py-2.5 rounded-lg transition-colors text-sm font-medium cursor-pointer ${currentView === 'procesos' ? 'bg-brand-red text-white shadow-sm' : 'text-[#A0AEC0] hover:bg-white/5 hover:text-white'}`}
            >
              <Settings size={20} className={`mr-3 ${currentView === 'procesos' ? 'text-white' : 'text-gray-400'}`} /> Procesos
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] opacity-60 cursor-not-allowed rounded-lg transition-colors text-sm font-medium">
              <Receipt size={20} className="mr-3 text-gray-500" /> Facturación
            </button>
          </li>
        </ul>

        {/* Section: Gestión Inversiones */}
        <div className="mt-8 mb-2 px-4">
          <h3 className="text-[10px] font-bold text-[#718096] tracking-wider uppercase">Gestión Inversiones</h3>
        </div>
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] hover:bg-white/5 hover:text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
              <Gem size={20} className="mr-3 text-gray-400" /> Activos
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('analisis')}
              className={`w-full flex items-center px-4 py-2.5 rounded-lg transition-colors text-sm font-medium cursor-pointer ${currentView === 'analisis' ? 'bg-primary text-white shadow-sm' : 'text-[#A0AEC0] hover:bg-white/5 hover:text-white'}`}
            >
              <TrendingUp size={20} className={`mr-3 ${currentView === 'analisis' ? 'text-white' : 'text-gray-400'}`} /> Análisis Financiero
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] opacity-60 cursor-not-allowed rounded-lg transition-colors text-sm font-medium">
              <PieChart size={20} className="mr-3 text-gray-500" /> Carteras Administradas
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] opacity-60 cursor-not-allowed rounded-lg transition-colors text-sm font-medium">
              <Briefcase size={20} className="mr-3 text-gray-500" /> Mis Portafolios
            </button>
          </li>
        </ul>

        {/* Section: Configuración */}
        <div className="mt-8 mb-2 px-4">
          <h3 className="text-[10px] font-bold text-[#718096] tracking-wider uppercase">Configuración</h3>
        </div>
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] hover:bg-white/5 hover:text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
              <Settings size={20} className="mr-3 text-gray-400" /> Configuración
            </button>
          </li>
          <li>
            <button className="w-full flex items-center px-4 py-2.5 text-[#A0AEC0] hover:bg-white/5 hover:text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
              <HelpCircle size={20} className="mr-3 text-gray-400" /> Ayuda
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
