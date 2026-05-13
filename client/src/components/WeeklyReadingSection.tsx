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
              Nesta semana, o site manteve <strong>45 usuários ativos</strong> vindos do orgânico e registrou <strong>53 visualizações</strong>. 
              O destaque positivo foi o crescimento no Search Console, com <strong>39 cliques</strong>, <strong>7,05 mil impressões</strong> e 
              <strong>CTR média de 0,6%</strong>. Isso mostra que o site continua aparecendo no Google e começou a melhorar sua taxa de clique.
            </p>

            <p>
              Por outro lado, o tempo médio de engajamento caiu para <strong>28 segundos</strong>, indicando que parte dos usuários entra nas páginas, 
              mas não permanece por muito tempo. Esse ponto precisa ser acompanhado, principalmente nos conteúdos que recebem tráfego, mas ainda não 
              conduzem bem para conversão.
            </p>

            <p>
              A página <strong>"Desentupidora Blumenau Serviços para Santa Catarina"</strong> merece destaque porque foi responsável pela conversão registrada no período. 
              Mesmo com apenas <strong>17 segundos de engajamento médio</strong>, ela gerou <strong>1 evento principal</strong>. Isso mostra que algumas páginas locais 
              podem converter rápido quando o usuário já chega com intenção direta.
            </p>

            <p>
              Os conteúdos antigos continuam sendo os mais fortes, como <strong>Prumada</strong>, <strong>Soda Cáustica</strong>, <strong>Fossa Negra</strong> 
              e temas jurídicos sobre inquilino e proprietário. Isso reforça a necessidade de usar esses artigos como motores de autoridade para fortalecer 
              os conteúdos novos publicados entre março, abril e maio.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>💡 Resumo:</strong> O site segue recebendo tráfego consistente. O Search Console mostra melhora em cliques e CTR, mas o engajamento 
                caiu e precisa de atenção. Os artigos antigos continuam puxando tráfego e devem servir como base para fortalecer os novos conteúdos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
