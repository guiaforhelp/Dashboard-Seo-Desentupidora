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
    { label: 'Usuários Ativos', current: 45, previous: 27, change: 67, unit: '%' },
    { label: 'Visualizações', current: 53, previous: 32, change: 66, unit: '%' },
    { label: 'Cliques (GSC)', current: 39, previous: 27, change: 44, unit: '%' },
    { label: 'CTR Média', current: '0,6%', previous: '0,4%', change: 50, unit: '%' },
    { label: 'Conversões', current: 1, previous: 3, change: -67, unit: '%' },
    { label: 'Tempo Médio', current: '28s', previous: '1m 44s', change: -73, unit: '%' },
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
        <p className="text-gray-600 mb-6">29/04-05/05 vs 06/05-12/05</p>

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

        {/* Summary */}
        <div className="mt-8 card-premium bg-gradient-to-r from-blue-50 to-white border border-blue-200">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Resumo:</strong> O período 06/05-12/05 mostrou crescimento significativo em usuários (+67%), visualizações (+66%) e cliques no Search Console (+44%). 
            A CTR também melhorou de 0,4% para 0,6%. Porém, o tempo médio de engajamento caiu 73% (de 1m 44s para 28s) e as conversões reduziram de 3 para 1. 
            Isso sugere que o site está atraindo mais tráfego, mas precisa melhorar a qualidade do engajamento e conversão.
          </p>
        </div>
      </div>
    </section>
  );
}
