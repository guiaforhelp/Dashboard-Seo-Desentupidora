// Estilo JD: comparativos em cartões de alto contraste, usando azul #203c50, laranja #ff6737 e cores semânticas para variações.
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

interface Metric {
  label: string;
  previous: string | number;
  current: string | number;
  change: string;
  tone: 'up' | 'down' | 'flat';
}

const ga4Metrics: Metric[] = [
  { label: 'Usuários ativos', previous: 52, current: 72, change: '+38,5%', tone: 'up' },
  { label: 'Novos usuários', previous: 52, current: 70, change: '+34,6%', tone: 'up' },
  { label: 'Visualizações', previous: 56, current: 82, change: '+46,4%', tone: 'up' },
  { label: 'Tempo médio de engajamento', previous: '1min15s', current: '46s', change: '-38,7%', tone: 'down' },
  { label: 'Eventos principais', previous: 2, current: 4, change: '+100%', tone: 'up' },
  { label: 'Eventos por usuário', previous: '3,8%', current: '5,6%', change: '+1,7 pp', tone: 'up' },
];

function Variation({ metric }: { metric: Metric }) {
  const icon = metric.tone === 'up' ? <ArrowUp className="h-4 w-4" /> : metric.tone === 'down' ? <ArrowDown className="h-4 w-4" /> : <Minus className="h-4 w-4" />;
  const color = metric.tone === 'up' ? 'text-green-600 bg-green-50' : metric.tone === 'down' ? 'text-red-600 bg-red-50' : 'text-gray-600 bg-gray-100';
  return <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-bold ${color}`}>{icon}{metric.change}</span>;
}

export default function ComparisonSection() {
  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <h2 className="section-title mb-1">Comparativo de Períodos</h2>
        <p className="mb-6 text-gray-600">Google Analytics 4 — 12/08-18/08 vs 19/08-25/08</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ga4Metrics.map((metric) => (
            <div key={metric.label} className="card-premium">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-600">{metric.label}</p>
              <div className="flex items-end justify-between gap-3">
                <div><p className="text-2xl font-bold text-[#203c50]">{metric.current}</p><p className="mt-1 text-xs text-gray-500">Período atual</p></div>
                <Variation metric={metric} />
              </div>
              <div className="mt-4 border-t border-gray-200 pt-3 text-xs text-gray-500">Período anterior: <strong className="text-gray-700">{metric.previous}</strong></div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="card-premium border border-orange-200 bg-gradient-to-r from-orange-50 to-white">
            <p className="mb-2 text-sm font-semibold text-[#203c50]">Visibilidade orgânica — Search Console (18-24/08)</p>
            <p className="text-sm leading-relaxed text-gray-700"><strong>35 cliques (+46%)</strong> e <strong>7,07 mil impressões (-3%)</strong>. O CTR médio avançou de <strong>0,3% para 0,5% (+0,2 p.p.)</strong>, enquanto a posição média melhorou de <strong>9,9 para 8,8 (+1,1 posição)</strong>. O site ganhou cliques e eficiência de exibição, mas titles, meta descriptions e FAQs ainda podem ampliar a captura de demanda.</p>
          </div>
          <div className="card-premium border border-[#dbe5ec] bg-white">
            <p className="mb-2 text-sm font-semibold text-[#203c50]">Estimativas e IA — Ubersuggest</p>
            <p className="text-sm leading-relaxed text-gray-700"><strong>168 palavras-chave (+9,1%)</strong>, <strong>246 visitas estimadas/mês (-4,3%)</strong> e <strong>53 backlinks (+55,9%)</strong>. A marca aparece em <strong>17% das respostas de IA avaliadas</strong>; no ChatGPT, a visibilidade é de <strong>16,67%</strong>, com sentimento neutro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
