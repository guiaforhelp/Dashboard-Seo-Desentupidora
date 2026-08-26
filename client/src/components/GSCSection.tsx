// Estilo JD: métricas em cartões brancos, azul #203c50 para hierarquia e laranja #ff6737 para números-chave.
import { BarChart3, Search, TrendingDown, TrendingUp } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';

interface GSCSectionProps {
  data: DashboardData['gsc'];
}

function formatImpressions(value: number) {
  return value >= 1000 ? `${(value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} mil` : value.toLocaleString('pt-BR');
}

export default function GSCSection({ data }: GSCSectionProps) {
  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="mb-8">
          <h2 className="section-title mb-1">Visibilidade no Google — Search Console</h2>
          <p className="text-sm text-gray-600">Fonte oficial para cliques, impressões, CTR, posição média, consultas e conteúdos orgânicos.</p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <KPICard label="Cliques Orgânicos" value={data.clicks} icon={<Search />} />
          <KPICard label="Impressões" value={formatImpressions(data.impressions)} icon={<BarChart3 />} />
          <KPICard label="CTR Médio" value={`${data.ctr.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%`} />
          <KPICard label="Posição Média" value={data.avgPosition.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-green-200 bg-green-50 p-4"><p className="text-xs font-semibold text-gray-600">Variação de cliques</p><p className="mt-2 text-2xl font-bold text-green-700">+46%</p><p className="mt-1 text-xs text-gray-500">conforme exibido na fonte</p></div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4"><p className="text-xs font-semibold text-gray-600">Variação de impressões</p><p className="mt-2 text-2xl font-bold text-red-700">-3%</p><p className="mt-1 text-xs text-gray-500">conforme exibido na fonte</p></div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4"><p className="text-xs font-semibold text-gray-600">Variação de CTR</p><p className="mt-2 text-2xl font-bold text-green-700">+{data.ctrChangePp.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}</p><p className="mt-1 text-xs text-gray-500">de {data.ctrPrevious.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}% para {data.ctr.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%</p></div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4"><p className="text-xs font-semibold text-gray-600">Variação de posição</p><p className="mt-2 text-2xl font-bold text-green-700">+{data.avgPositionImprovement.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}</p><p className="mt-1 text-xs text-gray-500">melhora de {data.avgPositionPrevious.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} para {data.avgPosition.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}</p></div>
        </div>

        <div className="card-premium mb-8 border border-orange-200 bg-gradient-to-r from-orange-50 to-white">
          <p className="text-sm leading-relaxed text-gray-700"><strong className="text-[#203c50]">Leitura:</strong> o site recebeu mais cliques mesmo com leve redução de impressões. O CTR de 0,5% ainda apresenta oportunidade de crescimento por meio de titles, meta descriptions e FAQs mais alinhados à intenção de busca.</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-600" />Conteúdos em Alta</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500"><tr><th className="pb-3 font-semibold">Conteúdo</th><th className="pb-3 text-center font-semibold">Cliques</th><th className="pb-3 text-right font-semibold">Variação</th></tr></thead>
                <tbody>{data.contentsUp.map((content) => <tr key={content.title} className="border-b border-gray-100 last:border-0"><td className="py-3 pr-3 font-medium text-[#203c50]">{content.title}</td><td className="py-3 text-center font-bold text-[#ff6737]">{content.clicks ?? '—'}</td><td className="py-3 text-right"><span className="badge-success">{content.change > 0 ? `+${content.change}` : content.change} {content.change === 4 || content.change === 3 ? 'Antes 0' : 'cliques'}</span></td></tr>)}</tbody>
              </table>
            </div>
          </div>

          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2"><TrendingDown className="h-5 w-5 text-red-600" />Conteúdos em Queda</h3>
            <div className="space-y-3">{data.contentsDown.map((content) => <div key={content.title} className="rounded-lg border border-red-200 bg-red-50 p-3"><p className="mb-1 text-sm font-medium text-gray-700">{content.title}</p><span className="badge-danger">{content.change} clique{content.change === -1 ? '' : 's'}</span></div>)}</div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-600" />Consultas em Alta</h3>
            <div className="space-y-2">{data.queriesUp.map((query) => <div key={query.query} className="flex items-center justify-between gap-3 rounded-lg bg-green-50 p-3"><p className="text-sm text-gray-700">{query.query}</p><div className="shrink-0 text-right"><p className="text-sm font-bold text-[#203c50]">{query.clicks ?? '—'} clique{query.clicks === 1 ? '' : 's'}</p><span className="badge-success">Antes 0</span></div></div>)}</div>
          </div>
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2"><TrendingDown className="h-5 w-5 text-red-600" />Consultas em Queda</h3>
            <div className="space-y-2">{data.queriesDown.map((query) => <div key={query.query} className="flex items-center justify-between gap-3 rounded-lg bg-red-50 p-3"><p className="text-sm text-gray-700">{query.query}</p><span className="badge-danger shrink-0">{query.change} clique{query.change === -1 ? '' : 's'}</span></div>)}</div>
          </div>
        </div>

        <div className="card-premium">
          <h3 className="section-subtitle">Conteúdos com Maior Tração</h3>
          <div className="space-y-3">
            {data.topContents.map((page, idx) => <div key={page.title} className="flex items-center justify-between gap-4 rounded-lg bg-gray-50 p-4"><div className="flex items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff6737] text-sm font-bold text-white">{idx + 1}</div><p className="text-sm font-medium text-[#203c50]">{page.title}</p></div><span className="shrink-0 text-lg font-bold text-[#ff6737]">{page.clicks}</span></div>)}
          </div>
          <p className="mt-6 border-l-4 border-[#ff6737] pl-4 text-sm leading-relaxed text-gray-700"><strong>Oportunidade:</strong> prumada, vaso sanitário e responsabilidade em imóvel alugado estão atraindo buscas. Usar esses artigos como portas de entrada para páginas de serviço relacionadas em São Paulo, com links internos e CTAs contextuais.</p>
        </div>
      </div>
    </section>
  );
}
