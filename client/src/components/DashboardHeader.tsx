import { Settings, Download } from 'lucide-react';

interface DashboardHeaderProps {
  period: { startDate: string; endDate: string };
  company: string;
  summary: string;
  onSettings: () => void;
  onDownload: () => void;
}

export default function DashboardHeader({
  period,
  company,
  summary,
  onSettings,
  onDownload,
}: DashboardHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container py-8">
        {/* Header Title */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#203c50] font-poppins mb-2">
              Dashboard SEO Semanal — {company}
            </h1>
            <p className="text-lg text-gray-600">
              Período analisado: {period.startDate} a {period.endDate}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 ml-6">
            <button
              onClick={onSettings}
              className="flex items-center gap-2 px-4 py-2 bg-[#ff6737] text-white rounded-lg hover:bg-[#e55a28] transition-colors duration-200 font-medium"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline">Novos Dados</span>
            </button>
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 bg-[#203c50] text-white rounded-lg hover:bg-[#1a2d3a] transition-colors duration-200 font-medium"
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-[#f2f2f7] to-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
}
