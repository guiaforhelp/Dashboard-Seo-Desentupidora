// Estilo JD: análise executiva objetiva em cartões claros, preservando o azul #203c50 e destaques em laranja #ff6737.
export default function WeeklyReadingSection() {
  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <h2 className="section-title">Leitura da Semana</h2>

        <div className="mb-6 rounded-lg border border-gray-300 bg-gray-100 p-3">
          <p className="text-xs text-gray-600"><strong>Nota de fontes:</strong> GA4 considera 19 a 25/08/2026; o Search Console considera 18 a 24/08/2026; e o Ubersuggest apresenta estimativas atuais. As ferramentas não devem ser comparadas como dados diários de uma mesma fonte.</p>
        </div>

        <div className="card-premium">
          <div className="space-y-4 leading-relaxed text-gray-700">
            <p>
              No período de <strong>19 a 25/08</strong>, a Desentupidora JD ganhou escala em tráfego e interações: <strong>72 usuários ativos (+38,5%)</strong>, <strong>70 novos usuários (+34,6%)</strong> e <strong>82 visualizações (+46,4%)</strong> frente ao comparativo do GA4. Os <strong>eventos principais dobraram de 2 para 4 (+100%)</strong>, com taxa de eventos por usuário de <strong>5,6%</strong>. Em contrapartida, o tempo médio de engajamento recuou de <strong>1min15s para 46s (-38,7%)</strong>, sugerindo que parte do tráfego novo está saindo mais rápido ou consumindo menos conteúdo antes de interagir.
            </p>

            <p>
              Os quatro eventos principais correspondem a <strong>2 cliques no botão de telefone</strong>, <strong>1 clique no WhatsApp flutuante</strong> e <strong>1 clique no botão WhatsApp GA4</strong>. Essas interações devem ser cruzadas com o atendimento comercial para identificar conversas válidas, orçamentos, agendamentos e serviços concluídos; elas não equivalem, por si só, a leads validados.
            </p>

            <p>
              No Search Console, a janela de 18 a 24/08 registrou <strong>35 cliques orgânicos (+46%)</strong> e <strong>7,07 mil impressões (-3%)</strong>. O CTR médio subiu de <strong>0,3% para 0,5% (+0,2)</strong> e a posição média melhorou de <strong>9,9 para 8,8 (+1,1 posição)</strong>. O ganho em cliques, mesmo com leve redução nas impressões, aponta boa capacidade de captura; ainda assim, há espaço para títulos, meta descriptions e FAQs mais aderentes à intenção de busca.
            </p>

            <p>
              A principal atenção vem da página <strong>“Page not found - Desentupidora JD”</strong>, que liderou as visualizações com 11 acessos. Identificar a URL de origem, aplicar redirecionamento quando necessário e melhorar a navegação evita desperdício de tráfego orgânico. Entre os conteúdos de tração, destacam-se prumada, vaso sanitário e responsabilidade em imóvel alugado, que podem conduzir o leitor para serviços relacionados em São Paulo por meio de links internos e CTAs contextuais.
            </p>

            <p>
              No Ubersuggest, as estimativas indicam <strong>168 palavras-chave orgânicas (+9,1%)</strong>, <strong>246 visitas orgânicas estimadas por mês (-4,3%)</strong> e <strong>53 backlinks (+55,9%)</strong>. O novo módulo de IA aponta <strong>17% de visibilidade da marca</strong>, <strong>16,67% no ChatGPT</strong> e sentimento <strong>neutro</strong>. Isso indica presença inicial sem sinal negativo, com oportunidade de reforçar a associação entre marca, serviços e São Paulo.
            </p>

            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm text-blue-900"><strong>Resumo executivo:</strong> o site avançou em usuários, visualizações, cliques orgânicos e interações de contato. O próximo ganho depende de corrigir a página 404, elevar o engajamento das páginas de entrada e transformar artigos informativos em caminhos claros para serviços em São Paulo, enquanto a nova leitura de IA passa a complementar o SEO tradicional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
