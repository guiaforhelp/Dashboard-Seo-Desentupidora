// Estilo JD: comparativos em cartões de alto contraste, usando azul #203c50, laranja #ff6737 e cores semânticas para variações.
import { ArrowDown, ArrowUp } from 'lucide-react';

interface Metric { label: string; previous: string | number; current: string | number; change: string; tone: 'up' | 'down'; }

const ga4Metrics: Metric[] = [
  { label: 'Usuários ativos', previous: 72, current: 55, change: '-23,6%', tone: 'down' },
  { label: 'Novos usuários', previous: 70, current: 55, change: '-21,4%', tone: 'down' },
  { label: 'Visualizações', previous: 82, current: 74, change: '-9,8%', tone: 'down' },
  { label: 'Tempo médio de engajamento', previous: '46s', current: '1min32s', change: '+100%', tone: 'up' },
  { label: 'Eventos principais', previous: 4, current: 1, change: '-75%', tone: 'down' },
];

function Variation({ metric }: { metric: Metric }) {
  const isUp = metric.tone === 'up';
  return <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-bold ${isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>{isUp ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}{metric.change}</span>;
}

export default function ComparisonSection() {
  return <section className="border-b border-gray-200 py-12"><div className="container">
    <h2 className="section-title mb-1">Comparativo de Períodos</h2><p className="mb-6 text-gray-600">Google Analytics 4 — 19/08-25/08 vs 26/08-01/09</p>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">{ga4Metrics.map((metric) => <div key={metric.label} className="card-premium"><p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-600">{metric.label}</p><div className="flex items-end justify-between gap-3"><div><p className="text-2xl font-bold text-[#203c50]">{metric.current}</p><p className="mt-1 text-xs text-gray-500">Período atual</p></div><Variation metric={metric} /></div><div className="mt-4 border-t border-gray-200 pt-3 text-xs text-gray-500">Período anterior: <strong className="text-gray-700">{metric.previous}</strong></div></div>)}</div>
    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2"><div className="card-premium border border-orange-200 bg-gradient-to-r from-orange-50 to-white"><p className="mb-2 text-sm font-semibold text-[#203c50]">Visibilidade orgânica — Search Console (25-31/08)</p><p className="text-sm leading-relaxed text-gray-700"><strong>42 cliques (+20%)</strong> e <strong>6,72 mil impressões (-5%)</strong>. O CTR avançou de <strong>0,5% para 0,6%</strong> e a posição média melhorou de <strong>8,8 para 8,6</strong>. A exposição reduziu, mas a eficiência de captura melhorou.</p></div><div className="card-premium border border-[#dbe5ec] bg-white"><p className="mb-2 text-sm font-semibold text-[#203c50]">Estimativas e IA — Ubersuggest</p><p className="text-sm leading-relaxed text-gray-700"><strong>196 palavras-chave (+16,7%)</strong>, <strong>273 visitas estimadas/mês (+11,0%)</strong> e <strong>59 backlinks (+11,3%)</strong>. Em sentido contrário, a posição média das 55 palavras rastreadas piorou de <strong>26,75 para 67,00</strong>. A marca mantém 17% de visibilidade em IA e 5% de share of voice.</p></div></div>
  </div></section>;
}
