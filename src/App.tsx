/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layout } from './components/Layout';
import { Procesos } from './views/Procesos';
import { AnalisisFinanciero } from './views/AnalisisFinanciero';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('procesos');

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {currentView === 'procesos' && (
        <Procesos onNavigateToScreener={() => setCurrentView('analisis')} />
      )}
      {currentView === 'analisis' && <AnalisisFinanciero />}
    </Layout>
  );
}
