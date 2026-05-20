import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Smartphone, Monitor, Zap, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface UbersuggestSectionProps {
  data: DashboardData['ubersuggest'];
  technicalData?: DashboardData['technicalSeo'];
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

function getPerformanceIcon(status: string) {
  switch (status) {
    case 'Ótimo':
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case 'Bom':
      return <Zap className="w-5 h-5 text-blue-600" />;
    case 'Ruim':
      return <AlertCircle className="w-5 h-5 text-red-600" />;
    default:
      return <Clock className="w-5 h-5 text-gray-600" />;
  }
}

function getMetricIcon(metric: string) {
  switch (metric) {
    case 'Carregamento':
      return <Clock className="w-6 h-6" />;
    case 'Interatividade':
      return <Zap className="w-6 h-6" />;
    case 'Estabilidade Visual':
      return <AlertCircle className="w-6 h-6" />;
    default:
      return <CheckCircle className="w-6 h-6" />;
  }
}

export default function UbersuggestSection({ data, technicalData }: UbersuggestSectionProps) {
  const rankingData = [
    { name: 'Top 3', value: data.top3 },
    { name: 'Top 10', value: data.top10 },
    { name: 'Top 100', value: data.top100 },
    { name: 'Não Ranqueiam', value: data.notRanked },
  ];

  const performanceMetrics = [
    { label: 'Carregamento', key: 'Load', description: 'Velocidade de carregamento da página' },
    { label: 'Interatividade', key: 'Interactivity', description: 'Responsividade aos cliques do usuário' },
    { label: 'Estabilidade Visual', key: 'Stability', description: 'Estabilidade do layout durante carregamento' },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Saúde Técnica e Autoridade — Ubersuggest</h2>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard
            label="Posição Média"
            value={data.avgPositionCurrent.toFixed(1)}
          />
          <KPICard
            label="Melhora"
            value={`+${(data.avgPositionPrevious - data.avgPositionCurrent).toFixed(1)}`}
          />
          <KPICard
            label="Top 100"
            value={data.top100}
          />
          <KPICard
            label="Backlinks"
            value={data.backlinks}
          />
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
                  <Bar dataKey="value" fill="#ff6737" radius={[8, 8, 0, 0]} label={{ position: 'top', fill: '#203c50', fontSize: 12, fontWeight: 'bold' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">Posição Média</p>
                <p className="text-3xl font-bold text-[#203c50]">{data.avgPositionCurrent.toFixed(1)}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-gray-600">Ganharam Posições</p>
                  <p className="text-2xl font-bold text-green-600">{data.gainedPositions}</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs text-gray-600">Perderam Posições</p>
                  <p className="text-2xl font-bold text-red-600">{data.lostPositions}</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600">Inalteradas</p>
                <p className="text-2xl font-bold text-[#203c50]">{data.unchangedPositions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Técnica - Redesigned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mobile Performance */}
          <div className="card-premium">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="section-subtitle mb-0">Performance Técnica — Mobile</h3>
                <p className="text-xs text-gray-500">Análise de desempenho em dispositivos móveis</p>
              </div>
            </div>

            <div className="space-y-3">
              {performanceMetrics.map((metric, idx) => {
                const key = `${metric.key}` as any;
                const status = (technicalData?.performance as any)?.[key] as string || 'Bom';
                const statusInfo = getPerformanceStatus(status);
                
                return (
                  <div key={idx} className={`p-4 rounded-lg border-2 ${statusInfo.bgColor} border-gray-200 hover:border-blue-300 transition-colors`}>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-600 mt-1">
                        {getMetricIcon(metric.label)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-gray-800">{metric.label}</p>
                          <div className="flex items-center gap-2">
                            {getPerformanceIcon(status)}
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusInfo.color} bg-white border border-current`}>
                              {status}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Performance */}
          <div className="card-premium">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="section-subtitle mb-0">Performance Técnica — Desktop</h3>
                <p className="text-xs text-gray-500">Análise de desempenho em computadores</p>
              </div>
            </div>

            <div className="space-y-3">
              {performanceMetrics.map((metric, idx) => {
                const key = `${metric.key}` as any;
                const status = (technicalData?.performance as any)?.[key] as string || 'Bom';
                const statusInfo = getPerformanceStatus(status);
                
                return (
                  <div key={idx} className={`p-4 rounded-lg border-2 ${statusInfo.bgColor} border-gray-200 hover:border-purple-300 transition-colors`}>
                    <div className="flex items-start gap-3">
                      <div className="text-purple-600 mt-1">
                        {getMetricIcon(metric.label)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-gray-800">{metric.label}</p>
                          <div className="flex items-center gap-2">
                            {getPerformanceIcon(status)}
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusInfo.color} bg-white border border-current`}>
                              {status}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Issues & Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Issues Found */}
          <div className="card-premium">
            <h3 className="section-subtitle">Problemas Técnicos Encontrados</h3>
            <div className="space-y-2">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Sitemap.xml</p>
                  <p className="text-xs text-gray-600">Validar e corrigir se necessário</p>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Página 4XX</p>
                  <p className="text-xs text-gray-600">Corrigir ou redirecionar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pages Scraped */}
          <div className="card-premium">
            <h3 className="section-subtitle">Páginas Analisadas</h3>
            <div className="space-y-2">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Total de Páginas</p>
                  <p className="text-xs text-gray-600">48 páginas analisadas</p>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Status</p>
                  <p className="text-xs text-gray-600">Auditoria concluída</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
