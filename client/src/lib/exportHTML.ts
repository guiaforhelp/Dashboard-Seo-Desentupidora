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
            ${data.gsc.topPages.map((page, idx) => `
                <div class="data-row">
                    <div class="data-label">${idx + 1}. ${page.title}</div>
                    <div class="data-value">${page.clicks} cliques</div>
                </div>
            `).join('')}
        </section>

        <!-- Ubersuggest Section -->
        <section>
            <h2>Saúde Técnica e Autoridade — Ubersuggest</h2>
            
            <div class="kpi-grid">
                <div class="kpi-card">
                    <div class="kpi-label">Pontuação SEO On-page</div>
                    <div class="kpi-value">${data.ubersuggest.seoScore}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Tráfego Orgânico Mensal</div>
                    <div class="kpi-value">${data.ubersuggest.monthlyTraffic}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Palavras-chave Orgânicas</div>
                    <div class="kpi-value">${data.ubersuggest.organicKeywords}</div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-label">Backlinks</div>
                    <div class="kpi-value">${data.ubersuggest.backlinks}</div>
                </div>
            </div>

            <h3>Performance Técnica</h3>
            <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">Mobile</h4>
            <div class="data-row">
                <div class="data-label">Carregamento</div>
                <div class="data-value">${data.ubersuggest.performance.mobileLoad}</div>
            </div>
            <div class="data-row">
                <div class="data-label">Interatividade</div>
                <div class="data-value">${data.ubersuggest.performance.mobileInteractivity}</div>
            </div>

            <h4 style="margin-top: 1rem; margin-bottom: 0.5rem;">Desktop</h4>
            <div class="data-row">
                <div class="data-label">Carregamento</div>
                <div class="data-value">${data.ubersuggest.performance.desktopLoad}</div>
            </div>
            <div class="data-row">
                <div class="data-label">Interatividade</div>
                <div class="data-value">${data.ubersuggest.performance.desktopInteractivity}</div>
            </div>

            <h3>Problemas Encontrados</h3>
            ${data.ubersuggest.issues.length > 0 ? data.ubersuggest.issues.map((issue) => `
                <div class="data-row">
                    <div class="data-label">${issue.title}</div>
                    <span class="badge badge-danger">${issue.count}</span>
                </div>
            `).join('') : '<p>Nenhum problema encontrado</p>'}
        </section>

        <!-- Insights Section -->
        <section>
            <h2>Insights Inteligentes</h2>
            <div class="insight-grid">
                <div class="insight-card">
                    <div class="insight-title">Conversão em Crescimento</div>
                    <div class="insight-text">O site gerou ${data.ga4.conversions} conversões no período, todas associadas ao evento ${data.ga4.conversionEvent.name}. Isso mostra que o orgânico já está gerando ações reais.</div>
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
                <li>Reotimizar titles e meta descriptions para aumentar CTR</li>
                <li>Validar sitemap.xml e corrigir se necessário</li>
                <li>Corrigir ou redirecionar página 4XX</li>
                <li>Validar performance mobile no PageSpeed Insights</li>
                <li>Reotimizar artigos em queda</li>
                <li>Inserir CTAs mais fortes nos artigos com tráfego</li>
                <li>Criar mais conteúdos locais de fundo de funil para São Paulo</li>
                <li>Fortalecer linkagem interna entre artigos técnicos e páginas comerciais</li>
                <li>Monitorar conversões via Whatsapp Flutuante</li>
                <li>Replicar o padrão das páginas que geram conversão</li>
            </ul>
        </section>

        <!-- Executive Summary -->
        <section>
            <h2>Resumo Executivo Final</h2>
            <div class="summary-box">
                <p class="summary-text">O período mostra que o SEO da <strong>${data.company}</strong> já gera <strong>visibilidade e conversões orgânicas</strong>. Mesmo com volume moderado de usuários, houve <span class="highlight">${data.ga4.conversions} conversões via ${data.ga4.conversionEvent.name}</span>.</p>
                <p class="summary-text" style="margin-top: 1rem;">O principal desafio está em <strong>transformar mais impressões em cliques, melhorar a performance mobile</strong> e <strong>fortalecer conteúdos locais</strong> com maior intenção de contratação.</p>
                
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
