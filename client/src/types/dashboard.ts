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
    startDate: '27/05/2026',
    endDate: '02/06/2026',
  },
  previousPeriod: {
    startDate: '20/05/2026',
    endDate: '26/05/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 44,
    newUsers: 42,
    engagementTime: '41s',
    pageViews: 47,
    conversions: 2,
    activeUsers30d: 220,
    activeUsers7d: 44,
    activeUsers1d: 9,
    
    dailyActivity: [
      { date: '27/05', users: 5 },
      { date: '28/05', users: 7 },
      { date: '29/05', users: 6 },
      { date: '30/05', users: 8 },
      { date: '31/05', users: 9 },
      { date: '01/06', users: 6 },
      { date: '02/06', users: 3 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 63.6 },
      { name: 'Desktop', percentage: 36.4 },
    ],
    
    os: [
      { name: 'Android', count: 23 },
      { name: 'Windows', count: 15 },
      { name: 'iOS', count: 5 },
      { name: 'Macintosh', count: 1 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 9 },
      { city: 'Belo Horizonte', count: 2 },
      { city: 'Campinas', count: 2 },
      { city: 'Cuiabá', count: 2 },
      { city: 'João Pessoa', count: 2 },
      { city: 'Ouro Preto', count: 2 },
      { city: 'Aracaju', count: 1 },
    ],
    
    audiences: [
      { name: 'All Users', count: 44 },
      { name: 'Usuários ativos recentemente', count: 22 },
    ],
    
    topPages: [
      { title: 'Entupimento: Inquilino vs. Proprietário', views: 4 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', views: 3 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 3 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', views: 3 },
      { title: 'Ralo Fazendo Barulho O Que Significa', views: 3 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções', views: 2 },
      { title: 'Bueiros Entupidos: Causas, Consequências e Soluções', views: 2 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 2,
    },
    
    topConversionPage: {
      title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções - Desentupidora JD',
      events: 11,
      conversions: 1,
      engagementTime: '1s',
    },
    
    conversionPages: [
      {
        title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções - Desentupidora JD',
        events: 11,
        conversions: 1,
        engagementTime: '1s',
      },
      {
        title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional',
        events: 12,
        conversions: 1,
        engagementTime: '8s',
      },
    ],
  },
  
  gsc: {
    clicks: 36,
    impressions: 8960,
    ctr: 0.4,
    avgPosition: 8.6,
    
    dailyMetrics: [
      { date: '27/05', clicks: 5, impressions: 1200, ctr: 0.42, position: 8.5 },
      { date: '28/05', clicks: 6, impressions: 1350, ctr: 0.44, position: 8.6 },
      { date: '29/05', clicks: 5, impressions: 1250, ctr: 0.40, position: 8.7 },
      { date: '30/05', clicks: 6, impressions: 1400, ctr: 0.43, position: 8.5 },
      { date: '31/05', clicks: 7, impressions: 1500, ctr: 0.47, position: 8.4 },
      { date: '01/06', clicks: 4, impressions: 1100, ctr: 0.36, position: 8.8 },
      { date: '02/06', clicks: 3, impressions: 1160, ctr: 0.26, position: 8.9 },
    ],
    
    queriesDown: [
      { query: 'como usar soda caustica', change: -1 },
      { query: 'derretedor de plástico', change: -1 },
      { query: 'qual papel higiênico pode jogar no vaso', change: -1 },
      { query: 'quanto custa limpeza de fossa', change: -1 },
    ],
    
    queriesUp: [
      { query: 'como usar a soda cáustica para desentupir', change: 1 },
      { query: 'entupimento é responsabilidade do inquilino ou proprietário', change: 1 },
    ],
    
    contentsUp: [
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', change: 2 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', change: 1 },
    ],
    
    contentsDown: [
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', change: -1 },
      { title: 'Caça Vazamento Diminua sua Conta de Água', change: -1 },
    ],
    
    topContents: [
      { title: 'Desentupimento em São Paulo - Desentupidora JD', clicks: 8 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', clicks: 6 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', clicks: 5 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 21.5,
    avgPositionCurrent: 21.2,
    top3: 2,
    top10: 8,
    top100: 42,
    notRanked: 5,
    gainedPositions: 3,
    lostPositions: 1,
    unchangedPositions: 13,
    backlinks: 13,
    
    rankings: [
      { keyword: 'desentupimento são paulo', position: 5, change: 0 },
      { keyword: 'caça vazamento', position: 8, change: 1 },
      { keyword: 'limpa fossa preço', position: 12, change: -1 },
      { keyword: 'entupimento vaso', position: 15, change: 0 },
      { keyword: 'soda cáustica desentupir', position: 18, change: 2 },
    ],
    
    performance: {
      score: 62,
      carregamento: 'Bom',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
      pagesScraped: 48,
    },
  },
  
  technicalSeo: {
    mobile: {
      carregamento: 'Bom',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
    },
    desktop: {
      carregamento: 'Ótimo',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
    },
    problemasEncontrados: 2,
    paginasAnalisadas: 48,
  },
};
