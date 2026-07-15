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
              No período de <strong>08/07 a 14/07</strong>, o tráfego orgânico apresentou redução moderada em relação à semana anterior, 
              passando de <strong>72 para 58 usuários ativos (-19%)</strong> e de <strong>100 para 73 visualizações (-27%)</strong>. 
              Porém, as <strong>conversões se mantiveram positivas com 4 cliques no Whatsapp Flutuante</strong> (em comparação com 3 na semana anterior). 
              O tempo médio de engajamento caiu de 58s para 52s, sugerindo necessidade de análise por página e origem antes de qualquer conclusão definitiva.
            </p>

            <p>
              No Google Search Console, houve redução em cliques: <strong>de 53 para 39 cliques (-26%)</strong>, enquanto as impressões caíram de 
              <strong>8,63 mil para 7,12 mil (-18%)</strong>. A <strong>CTR manteve-se em 0,5%</strong>, permanecendo como principal oportunidade de melhoria. 
              A <strong>posição média subiu levemente para 8,3</strong>, mantendo a tendência de consolidação em ranking. 
              Conteúdos com forte performance: <strong>Fezes Grandes Entupindo o Vaso (+12 cliques), Vaso Borbulhando (+7 cliques)</strong>.
            </p>

            <p>
              O tráfego observado ainda não está concentrado em São Paulo (7 usuários de 58), indicando alcance informativo nacional com oportunidade 
              para reforçar páginas locais e comerciais. A maioria do acesso acontece pelo celular (63,8%), confirmando que a experiência mobile deve ser prioridade. 
              <strong>57 de 58 usuários eram novos</strong>, mostrando alta taxa de aquisição mas também sugerindo necessidade de trabalhar retenção.
            </p>

            <p>
              No Ubersuggest, o tráfego orgânico estimado cresceu para <strong>257 visitas mensais (+28,5%)</strong>, e as palavras-chave orgânicas subiram para 
              <strong>154 (+33,9%)</strong>. Os backlinks aumentaram para <strong>13 (+18,2%)</strong>. Porém, a pontuação on-page permanece em 61 (média), 
              e o painel ainda está coletando dados de rankings. Não usar posições individuais desta fonte como dado definitivo neste momento.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>📊 Resumo Executivo:</strong> Semana de consolidação com redução moderada em tráfego (-19% usuários, -27% views), 
                mas conversões mantidas em 4 cliques Whatsapp. CTR de 0,5% permanece como oportunidade. Tráfego nacional em crescimento (257 visitas/mês estimadas), 
                mas ainda com potencial em São Paulo. Conteúdos sobre riscos práticos (soda cáustica, vaso entupido) continuam atraindo atenção e devem fortalecer linkagem interna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
