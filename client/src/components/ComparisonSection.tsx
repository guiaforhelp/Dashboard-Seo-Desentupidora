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
    { label: 'Usuários Ativos', current: 59, previous: 58, change: 1.7, unit: '%' },
    { label: 'Novos Usuários', current: 58, previous: 57, change: 1.8, unit: '%' },
    { label: 'Visualizações', current: 65, previous: 73, change: -11, unit: '%' },
    { label: 'Tempo Médio', current: '1min 15s', previous: '52s', change: 44.2, unit: '%' },
    { label: 'Cliques WhatsApp', current: 2, previous: 4, change: -50, unit: '%' },
    { label: 'Cliques (GSC)', current: 36, previous: 39, change: -8, unit: '%' },
    { label: 'Impressões (GSC)', current: '6,85 mil', previous: '7,12 mil', change: -4, unit: '%' },
    { label: 'CTR (GSC)', current: '0,5%', previous: '0,5%', change: 0, unit: '%' },
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
        <p className="text-gray-600 mb-6">08/07-14/07 vs 15/07-21/07</p>

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
                  <span className="text-sm font-semibold">{Math.abs(metric.change).toFixed(1)}{metric.unit}</span>
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
            Estabilidade com mudanças qualitativas: <strong>+1,7% em usuários ativos</strong> (58 → 59), <strong>+1,8% em novos usuários</strong> (57 → 58), 
            mas <strong>-11% em visualizações</strong> (73 → 65). Destaque positivo: <strong>engajamento subiu 44,2% (52s → 1min 15s)</strong>, 
            indicando que usuários permanecem mais tempo no conteúdo. Porém, <strong>conversões caíram 50% (4 → 2)</strong>. 
            Média de páginas por usuário caiu de 1,26 para 1,10, sinalizando necessidade de reforçar links internos.
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Redução moderada: <strong>-8% em cliques</strong> (39 → 36), <strong>-4% em impressões</strong> (7,12 mil → 6,85 mil). 
            <strong>CTR mantido em 0,5%</strong>, permanecendo como oportunidade de melhoria. <strong>Posição média subiu para 8,5</strong>, 
            consolidando presença em buscas informativas. Conteúdos em alta: Inquilino Reclama (+4 cliques). 
            Conteúdos em baixa: Quanto Custa Limpa Fossa (-2), Fossa Rudimentar (-2), Tubulação de Ventilação (-2).
          </p>
        </div>

        {/* Summary - Ubersuggest */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Estimativas mensais estáveis: <strong>257 visitas/mês e 154 palavras-chave</strong> (sem mudança). 
            Porém, avanços em autoridade: <strong>backlinks +18,2% (13 → 15)</strong>, <strong>Domain Authority +25% (4 → 5)</strong>, 
            <strong>valor estimado +9,5% (US$ 75,16 → US$ 82,33)</strong>. Nota: Ubersuggest apresenta estimativas mensais. 
            Para dados reais de cliques, impressões e posição, considerar Google Search Console como fonte principal.
          </p>
        </div>
      </div>
    </section>
  );
}
