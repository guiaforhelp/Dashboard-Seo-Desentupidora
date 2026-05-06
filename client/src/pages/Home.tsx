import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import GA4Section from '@/components/GA4Section';
import GSCSection from '@/components/GSCSection';
import UbersuggestSection from '@/components/UbersuggestSection';
import InsightsSection from '@/components/InsightsSection';
import ActionItemsSection from '@/components/ActionItemsSection';
import ExecutiveSummarySection from '@/components/ExecutiveSummarySection';
import DataInputPanel from '@/components/DataInputPanel';
import { DashboardData, defaultDashboardData } from '@/types/dashboard';
import { generateHTMLContent, downloadHTML } from '@/lib/exportHTML';

export default function Home() {
  const [dashboardData, setDashboardData] = useState<DashboardData>(defaultDashboardData);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSaveData = (newData: DashboardData) => {
    setDashboardData(newData);
  };

  const handleDownload = () => {
    const htmlContent = generateHTMLContent(dashboardData);
    const filename = `Dashboard_SEO_${dashboardData.company.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.html`;
    downloadHTML(htmlContent, filename);
  };

  const summary = `No período analisado, o site registrou ${dashboardData.ga4.activeUsers} usuários ativos, ${dashboardData.ga4.pageViews} visualizações e ${dashboardData.ga4.conversions} conversões via Whatsapp Flutuante. O Google Search Console registrou ${dashboardData.gsc.clicks} cliques e ${dashboardData.gsc.impressions.toLocaleString('pt-BR')} impressões, com CTR média de ${dashboardData.gsc.ctr}% e posição média de ${dashboardData.gsc.avgPosition.toFixed(1)}. A auditoria técnica aponta atenção para performance mobile, sitemap.xml e uma página 4XX.`;

  return (
    <div className="min-h-screen bg-[#f2f2f7]">
      {/* Header */}
      <DashboardHeader
        period={dashboardData.period}
        company={dashboardData.company}
        summary={summary}
        onSettings={() => setIsPanelOpen(true)}
        onDownload={handleDownload}
      />

      {/* Main Content */}
      <main className="py-12">
        {/* GA4 Section */}
        <GA4Section data={dashboardData.ga4} />

        {/* GSC Section */}
        <GSCSection data={dashboardData.gsc} />

        {/* Ubersuggest Section */}
        <UbersuggestSection data={dashboardData.ubersuggest} />

        {/* Insights Section */}
        <InsightsSection />

        {/* Action Items Section */}
        <ActionItemsSection />

        {/* Executive Summary Section */}
        <ExecutiveSummarySection />
      </main>

      {/* Data Input Panel */}
      <DataInputPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onSave={handleSaveData}
      />
    </div>
  );
}
