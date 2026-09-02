// Estilo JD: insights curtos em cartões neutros, com destaques semânticos e acento laranja #ff6737.
import { AlertCircle, Bot, Lightbulb, Mail, Search, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

interface Insight { icon: ReactNode; title: string; description: string; color: string; }

export default function InsightsSection() {
  const insights: Insight[] = [
    { icon: <TrendingUp className="h-6 w-6" />, title: 'Menos Tráfego, Mais Engajamento', description: 'O GA4 registrou 55 usuários ativos e 74 visualizações, mas o tempo médio dobrou para 1min32s. O novo desafio é manter essa qualidade enquanto se recupera alcance.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Mail className="h-6 w-6" />, title: 'Evento de E-mail', description: 'Foi registrado um clique em link de e-mail. A interação deve ser validada pelo atendimento antes de ser tratada como contato efetivo ou lead.', color: 'from-white to-[#f7f9fa]' },
    { icon: <AlertCircle className="h-6 w-6" />, title: 'Página 404 Prioritária', description: '“Page not found - Desentupidora JD” ainda liderou as visualizações, com 8 acessos. Identificar a origem e redirecionar corretamente permanece prioritário.', color: 'from-red-50 to-white' },
    { icon: <Search className="h-6 w-6" />, title: 'Eficiência no Google', description: 'O Search Console apontou 42 cliques (+20%) com 6,72 mil impressões. CTR em 0,6% e posição média 8,6 mostram ganho de eficiência.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Lightbulb className="h-6 w-6" />, title: 'Conteúdos para Conectar', description: 'Fossa, prumada, preço e riscos de produtos químicos atraem buscas. Links internos e CTAs podem direcionar esse público para serviços em São Paulo.', color: 'from-white to-[#f7f9fa]' },
    { icon: <Bot className="h-6 w-6" />, title: 'IA Generativa em Alta', description: 'A exportação registrou 1.074 impressões em IA generativa, majoritariamente no Brasil e em celular. Este recorte não deve ser somado ao SEO tradicional.', color: 'from-white to-[#f7f9fa]' },
  ];
  return <section className="border-b border-gray-200 py-12"><div className="container"><h2 className="section-title">Insights Inteligentes</h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{insights.map((insight) => <div key={insight.title} className={`insight-card bg-gradient-to-br ${insight.color}`}><div className="flex items-start gap-4"><div className="shrink-0 text-[#ff6737]">{insight.icon}</div><div className="flex-1"><h4 className="mb-2 font-semibold text-[#203c50]">{insight.title}</h4><p className="text-sm leading-relaxed text-gray-700">{insight.description}</p></div></div></div>)}</div></div></section>;
}
