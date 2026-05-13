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
    topPages: Array<{ title: string; clicks: number }>;
  };
  
  // Ubersuggest
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
    startDate: '06/05/2026',
    endDate: '12/05/2026',
  },
  previousPeriod: {
    startDate: '29/04/2026',
    endDate: '05/05/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 45,
    newUsers: 45,
    engagementTime: '28 segundos',
    pageViews: 53,
    conversions: 1,
    activeUsers30d: 160,
    activeUsers7d: 45,
    activeUsers1d: 4,
    
    dailyActivity: [
      { date: '06/05', users: 8 },
      { date: '07/05', users: 5 },
      { date: '08/05', users: 7 },
      { date: '09/05', users: 6 },
      { date: '10/05', users: 9 },
      { date: '11/05', users: 6 },
      { date: '12/05', users: 4 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 51.1 },
      { name: 'Desktop', percentage: 48.9 },
    ],
    
    os: [
      { name: 'Windows', count: 22 },
      { name: 'Android', count: 18 },
      { name: 'iOS', count: 5 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 5 },
      { city: 'Blumenau', count: 3 },
      { city: 'Belo Horizonte', count: 2 },
      { city: 'Cuiabá', count: 2 },
      { city: 'Curitiba', count: 2 },
      { city: 'Guarulhos', count: 2 },
      { city: 'Salvador', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 45 },
      { name: 'Usuários ativos recentemente', count: 32 },
    ],
    
    topPages: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', views: 6 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 5 },
      { title: 'Entupimento: Inquilino vs. Proprietário', views: 4 },
      { title: 'Fossa Negra: Funcionamento, Riscos e Manutenção', views: 3 },
      { title: 'Inquilino Reclama de Entupimento', views: 3 },
      { title: 'Soda Cáustica: Como Usar para Desentupir', views: 3 },
      { title: 'Desentupimento em São Paulo', views: 2 },
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
    impressions: 7050,
    ctr: 0.6,
    avgPosition: 8.4,
    
    dailyMetrics: [
      { date: '06/05', clicks: 5, impressions: 1050, ctr: 0.5, position: 8.2 },
      { date: '07/05', clicks: 6, impressions: 1100, ctr: 0.5, position: 8.3 },
      { date: '08/05', clicks: 6, impressions: 1050, ctr: 0.6, position: 8.4 },
      { date: '09/05', clicks: 5, impressions: 1000, ctr: 0.5, position: 8.5 },
      { date: '10/05', clicks: 8, impressions: 1200, ctr: 0.7, position: 8.3 },
      { date: '11/05', clicks: 5, impressions: 950, ctr: 0.5, position: 8.4 },
      { date: '12/05', clicks: 4, impressions: 700, ctr: 0.6, position: 8.6 },
    ],
    
    queriesUp: [
      { query: 'fossa rudimentar', change: 1 },
      { query: 'limpa fossa ponta grossa', change: 1 },
      { query: 'soda cáustica como usar', change: 1 },
      { query: 'soda derrete plástico', change: 1 },
    ],
    
    queriesDown: [
      { query: 'fossa rudmentar', change: -1 },
      { query: 'prumada de esgoto', change: -1 },
      { query: 'quanto tempo deixar soda cáustica no vaso', change: -1 },
    ],
    
    contentsUp: [
      { title: 'Inquilino Reclama de Entupimento', change: 5 },
      { title: 'Fossa Negra: Funcionamento, Riscos e Manutenção', change: 5 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', change: 4 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: 4 },
      { title: 'Caixa de Gordura em Apartamento: Guia Completo de Manutenção', change: 2 },
      { title: 'Soda Cáustica Derrete Cano: Verdade ou Mito?', change: 2 },
    ],
    
    contentsDown: [
      { title: 'Ralo Fazendo Barulho: Causas e Soluções', change: -4 },
      { title: 'Desentupimento em São Paulo: Serviços Profissionais', change: -3 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', change: -3 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', change: -2 },
      { title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção', change: -2 },
    ],
    
    topPages: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', clicks: 6 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 5 },
      { title: 'Entupimento: Inquilino vs. Proprietário', clicks: 4 },
      { title: 'Fossa Negra: Funcionamento, Riscos e Manutenção', clicks: 3 },
      { title: 'Inquilino Reclama de Entupimento', clicks: 3 },
      { title: 'Soda Cáustica: Como Usar para Desentupir', clicks: 3 },
      { title: 'Desentupimento em São Paulo', clicks: 2 },
    ],
  },
  
  ubersuggest: {
    seoScore: 61,
    monthlyTraffic: 148,
    organicKeywords: 51,
    backlinks: 13,
    
    rankings: {
      avgPosition: 79,
      gainedPositions: 0,
      lostPositions: 0,
      unchanged: 55,
      top3: 0,
      top10: 0,
      top100: 0,
      notRanking: 55,
    },
    
    performance: {
      mobileLoad: 'Bom',
      mobileInteractivity: 'Excelente',
      mobileStability: 'Excelente',
      desktopLoad: 'Excelente',
      desktopInteractivity: 'Excelente',
      desktopStability: 'Excelente',
    },
    
    issues: [
      { title: 'Problemas de Carregamento', count: 2 },
      { title: 'Imagens não otimizadas', count: 3 },
      { title: 'Links quebrados', count: 1 },
    ],
    pagesScraped: {
      total: 156,
      valid: 148,
      redirects: 2,
      broken: 4,
      blocked: 2,
    },
  },
};
