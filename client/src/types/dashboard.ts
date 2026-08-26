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
    topPages: Array<{ title: string; views: number; reading?: string }>;
    conversionEvent: {
      name: string;
      count: number;
    };
  };

  gsc: {
    clicks: number;
    impressions: number;
    ctr: number;
    ctrPrevious: number;
    ctrChangePp: number;
    avgPosition: number;
    avgPositionPrevious: number;
    avgPositionImprovement: number;
    dailyMetrics: Array<{
      date: string;
      clicks: number;
      impressions: number;
      ctr: number;
      position: number;
    }>;
    queriesUp: Array<{ query: string; change: number; clicks?: number }>;
    queriesDown: Array<{ query: string; change: number }>;
    contentsUp: Array<{ title: string; change: number; clicks?: number }>;
    contentsDown: Array<{ title: string; change: number }>;
    topContents: Array<{ title: string; clicks: number }>;
  };

  ubersuggest: {
    organicKeywords: number;
    organicKeywordsChange: string;
    estimatedOrganicTraffic: number;
    estimatedTrafficChange: string;
    backlinks: number;
    backlinksChange: string;
    estimatedTrafficValue: string;
    estimatedTrafficValueChange: string;
    trackedAveragePosition: number;
    historicalAveragePosition: number;
    trackedKeywords: number;
    totalTrackedKeywords: number;
    keywordsUp: number;
    keywordsDown: number;
    keywordsUnchanged: number;
    top3: number;
    top10: number;
    top100: number;
    notRanked: number;
    aiVisibility: {
      brandVisibility: number;
      chatgptVisibility: number;
      sentiment: string;
      chatgptSentiment: string;
    };
  };
}

export const defaultDashboardData: DashboardData = {
  period: {
    startDate: '19/08/2026',
    endDate: '25/08/2026',
  },
  previousPeriod: {
    startDate: '12/08/2026',
    endDate: '18/08/2026',
  },
  company: 'Desentupidora JD',

  ga4: {
    activeUsers: 72,
    newUsers: 70,
    engagementTime: '46s',
    pageViews: 82,
    conversions: 4,
    activeUsers30d: 279,
    activeUsers7d: 72,
    activeUsers1d: 22,
    dailyActivity: [],
    devices: [
      { name: 'Desktop', percentage: 51.4 },
      { name: 'Mobile', percentage: 48.6 },
    ],
    os: [
      { name: 'Windows', count: 36 },
      { name: 'Android', count: 24 },
      { name: 'iOS', count: 11 },
      { name: 'Chrome OS', count: 1 },
    ],
    locations: [
      { city: 'São Paulo', count: 15 },
      { city: 'Rio de Janeiro', count: 5 },
      { city: 'Brasília', count: 4 },
      { city: 'Fortaleza', count: 3 },
      { city: 'Belo Horizonte', count: 2 },
      { city: 'Campinas', count: 2 },
      { city: 'Cascavel', count: 2 },
    ],
    audiences: [],
    topPages: [
      { title: 'Page not found - Desentupidora JD', views: 11, reading: 'Alerta técnico prioritário' },
      { title: 'Prumada: O Que É, Sua Função e Manutenção', views: 9, reading: 'Conteúdo com potencial para condomínios' },
      { title: 'Fezes Grandes Entupindo o Vaso', views: 7, reading: 'Conteúdo informativo com potencial comercial' },
      { title: 'Quanto Custa Limpar Caixa D’Água', views: 4, reading: 'Busca de preço/intenção comercial' },
      { title: 'Soda Cáustica Derrete Cano?', views: 4, reading: 'Conteúdo de risco e prevenção' },
      { title: 'Bueiros Entupidos', views: 3, reading: 'Tema complementar' },
      { title: 'Como usar soda cáustica', views: 3, reading: 'Tema complementar' },
    ],
    conversionEvent: {
      name: 'Eventos principais (telefone e WhatsApp)',
      count: 4,
    },
  },

  gsc: {
    clicks: 35,
    impressions: 7070,
    ctr: 0.5,
    ctrPrevious: 0.3,
    ctrChangePp: 0.2,
    avgPosition: 8.8,
    avgPositionPrevious: 9.9,
    avgPositionImprovement: 1.1,
    dailyMetrics: [],
    queriesUp: [
      { query: 'desentupidora de fossa', clicks: 1, change: 1 },
      { query: 'diabo verde ou soda cáustica para desentupir', clicks: 1, change: 1 },
    ],
    queriesDown: [
      { query: 'fossa rudimentar', change: -2 },
      { query: 'qual a diferença entre fossa séptica e rudimentar', change: -1 },
      { query: 'sentir cheiro de esgoto', change: -1 },
    ],
    contentsUp: [
      { title: 'Prumada de Esgoto: O Que É, Função e Manutenção Essencial', clicks: 4, change: 4 },
      { title: 'Fezes Grandes Entupindo o Vaso', clicks: 3, change: 3 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Diagnóstico', clicks: 3, change: 3 },
      { title: 'Desentupimento em São Paulo', clicks: 2, change: 2 },
      { title: 'Inquilino Reclama de Entupimento', clicks: 2, change: 2 },
    ],
    contentsDown: [
      { title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção', change: -4 },
      { title: 'Quanto Custa Limpar Fossa? Preços e Serviço Profissional', change: -2 },
      { title: 'Artigo sobre inquilino reclama de entupimento inesperado', change: -1 },
      { title: 'Cheiro de Esgoto do Nada? Entenda as Causas e Soluções', change: -1 },
      { title: 'Vaso Entupido: Água Não Desce? Guia para Solucionar em SP', change: -1 },
    ],
    topContents: [
      { title: 'Prumada de Esgoto: O Que É, Função e Manutenção Essencial', clicks: 4 },
      { title: 'Fezes Grandes Entupindo o Vaso', clicks: 3 },
      { title: 'Vaso Borbulhando: Sinais, Causas e Diagnóstico', clicks: 3 },
      { title: 'Desentupimento em São Paulo', clicks: 2 },
      { title: 'Inquilino Reclama de Entupimento', clicks: 2 },
    ],
  },

  ubersuggest: {
    organicKeywords: 168,
    organicKeywordsChange: '+9,1%',
    estimatedOrganicTraffic: 246,
    estimatedTrafficChange: '-4,3%',
    backlinks: 53,
    backlinksChange: '+55,9%',
    estimatedTrafficValue: 'US$ 49,35',
    estimatedTrafficValueChange: '-8,9%',
    trackedAveragePosition: 29,
    historicalAveragePosition: 35,
    trackedKeywords: 55,
    totalTrackedKeywords: 125,
    keywordsUp: 0,
    keywordsDown: 1,
    keywordsUnchanged: 54,
    top3: 0,
    top10: 0,
    top100: 0,
    notRanked: 55,
    aiVisibility: {
      brandVisibility: 17,
      chatgptVisibility: 16.67,
      sentiment: 'Neutro',
      chatgptSentiment: '100% neutro',
    },
  },
};
