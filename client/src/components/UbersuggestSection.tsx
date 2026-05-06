import { AlertCircle, CheckCircle, BarChart3, Link2 } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UbersuggestSectionProps {
  data: DashboardData['ubersuggest'];
}

function getPerformanceStatus(status: string): { color: string; bgColor: string } {
  switch (status) {
    case 'Ótimo':
      return { color: 'text-green-600', bgColor: 'bg-green-50' };
    case 'Bom':
      return { color: 'text-blue-600', bgColor: 'bg-blue-50' };
    case 'Ruim':
      return { color: 'text-red-600', bgColor: 'bg-red-50' };
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-50' };
  }
}

export default function UbersuggestSection({ data }: UbersuggestSectionProps) {
  const rankingData = [
    { name: 'Top 3', value: data.rankings.top3 },
    { name: 'Top 10', value: data.rankings.top10 },
    { name: 'Top 100', value: data.rankings.top100 },
    { name: 'Não Ranqueiam', value: data.rankings.notRanking },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Saúde Técnica e Autoridade — Ubersuggest</h2>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard label="Pontuação SEO On-page" value={data.seoScore} />
          <KPICard label="Tráfego Orgânico Mensal" value={data.monthlyTraffic} />
          <KPICard label="Palavras-chave Orgânicas" value={data.organicKeywords} />
          <KPICard label="Backlinks" value={data.backlinks} />
        </div>

        {/* Rankings */}
        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Distribuição de Rankings</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={rankingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="value" fill="#ff6737" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Posição Média</p>
                <p className="text-3xl font-bold text-[#203c50]">{data.rankings.avgPosition}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-gray-600">Ganharam Posições</p>
                  <p className="text-2xl font-bold text-green-600">{data.rankings.gainedPositions}</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs text-gray-600">Perderam Posições</p>
                  <p className="text-2xl font-bold text-red-600">{data.rankings.lostPositions}</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600">Inalteradas</p>
                <p className="text-2xl font-bold text-[#203c50]">{data.rankings.unchanged}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mobile Performance */}
          <div className="card-premium">
            <h3 className="section-subtitle">Performance Técnica — Mobile</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Carregamento</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.mobileLoad).color
                    }`}
                  >
                    {data.performance.mobileLoad}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Interatividade</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.mobileInteractivity).color
                    }`}
                  >
                    {data.performance.mobileInteractivity}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Estabilidade Visual</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.mobileStability).color
                    }`}
                  >
                    {data.performance.mobileStability}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Performance */}
          <div className="card-premium">
            <h3 className="section-subtitle">Performance Técnica — Desktop</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Carregamento</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.desktopLoad).color
                    }`}
                  >
                    {data.performance.desktopLoad}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Interatividade</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.desktopInteractivity).color
                    }`}
                  >
                    {data.performance.desktopInteractivity}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Estabilidade Visual</p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      getPerformanceStatus(data.performance.desktopStability).color
                    }`}
                  >
                    {data.performance.desktopStability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* SEO Issues */}
          <div className="alert-card">
            <h3 className="section-subtitle flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              Problemas de SEO
            </h3>
            <p className="text-sm text-red-600 mb-4">
              Total de problemas encontrados: <span className="font-bold">{data.issues.length}</span>
            </p>
            <div className="space-y-2">
              {data.issues.map((issue, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{issue.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pages Scraped */}
          <div className="card-premium">
            <h3 className="section-subtitle">Páginas Rastreadas</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600 mb-1">Total de Páginas</p>
                <p className="text-3xl font-bold text-blue-600">{data.pagesScraped.total}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-gray-600">Válidas</p>
                  <p className="text-2xl font-bold text-green-600">{data.pagesScraped.valid}</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xs text-gray-600">Redirects</p>
                  <p className="text-2xl font-bold text-yellow-600">{data.pagesScraped.redirects}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs text-gray-600">Quebradas</p>
                  <p className="text-2xl font-bold text-red-600">{data.pagesScraped.broken}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600">Bloqueadas</p>
                  <p className="text-2xl font-bold text-gray-600">{data.pagesScraped.blocked}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
