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
    <div className="bg-[#f2f2f7] py-6">
      <div className="container">
        <div className="bg-gradient-to-r from-[#203c50] via-[#2a4d63] to-[#8b5a3c] rounded-[32px] p-8 flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 pr-8">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white bg-opacity-20 text-white text-xs font-bold tracking-wider rounded-full border border-white border-opacity-30">
                RELATÓRIO SEO PREMIUM
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {company}
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm leading-relaxed max-w-md">
              Últimos 7 dias ({period.startDate} a {period.endDate}) — visão executiva, clara e orientada a performance, com foco em tráfego, visibilidade, conversão e oportunidades de crescimento orgânico.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={onSettings}
                className="flex items-center gap-2 px-4 py-2 bg-[#ff6737] text-white rounded-lg hover:bg-[#e55a28] transition-colors duration-200 font-medium shadow-lg"
              >
                <Settings className="w-5 h-5" />
                <span>Novos Dados</span>
              </button>
              <button
                onClick={onDownload}
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#203c50] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Right KPI Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Usuários Ativos */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
              <p className="text-gray-300 text-xs font-semibold tracking-wide mb-2">USUÁRIOS ATIVOS</p>
              <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>47</p>
            </div>

            {/* Cliques Orgânicos */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
              <p className="text-gray-300 text-xs font-semibold tracking-wide mb-2">CLIQUES ORGÂNICOS</p>
              <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>30</p>
            </div>

            {/* Impressões */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
              <p className="text-gray-300 text-xs font-semibold tracking-wide mb-2">IMPRESSÕES</p>
              <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>7.04 mil</p>
            </div>

            {/* Conversões */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 text-center">
              <p className="text-gray-300 text-xs font-semibold tracking-wide mb-2">CONVERSÕES</p>
              <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
