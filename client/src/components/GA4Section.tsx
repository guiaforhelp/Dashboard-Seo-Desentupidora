// Estilo JD: cartões claros, texto azul #203c50 e laranja #ff6737 para evidenciar métricas e alertas prioritários.
import { AlertTriangle, Eye, TrendingUp, Users, Zap } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface GA4SectionProps {
  data: DashboardData['ga4'];
}

export default function GA4Section({ data }: GA4SectionProps) {
  const deviceColors = ['#203c50', '#ff6737'];
  const hasOsData = data.os.length > 0;

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="mb-8">
          <h2 className="section-title mb-1">Desempenho do Site — Google Analytics 4</h2>
          <p className="text-sm text-gray-600">Fonte oficial para usuários, comportamento, dispositivos, cidades e eventos principais.</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <KPICard label="Usuários Ativos" value={data.activeUsers} icon={<Users />} />
          <KPICard label="Novos Usuários" value={data.newUsers} icon={<Users />} />
          <KPICard label="Tempo Médio" value={data.engagementTime} icon={<Zap />} />
          <KPICard label="Visualizações" value={data.pageViews} icon={<Eye />} />
          <KPICard label="Eventos Principais" value={data.conversions} icon={<TrendingUp />} />
        </div>

        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Usuários Ativos por Janela</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Último 1 dia</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers1d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>
            <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Últimos 7 dias</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers7d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>
            <div className="rounded-lg border border-[#dfe6ea] bg-white p-4 text-center"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Últimos 30 dias</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.activeUsers30d}</p><p className="mt-1 text-xs text-gray-500">usuários ativos únicos</p></div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-gray-600"><strong>Como ler:</strong> as janelas mostram usuários únicos ativos. O mesmo usuário pode ter visitado mais de um dia e ainda assim contar apenas uma vez no total de 7 ou 30 dias.</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-premium">
            <h3 className="section-subtitle">Dispositivos</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={data.devices} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="percentage">
                  {data.devices.map((_, index) => <Cell key={`device-${index}`} fill={deviceColors[index]} />)}
                </Pie>
                <Tooltip formatter={(value) => `${typeof value === 'number' ? value.toFixed(1) : value}%`} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-8">
              {data.devices.map((device, idx) => (
                <div key={device.name} className="text-center">
                  <div className="mx-auto mb-2 h-3 w-3 rounded-full" style={{ backgroundColor: deviceColors[idx] }} />
                  <p className="text-sm text-gray-600">{device.name}</p>
                  <p className="font-bold text-[#203c50]">{device.percentage.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium">
            <h3 className="section-subtitle">Sistemas Operacionais</h3>
            {hasOsData ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data.os} layout="vertical" margin={{ top: 5, right: 30, left: 150 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis type="number" stroke="#999" />
                  <YAxis dataKey="name" type="category" stroke="#999" width={140} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
                  <Bar dataKey="count" fill="#ff6737" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center rounded-lg bg-gray-50 p-8 text-center text-sm text-gray-600">Não disponível na coleta atual.</div>
            )}
          </div>
        </div>

        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Localização dos Usuários</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.locations} layout="vertical" margin={{ top: 5, right: 70, left: 150 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis type="number" stroke="#999" />
              <YAxis dataKey="city" type="category" stroke="#999" width={140} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px' }} />
              <Bar dataKey="count" fill="#203c50" radius={[0, 8, 8, 0]} label={{ position: 'right', fill: '#203c50', fontSize: 12, fontWeight: 'bold' }} />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 border-l-4 border-[#ff6737] pl-4 text-sm leading-relaxed text-gray-700"><strong>Leitura:</strong> São Paulo é a principal cidade de acesso e deve continuar sendo o destino prioritário de CTAs, links internos e páginas comerciais. Desktop e mobile têm peso praticamente igual, exigindo boa experiência nos dois formatos.</p>
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
              <thead className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
                <tr><th className="pb-3 pr-4 font-semibold">Página</th><th className="pb-3 pr-4 text-center font-semibold">Visualizações</th><th className="pb-3 font-semibold">Leitura</th></tr>
              </thead>
              <tbody>
                {data.topPages.map((page, idx) => (
                  <tr key={page.title} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 pr-4 font-medium text-[#203c50]">{idx + 1}. {page.title}</td>
                    <td className="py-4 pr-4 text-center text-lg font-bold text-[#ff6737]">{page.views}</td>
                    <td className={`py-4 ${idx === 0 ? 'font-semibold text-red-700' : 'text-gray-600'}`}>{page.reading ?? 'Não disponível na captura'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-800"><strong>Alerta prioritário:</strong> a página 404 foi a URL mais visualizada da semana. Priorizar a identificação da origem, o redirecionamento para a URL correta e a melhoria da navegação para não desperdiçar tráfego orgânico.</div>
        </div>
      </div>
    </section>
  );
}
