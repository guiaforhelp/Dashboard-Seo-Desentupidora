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
    { label: 'Usuários Ativos', current: 58, previous: 72, change: -19, unit: '%' },
    { label: 'Visualizações', current: 73, previous: 100, change: -27, unit: '%' },
    { label: 'Cliques WhatsApp', current: 4, previous: 3, change: 33, unit: '%' },
    { label: 'Tempo Médio', current: '52s', previous: '58s', change: -10, unit: '%' },
    { label: 'Cliques (GSC)', current: 39, previous: 53, change: -26, unit: '%' },
    { label: 'Impressões (GSC)', current: '7,12 mil', previous: '8,63 mil', change: -18, unit: '%' },
    { label: 'CTR (GSC)', current: '0,5%', previous: '0,6%', change: -17, unit: '%' },
    { label: 'Posição Média (GSC)', current: 8.3, previous: 7.7, change: -8, unit: '%' },
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
        <p className="text-gray-600 mb-6">10/06-16/06 vs 08/07-14/07</p>

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
            Redução moderada: <strong>-19% em usuários ativos</strong> (72 → 58), <strong>-27% em visualizações</strong> (100 → 73). 
            Porém, <strong>cliques WhatsApp aumentaram de 3 para 4 (+33%)</strong>, indicando que a qualidade do tráfego pode estar melhorando. 
            Engajamento médio caiu de 58s para 52s, mas requer análise por página antes de conclusão. Taxa de novos usuários permanece alta (57 de 58).
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Redução em visibilidade: <strong>-26% em cliques</strong> (53 → 39), <strong>-18% em impressões</strong> (8,63 mil → 7,12 mil). 
            <strong>CTR caiu de 0,6% para 0,5%</strong>, permanecendo como principal oportunidade de melhoria via titles e meta descriptions. 
            <strong>Posição média subiu para 8,3</strong>, mantendo consolidação em ranking. Conteúdos top: Fezes Grandes (+12), Vaso Borbulhando (+7).
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Crescimento em estimativas mensais: <strong>tráfego orgânico estimado +28,5% (257 visitas/mês)</strong>, 
            <strong>palavras-chave orgânicas +33,9% (154 keywords)</strong>, <strong>backlinks +18,2% (13 links)</strong>. 
            Pontuação on-page permanece em 61 (média). Nota: Ubersuggest apresenta estimativas mensais e o painel ainda está coletando dados de rankings. 
            Não usar posições individuais como dado definitivo.
          </p>
        </div>
      </div>
    </section>
  );
}
