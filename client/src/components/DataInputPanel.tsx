import { useState } from 'react';
import { Save, X } from 'lucide-react';
import { DashboardData, defaultDashboardData } from '@/types/dashboard';

interface DataInputPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: DashboardData) => void;
}

export default function DataInputPanel({ isOpen, onClose, onSave }: DataInputPanelProps) {
  const [formData, setFormData] = useState<DashboardData>(defaultDashboardData);

  const handleInputChange = (path: string, value: string | number) => {
    const keys = path.split('.');
    const newData = JSON.parse(JSON.stringify(formData)) as DashboardData;
    let current: Record<string, unknown> = newData as unknown as Record<string, unknown>;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] as Record<string, unknown>;
    }

    current[keys[keys.length - 1]] = value;
    setFormData(newData);
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={onClose} />

      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-2xl overflow-y-auto bg-white shadow-2xl animate-slide-in-right">
        <header className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-6">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#203c50]">Inserir Novos Dados</h2>
            <p className="mt-1 text-sm text-gray-500">Atualize os indicadores disponíveis em cada fonte.</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 transition-colors hover:bg-gray-100" aria-label="Fechar painel">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </header>

        <div className="space-y-8 p-6">
          <section>
            <h3 className="mb-4 text-lg font-semibold text-[#203c50]">Período</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Data inicial" value={formData.period.startDate} onChange={(e) => handleInputChange('period.startDate', e.target.value)} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="text" placeholder="Data final" value={formData.period.endDate} onChange={(e) => handleInputChange('period.endDate', e.target.value)} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold text-[#203c50]">Google Analytics 4</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Usuários ativos" value={formData.ga4.activeUsers} onChange={(e) => handleInputChange('ga4.activeUsers', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Novos usuários" value={formData.ga4.newUsers} onChange={(e) => handleInputChange('ga4.newUsers', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="text" placeholder="Tempo médio (ex.: 1min15s)" value={formData.ga4.engagementTime} onChange={(e) => handleInputChange('ga4.engagementTime', e.target.value)} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Visualizações" value={formData.ga4.pageViews} onChange={(e) => handleInputChange('ga4.pageViews', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Eventos principais" value={formData.ga4.conversions} onChange={(e) => handleInputChange('ga4.conversions', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
            </div>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold text-[#203c50]">Google Search Console</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Cliques" value={formData.gsc.clicks} onChange={(e) => handleInputChange('gsc.clicks', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Impressões" value={formData.gsc.impressions} onChange={(e) => handleInputChange('gsc.impressions', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="CTR (%)" step="0.1" value={formData.gsc.ctr} onChange={(e) => handleInputChange('gsc.ctr', parseFloat(e.target.value || '0'))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Posição média" step="0.1" value={formData.gsc.avgPosition} onChange={(e) => handleInputChange('gsc.avgPosition', parseFloat(e.target.value || '0'))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
            </div>
          </section>

          <section>
            <h3 className="mb-1 text-lg font-semibold text-[#203c50]">Ubersuggest e Visibilidade em IA</h3>
            <p className="mb-4 text-xs text-gray-500">Os dados do Ubersuggest são estimativas mensais e indicadores de rastreamento.</p>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Palavras-chave orgânicas" value={formData.ubersuggest.organicKeywords} onChange={(e) => handleInputChange('ubersuggest.organicKeywords', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Tráfego estimado/mês" value={formData.ubersuggest.estimatedOrganicTraffic} onChange={(e) => handleInputChange('ubersuggest.estimatedOrganicTraffic', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Backlinks" value={formData.ubersuggest.backlinks} onChange={(e) => handleInputChange('ubersuggest.backlinks', parseInt(e.target.value || '0', 10))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Posição média rastreada" step="0.01" value={formData.ubersuggest.trackedAveragePosition} onChange={(e) => handleInputChange('ubersuggest.trackedAveragePosition', parseFloat(e.target.value || '0'))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Visibilidade de marca em IA (%)" step="0.01" value={formData.ubersuggest.aiVisibility.brandVisibility} onChange={(e) => handleInputChange('ubersuggest.aiVisibility.brandVisibility', parseFloat(e.target.value || '0'))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="number" placeholder="Visibilidade no ChatGPT (%)" step="0.01" value={formData.ubersuggest.aiVisibility.chatgptVisibility} onChange={(e) => handleInputChange('ubersuggest.aiVisibility.chatgptVisibility', parseFloat(e.target.value || '0'))} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
              <input type="text" placeholder="Sentimento da marca" value={formData.ubersuggest.aiVisibility.sentiment} onChange={(e) => handleInputChange('ubersuggest.aiVisibility.sentiment', e.target.value)} className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#ff6737] focus:outline-none" />
            </div>
          </section>

          <div className="flex gap-4 border-t border-gray-200 pt-6">
            <button onClick={onClose} className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">Cancelar</button>
            <button onClick={handleSave} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#ff6737] px-4 py-3 font-medium text-white transition-colors hover:bg-[#e55a28]">
              <Save className="h-5 w-5" />
              Salvar e Gerar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
