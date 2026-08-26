// Estilo JD: fechamento executivo com cartão premium claro, azul #203c50 e laranja #ff6737.
export default function ExecutiveSummarySection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-title">Resumo Executivo Final</h2>

        <div className="card-premium-lg border-2 border-[#ff6737] bg-gradient-to-br from-[#fff5f0] to-white">
          <p className="text-lg leading-relaxed text-gray-800">
            A <span className="font-bold text-[#203c50]">Desentupidora JD</span> avançou em <span className="font-bold text-[#ff6737]">usuários, visualizações, cliques orgânicos e interações de contato</span>. Foram registrados <span className="font-bold text-[#ff6737]">4 eventos principais</span> de telefone e WhatsApp, que precisam ser cruzados com o atendimento comercial antes de serem considerados leads reais.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-800">
            O próximo ganho depende de <span className="font-bold text-[#203c50]">corrigir a página 404 mais acessada, elevar o engajamento das páginas de entrada</span> e <span className="font-bold text-[#203c50]">conduzir artigos informativos para serviços em São Paulo</span>. A visibilidade inicial em IA complementa o SEO tradicional e reforça a importância de consolidar marca, serviço e localização em conteúdos estruturados.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 md:grid-cols-3">
            <div className="text-center"><p className="mb-2 text-sm text-gray-600">Status Geral</p><p className="text-3xl font-bold text-[#ff6737]">Em evolução</p></div>
            <div className="text-center"><p className="mb-2 text-sm text-gray-600">Prioridade</p><p className="text-3xl font-bold text-[#203c50]">Alta</p></div>
            <div className="text-center"><p className="mb-2 text-sm text-gray-600">Próximo Período</p><p className="text-3xl font-bold text-[#10b981]">Validar</p></div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-600"><p>Relatório gerado automaticamente • Dashboard SEO Premium</p><p className="mt-2">Desentupidora JD © 2026</p></div>
      </div>
    </section>
  );
}
