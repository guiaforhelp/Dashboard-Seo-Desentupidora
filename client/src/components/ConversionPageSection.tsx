import { TrendingUp, AlertCircle } from 'lucide-react';

export default function ConversionPageSection() {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Página que Gerou Conversão</h2>

        {/* Main Card */}
        <div className="card-premium bg-gradient-to-r from-green-50 to-white border border-green-200">
          <div className="space-y-6">
            {/* Page Title */}
            <div>
              <p className="text-sm text-gray-600 mb-2">PÁGINA RESPONSÁVEL PELA CONVERSÃO</p>
              <h3 className="text-2xl font-bold text-[#203c50]">Caça Vazamento em São Bernardo do Campo Serviço Ágil</h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-3 bg-green-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Conversões</p>
                <p className="text-2xl font-bold text-green-600">2</p>
              </div>
              <div className="text-center p-3 bg-blue-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Visualizações</p>
                <p className="text-2xl font-bold text-[#203c50]">3,00</p>
              </div>
              <div className="text-center p-3 bg-blue-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Tempo Médio</p>
                <p className="text-2xl font-bold text-[#203c50]">1min 54s</p>
              </div>
              <div className="text-center p-3 bg-blue-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Eventos</p>
                <p className="text-2xl font-bold text-[#203c50]">11</p>
              </div>
              <div className="text-center p-3 bg-orange-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">% Conversão</p>
                <p className="text-2xl font-bold text-orange-600">66,7%</p>
              </div>
            </div>

            {/* Insight Box */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold mb-1">💡 Insight Importante</p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Essa página é a maior geradora de conversão da semana com 2 conversões e 1min 54s de engajamento médio. Isso indica uma <strong>intenção direta do usuário</strong>, 
                  possivelmente com busca local ou necessidade imediata. O próximo passo é melhorar o CTA, introdução, links internos e elementos de confiança 
                  para aumentar ainda mais a taxa de contato.
                </p>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-900 font-semibold mb-1">✅ Recomendação</p>
                <p className="text-sm text-green-800 leading-relaxed">
                  Analise esta página com atenção. Ela é a maior conversora, o que mostra potencial. Considere replicar seus elementos de sucesso 
                  em outras páginas locais para Perdizes, Morumbi, Pirituba, Ipiranga e Osasco para aumentar conversões gerais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
