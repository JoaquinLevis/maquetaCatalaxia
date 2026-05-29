import { Search, Moon, Bell, ChevronDown, Settings, TrendingUp } from 'lucide-react';

interface HeaderProps {
  title: string;
  icon: 'settings' | 'chart';
}

export function Header({ title, icon }: HeaderProps) {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 shrink-0 border-b border-border-subtle z-10 w-full relative">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
          {icon === 'settings' ? <Settings size={18} /> : <TrendingUp size={18} />}
        </div>
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-pill-bg transition-colors cursor-pointer">
          <Search size={20} />
        </button>
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-pill-bg transition-colors cursor-pointer">
          <Moon size={20} />
        </button>
        <div className="relative">
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-pill-bg transition-colors cursor-pointer">
            <Bell size={20} />
          </button>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-brand-red text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white"></span>
        </div>

        <div className="h-6 w-px bg-border-subtle mx-2"></div>

        <div className="flex items-center gap-2 hover:bg-pill-bg p-1 pr-2 rounded-full cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-sm font-bold">
            M
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:inline">Marcelo Lezcano</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
