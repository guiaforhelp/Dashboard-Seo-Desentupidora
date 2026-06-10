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
              No período de <strong>03/06 a 09/06</strong>, o tráfego orgânico apresentou recuperação em relação à semana anterior, 
              subindo de <strong>44 para 53 usuários ativos (+20%)</strong> e de <strong>47 para 62 visualizações (+32%)</strong>. 
              O tempo médio de engajamento também melhorou significativamente, saindo de <strong>41 segundos para 1 minuto e 03 segundos (+54%)</strong>.
            </p>

            <p>
              Apesar da melhora em tráfego e engajamento, os eventos principais no orgânico caíram de <strong>2 para 0</strong>, 
              indicando necessidade de revisar a mensuração de conversões no GA4/GTM e também melhorar os CTAs das páginas com maior tráfego. 
              Este é um ponto crítico que requer atenção imediata para entender se há problema técnico ou se os usuários não estão convertendo.
            </p>

            <p>
              No Google Search Console, os cliques ficaram praticamente estáveis, passando de <strong>36 para 35 (-3%)</strong>. 
              As impressões caíram de <strong>8,96 mil para 8,68 mil (-3%)</strong>, enquanto a posição média melhorou de <strong>8,6 para 8 (+0,6)</strong>. 
              A CTR permaneceu em <strong>0,4%</strong>, mostrando que o principal gargalo continua sendo a taxa de clique nos resultados de busca. 
              Há grande oportunidade de melhorar titles e meta descriptions para aumentar CTR.
            </p>

            <p>
              No Ubersuggest, a pontuação SEO permaneceu em <strong>76</strong> com status positivo, porém os backlinks caíram de <strong>13 para 12 (-1)</strong> 
              e as palavras-chave rastreadas em baixa subiram para <strong>3</strong>. O tráfego orgânico mensal estimado permaneceu em <strong>200</strong>, 
              e o número de palavras-chave orgânicas continuou em <strong>115</strong>. Palavras-chave em alta caíram de 4 para 0, indicando consolidação.
            </p>

            <p>
              Os principais conteúdos em destaque seguem relacionados a problemas residenciais e intenção prática: 
              <strong>Fezes Grandes Entupindo o Vaso, Inquilino Reclama de Entupimento, Prumada, Ar no Encanamento, Soda Cáustica e Bueiros</strong>. 
              Estes temas continuam gerando tráfego consistente e devem ser priorizados em futuras otimizações.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>💡 Resumo:</strong> O tráfego orgânico recuperou-se bem com crescimento de 20% em usuários e 32% em visualizações, 
                mas a queda a zero em eventos principais requer investigação urgente. Foco: verificar eventos GA4/GTM, otimizar CTR via titles/metas, 
                fortalecer linkagem interna para páginas comerciais e criar conteúdos locais para bairros estratégicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
