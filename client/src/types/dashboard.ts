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
    activeUsers30d?: number;
    activeUsers7d?: number;
    activeUsers1d?: number;
    dailyActivity: Array<{ date: string; users: number }>;
    devices: Array<{ name: string; percentage: number }>;
    os: Array<{ name: string; count: number }>;
    locations: Array<{ city: string; count: number }>;
    audiences: Array<{ name: string; count: number }>;
    topPages: Array<{ title: string; views: number; reading?: string }>;
    conversionPages: Array<{
      title: string;
      mainEvents: number;
      share: number;
      totalEvents: number;
      engagementTime: string;
    }>;
    conversionEvent: {
      name: string;
      count: number;
    };
  };

  gsc: {
    clicks: number;
    clicksChange: string;
    impressions: number;
    impressionsChange: string;
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
    queriesUp: Array<{ query: string; change: number; clicks?: number; changeLabel?: string }>;
    queriesDown: Array<{ query: string; change: number }>;
    contentsUp: Array<{ title: string; change: number; clicks?: number; changeLabel?: string }>;
    contentsDown: Array<{ title: string; change: number }>;
    topContents: Array<{ title: string; clicks: number }>;
    generativeAI: {
      impressions: number;
      primaryCountry: string;
      brazilImpressions: number;
      brazilShare: number;
      dailyImpressions: Array<{ date: string; impressions: number }>;
      devices: Array<{ name: string; impressions: number; percentage: number }>;
      countries: Array<{ country: string; impressions: number }>;
      pages: Array<{ title: string; impressions: number }>;
    };
  };

  ubersuggest: {
    organicKeywords: number;
    organicKeywordsChange: string;
    estimatedOrganicTraffic: number;
    estimatedTrafficChange: string;
    domainAuthority: number;
    backlinks: number;
    backlinksChange: string;
    paidKeywords: number;
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
    top100Change: string;
    notRanked: number;
    notRankedChange: string;
    aiVisibility: {
      brandVisibility: number;
      chatgptVisibility: number;
      shareOfVoice: number;
      chatgptShareOfVoice: number;
      sentiment: string;
      chatgptSentiment: string;
    };
  };
}

export const defaultDashboardData: DashboardData = {
  period: {
    startDate: '26/08/2026',
    endDate: '01/09/2026',
  },
  previousPeriod: {
    startDate: '19/08/2026',
    endDate: '25/08/2026',
  },
  company: 'Desentupidora JD',

  ga4: {
    activeUsers: 55,
    newUsers: 55,
    engagementTime: '1min32s',
    pageViews: 74,
    conversions: 1,
    dailyActivity: [
      { date: '26/08', users: 13 },
      { date: '27/08', users: 5 },
      { date: '28/08', users: 9 },
      { date: '29/08', users: 9 },
      { date: '30/08', users: 6 },
      { date: '31/08', users: 10 },
      { date: '01/09', users: 5 },
    ],
    devices: [],
    os: [],
    locations: [],
    audiences: [],
    topPages: [
      { title: 'Page not found - Desentupidora JD', views: 8, reading: 'Alerta técnico prioritário' },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', views: 5, reading: 'Conteúdo informativo em alta' },
      { title: 'O Que é Prumada? Guia para Condomínios e Edifícios', views: 5, reading: 'Conteúdo com potencial para condomínios' },
      { title: 'Quanto Custa Limpar Caixa D’Água', views: 5, reading: 'Busca com intenção de preço' },
      { title: 'Fezes Grandes Entupindo o Vaso', views: 4, reading: 'Conteúdo informativo recorrente' },
      { title: 'Quanto Custa Limpa Fossa?', views: 4, reading: 'Busca com intenção comercial' },
      { title: 'Soda Cáustica no Vaso Sanitário', views: 4, reading: 'Conteúdo de prevenção e risco' },
    ],
    conversionPages: [],
    conversionEvent: {
      name: 'link e-mail GA4',
      count: 1,
    },
  },

  gsc: {
    clicks: 42,
    clicksChange: '+20%',
    impressions: 6720,
    impressionsChange: '-5%',
    ctr: 0.6,
    ctrPrevious: 0.5,
    ctrChangePp: 0.1,
    avgPosition: 8.6,
    avgPositionPrevious: 8.8,
    avgPositionImprovement: 0.2,
    dailyMetrics: [],
    queriesUp: [
      { query: 'prumada', clicks: 2, change: 2, changeLabel: 'Anteriormente 0' },
      { query: 'fossa entupida inquilino ou proprietário', clicks: 1, change: 1, changeLabel: 'Anteriormente 0' },
      { query: 'fossa rudimentar', clicks: 1, change: 1, changeLabel: 'Anteriormente 0' },
      { query: 'quanto custa pra esvaziar uma fossa', clicks: 1, change: 1, changeLabel: 'Anteriormente 0' },
      { query: 'soda cáustica derrete pvc', clicks: 1, change: 1, changeLabel: 'Anteriormente 0' },
    ],
    queriesDown: [
      { query: 'desentupidora de fossa', change: -1 },
      { query: 'diabo verde ou soda cáustica para desentupir', change: -1 },
    ],
    contentsUp: [
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', clicks: 5, change: 5, changeLabel: 'Anteriormente 0' },
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', clicks: 4, change: 300, changeLabel: '+300%' },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', clicks: 4, change: 100, changeLabel: '+100%' },
      { title: 'O Que é Prumada? Guia para Condomínios e Edifícios', clicks: 3, change: 200, changeLabel: '+200%' },
      { title: 'Quanto Custa Limpar Caixa D’Água', clicks: 3, change: 50, changeLabel: '+50%' },
    ],
    contentsDown: [
      { title: 'Prumada de Esgoto: O Que É, Função e Manutenção Essencial', change: -3 },
      { title: 'Desentupimento em São Paulo - Desentupidora JD', change: -2 },
      { title: 'Ralo Fazendo Barulho: O Que Significa em Tubulações', change: -2 },
      { title: 'Fezes Grandes Entupindo o Vaso', change: -1 },
      { title: 'Soda Cáustica no Vaso Sanitário: Riscos e Alternativas Seguras', change: -1 },
    ],
    topContents: [
      { title: 'Quanto Custa Limpa Fossa? Preços e Serviço Profissional', clicks: 5 },
      { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', clicks: 4 },
      { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', clicks: 4 },
      { title: 'O Que é Prumada? Guia para Condomínios e Edifícios', clicks: 3 },
      { title: 'Quanto Custa Limpar Caixa D’Água', clicks: 3 },
    ],
    generativeAI: {
      impressions: 1074,
      primaryCountry: 'Brasil',
      brazilImpressions: 1046,
      brazilShare: 97.4,
      dailyImpressions: [
        { date: '25/08', impressions: 189 },
        { date: '26/08', impressions: 181 },
        { date: '27/08', impressions: 160 },
        { date: '28/08', impressions: 137 },
        { date: '29/08', impressions: 74 },
        { date: '30/08', impressions: 115 },
        { date: '31/08', impressions: 218 },
      ],
      devices: [
        { name: 'Celular', impressions: 755, percentage: 70.3 },
        { name: 'Computador', impressions: 311, percentage: 29 },
        { name: 'Tablet', impressions: 8, percentage: 0.7 },
      ],
      countries: [
        { country: 'Brasil', impressions: 1046 },
        { country: 'Portugal', impressions: 12 },
        { country: 'Estados Unidos', impressions: 6 },
        { country: 'Índia', impressions: 2 },
        { country: 'Ucrânia', impressions: 2 },
      ],
      pages: [
        { title: 'Fossa Rudimentar: O Que É, Funcionamento e Manutenção', impressions: 300 },
        { title: 'O Que é Prumada? Guia para Condomínios e Edifícios', impressions: 117 },
        { title: 'Diabo Verde vs Soda: Qual a Melhor Escolha para Desentupir?', impressions: 108 },
        { title: 'Prumada: O Que É, Sua Função e Manutenção Preventiva', impressions: 90 },
        { title: 'Fezes Grandes Entupindo o Vaso', impressions: 77 },
      ],
    },
  },

  ubersuggest: {
    organicKeywords: 196,
    organicKeywordsChange: '+16,7%',
    estimatedOrganicTraffic: 273,
    estimatedTrafficChange: '+11,0%',
    domainAuthority: 10,
    backlinks: 59,
    backlinksChange: '+11,3%',
    paidKeywords: 0,
    trackedAveragePosition: 67,
    historicalAveragePosition: 26.75,
    trackedKeywords: 55,
    totalTrackedKeywords: 125,
    keywordsUp: 0,
    keywordsDown: 4,
    keywordsUnchanged: 51,
    top3: 0,
    top10: 0,
    top100: 1,
    top100Change: '-75%',
    notRanked: 54,
    notRankedChange: '+6%',
    aiVisibility: {
      brandVisibility: 17,
      chatgptVisibility: 16.67,
      shareOfVoice: 5,
      chatgptShareOfVoice: 5,
      sentiment: 'Neutro',
      chatgptSentiment: '100% neutro',
    },
  },
};
