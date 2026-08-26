// Estilo JD: recomendações acionáveis em cartões claros, com destaque laranja #ff6737 para prioridades.
import { CheckCircle2 } from 'lucide-react';

export default function RecommendationsSection() {
  const recommendations = [
    'Corrigir a origem da página “Page not found - Desentupidora JD” e implementar redirecionamento quando aplicável.',
    'Validar no comercial os quatro cliques de telefone e WhatsApp para separar interação registrada de lead real.',
    'Melhorar titles, meta descriptions e FAQs das páginas com CTR baixo ou queda de cliques.',
    'Criar links internos dos artigos de prumada, vaso, fossa e inquilino para serviços em São Paulo.',
    'Revisar a experiência de leitura e os CTAs das páginas de entrada, pois o tráfego cresceu enquanto o engajamento caiu.',
    'Manter mobile e desktop como prioridades equivalentes na experiência de navegação e contato.',
    'Criar conteúdos e menções estruturadas que reforcem marca, serviço e localização para evoluir a presença em respostas de IA.',
  ];

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <h2 className="section-title">Plano de Ação Prioritário</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {recommendations.map((recommendation, idx) => (
            <div key={recommendation} className="card-premium flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-xs font-bold text-[#d95729]">{idx + 1}</span>
              <p className="text-sm leading-relaxed text-gray-700">{recommendation}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 card-premium bg-gradient-to-r from-[#ff6737] to-[#ff8a5f] text-white">
          <p className="mb-2 text-lg font-semibold">Foco principal</p>
          <p className="text-sm leading-relaxed">A Desentupidora JD avançou em tráfego, visualizações, cliques orgânicos e interações de contato. O próximo ganho depende de corrigir a página 404, elevar o engajamento e transformar os artigos que atraem buscas em caminhos claros para serviços em São Paulo. A análise de IA passa a complementar o SEO tradicional, acompanhando como a marca começa a aparecer em respostas de inteligência artificial.</p>
        </div>
      </div>
    </section>
  );
}
