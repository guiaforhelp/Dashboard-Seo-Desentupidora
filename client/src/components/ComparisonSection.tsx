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
    { label: 'Usuários Ativos', current: 68, previous: 59, change: 15.3, unit: '%' },
    { label: 'Novos Usuários', current: 68, previous: 58, change: 17.2, unit: '%' },
    { label: 'Visualizações', current: 81, previous: 65, change: 24.6, unit: '%' },
    { label: 'Tempo Médio', current: '1min 38s', previous: '1min 15s', change: 30.7, unit: '%' },
    { label: 'Cliques WhatsApp', current: 2, previous: 2, change: 0, unit: '%' },
    { label: 'Views por Usuário', current: 1.19, previous: 1.10, change: 8.2, unit: '%' },
    { label: 'Cliques (GSC)', current: 45, previous: 36, change: 25, unit: '%' },
    { label: 'Impressões (GSC)', current: '7,22 mil', previous: '6,85 mil', change: 5.4, unit: '%' },
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
        <p className="text-gray-600 mb-6">15/07-21/07 vs 22/07-28/07</p>

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
            Crescimento forte em todas as métricas: <strong>+15,3% em usuários ativos</strong> (59 → 68), <strong>+17,2% em novos usuários</strong> (58 → 68), 
            <strong>+24,6% em visualizações</strong> (65 → 81). Engajamento continuou forte: <strong>+30,7% (1min 15s → 1min 38s)</strong>. 
            Mais pessoas entraram, consumiram mais conteúdo e navegaram melhor: <strong>visualizações por usuário +8,2% (1,10 → 1,19)</strong>. 
            Conversões permaneceram estáveis em 2 eventos. Taxa de eventos por usuário: 2,9% (pequena amostra, requer acompanhamento).
          </p>
        </div>

        {/* Summary - Search Console */}
        <div className="mt-4 card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🔍 Search Console (20-26/07)</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Crescimento em visibilidade: <strong>+25% em cliques</strong> (36 → 45), <strong>+5,4% em impressões</strong> (6,85 mil → 7,22 mil). 
            <strong>CTR subiu para 0,6%</strong>, mostrando que otimizações de titles e meta descriptions começam a surtir efeito. 
            <strong>Posição média permaneceu competitiva em 7,8</strong>. Conteúdos em destaque: Soda Cáustica (5 cliques), Prumada (4 cliques), 
            Ralo Fazendo Barulho (4 cliques - novo em alta). Conteúdos em queda: Fezes Grandes (-3), Vaso Borbulhando (-3), Caixa de Gordura (-2).
          </p>
        </div>

        {/* Summary - Ubersuggest & Technical */}
        <div className="mt-4 card-premium bg-gradient-to-r from-orange-50 to-white border border-orange-200">
          <p className="text-sm font-semibold text-[#203c50] mb-2">🎯 Ubersuggest & Técnico</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Estimativas mensais estáveis: 257 visitas/mês e 154 palavras-chave. Autoridade em crescimento: <strong>backlinks +18,2% (13 → 17)</strong>, 
            <strong>Domain Authority +25% (4 → 6)</strong>. São Paulo ganhou presença: 13 usuários (+86% vs semana anterior). 
            <strong>⚠️ ALERTA CRÍTICO: Velocidade mobile em 12,95s (crítica)</strong> — principal gargalo técnico. Desktop saudável em 2,15s. 
            Tráfego 54,4% mobile exige prioridade em otimização. Sitemap ausente e URL 4XX apontados pelo rastreador — validar e corrigir.
          </p>
        </div>
      </div>
    </section>
  );
}
