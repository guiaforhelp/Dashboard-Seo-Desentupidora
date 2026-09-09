export interface DashboardData {
  period: { startDate: string; endDate: string };
  previousPeriod?: { startDate: string; endDate: string };
  company: string;
  ga4: {
    activeUsers: number;
    newUsers: number;
    engagementTime: string;
    pageViews: number;
    conversions: number;
    activeUsers30d?: number;
    activeUsers7d?: number;
    activeUsers1d?: number;
    dailyActivity: Array<{ date: string; users: number }>;
    devices: Array<{ name: string; percentage: number }>;
    os: Array<{ name: string; count: number }>;
    locations: Array<{ city: string; count: number }>;
    audiences: Array<{ name: string; count: number }>;
    topPages: Array<{ title: string; views: number; reading?: string }>;
    conversionPages: Array<{ title: string; mainEvents: number; share: number; totalEvents: number; engagementTime: string }>;
    conversionEvent: { name: string; count: number };
  };
  gsc: {
    clicks: number;
    clicksChange: string;
    impressions: number;
    impressionsChange: string;
    ctr: number;
    ctrPrevious: number;
    ctrChange: string;
    avgPosition: number;
    avgPositionPrevious: number;
    avgPositionChange: string;
    dailyMetrics: Array<{ date: string; clicks: number; impressions: number; ctr: number; position: number }>;
    queries: Array<{ query: string; clicks?: number; impressions: number; position: number }>;
    contents: Array<{ title: string; clicks: number; impressions: number }>;
  };
  ubersuggest: {
    organicKeywords: number;
    domainAuthority: number;
    backlinks: number;
    trackedAveragePosition: number;
    evolutionDate: string;
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
      shareOfVoice: number;
      chatgptShareOfVoice: number;
      mentions: number;
      sentiment: string;
      chatgptSentiment: string;
    };
  };
}

export const defaultDashboardData: DashboardData = {
  period: { startDate: '02/09/2026', endDate: '08/09/2026' },
  previousPeriod: { startDate: '26/08/2026', endDate: '01/09/2026' },
  company: 'Desentupidora JD',
  ga4: {
    activeUsers: 46,
    newUsers: 46,
    engagementTime: '56s',
    pageViews: 53,
    conversions: 1,
    activeUsers30d: 243,
    activeUsers7d: 46,
    activeUsers1d: 9,
    dailyActivity: [],
    devices: [],
    os: [],
    locations: [],
    audiences: [],
    topPages: [
      { title: 'Fezes Grandes Entupindo o Vaso', views: 6 },
      { title: 'O Que é Prumada?', views: 6 },
      { title: 'Soda Cáustica no Vaso', views: 6 },
      { title: 'Prumada de Esgoto', views: 3 },
      { title: 'Caixa de Gordura em Apartamento', views: 2 },
      { title: 'Caça Vazamento Diminua sua Conta de Água', views: 2 },
      { title: 'Como usar soda cáustica', views: 2 },
      { title: 'Página inicial', views: 2 },
      { title: 'Inquilino Reclama de Entupimento', views: 2 },
      { title: 'Bueiros Entupidos?', views: 1 },
    ],
    conversionPages: [],
    conversionEvent: { name: 'botão whatsapp GA4', count: 1 },
  },
  gsc: {
    clicks: 27,
    clicksChange: '-35,7%',
    impressions: 6120,
    impressionsChange: '-8,9%',
    ctr: 0.4,
    ctrPrevious: 0.6,
    ctrChange: '-0,2',
    avgPosition: 9.2,
    avgPositionPrevious: 8.6,
    avgPositionChange: '+0,6',
    dailyMetrics: [
      { date: '02/09', clicks: 5, impressions: 1112, ctr: 0.45, position: 10.56 },
      { date: '03/09', clicks: 4, impressions: 914, ctr: 0.44, position: 10.89 },
      { date: '04/09', clicks: 5, impressions: 766, ctr: 0.65, position: 8.25 },
      { date: '05/09', clicks: 1, impressions: 654, ctr: 0.15, position: 9.12 },
      { date: '06/09', clicks: 3, impressions: 564, ctr: 0.53, position: 8.22 },
    ],
    queries: [
      { query: 'prumada de esgoto', clicks: 1, impressions: 20, position: 6.7 },
      { query: 'fossa rudimentar', impressions: 120, position: 1.21 },
      { query: 'prumada', impressions: 103, position: 7.68 },
      { query: 'o que é fossa rudimentar', impressions: 26, position: 5 },
      { query: 'soda caustica derrete plastico', impressions: 26, position: 2.85 },
      { query: 'diabo verde e soda caustica é a mesma coisa', impressions: 23, position: 7.78 },
      { query: 'limpa fossa preço', impressions: 20, position: 26.45 },
      { query: 'soda cáustica derrete cano de pvc', impressions: 20, position: 8.55 },
      { query: 'limpeza de fossa preço', impressions: 19, position: 11.26 },
      { query: 'desentupimento de fossa', impressions: 18, position: 56.61 },
    ],
    contents: [
      { title: 'Prumada de Esgoto', clicks: 3, impressions: 122 },
      { title: 'Página inicial', clicks: 3, impressions: 23 },
      { title: 'Soda Cáustica e Plástico', clicks: 2, impressions: 173 },
      { title: 'O Que é Prumada?', clicks: 1, impressions: 321 },
      { title: 'Prumada', clicks: 1, impressions: 218 },
      { title: 'Fezes Grandes Entupindo o Vaso', clicks: 1, impressions: 171 },
      { title: 'Caixa de Gordura em Apartamento', clicks: 1, impressions: 54 },
      { title: 'Soda Cáustica no Vaso', clicks: 1, impressions: 47 },
      { title: 'Fossa Negra', clicks: 1, impressions: 37 },
      { title: 'Papel no Vaso', clicks: 1, impressions: 29 },
    ],
  },
  ubersuggest: {
    organicKeywords: 196,
    domainAuthority: 10,
    backlinks: 66,
    trackedAveragePosition: 67,
    evolutionDate: '02/09/2026',
    trackedKeywords: 55,
    totalTrackedKeywords: 125,
    keywordsUp: 0,
    keywordsDown: 0,
    keywordsUnchanged: 55,
    top3: 0,
    top10: 0,
    top100: 1,
    notRanked: 54,
    aiVisibility: {
      brandVisibility: 0,
      chatgptVisibility: 0,
      shareOfVoice: 0,
      chatgptShareOfVoice: 0,
      mentions: 0,
      sentiment: 'Indisponível',
      chatgptSentiment: 'Indisponível',
    },
  },
};
