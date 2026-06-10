import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface ComparisonMetric {
  label: string;
  current: string | number;
  previous: string | number;
  change: number; // positive = up, negative = down, 0 = no change
  unit?: string;
}

export default function ComparisonSection() {
  const metrics: ComparisonMetric[] = [
    { label: 'Usuários Ativos', current: 53, previous: 44, change: 20, unit: '%' },
    { label: 'Visualizações', current: 62, previous: 47, change: 32, unit: '%' },
    { label: 'Conversões', current: 0, previous: 2, change: -100, unit: '%' },
    { label: 'Tempo Médio', current: '1min 03s', previous: '41s', change: 54, unit: '%' },
    { label: 'Cliques (GSC)', current: 35, previous: 36, change: -3, unit: '%' },
    { label: 'Impressões (GSC)', current: '8,68 mil', previous: '8,96 mil', change: -3, unit: '%' },
    { label: 'Posição Média (GSC)', current: 8, previous: 8.6, change: 1, unit: '↑' },
    { label: 'Backlinks', current: 12, previous: 13, change: -8, unit: '%' },
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

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Comparativo de Períodos</h2>
        <p className="text-gray-600 mb-6">27/05-02/06 vs 03/06-09/06</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="card-premium">
              <p className="text-xs text-gray-600 font-semibold mb-3">{metric.label}</p>
              
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-2xl font-bold text-[#203c50]">{metric.current}</p>
                  <p className="text-xs text-gray-500 mt-1">Período atual</p>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${getChangeColor(metric.change)} bg-opacity-10`}>
                  {getChangeIcon(metric.change)}
                  <span className="text-sm font-semibold">{Math.abs(metric.change)}{metric.unit}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">Período anterior: <span className="font-semibold text-gray-700">{metric.previous}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary - Google Analytics */}
        <div className="mt-8 card-premium bg-gradient-to-r from-blue-50 to-white border border-blue-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">📊 Google Analytics</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            O tráfego orgânico apresentou recuperação significativa: <strong>+20% em usuários ativos</strong> (44 → 53), 
            <strong>+32% em visualizações</strong> (47 → 62) e <strong>+54% no tempo médio de engajamento</strong> (41s → 1min 03s). 
            Porém, os eventos principais caíram de 2 para 0, indicando necessidade urgente de revisar a mensuração de conversões no GA4/GTM. 
            Este é um ponto crítico que requer investigação imediata para entender se há problema técnico ou se os usuários não estão convertendo.
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Os cliques ficaram praticamente estáveis (-3%, 36 → 35) e as impressões caíram levemente (-3%, 8,96 mil → 8,68 mil). 
            Porém, a posição média melhorou de 8,6 para 8, indicando ganho em ranking. A CTR permaneceu em 0,4%, mostrando que o principal 
            gargalo continua sendo a taxa de clique nos resultados de busca. Grande oportunidade de melhorar titles e meta descriptions para aumentar CTR.
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            A pontuação SEO permaneceu em 76 com status positivo. Os backlinks caíram de 13 para 12 (-8%), e as palavras-chave rastreadas em baixa 
            subiram para 3. O tráfego orgânico mensal estimado permaneceu em 200, e o número de palavras-chave orgânicas continuou em 115. 
            Foco: trabalhar oportunidades de SEO local para bairros estratégicos (Pinheiros, Parelheiros, Mooca) e corrigir 2 problemas técnicos identificados.
          </p>
        </div>
      </div>
    </section>
  );
}
