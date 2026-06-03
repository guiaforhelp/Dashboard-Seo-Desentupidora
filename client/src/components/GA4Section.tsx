import { Users, Eye, Zap, TrendingUp, Smartphone, MapPin, BarChart3 } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface GA4SectionProps {
  data: DashboardData['ga4'];
}

export default function GA4Section({ data }: GA4SectionProps) {
  const deviceColors = ['#ff6737', '#203c50'];
  const osColors = ['#ff6737', '#10b981', '#f59e0b'];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Desempenho do Site — Google Analytics</h2>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <KPICard
            label="Usuários Ativos"
            value={data.activeUsers}
            icon={<Users />}
          />
          <KPICard
            label="Novos Usuários"
            value={data.newUsers}
            icon={<Users />}
          />
          <KPICard
            label="Tempo Médio"
            value={data.engagementTime}
            icon={<Zap />}
          />
          <KPICard
            label="Visualizações"
            value={data.pageViews}
            icon={<Eye />}
          />
          <KPICard
            label="Conversões"
            value={data.conversions}
            icon={<TrendingUp />}
          />
        </div>

        {/* Daily Activity Chart */}
        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Atividade do Usuário ao Longo do Tempo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#ff6737"
                strokeWidth={3}
                dot={{ fill: '#ff6737', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600">30 dias</p>
              <p className="text-2xl font-bold text-[#203c50]">{data.activeUsers30d}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">7 dias</p>
              <p className="text-2xl font-bold text-[#203c50]">{data.activeUsers7d}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">1 dia</p>
              <p className="text-2xl font-bold text-[#203c50]">{data.activeUsers1d}</p>
            </div>
          </div>
        </div>

        {/* Devices & OS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Devices */}
          <div className="card-premium">
            <h3 className="section-subtitle">Dispositivos</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.devices}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="percentage"
                >
                  {data.devices.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={deviceColors[index]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${typeof value === 'number' ? value.toFixed(1) : value}%`}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-8 mt-4">
              {data.devices.map((device, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-2"
                    style={{ backgroundColor: deviceColors[idx] }}
                  ></div>
                  <p className="text-sm text-gray-600">{device.name}</p>
                  <p className="font-bold text-[#203c50]">{device.percentage.toFixed(1)}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <div className="card-premium">
            <h3 className="section-subtitle">Sistemas Operacionais</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={data.os}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 150 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis type="number" stroke="#999" />
                <YAxis dataKey="name" type="category" stroke="#999" width={140} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#ff6737" radius={[0, 8, 8, 0]} label={{ position: 'right', fill: '#203c50', fontSize: 12, fontWeight: 'bold' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Locations */}
        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Localização dos Usuários</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data.locations}
              layout="vertical"
              margin={{ top: 5, right: 100, left: 200 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis type="number" stroke="#999" />
              <YAxis dataKey="city" type="category" stroke="#999" width={190} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
                <Bar dataKey="count" fill="#203c50" radius={[0, 8, 8, 0]} label={{ position: 'right', fill: '#203c50', fontSize: 12, fontWeight: 'bold' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Pages */}
        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Páginas Mais Acessadas</h3>
          <div className="space-y-3">
            {data.topPages.map((page, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-[#203c50] text-sm">{page.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#ff6737]">{page.views}</span>
                  <span className="text-xs text-gray-500">visualizações</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Conversion Event */}
          <div className="card-premium bg-gradient-to-br from-[#fff5f0] to-white border-2 border-[#ff6737]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">Evento Principal de Conversão</p>
                <p className="text-4xl font-bold text-[#ff6737] font-poppins">
                  {data.conversionEvent.count}
                </p>
                <p className="text-lg text-[#203c50] font-medium mt-2">
                  {data.conversionEvent.name}
                </p>
              </div>
              <TrendingUp className="w-12 h-12 text-[#ff6737] opacity-20" />
            </div>
          </div>

          {/* Top Conversion Pages */}
          <div className="card-premium">
            <p className="text-sm text-gray-600 mb-4">Páginas com Maior Intenção de Conversão</p>
            <div className="space-y-3">
              {/* First Conversion Page */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-white rounded-lg border border-green-200">
                <p className="font-medium text-[#203c50] mb-3">{data.topConversionPage.title}</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 bg-green-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Conversões</p>
                    <p className="text-xl font-bold text-green-600">
                      {data.topConversionPage.conversions}
                    </p>
                  </div>
                  <div className="text-center p-2 bg-blue-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Eventos</p>
                    <p className="text-xl font-bold text-[#203c50]">
                      {data.topConversionPage.events}
                    </p>
                  </div>
                  <div className="text-center p-2 bg-blue-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Tempo Médio</p>
                    <p className="text-sm font-bold text-[#203c50]">
                      {data.topConversionPage.engagementTime}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Second Conversion Page */}
              {data.conversionPages && data.conversionPages.length > 1 && (
                <div className="p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg border border-orange-200">
                  <p className="font-medium text-[#203c50] mb-3">{data.conversionPages[1].title}</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-orange-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Conversões</p>
                      <p className="text-xl font-bold text-orange-600">
                        {data.conversionPages[1].conversions}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Eventos</p>
                      <p className="text-xl font-bold text-[#203c50]">
                        {data.conversionPages[1].events}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Tempo Médio</p>
                      <p className="text-sm font-bold text-[#203c50]">
                        {data.conversionPages[1].engagementTime}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Third Conversion Page */}
              {data.conversionPages && data.conversionPages.length > 2 && (
                <div className="p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-200">
                  <p className="font-medium text-[#203c50] mb-3">{data.conversionPages[2].title}</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-purple-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Conversões</p>
                      <p className="text-xl font-bold text-purple-600">
                        {data.conversionPages[2].conversions}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Eventos</p>
                      <p className="text-xl font-bold text-[#203c50]">
                        {data.conversionPages[2].events}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-blue-100 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Tempo Médio</p>
                      <p className="text-sm font-bold text-[#203c50]">
                        {data.conversionPages[2].engagementTime}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
