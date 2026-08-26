import { DashboardData } from '@/types/dashboard';

export function generateHTMLContent(data: DashboardData): string {
  const formatDate = (date: string) => date;
  const formatNumber = (num: number) => num.toLocaleString('pt-BR');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard SEO - ${data.company}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background-color: #f2f2f7;
            color: #1a1a1a;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        header {
            background: white;
            border-bottom: 1px solid #e0e0e0;
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 12px;
        }
        
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #203c50;
            margin-bottom: 0.5rem;
        }
        
        .period {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 1rem;
        }
        
        .summary {
            background: linear-gradient(to right, #f2f2f7, white);
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
            color: #333;
            line-height: 1.8;
        }
        
        section {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            border: 1px solid #e0e0e0;
        }
        
        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #203c50;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #ff6737;
        }
        
        h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.3rem;
            font-weight: 600;
            color: #203c50;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .kpi-card {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .kpi-label {
            font-size: 0.875rem;
            color: #666;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .kpi-value {
            font-family: 'Poppins', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #ff6737;
        }
        
        .data-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #f0f0f0;
            background: #fafafa;
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }
        
        .data-row:last-child {
            border-bottom: none;
        }
        
        .data-label {
            font-weight: 500;
            color: #333;
        }
        
        .data-value {
            font-weight: 700;
            color: #ff6737;
            font-size: 1.2rem;
        }
        
        .badge {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .badge-success {
            background: #d1fae5;
            color: #065f46;
        }
        
        .badge-danger {
            background: #fee2e2;
            color: #991b1b;
        }
        
        .badge-warning {
            background: #fef3c7;
            color: #92400e;
        }
        
        .insight-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .insight-card {
            background: linear-gradient(135deg, #fff5f0 0%, white 100%);
            border: 1px solid #ffe0d0;
            border-radius: 12px;
            padding: 1.5rem;
        }
        
        .insight-title {
            font-weight: 700;
            color: #203c50;
            margin-bottom: 0.5rem;
        }
        
        .insight-text {
            font-size: 0.95rem;
            color: #555;
            line-height: 1.6;
        }
        
        .action-list {
            list-style: none;
            margin-top: 1rem;
        }
        
        .action-list li {
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            background: #f9f9f9;
            border-left: 4px solid #ff6737;
            border-radius: 4px;
        }
        
        .summary-box {
            background: linear-gradient(135deg, #fff5f0 0%, white 100%);
            border: 2px solid #ff6737;
            border-radius: 12px;
            padding: 2rem;
            margin-top: 2rem;
        }
        
        .summary-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #333;
        }
        
        .summary-text strong {
            color: #203c50;
        }
        
        .summary-text .highlight {
            color: #ff6737;
            font-weight: 700;
        }
        
        .footer {
            text-align: center;
            color: #999;
            font-size: 0.9rem;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e0e0e0;
        }
        
        .status-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .status-item {
            text-align: center;
            padding: 1.5rem;
            background: #f9f9f9;
            border-radius: 8px;
        }
        
        .status-label {
            font-size: 0.875rem;
            color: #666;
            margin-bottom: 0.5rem;
        }
        
        .status-value {
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #ff6737;
        }
        
        @media print {
            body {
                background: white;
            }
            section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header>
            <h1>Dashboard SEO Semanal — ${data.company}</h1>
            <div class="period">Período analisado: ${formatDate(data.period.startDate)} a ${formatDate(data.period.endDate)}</div>
            <div class="summary">
                <p>No período analisado, o site registrou ${data.ga4.activeUsers} usuários ativos, ${data.ga4.pageViews} visualizações e ${data.ga4.conversions} conversões via Whatsapp Flutuante. O Google Search Console registrou ${data.gsc.clicks} cliques e ${formatNumber(data.gsc.impressions)} impressões, com CTR média de ${data.gsc.ctr}% e posição média de ${data.gsc.avgPosition.toFixed(1)}. A auditoria técnica aponta atenção para performance mobile, sitemap.xml e uma página 4XX.</p>
            </div>
        </header>

        <!-- GA4 Section -->
        <section>
            <h2>Desempenho do Site — Google Analytics</h2>
            
            <div class="kpi-grid">
                <div class="kpi-card">
                    <div class="kpi-label">Usuários Ativos</div>
                    <div class="kpi-value">${data.ga4.activeUsers}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Novos Usuários</div>
                    <div class="kpi-value">${data.ga4.newUsers}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Tempo Médio</div>
                    <div class="kpi-value">${data.ga4.engagementTime}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Visualizações</div>
                    <div class="kpi-value">${data.ga4.pageViews}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Conversões</div>
                    <div class="kpi-value">${data.ga4.conversions}</div>
                </div>
            </div>

            <h3>Páginas Mais Acessadas</h3>
            ${data.ga4.topPages.map((page) => `
                <div class="data-row">
                    <div class="data-label">${page.title}</div>
                    <div class="data-value">${page.views} visualizações</div>
                </div>
            `).join('')}

            <h3>Dispositivos</h3>
            ${data.ga4.devices.map((device) => `
                <div class="data-row">
                    <div class="data-label">${device.name}</div>
                    <div class="data-value">${device.percentage.toFixed(1)}%</div>
                </div>
            `).join('')}

            <h3>Localização dos Usuários</h3>
            ${data.ga4.locations.map((loc) => `
                <div class="data-row">
                    <div class="data-label">${loc.city}</div>
                    <div class="data-value">${loc.count} usuários</div>
                </div>
            `).join('')}
        </section>

        <!-- GSC Section -->
        <section>
            <h2>Visibilidade no Google — Search Console</h2>
            
            <div class="kpi-grid">
                <div class="kpi-card">
                    <div class="kpi-label">Total de Cliques</div>
                    <div class="kpi-value">${data.gsc.clicks}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Total de Impressões</div>
                    <div class="kpi-value">${formatNumber(data.gsc.impressions)}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">CTR Média</div>
                    <div class="kpi-value">${data.gsc.ctr}%</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Posição Média</div>
                    <div class="kpi-value">${data.gsc.avgPosition.toFixed(1)}</div>
                </div>
            </div>

            <h3>Consultas em Alta</h3>
            ${data.gsc.queriesUp.map((query) => `
                <div class="data-row">
                    <div class="data-label">${query.query}</div>
                    <span class="badge badge-success">+${query.change}</span>
                </div>
            `).join('')}

            <h3>Conteúdos em Alta</h3>
            ${data.gsc.contentsUp.map((content) => `
                <div class="data-row">
                    <div class="data-label">${content.title}</div>
                    <span class="badge badge-success">+${content.change}</span>
                </div>
            `).join('')}

            <h3>Páginas Principais</h3>
            ${data.gsc.topContents.map((page: any, idx: number) => `
                <div class="data-row">
                    <div class="data-label">${idx + 1}. ${page.title}</div>
                    <div class="data-value">${page.clicks} cliques</div>
                </div>
            `).join('')}
        </section>

        <!-- Ubersuggest & IA Section -->
        <section>
            <h2>Visibilidade, Autoridade e IA — Ubersuggest</h2>
            <p class="text-muted">Os indicadores do Ubersuggest são estimativas e rastreamentos. Para cliques, impressões, CTR e posição no Google, considerar o Search Console como fonte principal.</p>

            <div class="kpi-grid">
                <div class="kpi-card">
                    <div class="kpi-label">Palavras-chave orgânicas</div>
                    <div class="kpi-value">${data.ubersuggest.organicKeywords}</div>
                    <span class="badge badge-success">${data.ubersuggest.organicKeywordsChange}</span>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Tráfego orgânico estimado</div>
                    <div class="kpi-value">${data.ubersuggest.estimatedOrganicTraffic}/mês</div>
                    <span class="badge badge-danger">${data.ubersuggest.estimatedTrafficChange}</span>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Backlinks</div>
                    <div class="kpi-value">${data.ubersuggest.backlinks}</div>
                    <span class="badge badge-success">${data.ubersuggest.backlinksChange}</span>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Valor estimado do tráfego</div>
                    <div class="kpi-value">${data.ubersuggest.estimatedTrafficValue}</div>
                    <span class="badge badge-danger">${data.ubersuggest.estimatedTrafficValueChange}</span>
                </div>
            </div>

            <h3>Posicionamento rastreado</h3>
            <div class="data-row"><div class="data-label">Posição média rastreada</div><div class="data-value">${data.ubersuggest.trackedAveragePosition.toFixed(2)} (melhora histórica de ${data.ubersuggest.historicalAveragePosition.toFixed(2)})</div></div>
            <div class="data-row"><div class="data-label">Palavras rastreadas</div><div class="data-value">${data.ubersuggest.trackedKeywords} de ${data.ubersuggest.totalTrackedKeywords}</div></div>
            <div class="data-row"><div class="data-label">Movimentação</div><div class="data-value">${data.ubersuggest.keywordsUp} em alta · ${data.ubersuggest.keywordsDown} em baixa · ${data.ubersuggest.keywordsUnchanged} sem alteração</div></div>
            <div class="data-row"><div class="data-label">Distribuição</div><div class="data-value">Top 3: ${data.ubersuggest.top3} · Top 10: ${data.ubersuggest.top10} · Top 100: ${data.ubersuggest.top100} · Não posicionadas: ${data.ubersuggest.notRanked}</div></div>

            <h3>Como a IA vê o site</h3>
            <div class="kpi-grid">
                <div class="kpi-card"><div class="kpi-label">Visibilidade da marca em IA</div><div class="kpi-value">${data.ubersuggest.aiVisibility.brandVisibility}%</div></div>
                <div class="kpi-card"><div class="kpi-label">Visibilidade no ChatGPT</div><div class="kpi-value">${data.ubersuggest.aiVisibility.chatgptVisibility.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</div></div>
                <div class="kpi-card"><div class="kpi-label">Sentimento da marca</div><div class="kpi-value">${data.ubersuggest.aiVisibility.sentiment}</div></div>
                <div class="kpi-card"><div class="kpi-label">Sentimento no ChatGPT</div><div class="kpi-value">${data.ubersuggest.aiVisibility.chatgptSentiment}</div></div>
            </div>
            <p class="insight-text">A marca já aparece em parte das respostas avaliadas por IA, mas a visibilidade ainda é inicial. O sentimento neutro não indica sinal negativo e abre espaço para reforçar autoridade e associação aos serviços em São Paulo.</p>
        </section>

        <!-- Insights Section -->
        <section>
            <h2>Insights Inteligentes</h2>
            <div class="insight-grid">
                <div class="insight-card">
                    <div class="insight-title">Conversão em Crescimento</div>
                    <div class="insight-text">O site registrou ${data.ga4.conversions} eventos principais no período, associados a ${data.ga4.conversionEvent.name}. Os cliques devem ser cruzados com o comercial antes de serem considerados leads validados.</div>
                </div>
                <div class="insight-card">
                    <div class="insight-title">Visibilidade no Google</div>
                    <div class="insight-text">O Search Console registrou ${formatNumber(data.gsc.impressions)} impressões. O site está aparecendo no Google, mas o CTR de ${data.gsc.ctr}% mostra espaço para melhorar títulos e descrições.</div>
                </div>
                <div class="insight-card">
                    <div class="insight-title">SEO Local Estratégico</div>
                    <div class="insight-text">São Paulo foi a cidade com maior volume de usuários. Isso reforça a importância de continuar criando conteúdos e páginas locais para bairros e regiões estratégicas.</div>
                </div>
            </div>
        </section>

        <!-- Action Items -->
        <section>
            <h2>Próximas Ações Recomendadas</h2>
            <ul class="action-list">
                <li>Corrigir a origem da página “Page not found - Desentupidora JD” e aplicar redirecionamento quando necessário.</li>
                <li>Validar no comercial os 4 cliques de telefone e WhatsApp para distinguir interação de lead real.</li>
                <li>Revisar titles, meta descriptions e FAQs das páginas com CTR baixo ou queda de cliques.</li>
                <li>Adicionar links internos de prumada, vaso, fossa e inquilino para serviços em São Paulo.</li>
                <li>Melhorar a experiência de leitura e CTAs das páginas de entrada para recuperar engajamento.</li>
                <li>Produzir conteúdos e menções estruturadas que reforcem marca, serviço e localização em respostas de IA.</li>
            </ul>
        </section>

        <!-- Executive Summary -->
        <section>
            <h2>Resumo Executivo Final</h2>
            <div class="summary-box">
                <p class="summary-text">O período mostra que o SEO da <strong>${data.company}</strong> avançou em usuários, visualizações, cliques orgânicos e interações de contato. Foram registrados <span class="highlight">${data.ga4.conversions} eventos principais via ${data.ga4.conversionEvent.name}</span>, ainda sujeitos à validação comercial.</p>
                <p class="summary-text" style="margin-top: 1rem;">O próximo ganho depende de <strong>corrigir a página 404, elevar o engajamento</strong> e <strong>transformar artigos informativos em caminhos claros para serviços em São Paulo</strong>. A nova leitura de IA complementa o SEO tradicional ao acompanhar como a marca começa a aparecer em respostas de inteligência artificial.</p>
                
                <div class="status-grid">
                    <div class="status-item">
                        <div class="status-label">Status Geral</div>
                        <div class="status-value">✓ Positivo</div>
                    </div>
                    <div class="status-item">
                        <div class="status-label">Prioridade</div>
                        <div class="status-value">Alta</div>
                    </div>
                    <div class="status-item">
                        <div class="status-label">Próximo Período</div>
                        <div class="status-value">Monitorar</div>
                    </div>
                </div>
            </div>
        </section>

        <div class="footer">
            <p>Relatório gerado automaticamente • Dashboard SEO Premium</p>
            <p>${data.company} © 2026</p>
        </div>
    </div>
</body>
</html>`;
}

export function downloadHTML(html: string, filename: string) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}
