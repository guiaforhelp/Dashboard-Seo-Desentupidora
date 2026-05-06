import { X, Save } from 'lucide-react';
import { useState } from 'react';
import { DashboardData, defaultDashboardData } from '@/types/dashboard';

interface DataInputPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: DashboardData) => void;
}

export default function DataInputPanel({ isOpen, onClose, onSave }: DataInputPanelProps) {
  const [formData, setFormData] = useState<DashboardData>(defaultDashboardData);

  const handleInputChange = (path: string, value: any) => {
    const keys = path.split('.');
    const newData = JSON.parse(JSON.stringify(formData));
    let current = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
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
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-200"
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#203c50] font-poppins">Inserir Novos Dados</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Period */}
          <div>
            <h3 className="text-lg font-semibold text-[#203c50] mb-4">Período</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Data Inicial (DD/MM/YYYY)"
                value={formData.period.startDate}
                onChange={(e) => handleInputChange('period.startDate', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="text"
                placeholder="Data Final (DD/MM/YYYY)"
                value={formData.period.endDate}
                onChange={(e) => handleInputChange('period.endDate', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#203c50] mb-4">Empresa</h3>
            <input
              type="text"
              placeholder="Nome da Empresa"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
            />
          </div>

          {/* GA4 Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-[#203c50] mb-4">Google Analytics 4</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Usuários Ativos"
                value={formData.ga4.activeUsers}
                onChange={(e) => handleInputChange('ga4.activeUsers', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Novos Usuários"
                value={formData.ga4.newUsers}
                onChange={(e) => handleInputChange('ga4.newUsers', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="text"
                placeholder="Tempo Médio (ex: 1 min 44 s)"
                value={formData.ga4.engagementTime}
                onChange={(e) => handleInputChange('ga4.engagementTime', e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Visualizações"
                value={formData.ga4.pageViews}
                onChange={(e) => handleInputChange('ga4.pageViews', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Conversões"
                value={formData.ga4.conversions}
                onChange={(e) => handleInputChange('ga4.conversions', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
            </div>
          </div>

          {/* GSC Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-[#203c50] mb-4">Google Search Console</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Cliques"
                value={formData.gsc.clicks}
                onChange={(e) => handleInputChange('gsc.clicks', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Impressões"
                value={formData.gsc.impressions}
                onChange={(e) => handleInputChange('gsc.impressions', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="CTR (%)"
                step="0.1"
                value={formData.gsc.ctr}
                onChange={(e) => handleInputChange('gsc.ctr', parseFloat(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Posição Média"
                step="0.1"
                value={formData.gsc.avgPosition}
                onChange={(e) => handleInputChange('gsc.avgPosition', parseFloat(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
            </div>
          </div>

          {/* Ubersuggest Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-[#203c50] mb-4">Ubersuggest</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Pontuação SEO"
                value={formData.ubersuggest.seoScore}
                onChange={(e) => handleInputChange('ubersuggest.seoScore', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Tráfego Orgânico Mensal"
                value={formData.ubersuggest.monthlyTraffic}
                onChange={(e) => handleInputChange('ubersuggest.monthlyTraffic', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Palavras-chave Orgânicas"
                value={formData.ubersuggest.organicKeywords}
                onChange={(e) => handleInputChange('ubersuggest.organicKeywords', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
              <input
                type="number"
                placeholder="Backlinks"
                value={formData.ubersuggest.backlinks}
                onChange={(e) => handleInputChange('ubersuggest.backlinks', parseInt(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6737]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#ff6737] text-white rounded-lg hover:bg-[#e55a28] transition-colors font-medium"
            >
              <Save className="w-5 h-5" />
              Salvar e Gerar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
