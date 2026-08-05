import { TrendingUp, MessageCircle, AlertTriangle } from 'lucide-react';
import { DashboardData } from '@/types/dashboard';

interface ConversionPagesSectionProps {
  data: DashboardData['ga4'];
}

export default function ConversionPagesSection({ data }: ConversionPagesSectionProps) {
  const eventBreakdown = [
    { name: 'WhatsApp Flutuante', count: 4, pct: 80 },
    { name: 'Botão WhatsApp GA4', count: 1, pct: 20 },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Eventos e Conversões</h2>
        <p className="text-gray-600 mb-6">
          Eventos principais registrados no período via <span className="font-semibold text-[#ff6737]">GA4</span>
        </p>

        {/* Main Conversion Event Summary */}
        <div className="card-premium bg-gradient-to-r from-[#fff5f0] to-white border-2 border-[#ff6737] mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total de Eventos Principais</p>
              <p className="text-5xl font-bold text-[#ff6737]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {data.conversions}
              </p>
              <p className="text-lg text-[#203c50] font-medium mt-3">
                WhatsApp (flutuante + botão)
              </p>
              <p className="text-sm text-green-600 font-semibold mt-1">+150% vs semana anterior (era 2)</p>
            </div>
            <div className="text-right">
              <MessageCircle className="w-16 h-16 text-[#ff6737] opacity-20 mb-4" />
              <p className="text-sm text-gray-600">Taxa por usuário</p>
              <p className="text-2xl font-bold text-[#ff6737]">6,8%</p>
              <p className="text-xs text-gray-500 mt-1">+3,8 pp vs anterior</p>
            </div>
          </div>
        </div>

        {/* Event Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {eventBreakdown.map((ev, idx) => {
            const colors = [
              { bg: 'from-green-50', border: 'border-green-200', badge: 'bg-green-100', badgeText: 'text-green-700' },
              { bg: 'from-blue-50', border: 'border-blue-200', badge: 'bg-blue-100', badgeText: 'text-blue-700' },
            ];
            const color = colors[idx] || colors[0];

            return (
              <div key={idx} className={`card-premium bg-gradient-to-r ${color.bg} to-white border-2 ${color.border}`}>
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Evento #{idx + 1}</p>
                  <p className="text-lg font-bold text-[#203c50]">{ev.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 ${color.badge} rounded-lg`}>
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Cliques</p>
                    <p className={`text-3xl font-bold ${color.badgeText}`}>{ev.count}</p>
                    <p className="text-xs text-gray-600 mt-2">{ev.pct}% do total</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Participação</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className="h-2 rounded-full bg-[#ff6737]"
                        style={{ width: `${ev.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{ev.pct}% dos eventos</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Alert */}
        <div className="card-premium bg-yellow-50 border border-yellow-300 mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-yellow-800 mb-1">Alerta de Qualidade</p>
              <p className="text-sm text-yellow-700 leading-relaxed">
                Os eventos representam cliques/interações rastreadas. Eles precisam ser cruzados com o comercial para identificar 
                quantos viraram conversa válida, orçamento, agendamento e serviço concluído.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="card-premium bg-blue-50 border border-blue-200">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">Recomendação de Mensuração</p>
              <p className="text-sm text-blue-700 leading-relaxed">
                Manter a separação de eventos por origem: WhatsApp flutuante, botão de WhatsApp no conteúdo, telefone clicável, 
                formulário, página de origem e lead comercial validado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
