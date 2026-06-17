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
    { label: 'Usuários Ativos', current: 72, previous: 53, change: 36, unit: '%' },
    { label: 'Visualizações', current: 100, previous: 62, change: 61, unit: '%' },
    { label: 'Conversões', current: 3, previous: 0, change: 300, unit: '%' },
    { label: 'Tempo Médio', current: '58s', previous: '1min 03s', change: -8, unit: '%' },
    { label: 'Cliques (GSC)', current: 53, previous: 35, change: 51, unit: '%' },
    { label: 'Impressões (GSC)', current: '8,63 mil', previous: '8,68 mil', change: -1, unit: '%' },
    { label: 'CTR (GSC)', current: '0,6%', previous: '0,4%', change: 50, unit: '%' },
    { label: 'Posição Média (GSC)', current: 7.7, previous: 8, change: 4, unit: '↑' },
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
        <p className="text-gray-600 mb-6">03/06-09/06 vs 10/06-16/06</p>

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
            Crescimento expressivo: <strong>+36% em usuários ativos</strong> (53 → 72), <strong>+61% em visualizações</strong> (62 → 100), 
            e mais importante: <strong>conversões retornaram com 3 eventos Whatsapp Flutuante</strong> (0 → 3). 
            O tempo médio de engajamento caiu levemente (-8%, 1min 03s → 58s), mas o volume de conversões compensou. 
            Distribuição equilibrada: cada página converteu 1 vez (33,33% cada).
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Crescimento forte: <strong>+51% em cliques</strong> (35 → 53), impressões praticamente estáveis (-1%, 8,68 mil → 8,63 mil). 
            <strong>CTR melhorou de 0,4% para 0,6% (+50%)</strong>, mostrando que otimizações de titles/metas estão funcionando. 
            <strong>Posição média melhorou de 8 para 7,7</strong>, consolidando ganhos em ranking. 
            Conteúdos top: Inquilino Reclama (5 cliques), Soda Cáustica e Plástico (5 cliques).
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Pontuação on-page caiu de 76 para 61 (classificada como média), mas posição média melhorou de 21,5 para 20,67 (+0,83). 
            <strong>Desentupidora em pinheiros permanece em destaque na posição 13</strong> com volume de 320 buscas/mês. 
            1 palavra-chave ganhou posições, 2 perderam, 52 ficaram inalteradas. Continuam 2 problemas técnicos que requerem atenção. 
            Foco: corrigir problemas técnicos para melhorar score on-page.
          </p>
        </div>
      </div>
    </section>
  );
}
