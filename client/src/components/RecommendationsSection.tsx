import { CheckCircle2 } from 'lucide-react';

export default function RecommendationsSection() {
  const recommendations = [
    'Reotimizar os títulos e meta descriptions dos conteúdos com impressões e CTR baixa.',
    'Inserir links internos dos artigos fortes para artigos novos de março, abril e maio.',
    'Melhorar introduções dos artigos com queda de engajamento.',
    'Adicionar CTAs contextuais nos artigos mais acessados.',
    'Revisar o artigo "Ralo Fazendo Barulho", pois teve queda de cliques.',
    'Revisar o artigo "Desentupimento em São Paulo", pois também apresentou queda.',
    'Fortalecer conteúdos em alta, como Fossa Negra, Prumada, Soda Cáustica e Plástico e Inquilino Reclama de Entupimento.',
    'Criar ou reotimizar conteúdos locais para Perdizes, Morumbi, Pirituba, Ipiranga e Osasco.',
    'Monitorar se os artigos novos começam a aparecer no Search Console nas próximas semanas.',
    'Revisar a página "Desentupidora Blumenau Serviços para Santa Catarina", pois ela gerou conversão.',
    'Melhorar CTA, bloco de confiança, telefone/WhatsApp e links internos da página de Blumenau.',
    'Continuar o plano do 2º trimestre com foco em linkagem interna, otimização de conteúdo antigo e fortalecimento dos conteúdos novos.',
  ];

  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Próximos Passos Recomendados</h2>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((recommendation, idx) => (
            <div key={idx} className="card-premium flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#ff6737] flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-sm">{recommendation}</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 card-premium bg-gradient-to-r from-[#ff6737] to-[#ff8a5f] text-white">
          <p className="text-lg font-semibold mb-2">🎯 Foco Principal</p>
          <p className="text-sm leading-relaxed">
            A estratégia agora deve focar em fortalecer os artigos novos com linkagem interna vinda dos artigos antigos mais fortes. 
            Isso criará um efeito de autoridade que ajudará os conteúdos novos a ranquearem mais rapidamente no Google. Além disso, 
            as páginas locais como Blumenau mostram potencial de conversão rápida e devem ser replicadas para outras cidades.
          </p>
        </div>
      </div>
    </section>
  );
}
