// Estilo JD: blocos executivos claros, com azul #203c50 para hierarquia e laranja #ff6737 para métricas prioritárias.
import { AlertTriangle, Eye, LineChart as LineChartIcon, Mail, TrendingUp, Users, Zap } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface GA4SectionProps {
  data: DashboardData['ga4'];
}

export default function GA4Section({ data }: GA4SectionProps) {
  const hasDailyActivity = data.dailyActivity.length > 0;
  const hasActiveUserWindows = [data.activeUsers1d, data.activeUsers7d, data.activeUsers30d].some((value) => typeof value === 'number');

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="mb-8">
          <h2 className="section-title mb-1">Desempenho do Site — Google Analytics 4</h2>
          <p className="text-sm text-gray-600">Fonte oficial para usuários, comportamento, páginas e eventos principais do recorte orgânico semanal.</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <KPICard label="Usuários Ativos" value={data.activeUsers} icon={<Users />} />
          <KPICard label="Novos Usuários" value={data.newUsers} icon={<Users />} />
          <KPICard label="Tempo Médio" value={data.engagementTime} icon={<Zap />} />
          <KPICard label="Visualizações" value={data.pageViews} icon={<Eye />} />
          <KPICard label="Eventos Principais" value={data.conversions} icon={<TrendingUp />} />
        </div>

        <div className="executive-takeaway mb-8">
          <p className="executive-takeaway-label">Leitura executiva</p>
          <p className="text-lg font-semibold leading-relaxed text-[#203c50]">O volume de usuários caiu, mas a permanência dobrou para 1min32s. O foco é recuperar alcance sem perder a qualidade de navegação conquistada nesta semana.</p>
        </div>

        {hasDailyActivity && (
          <div className="card-premium mb-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-[#fff0eb] p-3 text-[#ff6737]"><LineChartIcon className="h-5 w-5" /></div>
              <div>
                <h3 className="section-subtitle mb-0">Tendência diária de usuários ativos</h3>
                <p className="text-xs text-gray-500">Recorte de 26/08 a 01/09/2026</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data.dailyActivity} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="date" stroke="#74808a" fontSize={12} />
                <YAxis allowDecimals={false} stroke="#74808a" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe6ea', borderRadius: '10px' }} formatter={(value) => [`${value} usuários`, 'Ativos']} />
                <Line type="monotone" dataKey="users" stroke="#ff6737" strokeWidth={3} dot={{ fill: '#ff6737', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 border-l-4 border-[#ff6737] pl-4 text-sm leading-relaxed text-gray-700"><strong>Nota:</strong> a soma dos usuários ativos por dia é 57, enquanto o período registra 55 usuários únicos. Isso é esperado: uma mesma pessoa pode acessar em mais de um dia.</p>
          </div>
        )}

        {hasActiveUserWindows && (
          <div className="card-premium mb-8">
            <h3 className="section-subtitle">Usuários Ativos por Janela</h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {typeof data.activeUsers1d === 'number' && <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Último 1 dia</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers1d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>}
              {typeof data.activeUsers7d === 'number' && <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Últimos 7 dias</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers7d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>}
              {typeof data.activeUsers30d === 'number' && <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Últimos 30 dias</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers30d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>}
            </div>
          </div>
        )}

        <div className="card-premium mb-8 border border-[#dbe5ec] bg-white">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-[#203c50] p-3 text-white"><Mail className="h-5 w-5" /></div>
            <div>
              <h3 className="section-subtitle mb-1">Evento principal</h3>
              <p className="text-3xl font-bold text-[#203c50]">{data.conversionEvent.count}</p>
              <p className="mt-1 text-sm font-semibold text-[#ff6737]">{data.conversionEvent.name}</p>
            </div>
          </div>
          <p className="mt-5 rounded-lg border border-orange-200 bg-[#fff5f0] p-4 text-sm leading-relaxed text-[#70321d]"><strong>Alerta:</strong> o evento representa um clique rastreado em e-mail. Validar no atendimento se houve contato efetivo e não tratá-lo automaticamente como lead ou venda.</p>
        </div>

        <div className="card-premium">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-lg bg-[#fff0eb] p-3 text-[#ff6737]"><AlertTriangle className="h-5 w-5" /></div>
            <div>
              <h3 className="section-subtitle mb-0">Páginas Mais Visualizadas</h3>
              <p className="text-xs text-gray-500">Páginas com maior tração na coleta atual</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500"><tr><th className="pb-3 pr-4 font-semibold">Página</th><th className="pb-3 pr-4 text-center font-semibold">Visualizações</th><th className="pb-3 font-semibold">Leitura</th></tr></thead>
              <tbody>{data.topPages.map((page, idx) => <tr key={page.title} className="border-b border-gray-100 last:border-0"><td className="py-4 pr-4 font-medium text-[#203c50]">{idx + 1}. {page.title}</td><td className="py-4 pr-4 text-center text-lg font-bold text-[#ff6737]">{page.views}</td><td className={`py-4 ${idx === 0 ? 'font-semibold text-red-700' : 'text-gray-600'}`}>{page.reading ?? 'Não informado na exportação'}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-800"><strong>Alerta prioritário:</strong> a página 404 continua sendo a URL mais visualizada da semana. Identificar URLs de origem, links internos e links externos quebrados, redirecionando cada rota para a página correta quando aplicável.</div>
        </div>
      </div>
    </section>
  );
}
