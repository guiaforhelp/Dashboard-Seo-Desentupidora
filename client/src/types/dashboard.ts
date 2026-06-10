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
    startDate: '03/06/2026',
    endDate: '09/06/2026',
  },
  previousPeriod: {
    startDate: '27/05/2026',
    endDate: '02/06/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 53,
    newUsers: 52,
    engagementTime: '1min 03s',
    pageViews: 62,
    conversions: 0,
    activeUsers30d: 230,
    activeUsers7d: 53,
    activeUsers1d: 14,
    
    dailyActivity: [
      { date: '03/06', users: 8 },
      { date: '04/06', users: 9 },
      { date: '05/06', users: 7 },
      { date: '06/06', users: 10 },
      { date: '07/06', users: 11 },
      { date: '08/06', users: 5 },
      { date: '09/06', users: 3 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 58.5 },
      { name: 'Desktop', percentage: 41.5 },
    ],
    
    os: [
      { name: 'Android', count: 24 },
      { name: 'Windows', count: 20 },
      { name: 'iOS', count: 7 },
      { name: 'Linux', count: 2 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 9 },
      { city: 'Salvador', count: 3 },
      { city: 'Belo Horizonte', count: 2 },
      { city: 'Campinas', count: 2 },
      { city: 'Curitiba', count: 2 },
      { city: 'Adamantina', count: 1 },
      { city: 'Aparecida de Goiânia', count: 1 },
    ],
    
    audiences: [
      { name: 'All Users', count: 53 },
      { name: 'Usuários ativos recentemente', count: 25 },
    ],
    
    topPages: [
      { title: 'Fezes Grandes Entupindo o Vaso', views: 7 },
      { title: 'Inquilino Reclama de Entupimento', views: 7 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 6 },
      { title: 'Como Usar Soda Cáustica para Desentupir', views: 3 },
      { title: 'Ralo Fazendo Barulho', views: 3 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 0,
    },
    
    topConversionPage: {
      title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções - Desentupidora JD',
      events: 11,
      conversions: 3,
      engagementTime: '1s',
    },
    
    conversionPages: [
      {
        title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções - Desentupidora JD',
        events: 11,
        conversions: 3,
        engagementTime: '1s',
      },
      {
        title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional',
        events: 12,
        conversions: 1,
        engagementTime: '8s',
      },
      {
        title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção',
        events: 19,
        conversions: 1,
        engagementTime: '22s',
      },
    ],
  },
  
  gsc: {
    clicks: 35,
    impressions: 8680,
    ctr: 0.4,
    avgPosition: 8,
    
    dailyMetrics: [
      { date: '03/06', clicks: 5, impressions: 1240, ctr: 0.40, position: 8.1 },
      { date: '04/06', clicks: 6, impressions: 1250, ctr: 0.48, position: 8.0 },
      { date: '05/06', clicks: 5, impressions: 1230, ctr: 0.41, position: 8.2 },
      { date: '06/06', clicks: 6, impressions: 1240, ctr: 0.48, position: 7.9 },
      { date: '07/06', clicks: 5, impressions: 1210, ctr: 0.41, position: 8.1 },
      { date: '08/06', clicks: 4, impressions: 1210, ctr: 0.33, position: 8.0 },
      { date: '09/06', clicks: 4, impressions: 1220, ctr: 0.33, position: 7.8 },
    ],
    
    queriesDown: [
      { query: 'como usar a soda cáustica para desentupir', change: -1 },
      { query: 'desentupidora em blumenau', change: -1 },
      { query: 'entupimento é responsabilidade do inquilino ou proprietário', change: -1 },
      { query: 'esvaziar fossa preço', change: -1 },
      { query: 'fossa rudimentar o que é', change: -1 },
    ],
    
    queriesUp: [
      { query: 'diabo verde ou soda cáustica', change: 1 },
      { query: 'o que é prumada na construção civil', change: 1 },
      { query: 'soda caustica derrete plastico', change: 1 },
    ],
    
    contentsUp: [
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', change: 3 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', change: 2 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', change: 2 },
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', change: 2 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: 2 },
    ],
    
    contentsDown: [
      { title: 'Desentupimento em São Paulo - Desentupidora JD', change: -2 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: -2 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', change: -2 },
      { title: 'Bueiros Entupidos: Causas, Consequências e Prevenção Eficaz', change: -1 },
      { title: 'Desentupimento em Apartamento: Solução Segura', change: -1 },
    ],
    
    topContents: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 5 },
      { title: 'Entupimento: Inquilino vs. Proprietário — Quem Paga a Conta?', clicks: 4 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', clicks: 3 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 3 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', clicks: 2 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 21.5,
    avgPositionCurrent: 21.2,
    top3: 0,
    top10: 0,
    top100: 3,
    notRanked: 52,
    gainedPositions: 0,
    lostPositions: 0,
    unchangedPositions: 0,
    backlinks: 12,
    
    rankings: [
      { keyword: 'desentupidora em pinheiros', position: 13, change: 0 },
      { keyword: 'desentupidora em parelheiros', position: 24, change: 0 },
      { keyword: 'encanador mooca', position: 26, change: -9 },
    ],
    
    performance: {
      score: 76,
      carregamento: 'Bom',
      interatividade: 'Ótimo',
      estabilidadeVisual: 'Ótimo',
      pagesScraped: 11,
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
    paginasAnalisadas: 11,
  },
};
