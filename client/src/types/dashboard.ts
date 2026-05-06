export interface DashboardData {
  period: {
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
    startDate: '29/04/2026',
    endDate: '05/05/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 27,
    newUsers: 27,
    engagementTime: '1 min 44 s',
    pageViews: 32,
    conversions: 3,
    activeUsers30d: 155,
    activeUsers7d: 27,
    activeUsers1d: 5,
    
    dailyActivity: [
      { date: '29/04', users: 7 },
      { date: '30/04', users: 2 },
      { date: '01/05', users: 5 },
      { date: '02/05', users: 0 },
      { date: '03/05', users: 3 },
      { date: '04/05', users: 5 },
      { date: '05/05', users: 5 },
    ],
    
    devices: [
      { name: 'Desktop', percentage: 55.6 },
      { name: 'Mobile', percentage: 44.4 },
    ],
    
    os: [
      { name: 'Windows', count: 15 },
      { name: 'Android', count: 9 },
      { name: 'iOS', count: 3 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 5 },
      { city: 'Belo Horizonte', count: 2 },
      { city: 'Campinas', count: 2 },
      { city: 'Ponta Grossa', count: 2 },
      { city: 'Águas Lindas de Goiás', count: 1 },
      { city: 'Atibaia', count: 1 },
      { city: 'Bacabal', count: 1 },
    ],
    
    audiences: [
      { name: 'All Users', count: 27 },
      { name: 'Usuários ativos recentemente', count: 16 },
    ],
    
    topPages: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', views: 5 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', views: 3 },
      { title: 'Limpa Fossa Ponta Grossa Atendimento no Paraná com Soluções', views: 3 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', views: 2 },
      { title: 'Caixa de Gordura em Apartamento: Guia Completo de Manutenção', views: 2 },
      { title: 'Como Saber se a Fossa Está Cheia', views: 2 },
      { title: 'Limpeza de Caixa D\'Água é Obrigatória', views: 2 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 3,
    },
    
    topConversionPage: {
      title: 'Limpa Fossa Ponta Grossa Atendimento no Paraná com Soluções',
      events: 12,
      conversions: 2,
      engagementTime: '26 segundos',
    },
  },
  
  gsc: {
    clicks: 27,
    impressions: 7050,
    ctr: 0.4,
    avgPosition: 8.7,
    
    dailyMetrics: [
      { date: '28/04', clicks: 7, impressions: 1238, ctr: 0.6, position: 8.6 },
      { date: '29/04', clicks: 2, impressions: 1091, ctr: 0.2, position: 8.6 },
      { date: '30/04', clicks: 3, impressions: 968, ctr: 0.3, position: 7.9 },
      { date: '01/05', clicks: 4, impressions: 930, ctr: 0.4, position: 11.3 },
      { date: '02/05', clicks: 4, impressions: 845, ctr: 0.5, position: 8.4 },
      { date: '03/05', clicks: 4, impressions: 757, ctr: 0.5, position: 8.5 },
      { date: '04/05', clicks: 3, impressions: 1218, ctr: 0.2, position: 7.6 },
    ],
    
    queriesUp: [
      { query: 'fossa rudmentar', change: 1 },
      { query: 'prumada de esgoto', change: 1 },
      { query: 'quanto tempo deixar soda cáustica no vaso', change: 1 },
      { query: 'soda derrete plástico', change: 1 },
    ],
    
    queriesDown: [
      { query: 'soda cáustica derrete cano', change: -1 },
    ],
    
    contentsUp: [
      { title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção', change: 3 },
      { title: 'Soda Cáustica no Vaso: Tempo, Riscos e Alternativas Seguras', change: 3 },
      { title: 'Tubulação de Ventilação de Esgoto: Função e Problemas', change: 2 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', change: 1 },
      { title: 'Guia Completo Tipos de Tubos para Esgoto', change: 1 },
    ],
    
    contentsDown: [
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', change: -3 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', change: -2 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', change: -2 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: -1 },
      { title: 'Sentir Cheiro de Esgoto do Nada', change: -1 },
    ],
    
    topPages: [
      { title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção', clicks: 3 },
      { title: 'Soda Cáustica no Vaso: Tempo, Riscos e Alternativas Seguras', clicks: 3 },
      { title: 'Desentupimento em São Paulo', clicks: 2 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', clicks: 2 },
      { title: 'Tubulação de Ventilação de Esgoto: Função e Problemas', clicks: 2 },
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
      mobileLoad: 'Ruim',
      mobileInteractivity: 'Ruim',
      mobileStability: 'Ótimo',
      desktopLoad: 'Ótimo',
      desktopInteractivity: 'Ruim',
      desktopStability: 'Ótimo',
    },
    
    issues: [
      { title: 'Ausência de sitemap.xml', count: 1 },
      { title: 'Página com status 4XX', count: 1 },
    ],
    
    pagesScraped: {
      total: 1,
      valid: 0,
      redirects: 0,
      broken: 1,
      blocked: 0,
    },
  },
};
