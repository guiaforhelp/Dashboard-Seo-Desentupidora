import { CheckCircle2 } from 'lucide-react';

export default function ActionItemsSection() {
  const actions = [
    'Reotimizar titles e meta descriptions para aumentar CTR',
    'Validar sitemap.xml e corrigir se necessário',
    'Corrigir ou redirecionar página 4XX',
    'Validar performance mobile no PageSpeed Insights',
    'Reotimizar artigos em queda',
    'Inserir CTAs mais fortes nos artigos com tráfego',
    'Criar mais conteúdos locais de fundo de funil para São Paulo',
    'Fortalecer linkagem interna entre artigos técnicos e páginas comerciais',
    'Monitorar conversões via Whatsapp Flutuante',
    'Replicar o padrão das páginas que geram conversão',
  ];

  return (
    <section className="py-12 border-b border-gray-200" style={{display: 'none'}}>
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">Próximas Ações Recomendadas</h2>

        {/* Actions Checklist */}
        <div className="card-premium">
          <div className="space-y-3">
            {actions.map((action, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#ff6737] hover:bg-[#ff6737] hover:text-white transition-colors cursor-pointer">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6737] hover:text-white" />
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
