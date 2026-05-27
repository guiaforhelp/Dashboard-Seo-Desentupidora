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
      analyzed: number;
    };
  };

  // Comparison data
  comparison?: {
    ga4: {
      activeUsers: { previous: number; current: number };
      newUsers: { previous: number; current: number };
      engagementTime: { previous: string; current: string };
      pageViews: { previous: number; current: number };
      conversions: { previous: number; current: number };
    };
    gsc: {
      clicks: { previous: number; current: number };
      impressions: { previous: number; current: number };
      ctr: { previous: number; current: number };
      avgPosition: { previous: number; current: number };
    };
    ubersuggest: {
      avgPosition: { previous: number; current: number };
      gainedPositions: { previous: number; current: number };
      lostPositions: { previous: number; current: number };
      unchangedPositions: { previous: number; current: number };
      top100: { previous: number; current: number };
      notRanked: { previous: number; current: number };
    };
  };
}

export const defaultDashboardData: DashboardData = {
  period: {
    startDate: '20/05/2026',
    endDate: '26/05/2026',
  },
  previousPeriod: {
    startDate: '13/05/2026',
    endDate: '19/05/2026',
  },
  company: 'Desentupidora JD',
  
  ga4: {
    activeUsers: 62,
    newUsers: 58,
    engagementTime: '42s',
    pageViews: 78,
    conversions: 3,
    activeUsers30d: 214,
    activeUsers7d: 62,
    activeUsers1d: 9,
    
    dailyActivity: [
      { date: '20/05', users: 8 },
      { date: '21/05', users: 9 },
      { date: '22/05', users: 10 },
      { date: '23/05', users: 11 },
      { date: '24/05', users: 12 },
      { date: '25/05', users: 6 },
      { date: '26/05', users: 6 },
    ],
    
    devices: [
      { name: 'Mobile', percentage: 61.3 },
      { name: 'Desktop', percentage: 38.7 },
    ],
    
    os: [
      { name: 'Android', count: 31 },
      { name: 'Windows', count: 24 },
      { name: 'iOS', count: 7 },
    ],
    
    locations: [
      { city: 'São Paulo', count: 13 },
      { city: 'Belo Horizonte', count: 3 },
      { city: 'Rio de Janeiro', count: 3 },
      { city: 'Jundiaí', count: 2 },
      { city: 'Salvador', count: 2 },
      { city: 'São Bernardo do Campo', count: 2 },
      { city: 'Altamira', count: 1 },
    ],
    
    audiences: [
      { name: 'All Users', count: 62 },
      { name: 'Usuários ativos recentemente', count: 35 },
    ],
    
    topPages: [
      { title: 'Qual papel higiênico pode jogar no vaso', views: 6 },
      { title: 'Inquilino Reclama de Entupimento', views: 5 },
      { title: 'Caça Vazamento Diminua sua Conta de Água', views: 4 },
      { title: 'Desentupimento em Imóvel Alugado', views: 4 },
      { title: 'Desentupimento em São Paulo', views: 4 },
      { title: 'Fezes Grandes Entupindo o Vaso', views: 4 },
      { title: 'Fossa Séptica: Funcionamento e Manutenção', views: 4 },
    ],
    
    conversionEvent: {
      name: 'botão whatsapp GA4 (2) + whatsapp fixed (1)',
      count: 3,
    },
    
    topConversionPage: {
      title: 'Caça Vazamento em São Bernardo do Campo Serviço Ágil',
      events: 11,
      conversions: 2,
      engagementTime: '1min 54s',
    },
    
    conversionPages: [
      {
        title: 'Caça Vazamento em São Bernardo do Campo Serviço Ágil',
        events: 11,
        conversions: 2,
        engagementTime: '1min 54s',
      },
      {
        title: 'Caça Vazamento Diminua sua Conta de Água',
        events: 10,
        conversions: 1,
        engagementTime: '32s',
      },
    ]
  },
  
  gsc: {
    clicks: 43,
    impressions: 8.37,
    ctr: 0.5,
    avgPosition: 8.4,
    
    dailyMetrics: [
      { date: '20/05', clicks: 6, impressions: 1200, ctr: 0.5, position: 8.3 },
      { date: '21/05', clicks: 7, impressions: 1250, ctr: 0.56, position: 8.2 },
      { date: '22/05', clicks: 6, impressions: 1100, ctr: 0.55, position: 8.4 },
      { date: '23/05', clicks: 8, impressions: 1400, ctr: 0.57, position: 8.5 },
      { date: '24/05', clicks: 9, impressions: 1500, ctr: 0.6, position: 8.6 },
      { date: '25/05', clicks: 4, impressions: 900, ctr: 0.44, position: 8.3 },
      { date: '26/05', clicks: 3, impressions: 1000, ctr: 0.3, position: 8.4 },
    ],
    
    queriesUp: [
      { query: 'como usar soda caustica', change: 1 },
      { query: 'derretedor de plástico', change: 1 },
      { query: 'qual papel higiênico pode jogar no vaso', change: 1 },
      { query: 'quanto custa limpeza de fossa', change: 1 },
    ],
    
    queriesDown: [
      { query: 'desentupidora em blumenau', change: -1 },
      { query: 'diabo verde ou soda cáustica', change: -1 },
      { query: 'fossa rudimentar o que é', change: -1 },
      { query: 'quanto custa para esvaziar uma fossa', change: -1 },
      { query: 'vaso entupido é responsabilidade do inquilino ou proprietário', change: -1 },
    ],
    
    contentsUp: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', change: 4 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', change: 3 },
      { title: 'Qual papel higiênico pode jogar no vaso', change: 3 },
      { title: 'Ralo Fazendo Barulho O Que Significa em Tubulações', change: 3 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', change: 2 },
    ],
    
    contentsDown: [
      { title: 'Soda Cáustica e Plástico: Evite Danos em Tubulações', change: -4 },
      { title: 'Soda Cáustica Derrete Cano? Guia para Evitar Danos', change: -3 },
      { title: 'Fossa Negra: Funcionamento, Riscos e Manutenção', change: -2 },
      { title: 'Bueiros Entupidos? Veja as Principais Soluções', change: -1 },
      { title: 'Ações pós-entupimento', change: -1 },
    ],
    
    topContents: [
      { title: 'Inquilino Reclama de Entupimento: O Que Fazer e Quem Paga', clicks: 4 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', clicks: 3 },
      { title: 'Qual papel higiênico pode jogar no vaso', clicks: 3 },
      { title: 'Ralo Fazendo Barulho O Que Significa em Tubulações', clicks: 3 },
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', clicks: 2 },
    ],
  },
  
  ubersuggest: {
    avgPositionPrevious: 17.8,
    avgPositionCurrent: 21.5,
    top3: 0,
    top10: 0,
    top100: 2,
    notRanked: 53,
    gainedPositions: 2,
    lostPositions: 0,
    unchangedPositions: 53,
    backlinks: 13,
    
    topKeywords: [
      {
        keyword: 'encanador na mooca',
        position: 13,
        change: 87,
        volume: 170,
        difficulty: 7,
      },
      {
        keyword: 'encanador mooca',
        position: 30,
        change: 70,
        volume: 170,
        difficulty: 7,
      },
    ],
  },
  
  technicalSeo: {
    performance: {
      mobileLoad: 'Bom',
      mobileInteractivity: 'Bom',
      mobileStability: 'Ótimo',
      desktopLoad: 'Ótimo',
      desktopInteractivity: 'Ótimo',
      desktopStability: 'Ótimo',
    },
    
    issues: [
      { title: 'Problemas Técnicos Encontrados', count: 2 },
      { title: 'Páginas Analisadas', count: 45 },
    ],
    pagesScraped: {
      total: 45,
      analyzed: 45,
    },
  },

  comparison: {
    ga4: {
      activeUsers: { previous: 59, current: 62 },
      newUsers: { previous: 59, current: 58 },
      engagementTime: { previous: '53s', current: '42s' },
      pageViews: { previous: 61, current: 78 },
      conversions: { previous: 1, current: 3 },
    },
    gsc: {
      clicks: { previous: 39, current: 43 },
      impressions: { previous: 8.51, current: 8.37 },
      ctr: { previous: 0.5, current: 0.5 },
      avgPosition: { previous: 8.5, current: 8.4 },
    },
    ubersuggest: {
      avgPosition: { previous: 17.8, current: 21.5 },
      gainedPositions: { previous: 5, current: 2 },
      lostPositions: { previous: 1, current: 0 },
      unchangedPositions: { previous: 49, current: 53 },
      top100: { previous: 5, current: 2 },
      notRanked: { previous: 50, current: 53 },
    },
  },
};
