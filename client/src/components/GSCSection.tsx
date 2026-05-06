import { Search, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import KPICard from './KPICard';
import { DashboardData } from '@/types/dashboard';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

interface GSCSectionProps {
  data: DashboardData['gsc'];
}

export default function GSCSection({ data }: GSCSectionProps) {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Visibilidade no Google — Search Console</h2>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard
            label="Total de Cliques"
            value={data.clicks}
            icon={<Search />}
            trend="up"
            trendValue="+18%"
          />
          <KPICard
            label="Total de Impressões"
            value={data.impressions.toLocaleString('pt-BR')}
            icon={<BarChart3 />}
            trend="up"
            trendValue="+22%"
          />
          <KPICard
            label="CTR Média"
            value={`${data.ctr}%`}
            trend="up"
            trendValue="+5%"
          />
          <KPICard
            label="Posição Média"
            value={data.avgPosition.toFixed(1)}
            trend="down"
            trendValue="-1.2"
          />
        </div>

        {/* Daily Metrics Chart */}
        <div className="card-premium mb-8">
          <h3 className="section-subtitle">Linha do Tempo — Cliques, Impressões, CTR e Posição</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={data.dailyMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis yAxisId="left" stroke="#999" />
              <YAxis yAxisId="right" orientation="right" stroke="#999" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="clicks" fill="#ff6737" name="Cliques" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="impressions"
                stroke="#203c50"
                strokeWidth={2}
                name="Impressões"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Queries Up & Down */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Queries Up */}
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Consultas em Alta
            </h3>
            <div className="space-y-2">
              {data.queriesUp.map((query, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">{query.query}</p>
                  <span className="badge-success">+{query.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Queries Down */}
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-600" />
              Consultas em Baixa
            </h3>
            <div className="space-y-2">
              {data.queriesDown.map((query, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-700">{query.query}</p>
                  <span className="badge-danger">{query.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contents Up & Down */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contents Up */}
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Conteúdos em Alta
            </h3>
            <div className="space-y-3">
              {data.contentsUp.map((content, idx) => (
                <div key={idx} className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700 font-medium mb-1">{content.title}</p>
                  <span className="badge-success">+{content.change} cliques</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contents Down */}
          <div className="card-premium">
            <h3 className="section-subtitle flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-600" />
              Conteúdos em Baixa
            </h3>
            <div className="space-y-3">
              {data.contentsDown.map((content, idx) => (
                <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-700 font-medium mb-1">{content.title}</p>
                  <span className="badge-danger">{content.change} cliques</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="card-premium">
          <h3 className="section-subtitle">Páginas Principais</h3>
          <div className="space-y-3">
            {data.topPages.map((page, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#ff6737] text-white rounded-full font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="font-medium text-[#203c50] text-sm">{page.title}</p>
                </div>
                <span className="text-lg font-bold text-[#ff6737]">{page.clicks}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
