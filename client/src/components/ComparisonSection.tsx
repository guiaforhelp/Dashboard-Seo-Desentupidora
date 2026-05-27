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
    { label: 'Usuários Ativos', current: 62, previous: 59, change: 5, unit: '%' },
    { label: 'Visualizações', current: 78, previous: 61, change: 28, unit: '%' },
    { label: 'Conversões', current: 3, previous: 1, change: 200, unit: '%' },
    { label: 'Cliques (GSC)', current: 43, previous: 39, change: 10, unit: '%' },
    { label: 'Impressões (GSC)', current: '8,37 mil', previous: '8,51 mil', change: -2, unit: '%' },
    { label: 'Tempo Médio', current: '42s', previous: '53s', change: -21, unit: '%' },
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
        <p className="text-gray-600 mb-6">13/05-19/05 vs 20/05-26/05</p>

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
            O tráfego orgânico cresceu em volume e conversão, mas a queda no tempo médio de engajamento indica necessidade de melhorar retenção nos conteúdos mais acessados. 
            O site teve mais usuários ativos (+5%), mais visualizações (+28%) e principalmente mais eventos principais (+200%). Porém, o tempo médio caiu 21%, sugerindo que 
            usuários estão encontrando rapidamente o que procuram, mas não explorando outros conteúdos.
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Mesmo com leve queda nas impressões (-2%), os cliques cresceram (+10%). Isso indica melhora na eficiência orgânica, pois o site gerou mais tráfego mesmo aparecendo 
            um pouco menos. A CTR segue em 0,5%, mostrando que ainda existe grande oportunidade de melhorar titles, metas e chamadas dos conteúdos.
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            O Ubersuggest mostra perda de força em rankings monitorados, principalmente pela redução de palavras no Top 100 (de 5 para 2) e aumento de palavras que ainda não 
            se posicionam (de 50 para 53). A posição média piorou de 17,8 para 21,5. Porém, o Search Console mostra crescimento real de cliques, o que indica que algumas 
            consultas reais estão performando melhor mesmo com os rankings monitorados apresentando oscilação.
          </p>
        </div>
      </div>
    </section>
  );
}
