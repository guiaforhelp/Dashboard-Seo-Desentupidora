import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface ComparisonMetric {
  label: string;
  current: string | number;
  previous: string | number;
  change: number;
  unit?: string;
  note?: string;
}

export default function ComparisonSection() {
  const ga4Metrics: ComparisonMetric[] = [
    { label: 'Usuários Ativos', current: 74, previous: 68, change: 8.8, unit: '%' },
    { label: 'Novos Usuários', current: 73, previous: 68, change: 7.4, unit: '%' },
    { label: 'Visualizações', current: 81, previous: 81, change: 0, unit: '%' },
    { label: 'Tempo Médio', current: '1min 01s', previous: '1min 38s', change: -37.8, unit: '%' },
    { label: 'Eventos Principais', current: 5, previous: 2, change: 150, unit: '%' },
    { label: 'Eventos por Usuário', current: '6,8%', previous: '2,9%', change: 3.8, unit: 'pp', note: '+3,8 pontos percentuais' },
  ];

  const gscMetrics: ComparisonMetric[] = [
    { label: 'Cliques (GSC)', current: 40, previous: 45, change: -11.1, unit: '%' },
    { label: 'Impressões (GSC)', current: '7,3 mil', previous: '7,22 mil', change: 1.1, unit: '%' },
    { label: 'CTR (GSC)', current: '0,5%', previous: '0,6%', change: -0.1, unit: 'pp', note: '-0,1 ponto percentual' },
    { label: 'Posição Média', current: 8.8, previous: 7.8, change: -1, unit: '', note: 'Piorou 1 posição' },
  ];

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="w-4 h-4" />;
    if (change < 0) return <ArrowDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const renderMetricCard = (metric: ComparisonMetric, idx: number) => (
    <div key={idx} className="card-premium">
      <p className="text-xs text-gray-600 font-semibold mb-3">{metric.label}</p>
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-2xl font-bold text-[#203c50]">{metric.current}</p>
          <p className="text-xs text-gray-500 mt-1">Período atual</p>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${getChangeColor(metric.change)}`}>
          {getChangeIcon(metric.change)}
          <span className="text-sm font-semibold">
            {metric.note ? metric.note : `${Math.abs(metric.change).toFixed(1)}${metric.unit}`}
          </span>
        </div>
      </div>
      <div className="pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">Período anterior: <span className="font-semibold text-gray-700">{metric.previous}</span></p>
      </div>
    </div>
  );

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Comparativo de Períodos</h2>

        {/* GA4 Comparison */}
        <p className="text-gray-600 mb-4 font-semibold">Google Analytics 4 — 22/07-28/07 vs 29/07-04/08</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {ga4Metrics.map(renderMetricCard)}
        </div>

        {/* GSC Comparison */}
        <p className="text-gray-600 mb-4 font-semibold">Search Console — 20/07-26/07 vs 28/07-03/08</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {gscMetrics.map(renderMetricCard)}
        </div>

        {/* Summary - GA4 */}
        <div className="mt-4 card-premium bg-gradient-to-r from-blue-50 to-white border border-blue-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">📊 Google Analytics 4</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Crescimento em usuários: <strong>+8,8% (68 → 74)</strong> e <strong>+7,4% em novos usuários (68 → 73)</strong>. 
            Visualizações estáveis em 81. <strong>Eventos principais saltaram +150% (2 → 5)</strong>, com taxa de 6,8% por usuário. 
            Ponto de atenção: <strong>tempo médio de engajamento caiu -37,8% (1min 38s → 1min 01s)</strong>, indicando que parte do novo tráfego 
            está consumindo menos conteúdo antes de sair ou entrar em contato.
          </p>
        </div>

        {/* Summary - GSC */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Redução em cliques: <strong>-11,1% (45 → 40)</strong>. Impressões levemente acima: <strong>+1,1% (7,22 mil → 7,3 mil)</strong>. 
            <strong>CTR caiu para 0,5% (-0,1 pp)</strong> e <strong>posição média piorou para 8,8 (-1 posição)</strong>. 
            O site manteve visibilidade, mas recebeu menos cliques. Oportunidade: revisar títulos e meta descriptions das páginas com posição entre 5 e 12.
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest (estimativas mensais)</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tráfego estimado: <strong>246 visitas/mês (-4,3%)</strong>. Palavras-chave: <strong>168 (+9,1%)</strong>. 
            Backlinks (17), domínios de referência (15), DA (6) e on-page (61/100) estáveis. 
            A cobertura de palavras-chave cresceu, mas ainda não se refletiu em maior tráfego estimado. 
            Prioridade: fortalecer posições e CTR dos conteúdos com visibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
