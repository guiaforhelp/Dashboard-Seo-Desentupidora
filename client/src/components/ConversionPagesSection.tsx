// Estilo JD: tabela executiva clara para identificar as páginas que originaram os eventos principais do GA4.
import { MousePointerClick } from 'lucide-react';
import { DashboardData } from '@/types/dashboard';

interface ConversionPagesSectionProps {
  data: DashboardData['ga4'];
}

export default function ConversionPagesSection({ data }: ConversionPagesSectionProps) {
  if (data.conversionPages.length === 0) return null;

  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title mb-1">Páginas com Eventos Principais</h2>
            <p className="text-sm text-gray-600">Origem dos {data.conversions} cliques de telefone e WhatsApp registrados no GA4.</p>
          </div>
          <div className="hidden rounded-lg bg-[#fff0eb] p-3 text-[#ff6737] md:block"><MousePointerClick className="h-6 w-6" /></div>
        </div>

        <div className="card-premium overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#203c50] text-xs uppercase tracking-wide text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Página</th>
                  <th className="px-5 py-4 text-center font-semibold">Eventos principais</th>
                  <th className="px-5 py-4 text-center font-semibold">Participação</th>
                  <th className="px-5 py-4 text-center font-semibold">Eventos totais</th>
                  <th className="px-5 py-4 text-center font-semibold">Engajamento médio</th>
                </tr>
              </thead>
              <tbody>
                {data.conversionPages.map((page) => (
                  <tr key={page.title} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-5 font-semibold text-[#203c50]">{page.title}</td>
                    <td className="px-5 py-5 text-center text-xl font-bold text-[#ff6737]">{page.mainEvents}</td>
                    <td className="px-5 py-5 text-center font-semibold text-[#203c50]">{page.share}%</td>
                    <td className="px-5 py-5 text-center text-gray-700">{page.totalEvents}</td>
                    <td className="px-5 py-5 text-center text-gray-700">{page.engagementTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t border-[#ffd7c9] bg-[#fff5f0] px-6 py-4 text-sm leading-relaxed text-[#70321d]"><strong>Leitura:</strong> os eventos principais representam cliques/interações rastreados. Eles devem ser validados com o atendimento comercial antes de serem tratados como leads qualificados.</div>
        </div>
      </div>
    </section>
  );
}
