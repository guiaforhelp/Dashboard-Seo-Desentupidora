import { BarChart3, Bot, BrainCircuit, Link2, MessageSquareText, SearchCheck, TrendingDown, TrendingUp } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';

interface UbersuggestSectionProps {
  data: DashboardData['ubersuggest'];
}

function ChangeLabel({ value, positive }: { value: string; positive: boolean }) {
  const Icon = positive ? TrendingUp : TrendingDown;
  const color = positive ? 'text-green-600' : 'text-red-600';

  return (
    <span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${color}`}>
      <Icon className="h-3.5 w-3.5" />
      {value}
    </span>
  );
}

export default function UbersuggestSection({ data }: UbersuggestSectionProps) {
  const positionGain = data.historicalAveragePosition - data.trackedAveragePosition;

  const rankingStats = [
    { label: 'Palavras rastreadas', value: `${data.trackedKeywords} de ${data.totalTrackedKeywords}`, tone: 'bg-blue-50 border-blue-200 text-blue-700' },
    { label: 'Em alta', value: data.keywordsUp, tone: 'bg-green-50 border-green-200 text-green-700' },
    { label: 'Em baixa', value: data.keywordsDown, tone: 'bg-red-50 border-red-200 text-red-700' },
    { label: 'Sem alteração', value: data.keywordsUnchanged, tone: 'bg-gray-50 border-gray-200 text-[#203c50]' },
    { label: 'Top 3', value: data.top3, tone: 'bg-orange-50 border-orange-200 text-orange-700' },
    { label: 'Top 10', value: data.top10, tone: 'bg-orange-50 border-orange-200 text-orange-700' },
    { label: 'Top 100', value: data.top100, tone: 'bg-orange-50 border-orange-200 text-orange-700' },
    { label: 'Não posicionadas', value: data.notRanked, tone: 'bg-slate-50 border-slate-200 text-slate-700' },
  ];

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="mb-7 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title mb-1">Visibilidade, Autoridade e IA — Ubersuggest</h2>
            <p className="text-sm text-gray-600">Estimativas mensais e rastreamentos da ferramenta. Para desempenho orgânico real, considerar o Google Search Console como fonte principal.</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff5f0] px-3 py-1.5 text-xs font-semibold text-[#c54d26]">
            <BarChart3 className="h-4 w-4" />
            Dados estimados
          </span>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card-premium">
            <KPICard label="Palavras-chave orgânicas" value={data.organicKeywords} />
            <ChangeLabel value={data.organicKeywordsChange} positive />
          </div>
          <div className="card-premium">
            <KPICard label="Tráfego orgânico estimado" value={`${data.estimatedOrganicTraffic}/mês`} />
            <ChangeLabel value={data.estimatedTrafficChange} positive={false} />
          </div>
          <div className="card-premium">
            <KPICard label="Backlinks" value={data.backlinks} />
            <ChangeLabel value={data.backlinksChange} positive />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="card-premium lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-700"><SearchCheck className="h-6 w-6" /></div>
              <div>
                <h3 className="section-subtitle mb-0">Posicionamento rastreado</h3>
                <p className="text-xs text-gray-500">Distribuição de 55 palavras acompanhadas pela ferramenta</p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Posição média rastreada</p>
                <div className="mt-2 flex items-end gap-3">
                  <p className="text-4xl font-bold text-[#203c50]">{data.trackedAveragePosition.toFixed(2)}</p>
                  <span className="mb-1 inline-flex items-center gap-1 text-sm font-semibold text-green-600"><TrendingUp className="h-4 w-4" />{positionGain.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-xs text-gray-600">Melhora histórica de {data.historicalAveragePosition.toFixed(2)} para {data.trackedAveragePosition.toFixed(2)}</p>
              </div>
              <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Cobertura acompanhada</p>
                <p className="mt-2 text-4xl font-bold text-[#203c50]">{data.trackedKeywords}<span className="text-lg text-gray-500">/{data.totalTrackedKeywords}</span></p>
                <p className="mt-2 text-xs text-gray-600">Palavras monitoradas no rastreamento atual</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {rankingStats.map((stat) => (
                <div key={stat.label} className={`rounded-lg border p-3 ${stat.tone}`}>
                  <p className="text-[11px] font-medium leading-tight">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-3 text-[#d95729]"><Link2 className="h-6 w-6" /></div>
              <div>
                <h3 className="section-subtitle mb-0">Leitura de autoridade</h3>
                <p className="text-xs text-gray-500">Interpretação dos indicadores estimados</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              A cobertura de palavras-chave cresceu, mas isso ainda não se refletiu em maior tráfego orgânico estimado. A prioridade é fortalecer posições e CTR dos conteúdos que já possuem visibilidade no Google.
            </p>
            <div className="mt-5 rounded-lg border border-orange-200 bg-[#fff5f0] p-4">
              <p className="text-sm font-semibold text-[#203c50]">Nota metodológica</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-700">O Ubersuggest apresenta estimativas e rastreamentos da ferramenta; não representa tráfego semanal real.</p>
            </div>
          </div>
        </div>

        <div className="card-premium border border-[#dbe5ec] bg-white">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#203c50] p-3 text-white"><BrainCircuit className="h-6 w-6" /></div>
              <div>
                <h3 className="section-subtitle mb-0">Como a IA vê o site</h3>
                <p className="text-xs text-gray-500">Novo módulo de visibilidade da marca em respostas de IA</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dbe5ec] bg-white px-3 py-1.5 text-xs font-semibold text-[#203c50] shadow-sm"><Bot className="h-4 w-4" />Visibilidade em IA</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#dbe5ec] bg-white p-5">
              <p className="text-xs font-semibold text-gray-500">Visibilidade da marca em IA</p>
              <p className="mt-2 text-4xl font-bold text-[#203c50]">{data.aiVisibility.brandVisibility}%</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-5">
              <p className="text-xs font-semibold text-gray-500">Visibilidade no ChatGPT</p>
              <p className="mt-2 text-4xl font-bold text-blue-700">{data.aiVisibility.chatgptVisibility.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-gray-500">Sentimento da marca</p>
              <p className="mt-2 text-3xl font-bold text-[#203c50]">{data.aiVisibility.sentiment}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-gray-500">Sentimento no ChatGPT</p>
              <p className="mt-2 flex items-center gap-2 text-xl font-bold text-[#203c50]"><MessageSquareText className="h-5 w-5 text-[#ff6737]" />{data.aiVisibility.chatgptSentiment}</p>
            </div>
          </div>

          <p className="mt-6 border-l-4 border-[#ff6737] pl-4 text-sm leading-relaxed text-gray-700">
            A Desentupidora JD já aparece em parte das respostas avaliadas por IA, mas a visibilidade ainda é inicial. O sentimento neutro indica ausência de sinal negativo, porém há espaço para reforçar autoridade e associação clara aos serviços em São Paulo.
          </p>
        </div>
      </div>
    </section>
  );
}
