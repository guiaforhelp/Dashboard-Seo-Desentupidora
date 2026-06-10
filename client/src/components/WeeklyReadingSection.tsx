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
              No período de <strong>03/06 a 09/06</strong>, o tráfego orgânico apresentou recuperação significativa em relação à semana anterior, 
              subindo de <strong>44 para 53 usuários ativos (+20%)</strong> e de <strong>47 para 62 visualizações (+32%)</strong>. 
              O tempo médio de engajamento também melhorou expressivamente, saindo de <strong>41 segundos para 1 minuto e 03 segundos (+54%)</strong>, 
              indicando que os usuários estão passando mais tempo explorando o conteúdo.
            </p>

            <p>
              Apesar da melhora em tráfego e engajamento, os eventos principais no orgânico caíram de <strong>2 para 0</strong>, 
              representando uma queda crítica de 100%. Este é um ponto que requer investigação urgente: é necessário verificar se há problema 
              técnico na mensuração de conversões no GA4/GTM, se os CTAs das páginas não estão funcionando corretamente, ou se os usuários 
              simplesmente não estão convertendo apesar do maior engajamento. Recomenda-se testar botões de WhatsApp, telefone e formulários nas páginas do blog.
            </p>

            <p>
              No Google Search Console, os cliques ficaram praticamente estáveis, passando de <strong>36 para 35 (-3%)</strong>. 
              As impressões caíram de <strong>8,96 mil para 8,68 mil (-3%)</strong>, enquanto a posição média melhorou de <strong>8,6 para 8</strong>. 
              A CTR permaneceu em <strong>0,4%</strong>, mostrando que o principal gargalo continua sendo a taxa de clique nos resultados de busca. 
              Há grande oportunidade de melhorar titles e meta descriptions para aumentar CTR e converter mais impressões em cliques.
            </p>

            <p>
              No Ubersuggest, a pontuação SEO permaneceu em <strong>76</strong> com status positivo. Porém, os backlinks caíram de <strong>13 para 12 (-8%)</strong> 
              e as palavras-chave rastreadas em baixa subiram para <strong>3</strong>. O tráfego orgânico mensal estimado permaneceu em <strong>200</strong>, 
              e o número de palavras-chave orgânicas continuou em <strong>115</strong>. Palavras-chave em alta caíram de 4 para 0, indicando consolidação. 
              Foram identificados <strong>2 problemas técnicos de SEO</strong> e <strong>1 página quebrada</strong> retornando código 4XX.
            </p>

            <p>
              Os principais conteúdos em destaque seguem relacionados a problemas residenciais e intenção prática: 
              <strong>Fezes Grandes Entupindo o Vaso (7 views), Inquilino Reclama de Entupimento (7 views), Prumada (6 views), Ar no Encanamento, Soda Cáustica e Bueiros</strong>. 
              Estes temas continuam gerando tráfego consistente. No Search Console, os conteúdos com melhor performance foram: 
              <strong>Inquilino Reclama de Entupimento (5 cliques), Entupimento: Inquilino vs. Proprietário (4 cliques), Ar no Encanamento (3 cliques)</strong>.
            </p>

            <p>
              Oportunidades de SEO local identificadas: <strong>desentupidora em pinheiros (posição 13, volume 320), desentupidora em parelheiros (posição 24, volume 260), 
              encanador mooca (posição 26, volume 170)</strong>. Há também <strong>3 novas consultas em alta</strong> no Search Console: 
              <strong>diabo verde ou soda cáustica, o que é prumada na construção civil, soda caustica derrete plastico</strong>.
            </p>

            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-900">
                <strong>⚠️ Alerta Crítico:</strong> Conversões zeradas apesar de tráfego e engajamento em alta. Ação imediata necessária: 
                (1) Verificar se eventos GA4 estão disparando, (2) Testar CTAs e formulários, (3) Corrigir página 4XX e alerta de sitemap.xml.
              </p>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-900">
                <strong>✅ Resumo Executivo:</strong> O tráfego orgânico recuperou-se bem (+20% usuários, +32% views, +54% engajamento), 
                mas a queda a zero em conversões requer investigação urgente. Foco: (1) Revisar mensuração de conversões, (2) Otimizar CTR via titles/metas, 
                (3) Fortalecer interlinkagem para páginas comerciais, (4) Criar conteúdos locais para bairros estratégicos, (5) Corrigir problemas técnicos identificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
