import { Lightbulb, TrendingUp, Users, Zap, AlertCircle, Target, Gauge } from 'lucide-react';

interface Insight {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function InsightsSection() {
  const insights: Insight[] = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conversão em Crescimento',
      description:
        'O site gerou 3 conversões no período, todas associadas ao evento Whatsapp Flutuante. Isso mostra que o orgânico já está gerando ações reais.',
      color: 'from-green-50 to-green-100',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Visibilidade no Google',
      description:
        'O Search Console registrou 7,05 mil impressões. O site está aparecendo no Google, mas o CTR de 0,4% mostra espaço para melhorar títulos e descrições.',
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'SEO Local Estratégico',
      description:
        'São Paulo foi a cidade com maior volume de usuários. Isso reforça a importância de continuar criando conteúdos e páginas locais para bairros e regiões estratégicas.',
      color: 'from-purple-50 to-purple-100',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Conteúdo Técnico em Alta',
      description:
        'Conteúdos como Fossa Rudimentar, Soda Cáustica no Vaso, Prumada e Tubulação de Ventilação estão ganhando tração.',
      color: 'from-yellow-50 to-yellow-100',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Conteúdos em Queda',
      description:
        'Soda Cáustica Derrete Cano, Ar no Encanamento e Diabo Verde vs Soda perderam desempenho e devem ser reotimizados.',
      color: 'from-red-50 to-red-100',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Página de Conversão Premium',
      description:
        'A página Limpa Fossa Ponta Grossa gerou 2 conversões e 12 eventos, indicando forte intenção comercial, mesmo com tempo médio curto.',
      color: 'from-orange-50 to-orange-100',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Alerta Técnico Mobile',
      description:
        'O maior alerta técnico está no mobile: carregamento e interatividade elevada. Validar esses dados no PageSpeed Insights antes de tomar decisão final.',
      color: 'from-pink-50 to-pink-100',
    },
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Insights Inteligentes</h2>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className={`insight-card bg-gradient-to-br ${insight.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-[#ff6737]">{insight.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#203c50] mb-2">{insight.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
