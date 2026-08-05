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
    startDate: '29/07/2026',
    endDate: '04/08/2026',
  },
  previousPeriod: {
    startDate: '22/07/2026',
    endDate: '28/07/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 74,
    newUsers: 73,
    engagementTime: '1min 01s',
    pageViews: 81,
    conversions: 5,
    activeUsers30d: 340,
    activeUsers7d: 74,
    activeUsers1d: 12,
    
    dailyActivity: [
      { date: '29/07', users: 10 },
      { date: '30/07', users: 11 },
      { date: '31/07', users: 11 },
      { date: '01/08', users: 10 },
      { date: '02/08', users: 11 },
      { date: '03/08', users: 12 },
      { date: '04/08', users: 9 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 54.4 },
      { name: 'Desktop', percentage: 45.6 },
    ],
    
    os: [
      { name: 'Android', count: 35 },
      { name: 'Windows', count: 26 },
      { name: 'iOS', count: 11 },
      { name: 'Macintosh', count: 2 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 14 },
      { city: 'Rio de Janeiro', count: 9 },
      { city: 'Curitiba', count: 7 },
      { city: 'Florianópolis', count: 4 },
      { city: 'Fortaleza', count: 3 },
      { city: 'Manaus', count: 3 },
      { city: 'Juazeiro do Norte', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 74 },
      { name: 'Usuários ativos recentemente', count: 50 },
    ],
    
    topPages: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 9 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 8 },
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', views: 7 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', views: 6 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', views: 5 },
    ],
    
    conversionEvent: {
      name: 'WhatsApp Flutuante',
      count: 4,
    },
    
    topConversionPage: {
      title: 'Desentupidora São Luís Serviços no Maranhão com Soluções Pro',
      events: 7,
      conversions: 2,
      engagementTime: '0s',
    },
    
    conversionPages: [
      {
        title: 'Desentupidora São Luís Serviços no Maranhão com Soluções Pro',
        events: 7,
        conversions: 2,
        engagementTime: '0s',
      },
      {
        title: 'Desentupidora Araçatuba Soluções para o Interior com Solução',
        events: 5,
        conversions: 1,
        engagementTime: '4s',
      },
      {
        title: 'Desentupimento em São Paulo - Desentupidora JD',
        events: 11,
        conversions: 1,
        engagementTime: '54s',
      },
      {
        title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional',
        events: 7,
        conversions: 1,
        engagementTime: '0s',
      },
    ],
  },
  
  gsc: {
    clicks: 40,
    impressions: 7300,
    ctr: 0.5,
    avgPosition: 8.8,
    
    dailyMetrics: [
      { date: '28/07', clicks: 5, impressions: 1040, ctr: 0.48, position: 8.9 },
      { date: '29/07', clicks: 6, impressions: 1045, ctr: 0.57, position: 8.8 },
      { date: '30/07', clicks: 6, impressions: 1040, ctr: 0.58, position: 8.8 },
      { date: '31/07', clicks: 6, impressions: 1045, ctr: 0.57, position: 8.9 },
      { date: '01/08', clicks: 6, impressions: 1040, ctr: 0.58, position: 8.8 },
      { date: '02/08', clicks: 5, impressions: 1045, ctr: 0.48, position: 8.8 },
      { date: '03/08', clicks: 6, impressions: 1045, ctr: 0.57, position: 8.7 },
    ],
    
    queriesUp: [
      { query: 'ralo fazendo barulho', change: 2 },
      { query: 'papel higiênico entope vaso', change: 2 },
      { query: 'prumada hidráulica', change: 1 },
    ],
    
    queriesDown: [
      { query: 'soda cáustica derrete plástico', change: -1 },
      { query: 'caixa de gordura apartamento', change: -1 },
    ],
    
    contentsUp: [
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', change: 2 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', change: 2 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', change: 1 },
    ],
    
    contentsDown: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: -2 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', change: -2 },
      { title: 'Caixa de Gordura em Apartamento: Função, Limpeza e Manutenção', change: -1 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', change: -1 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Soluções Práticas', change: -1 },
    ],
    
    topContents: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 5 },
      { title: 'Ralo Fazendo Barulho: Causas, Diagnóstico e Soluções', clicks: 4 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', clicks: 4 },
      { title: 'Papel Higiênico no Vaso: Como Evitar Entupimentos', clicks: 3 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 3 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 20.67,
    avgPositionCurrent: 20.67,
    top3: 0,
    top10: 0,
    top100: 1,
    notRanked: 167,
    gainedPositions: 0,
    lostPositions: 0,
    unchangedPositions: 168,
    backlinks: 17,
    
    rankings: [
      { keyword: 'desentupidora em pinheiros', position: 13, change: 0 },
    ],
    
    performance: {
      score: 61,
      carregamento: 'Crítica (12,95s)',
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
