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
    startDate: '15/07/2026',
    endDate: '21/07/2026',
  },
  previousPeriod: {
    startDate: '08/07/2026',
    endDate: '14/07/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 59,
    newUsers: 58,
    engagementTime: '1min 15s',
    pageViews: 65,
    conversions: 2,
    activeUsers30d: 290,
    activeUsers7d: 59,
    activeUsers1d: 9,
    
    dailyActivity: [
      { date: '15/07', users: 8 },
      { date: '16/07', users: 9 },
      { date: '17/07', users: 8 },
      { date: '18/07', users: 8 },
      { date: '19/07', users: 9 },
      { date: '20/07', users: 10 },
      { date: '21/07', users: 7 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 52.5 },
      { name: 'Desktop', percentage: 47.5 },
    ],
    
    os: [
      { name: 'Android', count: 28 },
      { name: 'Windows', count: 22 },
      { name: 'iOS', count: 8 },
      { name: 'Macintosh', count: 1 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 7 },
      { city: 'Rio de Janeiro', count: 6 },
      { city: 'Curitiba', count: 4 },
      { city: 'Florianópolis', count: 2 },
      { city: 'Fortaleza', count: 2 },
      { city: 'Juazeiro do Norte', count: 2 },
      { city: 'Manaus', count: 2 },
    ],
    
    audiences: [
      { name: 'All Users', count: 59 },
      { name: 'Usuários ativos recentemente', count: 38 },
    ],
    
    topPages: [
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 7 },
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', views: 6 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', views: 6 },
      { title: 'Fezes Grandes Entupindo o Vaso: Causas, Prevenção e Soluções', views: 5 },
      { title: 'Caixa de Gordura em Apartamento: Função, Limpeza e Manutenção', views: 3 },
    ],
    
    conversionEvent: {
      name: 'Whatsapp Flutuante',
      count: 2,
    },
    
    topConversionPage: {
      title: 'Desentupidora Guarapari: Soluções no Espírito Santo',
      events: 5,
      conversions: 1,
      engagementTime: '0s',
    },
    
    conversionPages: [
      {
        title: 'Desentupidora Guarapari: Soluções no Espírito Santo',
        events: 5,
        conversions: 1,
        engagementTime: '0s',
      },
      {
        title: 'Quanto Custa Limpar Caixa D\'Água: Preços e Fatores com Solução',
        events: 8,
        conversions: 1,
        engagementTime: '1min 02s',
      },
    ],
  },
  
  gsc: {
    clicks: 36,
    impressions: 6850,
    ctr: 0.5,
    avgPosition: 8.5,
    
    dailyMetrics: [
      { date: '15/07', clicks: 5, impressions: 975, ctr: 0.51, position: 8.4 },
      { date: '16/07', clicks: 5, impressions: 980, ctr: 0.51, position: 8.5 },
      { date: '17/07', clicks: 5, impressions: 975, ctr: 0.51, position: 8.5 },
      { date: '18/07', clicks: 5, impressions: 980, ctr: 0.51, position: 8.6 },
      { date: '19/07', clicks: 5, impressions: 975, ctr: 0.51, position: 8.5 },
      { date: '20/07', clicks: 6, impressions: 985, ctr: 0.61, position: 8.4 },
      { date: '21/07', clicks: 5, impressions: 980, ctr: 0.51, position: 8.5 },
    ],
    
    queriesDown: [
      { query: 'fossa rudimentar', change: 0 },
      { query: 'desentupidora em Guarapari', change: 0 },
    ],
    
    queriesUp: [
      { query: 'soda cáustica derrete plástico', change: 1 },
      { query: 'soda derrete plástico', change: 1 },
      { query: 'caixa de gordura apartamento', change: 1 },
      { query: 'Diabo Verde é melhor que soda cáustica', change: 1 },
    ],
    
    contentsUp: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: 4 },
    ],
    
    contentsDown: [
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', change: -2 },
      { title: 'Fossa Rudimentar: O Que É, Função e Problemas Comuns', change: -2 },
      { title: 'Tubulação de Ventilação de Esgoto: Função e Problemas', change: -2 },
      { title: 'Desentupimento em Imóvel Alugado: Quem Paga e Como Agir', change: -1 },
      { title: 'Cheiro de Esgoto do Nada: Causas, Diagnóstico e Soluções', change: -1 },
    ],
    
    topContents: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 5 },
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', clicks: 4 },
      { title: 'Entupimento: Inquilino vs. Proprietário — Quem Paga a Conta?', clicks: 3 },
      { title: 'Caixa de Gordura em Apartamento: Função, Limpeza e Manutenção', clicks: 3 },
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
    backlinks: 15,
    
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
