export type ViewState = 'procesos' | 'analisis';

export interface TickerData {
  ticker: string;
  name: string;
  exchange: string;
  price: number;
  per: number;
  max52: number;
  difMax: string;
  min52: number;
  difMin: string;
  dEbitda: number;
  eps: number;
  epsGrowth: string;
  margin: string;
  roe: string;
  fcf: string;
  payout: string;
}

export const TICKS_DATA: TickerData[] = [
  { ticker: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ', price: 189.30, per: 29.4, max52: 198.23, difMax: '-4.5%', min52: 124.17, difMin: '+52.4%', dEbitda: 0.8, eps: 6.42, epsGrowth: '7.1%', margin: '25.3%', roe: '150.2%', fcf: '5.2%', payout: '15.4%' },
  { ticker: 'MSFT', name: 'Microsoft Corp.', exchange: 'NASDAQ', price: 415.50, per: 35.2, max52: 420.82, difMax: '-1.2%', min52: 245.61, difMin: '+69.1%', dEbitda: 0.5, eps: 11.80, epsGrowth: '20.5%', margin: '36.2%', roe: '38.5%', fcf: '4.8%', payout: '28.1%' },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', exchange: 'NASDAQ', price: 142.65, per: 24.5, max52: 153.78, difMax: '-7.2%', min52: 88.58, difMin: '+61.0%', dEbitda: 0.3, eps: 5.80, epsGrowth: '15.2%', margin: '24.0%', roe: '23.4%', fcf: '6.1%', payout: '0.0%' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', exchange: 'NASDAQ', price: 175.35, per: 60.1, max52: 175.39, difMax: '0.0%', min52: 96.29, difMin: '+82.1%', dEbitda: 1.8, eps: 2.90, epsGrowth: '35.4%', margin: '5.3%', roe: '14.2%', fcf: '3.2%', payout: '0.0%' },
  { ticker: 'NVDA', name: 'NVIDIA Corp.', exchange: 'NASDAQ', price: 726.13, per: 65.8, max52: 746.11, difMax: '-2.6%', min52: 204.21, difMin: '+255.5%', dEbitda: 0.2, eps: 11.03, epsGrowth: '240%', margin: '48.8%', roe: '55.0%', fcf: '2.1%', payout: '0.1%' },
  { ticker: 'META', name: 'Meta Platforms', exchange: 'NASDAQ', price: 484.03, per: 32.1, max52: 485.96, difMax: '-0.4%', min52: 167.66, difMin: '+188.6%', dEbitda: 0.6, eps: 14.87, epsGrowth: '73.3%', margin: '28.9%', roe: '25.6%', fcf: '5.5%', payout: '0.0%' }
];
