export default function WeeklyReadingSection() {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Leitura da Semana</h2>

        {/* Main Content */}
        <div className="card-premium">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              No período de <strong>10/06 a 16/06</strong>, o tráfego orgânico apresentou crescimento expressivo em relação à semana anterior, 
              subindo de <strong>53 para 72 usuários ativos (+36%)</strong> e de <strong>62 para 100 visualizações (+61%)</strong>. 
              Mais importante ainda: as <strong>conversões retornaram com força, passando de 0 para 3 conversões</strong>, todas geradas pelo 
              evento <strong>Whatsapp Flutuante</strong>. Este é um resultado extremamente positivo que indica a recuperação da mensuração de conversões.
            </p>

            <p>
              As <strong>3 páginas que converteram</strong> foram: (1) <strong>Limpa Fossa São Luís Atendimento no Maranhão com Soluções</strong> (1 conversão, 21s engajamento), 
              (2) <strong>Quanto Custa Limpa Fossa? Preços e Serviço Profissional</strong> (1 conversão, 48s engajamento), 
              (3) <strong>Soda Cáustica vs Diabo Verde: Desentupir com Segurança?</strong> (1 conversão, 1min 29s engajamento). 
              Cada página representou <strong>33,33% das conversões totais</strong>, indicando distribuição equilibrada entre conteúdos locais, comerciais e informativos.
            </p>

            <p>
              No Google Search Console, o crescimento foi ainda mais impressionante: <strong>cliques subiram de 35 para 53 (+51%)</strong>, 
              enquanto as impressões ficaram praticamente estáveis em 8,63 mil (-0,8%). A <strong>CTR melhorou de 0,4% para 0,6%</strong>, 
              mostrando que as otimizações de titles e meta descriptions estão surtindo efeito. A <strong>posição média melhorou de 8 para 7,7</strong>, 
              consolidando ganhos em ranking.
            </p>

            <p>
              Os conteúdos com melhor performance no Search Console foram: <strong>Inquilino Reclama de Entupimento (5 cliques), 
              Soda Cáustica e Plástico (5 cliques), Entupimento: Inquilino vs. Proprietário (4 cliques)</strong>. 
              Houve queda em alguns conteúdos como <strong>Ar no Encanamento (-3 cliques)</strong>, sugerindo necessidade de revisar e atualizar esses artigos.
            </p>

            <p>
              No Ubersuggest, a pontuação on-page caiu de <strong>76 para 61</strong>, classificada como média. Porém, a posição média melhorou de 
              <strong>21,5 para 20,67</strong>, e a palavra-chave <strong>desentupidora em pinheiros</strong> permanece em destaque na posição 13 
              com volume de 320 buscas mensais. Foram identificados <strong>2 problemas técnicos</strong> que continuam requerendo atenção.
            </p>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-900">
                <strong>✅ Resumo Executivo:</strong> Semana de recuperação forte: +36% em usuários, +61% em visualizações, 
                <strong>+3 conversões</strong> (Whatsapp Flutuante), +51% em cliques GSC, CTR de 0,6%. 
                As conversões distribuídas entre conteúdos locais, comerciais e informativos indicam estratégia de fundo de funil funcionando. 
                Próxima ação: manter momentum, atualizar conteúdos em queda e corrigir problemas técnicos no Ubersuggest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
