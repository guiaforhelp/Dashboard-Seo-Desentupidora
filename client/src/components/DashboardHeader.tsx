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
    <div className="sticky top-0 z-40 bg-[#f2f2f7] py-4">
      <div className="container">
        <div className="bg-gradient-to-r from-[#203c50] via-[#2a4d63] to-[#1a2d3a] rounded-[32px] p-8">
          {/* Header Title */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white font-poppins mb-2">
                Dashboard SEO Semanal — {company}
              </h1>
              <p className="text-lg text-gray-300">
                Período analisado: {period.startDate} a {period.endDate}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 ml-6">
              <button
                onClick={onSettings}
                className="flex items-center gap-2 px-4 py-2 bg-[#ff6737] text-white rounded-lg hover:bg-[#e55a28] transition-colors duration-200 font-medium shadow-lg"
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Novos Dados</span>
              </button>
              <button
                onClick={onDownload}
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#203c50] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20" style={{backgroundColor: '#213d50'}}>
            <p className="text-gray-100 leading-relaxed">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
