export default function WeeklyReadingSection() {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Leitura da Semana</h2>

        {/* Nota sobre janelas de datas */}
        <div className="mb-6 p-3 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-xs text-gray-600">
            <strong>Nota:</strong> As ferramentas possuem janelas de datas diferentes. GA4, Search Console e Ubersuggest não devem ser comparados como se fossem dados diários da mesma fonte.
          </p>
        </div>

        {/* Main Content */}
        <div className="card-premium">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              No período de <strong>29/07 a 04/08</strong>, a Desentupidora JD registrou crescimento em usuários e aumento expressivo em eventos de conversão. 
              <strong>74 usuários ativos (+8,8%)</strong> e <strong>73 novos usuários (+7,4%)</strong> em comparação com a semana anterior. 
              As visualizações permaneceram estáveis em <strong>81 views</strong>, enquanto os <strong>eventos principais saltaram de 2 para 5 (+150%)</strong>, 
              com taxa de 6,8% por usuário (+3,8 pontos percentuais). Por outro lado, o <strong>tempo médio de engajamento caiu de 1min 38s para 1min 01s (-37,8%)</strong>, 
              indicando que parte do novo tráfego está consumindo menos conteúdo antes de sair ou entrar em contato.
            </p>

            <p>
              Os <strong>5 eventos de WhatsApp</strong> foram distribuídos entre: 4 cliques no WhatsApp Flutuante e 1 clique no Botão WhatsApp GA4. 
              Esses eventos representam cliques/interações rastreadas e precisam ser cruzados com o comercial para identificar quantos viraram conversa válida, 
              orçamento, agendamento ou serviço concluído. É importante manter a separação de eventos por origem para análise precisa de funil.
            </p>

            <p>
              No Google Search Console (janela 28/07-03/08), foram registrados <strong>40 cliques orgânicos (-11,1%)</strong> e <strong>7,3 mil impressões (+1,1%)</strong>. 
              O <strong>CTR caiu para 0,5% (-0,1 ponto percentual)</strong> e a <strong>posição média piorou para 8,8 (-1 posição)</strong>. 
              O site manteve a visibilidade nas buscas, mas recebeu menos cliques. Essa combinação indica oportunidade de revisar títulos, meta descriptions, FAQs 
              e intenção de busca das páginas que aparecem entre as posições 5 e 12.
            </p>

            <p>
              No Ubersuggest, as estimativas mensais mostraram variação: <strong>tráfego orgânico estimado caiu de 257 para 246 (-4,3%)</strong>, 
              mas <strong>palavras-chave orgânicas cresceram de 154 para 168 (+9,1%)</strong>. Backlinks (17), domínios de referência (15), 
              Domain Authority (6) e pontuação on-page (61/100) permaneceram estáveis. A cobertura de palavras-chave aumentou, 
              mas essa expansão ainda não se refletiu em maior tráfego estimado. A prioridade é fortalecer posições e CTR dos conteúdos que já possuem visibilidade.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>📊 Resumo Executivo:</strong> A Desentupidora JD ganhou usuários (+8,8%) e aumentou as interações de WhatsApp (+150%, de 2 para 5 eventos). 
                O próximo avanço depende de melhorar o engajamento das páginas de entrada, elevar o CTR orgânico e distinguir cliques registrados de leads comerciais realmente qualificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
