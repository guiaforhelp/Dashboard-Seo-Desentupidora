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
    startDate: '10/06/2026',
    endDate: '16/06/2026',
  },
  previousPeriod: {
    startDate: '03/06/2026',
    endDate: '09/06/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 72,
    newUsers: 69,
    engagementTime: '58s',
    pageViews: 100,
    conversions: 3,
    activeUsers30d: 253,
    activeUsers7d: 72,
    activeUsers1d: 13,
    
    dailyActivity: [
      { date: '10/06', users: 10 },
      { date: '11/06', users: 11 },
      { date: '12/06', users: 12 },
      { date: '13/06', users: 13 },
      { date: '14/06', users: 12 },
      { date: '15/06', users: 10 },
      { date: '16/06', users: 4 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 59.7 },
      { name: 'Desktop', percentage: 40.3 },
    ],
    
    os: [
      { name: 'Android', count: 33 },
      { name: 'Windows', count: 28 },
      { name: 'iOS', count: 10 },
      { name: 'Macintosh', count: 1 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 10 },
      { city: 'Rio de Janeiro', count: 5 },
      { city: 'Belo Horizonte', count: 4 },
      { city: 'Bauru', count: 2 },
      { city: 'Brasília', count: 2 },
      { city: 'Manaus', count: 2 },
      { city: 'Ponta Grossa', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 72 },
      { name: 'Usuários ativos recentemente', count: 43 },
    ],
    
    topPages: [
      { title: 'Caça Vazamento Diminua sua Conta de Água', views: 12 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 10 },
      { title: 'O Que é Prumada? Guia para Condomínios', views: 8 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', views: 6 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', views: 5 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 3,
    },
    
    topConversionPage: {
      title: 'Limpa Fossa São Luís Atendimento no Maranhão com Soluções',
      events: 9,
      conversions: 1,
      engagementTime: '21s',
    },
    
    conversionPages: [
      {
        title: 'Limpa Fossa São Luís Atendimento no Maranhão com Soluções',
        events: 9,
        conversions: 1,
        engagementTime: '21s',
      },
      {
        title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional',
        events: 17,
        conversions: 1,
        engagementTime: '48s',
      },
      {
        title: 'Soda Cáustica vs Diabo Verde: Desentupir com Segurança?',
        events: 11,
        conversions: 1,
        engagementTime: '1min 29s',
      },
    ],
  },
  
  gsc: {
    clicks: 53,
    impressions: 8630,
    ctr: 0.6,
    avgPosition: 7.7,
    
    dailyMetrics: [
      { date: '10/06', clicks: 7, impressions: 1230, ctr: 0.57, position: 7.8 },
      { date: '11/06', clicks: 8, impressions: 1240, ctr: 0.64, position: 7.6 },
      { date: '12/06', clicks: 8, impressions: 1235, ctr: 0.65, position: 7.5 },
      { date: '13/06', clicks: 8, impressions: 1225, ctr: 0.65, position: 7.7 },
      { date: '14/06', clicks: 7, impressions: 1220, ctr: 0.57, position: 7.8 },
      { date: '15/06', clicks: 4, impressions: 1210, ctr: 0.33, position: 7.9 },
      { date: '16/06', clicks: 1, impressions: 1240, ctr: 0.08, position: 7.6 },
    ],
    
    queriesDown: [
      { query: 'diabo verde ou soda cáustica', change: -1 },
      { query: 'o que é prumada na construção civil', change: -1 },
      { query: 'soda caustica derrete plastico', change: -1 },
    ],
    
    queriesUp: [
      { query: 'fossa rudimentar', change: 2 },
      { query: 'caixa de gordura entupida inquilino ou proprietário', change: 1 },
      { query: 'diabo verde é soda caustica', change: 1 },
    ],
    
    contentsUp: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: 5 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: 5 },
      { title: 'Entupimento: Inquilino vs. Proprietário — Quem Paga a Conta?', change: 4 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', change: 3 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', change: 3 },
    ],
    
    contentsDown: [
      { title: 'Ar no Encanamento: Causas, Sinais e Soluções Profissionais', change: -3 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', change: -2 },
      { title: 'Tubulação de Ventilação de Esgoto: Função e Problemas', change: -2 },
      { title: 'Fezes Grandes Entupindo o Vaso', change: -2 },
      { title: 'Casas antigas e entupimento', change: -1 },
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
    avgPositionPrevious: 21.5,
    avgPositionCurrent: 20.67,
    top3: 0,
    top10: 0,
    top100: 1,
    notRanked: 54,
    gainedPositions: 1,
    lostPositions: 2,
    unchangedPositions: 52,
    backlinks: 12,
    
    rankings: [
      { keyword: 'desentupidora em pinheiros', position: 13, change: 87 },
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
