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
              No período de <strong>22/07 a 28/07</strong>, a Desentupidora JD apresentou crescimento significativo em tráfego orgânico. 
              <strong>68 usuários ativos (+15,3%)</strong> e <strong>68 novos usuários (+17,2%)</strong> em comparação com a semana anterior. 
              Mais importante: <strong>81 visualizações (+24,6%)</strong>, indicando que mais pessoas não apenas entraram no site, mas também consumiram mais conteúdo. 
              O engajamento continuou forte: <strong>1 minuto e 38 segundos (+30,7%)</strong>, mostrando que os usuários permanecem ainda mais tempo no conteúdo. 
              A média de visualizações por usuário melhorou de 1,10 para 1,19 (+8,2%), sinalizando melhor navegação interna.
            </p>

            <p>
              No Google Search Console (janela 20-26/07), foram registrados <strong>45 cliques orgânicos (+15%)</strong> e <strong>7,22 mil impressões (+5%)</strong>, 
              consolidando a presença do site em buscas. A <strong>posição média permaneceu competitiva em 7,8</strong>, e o <strong>CTR subiu para 0,6%</strong>, 
              indicando que as otimizações de titles e meta descriptions começam a surtir efeito. Conteúdos em destaque: Soda Cáustica (5 cliques), Prumada (4 cliques), 
              Ralo Fazendo Barulho (4 cliques, novo em alta).
            </p>

            <p>
              As conversões desta semana vieram de duas páginas com potencial comercial: (1) <strong>Caça Vazamento em Osasco</strong> (1 conversão, 5s engajamento - intenção comercial), 
              (2) <strong>Vaso Entupido: Água Não Desce?</strong> (1 conversão, 3s engajamento - tema com intenção de serviço). Ambas apresentaram tempo de engajamento muito baixo, 
              sugerindo que foram cliques/interações registradas e não necessariamente leads confirmados. A taxa aproximada de eventos principais por usuário caiu de 3,4% para 2,9%, 
              mas a amostra ainda é pequena e requer acompanhamento contínuo.
            </p>

            <p>
              No Ubersuggest, as estimativas mensais permaneceram estáveis: <strong>257 visitas/mês e 154 palavras-chave</strong>. 
              Porém, houve avanços em autoridade: <strong>backlinks subiram para 17 (+18,2%)</strong>, <strong>Domain Authority subiu para 6 (+25%)</strong>. 
              O acesso está mais concentrado em São Paulo (13 usuários, +86% em relação à semana anterior), indicando que as estratégias de SEO local estão gerando resultados. 
              O tráfego permanece majoritariamente mobile (54,4%), exigindo prioridade em otimização de velocidade e experiência mobile.
            </p>

            <p>
              <strong>Alerta técnico crítico:</strong> A velocidade mobile está em 12,95 segundos, classificada como crítica e sendo o principal gargalo técnico. 
              O desktop está saudável em 2,15 segundos. Essa diferença pode prejudicar experiência, navegação e conversão em um site cujo tráfego é majoritariamente mobile. 
              Adicionalmente, o rastreador apontou sitemap ausente e uma URL 4XX que precisam ser validadas e corrigidas.
            </p>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-900">
                <strong>✅ Resumo Executivo:</strong> Crescimento forte em tráfego (+15,3% usuários, +24,6% views), engajamento continuado (+30,7%), 
                e cliques orgânicos em alta (+15%). As conversões permaneceram estáveis em 2 eventos. O próximo passo é transformar esse crescimento de tráfego em mais contatos qualificados, 
                otimizar velocidade mobile (crítica em 12,95s) e melhorar CTR com títulos e meta descriptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
