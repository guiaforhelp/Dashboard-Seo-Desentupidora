// Estilo JD: capa executiva com lockup próprio, gradiente azul-laranja e KPIs de alta hierarquia.
import { Download, Settings, Sparkles } from 'lucide-react';

interface DashboardHeaderProps {
  period: { startDate: string; endDate: string };
  company: string;
  summary: string;
  onSettings: () => void;
  onDownload: () => void;
}

const headerKpis = [
  { label: 'Usuários ativos', value: '55' },
  { label: 'Cliques orgânicos', value: '42' },
  { label: 'Impressões', value: '6,72 mil' },
  { label: 'Eventos principais', value: '1' },
];

export default function DashboardHeader({ period, company, summary, onSettings, onDownload }: DashboardHeaderProps) {
  return (
    <div className="bg-[#f2f2f7] py-6">
      <div className="container">
        <header className="relative flex flex-col gap-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#183347] via-[#274d64] to-[#895838] p-8 shadow-[0_18px_45px_rgba(32,60,80,0.16)] lg:flex-row lg:items-center lg:justify-between">
          <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute -right-2 -bottom-24 h-56 w-56 rounded-full border border-white/10" />
          <div className="relative z-10 flex-1 lg:pr-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6737] font-poppins text-sm font-bold text-white shadow-lg">JD</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold tracking-[0.12em] text-white"><Sparkles className="h-3.5 w-3.5 text-[#ff6737]" />RELATÓRIO EXECUTIVO · SEO &amp; IA</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-[-0.035em] text-white md:text-[56px]" style={{ fontFamily: "'Poppins', sans-serif" }}>{company}</h1>
            <p className="max-w-md text-sm leading-relaxed text-gray-200">Últimos 7 dias ({period.startDate} a {period.endDate}) — inteligência de SEO, IA generativa e oportunidades comerciais para São Paulo.</p>
            <p className="sr-only">{summary}</p>
            <div className="mt-6 flex gap-3"><button onClick={onSettings} className="flex items-center gap-2 rounded-lg bg-[#ff6737] px-4 py-2 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-[#e55a28]"><Settings className="h-5 w-5" /><span>Novos Dados</span></button><button onClick={onDownload} className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-[#203c50] shadow-lg transition-colors duration-200 hover:bg-gray-100"><Download className="h-5 w-5" /><span>Download</span></button></div>
          </div>
          <div className="relative z-10 grid w-full grid-cols-2 gap-4 lg:w-auto">{headerKpis.map((kpi) => <div key={kpi.label} className="rounded-xl border border-white/25 bg-white/10 p-4 text-center backdrop-blur-sm"><p className="mb-2 text-xs font-semibold tracking-wide text-gray-200">{kpi.label.toUpperCase()}</p><p className="text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{kpi.value}</p></div>)}</div>
        </header>
      </div>
    </div>
  );
}
