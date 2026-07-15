import { TrendingUp, MessageCircle } from 'lucide-react';
import { DashboardData } from '@/types/dashboard';

interface ConversionPagesSectionProps {
  data: DashboardData['ga4'];
}

export default function ConversionPagesSection({ data }: ConversionPagesSectionProps) {
  // Calculate conversion percentages
  const totalConversions = data.conversions;
  const conversionPercentage = (conversions: number) => totalConversions > 0 ? (conversions / totalConversions) * 100 : 0;

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Páginas com Conversões</h2>
        <p className="text-gray-600 mb-6">
          Páginas que geraram conversões via <span className="font-semibold text-[#ff6737]">{data.conversionEvent.name}</span>
        </p>

        {/* Main Conversion Event Summary */}
        <div className="card-premium bg-gradient-to-r from-[#fff5f0] to-white border-2 border-[#ff6737] mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Evento Principal de Conversão</p>
              <p className="text-5xl font-bold text-[#ff6737]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {data.conversionEvent.count}
              </p>
              <p className="text-lg text-[#203c50] font-medium mt-3">
                {data.conversionEvent.name}
              </p>
            </div>
            <div className="text-right">
              <MessageCircle className="w-16 h-16 text-[#ff6737] opacity-20 mb-4" />
              <p className="text-sm text-gray-600">Total de conversões</p>
              <p className="text-2xl font-bold text-[#ff6737]">{data.conversions}</p>
            </div>
          </div>
        </div>

        {/* Conversion Pages Grid */}
        <div className="grid grid-cols-1 gap-6">
          {data.conversionPages && data.conversionPages.map((page, idx) => {
            const colors = [
              { bg: 'from-green-50', border: 'border-green-200', badge: 'bg-green-100', badgeText: 'text-green-700' },
              { bg: 'from-orange-50', border: 'border-orange-200', badge: 'bg-orange-100', badgeText: 'text-orange-700' },
              { bg: 'from-purple-50', border: 'border-purple-200', badge: 'bg-purple-100', badgeText: 'text-purple-700' },
            ];
            const color = colors[idx] || colors[0];
            const percentage = conversionPercentage(page.conversions);

            return (
              <div
                key={idx}
                className={`card-premium bg-gradient-to-r ${color.bg} to-white border-2 ${color.border}`}
              >
                {/* Header with Page Title */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Página #{idx + 1}</p>
                  <p className="text-lg font-bold text-[#203c50]">{page.title}</p>
                </div>

                {/* Conversion Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {/* Conversions */}
                  <div className={`p-4 ${color.badge} rounded-lg`}>
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Conversões</p>
                    <p className={`text-3xl font-bold ${color.badgeText}`}>
                      {page.conversions}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">{percentage.toFixed(1)}% do total</p>
                  </div>

                  {/* Engagement Time */}
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Tempo Médio</p>
                    <p className="text-3xl font-bold text-blue-700">
                      {page.engagementTime}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">de engajamento</p>
                  </div>

                  {/* Total Events */}
                  <div className="p-4 bg-indigo-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Eventos</p>
                    <p className="text-3xl font-bold text-indigo-700">
                      {page.events}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">eventos totais</p>
                  </div>

                  {/* Conversion Event Type */}
                  <div className="p-4 bg-pink-100 rounded-lg">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Tipo</p>
                    <p className="text-sm font-bold text-pink-700 line-clamp-2">
                      {data.conversionEvent.name}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">evento</p>
                  </div>
                </div>

                {/* Strategic Observation */}
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex gap-3">
                    <TrendingUp className="w-5 h-5 text-[#ff6737] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#203c50] mb-1">Observação Estratégica</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {idx === 0 && "Página de diagnóstico com alto índice de conversão (50% do total). Conteúdo informativo que leva a ação direta. Reforçar links internos para páginas de serviço e expandir conteúdo similar."}
                        {idx === 1 && "Conteúdo comercial com intenção de preço gerou conversão. Página estratégica de fundo de funil. Otimizar CTR no Search Console e considerar anúncios pagos para amplificar."}
                        {idx === 2 && "Artigo educativo sobre segurança gerou conversão. Indica potencial de captura em conteúdos de risco e preocupação. Fortalecer linkagem interna para páginas de serviço relacionadas."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-premium text-center">
            <p className="text-sm text-gray-600 mb-2">Total de Páginas</p>
            <p className="text-4xl font-bold text-[#203c50]">
              {data.conversionPages?.length || 0}
            </p>
            <p className="text-xs text-gray-500 mt-2">que converteram</p>
          </div>

          <div className="card-premium text-center">
            <p className="text-sm text-gray-600 mb-2">Total de Conversões</p>
            <p className="text-4xl font-bold text-[#ff6737]">
              {data.conversions}
            </p>
            <p className="text-xs text-gray-500 mt-2">do período</p>
          </div>

          <div className="card-premium text-center">
            <p className="text-sm text-gray-600 mb-2">Tipo de Conversão</p>
            <p className="text-xl font-bold text-[#203c50] line-clamp-2">
              {data.conversionEvent.name}
            </p>
            <p className="text-xs text-gray-500 mt-2">evento principal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
