// Estilo JD: recomendações acionáveis em cartões claros, com destaque laranja #ff6737 para prioridades.
export default function RecommendationsSection() {
  const recommendations = [
    'Corrigir a origem da página “Page not found - Desentupidora JD” e criar redirecionamentos corretos.',
    'Revisar title, meta description, CTA e links internos da página principal de Desentupimento em São Paulo.',
    'Criar links internos dos artigos de fossa, prumada, caixa-d’água, soda e vaso para serviços da JD em São Paulo.',
    'Validar possível canibalização entre as URLs que disputam buscas sobre prumada.',
    'Revisar as 55 palavras rastreadas no Ubersuggest, priorizando termos locais, comerciais e coerentes com as páginas existentes.',
    'Padronizar a mensuração de conversões: clique em telefone, WhatsApp e e-mail, conversa iniciada, lead qualificado, orçamento, agendamento e serviço concluído.',
    'Manter e aprofundar os conteúdos que aparecem em IA generativa, conectando informação útil a CTAs locais e serviços reais.',
    'Não tratar impressões de IA generativa, visibilidade de marca em IA ou eventos de clique como vendas ou leads validados.',
  ];
  return <section className="border-b border-gray-200 py-12"><div className="container"><h2 className="section-title">Plano de Ação Prioritário</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2">{recommendations.map((recommendation, idx) => <div key={recommendation} className="card-premium flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-xs font-bold text-[#d95729]">{idx + 1}</span><p className="text-sm leading-relaxed text-gray-700">{recommendation}</p></div>)}</div><div className="mt-8 card-premium bg-gradient-to-r from-[#ff6737] to-[#ff8a5f] text-white"><p className="mb-2 text-lg font-semibold">Foco principal</p><p className="text-sm leading-relaxed">A semana trouxe menos usuários, mas mais engajados. O próximo ganho depende de corrigir a página 404, preservar a eficiência conquistada no Google e transformar os conteúdos de fossa, prumada e preço em caminhos claros para serviços em São Paulo. Os dados de IA devem orientar conteúdo e marca, sem serem somados ao tráfego orgânico tradicional.</p></div></div></section>;
}
