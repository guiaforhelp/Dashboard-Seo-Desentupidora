export interface DashboardData {
  period: {
    startDate: string;
    endDate: string;
  };
  previousPeriod?: {
    startDate: string;
    endDate: string;
  };
  company: string;
  
  // Google Analytics 4
  ga4: {
    activeUsers: number;
    newUsers: number;
    engagementTime: string;
    pageViews: number;
    conversions: number;
    activeUsers30d: number;
    activeUsers7d: number;
    activeUsers1d: number;
    
    dailyActivity: Array<{ date: string; users: number }>;
    devices: Array<{ name: string; percentage: number }>;
    os: Array<{ name: string; count: number }>;
    locations: Array<{ city: string; count: number }>;
    audiences: Array<{ name: string; count: number }>;
    topPages: Array<{ title: string; views: number }>;
    
    conversionEvent: {
      name: string;
      count: number;
    };
    
    topConversionPage: {
      title: string;
      events: number;
      conversions: number;
      engagementTime: string;
    };
  };
  
  // Google Search Console
  gsc: {
    clicks: number;
    impressions: number;
    ctr: number;
    avgPosition: number;
    
    dailyMetrics: Array<{
      date: string;
      clicks: number;
      impressions: number;
      ctr: number;
      position: number;
    }>;
    
    queriesUp: Array<{ query: string; change: number }>;
    queriesDown: Array<{ query: string; change: number }>;
    contentsUp: Array<{ title: string; change: number }>;
    contentsDown: Array<{ title: string; change: number }>;
    topContents: Array<{ title: string; clicks: number }>;
  };
  
  // Ubersuggest
  ubersuggest: {
    avgPositionPrevious: number;
    avgPositionCurrent: number;
    top3: number;
    top10: number;
    top100: number;
    notRanked: number;
    gainedPositions: number;
    lostPositions: number;
    unchangedPositions: number;
    backlinks: number;
    
    topKeywords: Array<{
      keyword: string;
      position: number;
      change: number;
      volume: number;
      difficulty: number;
    }>;
  };
  
  // Technical SEO
  technicalSeo: {
    performance: {
      mobileLoad: string;
      mobileInteractivity: string;
      mobileStability: string;
      desktopLoad: string;
      desktopInteractivity: string;
      desktopStability: string;
    };
    
    issues: Array<{ title: string; count: number }>;
    pagesScraped: {
      total: number;
      valid: number;
      redirects: number;
      broken: number;
      blocked: number;
    };
  };
}

export const defaultDashboardData: DashboardData = {
  period: {
    startDate: '13/05/2026',
    endDate: '19/05/2026',
  },
  previousPeriod: {
    startDate: '06/05/2026',
    endDate: '12/05/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 59,
    newUsers: 59,
    engagementTime: '53 segundos',
    pageViews: 61,
    conversions: 1,
    activeUsers30d: 186,
    activeUsers7d: 59,
    activeUsers1d: 12,
    
    dailyActivity: [
      { date: '13/05', users: 9 },
      { date: '14/05', users: 8 },
      { date: '15/05', users: 10 },
      { date: '16/05', users: 11 },
      { date: '17/05', users: 12 },
      { date: '18/05', users: 5 },
      { date: '19/05', users: 4 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 61.0 },
      { name: 'Desktop', percentage: 39.0 },
    ],
    
    os: [
      { name: 'Android', count: 26 },
      { name: 'Windows', count: 22 },
      { name: 'iOS', count: 10 },
      { name: 'Chrome OS', count: 1 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 6 },
      { city: 'Curitiba', count: 4 },
      { city: 'Belo Horizonte', count: 3 },
      { city: 'Rio de Janeiro', count: 3 },
      { city: 'Florianópolis', count: 2 },
      { city: 'João Pessoa', count: 2 },
      { city: 'Porto Alegre', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 59 },
      { name: 'Usuários ativos recentemente', count: 33 },
    ],
    
    topPages: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', views: 7 },
      { title: 'Inquilino Reclama de Entupimento', views: 6 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 6 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', views: 5 },
      { title: 'Qual papel higiênico pode jogar no vaso', views: 3 },
      { title: 'Ralo Fazendo Barulho: O Que Significa', views: 3 },
      { title: 'Fezes Grandes Entupindo o Vaso', views: 2 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 1,
    },
    
    topConversionPage: {
      title: 'Desentupidora Blumenau Serviços para Santa Catarina',
      events: 7,
      conversions: 1,
      engagementTime: '17 segundos',
    },
  },
  
  gsc: {
    clicks: 39,
    impressions: 8510,
    ctr: 0.5,
    avgPosition: 8.5,
    
    dailyMetrics: [
      { date: '13/05', clicks: 5, impressions: 1200, ctr: 0.4, position: 8.4 },
      { date: '14/05', clicks: 6, impressions: 1250, ctr: 0.5, position: 8.5 },
      { date: '15/05', clicks: 6, impressions: 1300, ctr: 0.5, position: 8.3 },
      { date: '16/05', clicks: 6, impressions: 1400, ctr: 0.4, position: 8.6 },
      { date: '17/05', clicks: 8, impressions: 1500, ctr: 0.5, position: 8.4 },
      { date: '18/05', clicks: 5, impressions: 1100, ctr: 0.5, position: 8.7 },
      { date: '19/05', clicks: 3, impressions: 760, ctr: 0.4, position: 8.5 },
    ],
    
    queriesUp: [
      { query: 'desentupidora em blumenau', change: 1 },
      { query: 'diabo verde ou soda cáustica', change: 1 },
      { query: 'fossa rudimentar o que é', change: 1 },
      { query: 'quanto custa para esvaziar uma fossa', change: 1 },
      { query: 'vaso entupido é responsabilidade do inquilino ou proprietário', change: 1 },
    ],
    
    queriesDown: [
      { query: 'fossa rudimentar', change: -1 },
      { query: 'limpa fossa ponta grossa', change: -1 },
      { query: 'soda cáustica como usar', change: -1 },
      { query: 'soda derrete plástico', change: -1 },
    ],
    
    contentsUp: [
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', change: 3 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', change: 2 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', change: 2 },
      { title: 'Entupimento: Inquilino vs. Proprietário - Quem Paga a Conta?', change: 2 },
      { title: 'Artigo de ações pós-entupimento', change: 1 },
    ],
    
    contentsDown: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', change: -4 },
      { title: 'Fossa Negra: Funcionamento, Riscos e Manutenção', change: -3 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: -2 },
      { title: 'Caixa de Gordura em Apartamento: Guia Completo de Manutenção', change: -2 },
      { title: 'Vaso Entupido: Água Não Desce? Guia para Solucionar em SP', change: -2 },
    ],
    
    topContents: [
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', clicks: 5 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 5 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 3 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', clicks: 2 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', clicks: 2 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 79,
    avgPositionCurrent: 17.8,
    top3: 0,
    top10: 0,
    top100: 5,
    notRanked: 50,
    gainedPositions: 5,
    lostPositions: 1,
    unchangedPositions: 49,
    backlinks: 13,
    
    topKeywords: [
      { keyword: 'desentupidora em pinheiros', position: 13, change: 87, volume: 320, difficulty: 21 },
      { keyword: 'encanador na mooca', position: 14, change: 86, volume: 170, difficulty: 7 },
      { keyword: 'encanador mooca', position: 17, change: 83, volume: 170, difficulty: 7 },
      { keyword: 'desentupidora jabaquara', position: 21, change: 79, volume: 170, difficulty: 9 },
      { keyword: 'desentupidora em parelheiros', position: 24, change: 76, volume: 260, difficulty: 6 },
    ],
  },
  
  technicalSeo: {
    performance: {
      mobileLoad: '2.8s',
      mobileInteractivity: '150ms',
      mobileStability: '0.15',
      desktopLoad: '1.9s',
      desktopInteractivity: '80ms',
      desktopStability: '0.08',
    },
    
    issues: [
      { title: 'Imagens sem otimização', count: 12 },
      { title: 'Recursos bloqueados', count: 3 },
    ],
    
    pagesScraped: {
      total: 45,
      valid: 42,
      redirects: 1,
      broken: 1,
      blocked: 1,
    },
  },
};
