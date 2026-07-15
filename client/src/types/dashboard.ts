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
    startDate: '08/07/2026',
    endDate: '14/07/2026',
  },
  previousPeriod: {
    startDate: '10/06/2026',
    endDate: '16/06/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 58,
    newUsers: 57,
    engagementTime: '52s',
    pageViews: 73,
    conversions: 4,
    activeUsers30d: 280,
    activeUsers7d: 58,
    activeUsers1d: 12,
    
    dailyActivity: [
      { date: '08/07', users: 10 },
      { date: '09/07', users: 6 },
      { date: '10/07', users: 7 },
      { date: '11/07', users: 7 },
      { date: '12/07', users: 6 },
      { date: '13/07', users: 11 },
      { date: '14/07', users: 12 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 63.8 },
      { name: 'Desktop', percentage: 36.2 },
    ],
    
    os: [
      { name: 'Android', count: 31 },
      { name: 'Windows', count: 20 },
      { name: 'iOS', count: 6 },
      { name: 'Macintosh', count: 1 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 7 },
      { city: 'Curitiba', count: 4 },
      { city: 'Rio de Janeiro', count: 3 },
      { city: 'Florianópolis', count: 2 },
      { city: 'Fortaleza', count: 2 },
      { city: 'Juazeiro do Norte', count: 2 },
      { city: 'Manaus', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 58 },
      { name: 'Usuários ativos recentemente', count: 35 },
    ],
    
    topPages: [
      { title: 'Desentupimento em São Paulo - Desentupidora JD', views: 7 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', views: 7 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 7 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', views: 6 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Soluções Práticas', views: 4 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 4,
    },
    
    topConversionPage: {
      title: 'Desentupimento em São Paulo - Desentupidora JD',
      events: 12,
      conversions: 1,
      engagementTime: '45s',
    },
    
    conversionPages: [
      {
        title: 'Desentupimento em São Paulo - Desentupidora JD',
        events: 12,
        conversions: 1,
        engagementTime: '45s',
      },
      {
        title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções',
        events: 8,
        conversions: 1,
        engagementTime: '38s',
      },
      {
        title: 'Vaso Borbulhando: Sinais, Causas e Soluções Práticas',
        events: 7,
        conversions: 1,
        engagementTime: '52s',
      },
      {
        title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional',
        events: 6,
        conversions: 1,
        engagementTime: '41s',
      },
    ],
  },
  
  gsc: {
    clicks: 39,
    impressions: 7120,
    ctr: 0.5,
    avgPosition: 8.3,
    
    dailyMetrics: [
      { date: '07/07', clicks: 5, impressions: 1015, ctr: 0.49, position: 8.4 },
      { date: '08/07', clicks: 6, impressions: 1020, ctr: 0.59, position: 8.2 },
      { date: '09/07', clicks: 5, impressions: 1010, ctr: 0.49, position: 8.3 },
      { date: '10/07', clicks: 6, impressions: 1025, ctr: 0.59, position: 8.2 },
      { date: '11/07', clicks: 6, impressions: 1015, ctr: 0.59, position: 8.4 },
      { date: '12/07', clicks: 5, impressions: 1010, ctr: 0.49, position: 8.3 },
      { date: '13/07', clicks: 6, impressions: 1025, ctr: 0.59, position: 8.3 },
    ],
    
    queriesDown: [
      { query: 'fossa rudimentar', change: -2 },
      { query: 'caixa de gordura entupida inquilino ou proprietário', change: -1 },
      { query: 'como usar a soda cáustica para desentupir', change: -1 },
      { query: 'como usar soda cáustica', change: -1 },
      { query: 'derretedor de plástico', change: -1 },
    ],
    
    queriesUp: [
      { query: 'soda cáustica corrói plástico', change: 2 },
      { query: 'caixa de gordura apartamento', change: 1 },
      { query: 'caixa de gordura para apartamento', change: 1 },
      { query: 'como desentupir privada com soda cáustica', change: 1 },
      { query: 'desentupidora em Guarapari', change: 1 },
    ],
    
    contentsUp: [
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', change: 12 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Soluções Práticas', change: 7 },
      { title: 'Tubulação de Ventilação de Esgoto: Função e Problemas', change: 2 },
      { title: 'Caixa de Gordura em Apartamento: Função, Limpeza e Manutenção', change: 2 },
      { title: 'Vaso Entupido: Água Não Desce? Causas e Soluções Rápidas', change: 2 },
    ],
    
    contentsDown: [
      { title: 'Entupimento: Inquilino vs. Proprietário — Quem Paga a Conta?', change: -12 },
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', change: -5 },
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', change: -4 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', change: -3 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: -3 },
    ],
    
    topContents: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 5 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 5 },
      { title: 'Entupimento: Inquilino vs. Proprietário — Quem Paga a Conta?', clicks: 4 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', clicks: 3 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', clicks: 3 },
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
    backlinks: 13,
    
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
