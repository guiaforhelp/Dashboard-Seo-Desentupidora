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
              No período de <strong>15/07 a 21/07</strong>, o volume de usuários ficou praticamente estável em relação à semana anterior, 
              com <strong>59 usuários ativos (+1,7%)</strong> e <strong>58 novos usuários (+1,8%)</strong>. Porém, houve redução em visualizações: 
              <strong>65 views (-11%)</strong> em comparação com 73 da semana anterior. O destaque positivo foi o engajamento: 
              <strong>1 minuto e 15 segundos (+44,2%)</strong>, indicando que os usuários permaneceram mais tempo no conteúdo. 
              As conversões caíram de 4 para 2 cliques no Whatsapp Flutuante (-50%).
            </p>

            <p>
              O usuário permaneceu mais tempo no conteúdo, mas navegou menos pelo site. A média de visualizações por usuário caiu de 1,26 para 1,10, 
              indicando uma oportunidade clara de reforçar links internos, sugestões de leitura e CTAs contextuais. 
              <strong>No Google Search Console, foram registrados 36 cliques e 6,85 mil impressões</strong>, com CTR mantido em 0,5% e posição média em 8,5. 
              O site continua ganhando presença em buscas informativas e práticas sobre soda cáustica, caixa de gordura e responsabilidade em imóvel alugado.
            </p>

            <p>
              As conversões desta semana vieram de duas páginas: (1) <strong>Desentupidora Guarapari</strong> (1 conversão, 0s engajamento - desalinhada), 
              (2) <strong>Quanto Custa Limpar Caixa D'Água</strong> (1 conversão, 1min 02s engajamento - consistente). 
              A página de Guarapari está fora da área principal de atendimento da JD e deve ser validada quanto à origem do tráfego e evento acionado. 
              O acesso está praticamente dividido entre celular (52,5%) e computador (47,5%), exigindo que CTAs, telefone clicável e formulários funcionem bem nos dois ambientes.
            </p>

            <p>
              No Ubersuggest, as estimativas mensais permaneceram estáveis: <strong>257 visitas/mês e 154 palavras-chave</strong>. 
              Porém, houve avanços em autoridade: <strong>backlinks subiram de 13 para 15 (+18,2%)</strong>, 
              <strong>Domain Authority subiu de 4 para 5</strong>, e o <strong>valor estimado do tráfego cresceu de US$ 75,16 para US$ 82,33</strong>. 
              O tráfego ainda está distribuído por várias cidades, com São Paulo (7 usuários) e Rio de Janeiro (6 usuários) em destaque, 
              indicando que o blog tem alcance nacional por temas informativos, mas as páginas locais e comerciais de São Paulo precisam receber mais força.
            </p>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-900">
                <strong>⚠️ Resumo Executivo:</strong> Volume de usuários estável (+1,7%), engajamento forte (+44,2%), 
                mas visualizações em queda (-11%) e conversões caíram pela metade (-50%). O foco agora é melhorar a navegação interna e conduzir 
                os acessos informativos para páginas comerciais de São Paulo. Validar conversão de Guarapari e fortalecer linkagem para serviços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
