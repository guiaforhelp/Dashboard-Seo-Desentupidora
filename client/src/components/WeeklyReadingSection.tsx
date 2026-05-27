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
              Nesta semana (20/05 a 26/05), o site registrou <strong>62 usuários ativos</strong> e <strong>78 visualizações</strong>, 
              mantendo crescimento consistente. O destaque principal é o <strong>crescimento de 200% em conversões</strong> (de 1 para 3), 
              com a página <strong>"Caça Vazamento em São Bernardo do Campo"</strong> gerando 2 conversões e <strong>1min 54s de engajamento</strong>.
            </p>

            <p>
              O Search Console mostra <strong>43 cliques (+9%)</strong> e <strong>8,37 mil impressões (-2%)</strong>. Mesmo com leve queda nas impressões, 
              os cliques cresceram, indicando melhora na eficiência orgânica. O site gerou mais tráfego mesmo aparecendo um pouco menos. 
              A CTR segue em <strong>0,5%</strong>, mostrando que ainda existe grande oportunidade de melhorar titles, metas e chamadas dos conteúdos.
            </p>

            <p>
              Porém, há um ponto de atenção: o tempo médio de engajamento caiu de <strong>53s para 42s (-21%)</strong>. Isso indica que, apesar do crescimento 
              em volume e conversão, os usuários estão permanecendo menos tempo nas páginas. Isso pode significar que estão encontrando rapidamente o que 
              procuram (o que é bom para conversão), mas também pode indicar falta de retenção para exploração de outros conteúdos.
            </p>

            <p>
              No Ubersuggest, a posição média piorou de <strong>17,8 para 21,5</strong> (-3,7 posições), principalmente pela redução de palavras no Top 100 
              (de 5 para 2). Porém, o Search Console mostra crescimento real de cliques, o que indica que algumas consultas reais estão performando melhor 
              mesmo com os rankings monitorados apresentando oscilação. Isso sugere que o algoritmo pode estar priorizando conteúdos mais relevantes em consultas 
              específicas, mesmo que em posições diferentes.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>💡 Resumo:</strong> O tráfego orgânico cresceu em volume e conversão, mas a queda no tempo médio de engajamento indica necessidade 
                de melhorar retenção nos conteúdos mais acessados. Foco: otimizar CTR via titles/metas, fortalecer linkagem interna e criar conteúdos 
                que mantenham usuários explorando mais páginas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
