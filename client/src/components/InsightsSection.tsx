// Estilo JD: insights curtos em cartões com gradientes discretos e destaque laranja #ff6737 para prioridades.
import { AlertCircle, Bot, Lightbulb, Phone, Search, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

interface Insight {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function InsightsSection() {
  const insights: Insight[] = [
    { icon: <TrendingUp className="h-6 w-6" />, title: 'Tráfego em Crescimento', description: 'O GA4 registrou 72 usuários ativos (+38,5%) e 82 visualizações (+46,4%). O site ampliou alcance e consumo de páginas no período.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Phone className="h-6 w-6" />, title: 'Interações de Contato', description: 'Foram registrados 4 eventos principais: dois cliques em telefone e dois em WhatsApp. É necessário cruzá-los com o comercial antes de classificar como leads.', color: 'from-white to-[#f7f9fa]' },
    { icon: <AlertCircle className="h-6 w-6" />, title: 'Página 404 Prioritária', description: '“Page not found - Desentupidora JD” foi a página mais visualizada, com 11 views. Identificar a origem e corrigir ou redirecionar a URL é prioridade.', color: 'from-red-50 to-white' },
    { icon: <Search className="h-6 w-6" />, title: 'Cliques Orgânicos em Alta', description: 'O Search Console apontou 35 cliques (+46%) com 7,07 mil impressões. O CTR de 0,5% ainda permite capturar mais demanda já existente.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Conteúdo como Ponte Comercial', description: 'Prumada, vaso sanitário e responsabilidade em imóvel alugado atraem buscas. Links internos e CTAs contextuais podem conectá-los a serviços em São Paulo.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Bot className="h-6 w-6" />, title: 'Visibilidade Inicial em IA', description: 'A marca aparece em 17% das respostas de IA avaliadas e 16,67% no ChatGPT, com sentimento neutro. Há espaço para consolidar autoridade local.', color: 'from-white to-[#f7f9fa]' },
  ];

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <h2 className="section-title">Insights Inteligentes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.title} className={`insight-card bg-gradient-to-br ${insight.color}`}>
              <div className="flex items-start gap-4"><div className="shrink-0 text-[#ff6737]">{insight.icon}</div><div className="flex-1"><h4 className="mb-2 font-semibold text-[#203c50]">{insight.title}</h4><p className="text-sm leading-relaxed text-gray-700">{insight.description}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
