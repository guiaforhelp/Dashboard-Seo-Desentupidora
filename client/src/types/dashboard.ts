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
    
    conversionPages?: Array<{
      title: string;
      events: number;
      conversions: number;
      engagementTime: string;
    }>;
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
    
    rankings: Array<{ keyword: string; position: number; change: number }>;
    performance: {
      score: number;
      carregamento: string;
      interatividade: string;
      estabilidadeVisual: string;
      pagesScraped: number;
    };
  };
  
  technicalSeo: {
    mobile: {
      carregamento: string;
      interatividade: string;
      estabilidadeVisual: string;
    };
    desktop: {
      carregamento: string;
      interatividade: string;
      estabilidadeVisual: string;
    };
    problemasEncontrados: number;
    paginasAnalisadas: number;
  };
}

export const defaultDashboardData: DashboardData = {
  period: {
    startDate: '22/07/2026',
    endDate: '28/07/2026',
  },
  previousPeriod: {
    startDate: '15/07/2026',
    endDate: '21/07/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 68,
    newUsers: 68,
    engagementTime: '1min 38s',
    pageViews: 81,
    conversions: 2,
    activeUsers30d: 320,
    activeUsers7d: 68,
    activeUsers1d: 11,
    
    dailyActivity: [
      { date: '22/07', users: 9 },
      { date: '23/07', users: 10 },
      { date: '24/07', users: 10 },
      { date: '25/07', users: 9 },
      { date: '26/07', users: 10 },
      { date: '27/07', users: 11 },
      { date: '28/07', users: 9 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 54.4 },
      { name: 'Desktop', percentage: 45.6 },
    ],
    
    os: [
      { name: 'Android', count: 32 },
      { name: 'Windows', count: 24 },
      { name: 'iOS', count: 10 },
      { name: 'Macintosh', count: 2 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 13 },
      { city: 'Rio de Janeiro', count: 8 },
      { city: 'Curitiba', count: 6 },
      { city: 'Florianópolis', count: 4 },
      { city: 'Fortaleza', count: 3 },
      { city: 'Juazeiro do Norte', count: 2 },
      { city: 'Manaus', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 68 },
      { name: 'Usuários ativos recentemente', count: 45 },
    ],
    
    topPages: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 8 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 7 },
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', views: 6 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', views: 6 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', views: 5 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 2,
    },
    
    topConversionPage: {
      title: 'Caça Vazamento em Osasco: Diagnóstico Rápido e Preciso',
      events: 6,
      conversions: 1,
      engagementTime: '5s',
    },
    
    conversionPages: [
      {
        title: 'Caça Vazamento em Osasco: Diagnóstico Rápido e Preciso',
        events: 6,
        conversions: 1,
        engagementTime: '5s',
      },
      {
        title: 'Vaso Entupido: Água Não Desce? Causas e Soluções Rápidas',
        events: 7,
        conversions: 1,
        engagementTime: '3s',
      },
    ],
  },
  
  gsc: {
    clicks: 45,
    impressions: 7220,
    ctr: 0.6,
    avgPosition: 7.8,
    
    dailyMetrics: [
      { date: '20/07', clicks: 6, impressions: 1030, ctr: 0.58, position: 7.9 },
      { date: '21/07', clicks: 6, impressions: 1030, ctr: 0.58, position: 7.8 },
      { date: '22/07', clicks: 6, impressions: 1035, ctr: 0.58, position: 7.8 },
      { date: '23/07', clicks: 7, impressions: 1040, ctr: 0.67, position: 7.7 },
      { date: '24/07', clicks: 7, impressions: 1035, ctr: 0.68, position: 7.8 },
      { date: '25/07', clicks: 6, impressions: 1030, ctr: 0.58, position: 7.9 },
      { date: '26/07', clicks: 7, impressions: 1040, ctr: 0.67, position: 7.8 },
    ],
    
    queriesDown: [
      { query: 'fossa rudimentar', change: 0 },
    ],
    
    queriesUp: [
      { query: 'soda cáustica derrete plástico', change: 2 },
      { query: 'prumada', change: 2 },
      { query: 'ralo fazendo barulho', change: 3 },
      { query: 'papel higiênico no vaso', change: 2 },
    ],
    
    contentsUp: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: -1 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', change: 2 },
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', change: 3 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: 1 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', change: 2 },
    ],
    
    contentsDown: [
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', change: -3 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Soluções Práticas', change: -3 },
      { title: 'Caixa de Gordura em Apartamento: Função, Limpeza e Manutenção', change: -2 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', change: -2 },
      { title: 'Limpeza Pós-Entupimento: Como Higienizar Canos e Tubulações', change: -1 },
    ],
    
    topContents: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 5 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', clicks: 4 },
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', clicks: 4 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 3 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', clicks: 3 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 20.67,
    avgPositionCurrent: 20.67,
    top3: 0,
    top10: 0,
    top100: 1,
    notRanked: 153,
    gainedPositions: 0,
    lostPositions: 0,
    unchangedPositions: 154,
    backlinks: 17,
    
    rankings: [
      { keyword: 'desentupidora em pinheiros', position: 13, change: 0 },
    ],
    
    performance: {
      score: 61,
      carregamento: 'Bom',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
      pagesScraped: 11,
    },
  },
  
  technicalSeo: {
    mobile: {
      carregamento: 'Crítica (12,95s)',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
    },
    desktop: {
      carregamento: 'Boa (2,15s)',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
    },
    problemasEncontrados: 2,
    paginasAnalisadas: 11,
  },
};
