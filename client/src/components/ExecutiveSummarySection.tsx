export default function ExecutiveSummarySection() {
  return (
    <section className="py-12">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Resumo Executivo Final</h2>

        {/* Summary Card */}
        <div className="card-premium-lg bg-gradient-to-br from-[#fff5f0] to-white border-2 border-[#ff6737]">
          <p className="text-lg leading-relaxed text-gray-800">
            O período mostra que o SEO da <span className="font-bold text-[#203c50]">Desentupidora JD</span> já gera{' '}
            <span className="font-bold text-[#ff6737]">visibilidade e conversões orgânicas</span>. Mesmo com volume
            moderado de usuários, houve <span className="font-bold text-[#ff6737]">3 conversões via Whatsapp Flutuante</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            O principal desafio está em{' '}
            <span className="font-bold text-[#203c50]">
              transformar mais impressões em cliques, melhorar a performance mobile
            </span>{' '}
            e <span className="font-bold text-[#203c50]">fortalecer conteúdos locais</span> com maior intenção de
            contratação.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Status Geral</p>
              <p className="text-3xl font-bold text-[#ff6737]">✓ Positivo</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Prioridade</p>
              <p className="text-3xl font-bold text-[#203c50]">Alta</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Próximo Período</p>
              <p className="text-3xl font-bold text-[#10b981]">Monitorar</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Relatório gerado automaticamente • Dashboard SEO Premium</p>
          <p className="mt-2">Desentupidora JD © 2026</p>
        </div>
      </div>
    </section>
  );
}
