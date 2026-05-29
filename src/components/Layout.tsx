import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ViewState } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Layout({ children, currentView, onNavigate }: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-main-bg overflow-hidden font-sans">
      <Sidebar currentView={currentView} onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col min-w-0 relative">
        <Header 
          title={currentView === 'procesos' ? 'Lista de Procesos' : 'Análisis Financiero'} 
          icon={currentView === 'procesos' ? 'settings' : 'chart'} 
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-main-bg relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}
