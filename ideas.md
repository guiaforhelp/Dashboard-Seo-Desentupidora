# Dashboard SEO - Ideias de Design

## Abordagem Selecionada: Premium Corporativo Sofisticado

### Design Movement
**Corporativo Minimalista com Profundidade** - Inspirado em dashboards executivas de agências de performance premium, com foco em clareza hierárquica e sofisticação visual.

### Core Principles
1. **Hierarquia Visual Clara** - KPIs principais em destaque, informações secundárias em suporte
2. **Elegância Funcional** - Cada elemento serve um propósito, sem excesso decorativo
3. **Profundidade Sutil** - Sombras leves e espaçamento generoso criam dimensão sem poluição
4. **Leitura Executiva** - Dados complexos transformados em insights visuais imediatos

### Color Philosophy
- **Fundo Principal (#f2f2f7)**: Cinza ultra-claro, neutro e profissional, reduz fadiga visual
- **Cor Principal (#ff6737)**: Laranja vibrante para destaques, KPIs críticos e ações importantes - transmite energia e urgência
- **Cor Secundária (#203c50)**: Azul-cinza profundo para títulos e estrutura - confiança e estabilidade
- **Suporte**: Branco puro para cards, verde suave (#10b981) para crescimento, vermelho suave (#ef4444) para alertas

### Layout Paradigm
- **Estrutura em Camadas**: Header executivo → KPIs em grid → Seções temáticas em cards
- **Espaçamento Generoso**: Padding 32px entre seções, 24px dentro de cards
- **Grid Responsivo**: 1 coluna mobile, 2-3 colunas desktop, sem centralização excessiva
- **Fluxo Natural**: Topo para baixo, esquerda para direita, dados mais importantes primeiro

### Signature Elements
1. **Cards Arredondados Premium** - Radius 12px com sombra leve (0 4px 12px rgba(0,0,0,0.08))
2. **KPI Cards com Números Grandes** - Tipografia ousada (48px+) em #ff6737 com contexto em #203c50
3. **Gráficos com Paleta Consistente** - Recharts com cores da marca, sem decorações extras

### Interaction Philosophy
- **Hover Subtil**: Cards elevam-se levemente (shadow +2px), background muda para #ffffff
- **Transições Suaves**: 200ms ease-in-out para todas as mudanças
- **Feedback Imediato**: Botões respondem ao clique com mudança de cor
- **Painel Interativo**: Slide-in suave do lado direito, overlay semi-transparente

### Animation
- **Entrada**: Fade-in + slide-up 300ms para cards (staggered 50ms)
- **Hover**: Elevação 2px com shadow expansion
- **Carregamento**: Skeleton screens com pulse animation
- **Transições**: 200ms ease-in-out entre estados

### Typography System
- **Display (Títulos Principais)**: Poppins Bold 32px, #203c50
- **Heading (Seções)**: Poppins SemiBold 24px, #203c50
- **Subheading (Subtítulos)**: Poppins Medium 16px, #666
- **Body (Texto)**: Inter Regular 14px, #333
- **Label (Dados)**: Inter Medium 12px, #999
- **KPI Numbers**: Poppins Bold 48px, #ff6737

---

## Estrutura de Dados

### Dashboard Data Model
```typescript
interface DashboardData {
  period: {
    startDate: string;
    endDate: string;
  };
  company: string;
  
  // GA4 Metrics
  ga4: {
    activeUsers: number;
    newUsers: number;
    engagementTime: string;
    pageViews: number;
    conversions: number;
    dailyActivity: Array<{ date: string; users: number }>;
    devices: Array<{ name: string; percentage: number }>;
    os: Array<{ name: string; count: number }>;
    locations: Array<{ city: string; count: number }>;
    topPages: Array<{ title: string; views: number }>;
  };
  
  // GSC Metrics
  gsc: {
    clicks: number;
    impressions: number;
    ctr: number;
    avgPosition: number;
    dailyMetrics: Array<{ date: string; clicks: number; impressions: number; ctr: number; position: number }>;
    queriesUp: Array<{ query: string; change: number }>;
    queriesDown: Array<{ query: string; change: number }>;
    contentsUp: Array<{ title: string; change: number }>;
    contentsDown: Array<{ title: string; change: number }>;
    topPages: Array<{ title: string; clicks: number }>;
  };
  
  // Ubersuggest Metrics
  ubersuggest: {
    seoScore: number;
    monthlyTraffic: number;
    organicKeywords: number;
    backlinks: number;
    rankings: {
      avgPosition: number;
      gainedPositions: number;
      lostPositions: number;
      unchanged: number;
      top3: number;
      top10: number;
      top100: number;
      notRanking: number;
    };
    performance: {
      mobileLoad: string;
      mobileInteractivity: string;
      mobileStability: string;
      desktopLoad: string;
      desktopInteractivity: string;
      desktopStability: string;
    };
    issues: Array<{ title: string; count: number }>;
    pagesScraped: { total: number; valid: number; redirects: number; broken: number; blocked: number };
  };
}
```

---

## Componentes Principais

1. **Header Executivo** - Título, período, resumo curto
2. **KPI Cards Grid** - 8-10 cards com números principais
3. **GA4 Section** - Atividade do usuário, dispositivos, localização, páginas top
4. **GSC Section** - Timeline, consultas em alta/baixa, conteúdos em alta/baixa
5. **Ubersuggest Section** - Saúde técnica, performance, problemas
6. **Insights Section** - 7 cards com insights estratégicos
7. **Action Items Section** - Checklist de próximas ações
8. **Executive Summary** - Resumo final em linguagem simples

---

## Painel Interativo

- **Botão de Ativação**: Ícone de engrenagem no header
- **Formulário**: Campos para inserir dados de GA4, GSC, Ubersuggest
- **Validação**: Campos obrigatórios e tipos de dados
- **Preview**: Atualização em tempo real da dashboard
- **Salvar**: Gera nova dashboard com dados inseridos
- **Download**: Exporta dashboard como HTML independente

