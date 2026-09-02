// Estilo JD: módulo independente de IA generativa com azul profundo, detalhes laranja e leitura clara de origem separada.
import { Bot, BrainCircuit, Globe2, MapPin, MonitorSmartphone, SearchCheck, Sparkles } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DashboardData } from '@/types/dashboard';

interface GenerativeAISectionProps { data: DashboardData['gsc']['generativeAI']; }

const deviceColors = ['#203c50', '#ff6737', '#f0b44d'];

function formatNumber(value: number) { return value.toLocaleString('pt-BR'); }

export default function GenerativeAISection({ data }: GenerativeAISectionProps) {
  return (
    <section className="border-b border-gray-200 py-12">
      <div className="container">
        <div className="overflow-hidden rounded-[28px] border border-[#203c50] bg-[#203c50] p-6 text-white shadow-[0_14px_35px_rgba(32,60,80,0.12)] md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide"><BrainCircuit className="h-4 w-4 text-[#ff6737]" />GOOGLE SEARCH CONSOLE · RECORTE SEPARADO</div>
              <h2 className="font-poppins text-3xl font-bold tracking-tight md:text-4xl">Informações da IA generativa</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">Dados de presença em recursos de IA generativa do Google. Este recorte mostra impressões e dimensões disponíveis na exportação; não representa tráfego adicional a ser somado ao desempenho orgânico tradicional.</p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"><Sparkles className="h-5 w-5 text-[#ff6737]" />25/08 a 31/08</div>
          </div>
        </div>

        <div className="-mt-1 grid grid-cols-1 gap-4 bg-[#edf1f3] px-1 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#dbe5ec] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Impressões em IA generativa</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{formatNumber(data.impressions)}</p></div>
          <div className="rounded-xl border border-[#dbe5ec] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">País predominante</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{data.primaryCountry}</p></div>
          <div className="rounded-xl border border-[#dbe5ec] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Impressões do Brasil</p><p className="mt-2 text-3xl font-bold text-[#203c50]">{formatNumber(data.brazilImpressions)}</p></div>
          <div className="rounded-xl border border-[#dbe5ec] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Participação do Brasil</p><p className="mt-2 text-3xl font-bold text-[#ff6737]">{data.brazilShare.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%</p></div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-premium">
            <div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-blue-100 p-3 text-[#203c50]"><SearchCheck className="h-5 w-5" /></div><div><h3 className="section-subtitle mb-0">Tendência diária de impressões</h3><p className="text-xs text-gray-500">Presença em recursos de IA generativa</p></div></div>
            <ResponsiveContainer width="100%" height={280}><LineChart data={data.dailyImpressions} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" /><XAxis dataKey="date" stroke="#74808a" fontSize={12} /><YAxis stroke="#74808a" fontSize={12} /><Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe6ea', borderRadius: '10px' }} formatter={(value) => [`${value} impressões`, 'IA generativa']} /><Line type="monotone" dataKey="impressions" stroke="#ff6737" strokeWidth={3} dot={{ fill: '#ff6737', r: 4 }} activeDot={{ r: 6 }} /></LineChart></ResponsiveContainer>
          </div>
          <div className="card-premium">
            <div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-[#fff0eb] p-3 text-[#ff6737]"><MonitorSmartphone className="h-5 w-5" /></div><div><h3 className="section-subtitle mb-0">Dispositivos</h3><p className="text-xs text-gray-500">Distribuição das impressões em IA generativa</p></div></div>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2"><ResponsiveContainer width="100%" height={210}><PieChart><Pie data={data.devices} dataKey="impressions" nameKey="name" cx="50%" cy="50%" innerRadius={48} outerRadius={78} paddingAngle={3}>{data.devices.map((_, index) => <Cell key={`ai-device-${index}`} fill={deviceColors[index]} />)}</Pie><Tooltip formatter={(value) => `${value} impressões`} contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe6ea', borderRadius: '10px' }} /></PieChart></ResponsiveContainer><div className="space-y-3">{data.devices.map((device, index) => <div key={device.name} className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ backgroundColor: deviceColors[index] }} /><span className="text-sm text-gray-700">{device.name}</span></div><span className="text-sm font-bold text-[#203c50]">{formatNumber(device.impressions)} · {device.percentage.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%</span></div>)}</div></div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="card-premium lg:col-span-2"><div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-blue-100 p-3 text-[#203c50]"><Globe2 className="h-5 w-5" /></div><div><h3 className="section-subtitle mb-0">Países</h3><p className="text-xs text-gray-500">Origem das impressões registradas</p></div></div><ResponsiveContainer width="100%" height={265}><BarChart data={data.countries} layout="vertical" margin={{ top: 4, right: 25, left: 85, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" /><XAxis type="number" stroke="#74808a" fontSize={12} /><YAxis dataKey="country" type="category" stroke="#74808a" fontSize={12} width={80} /><Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #dfe6ea', borderRadius: '10px' }} formatter={(value) => [`${value} impressões`, 'IA generativa']} /><Bar dataKey="impressions" fill="#203c50" radius={[0, 7, 7, 0]} /></BarChart></ResponsiveContainer></div>
          <div className="card-premium lg:col-span-3"><div className="mb-5 flex items-center gap-3"><div className="rounded-lg bg-[#fff0eb] p-3 text-[#ff6737]"><MapPin className="h-5 w-5" /></div><div><h3 className="section-subtitle mb-0">Páginas mais exibidas em IA generativa</h3><p className="text-xs text-gray-500">Conteúdos com maior volume de impressões no recorte</p></div></div><div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-sm"><thead className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500"><tr><th className="pb-3 font-semibold">Página</th><th className="pb-3 text-right font-semibold">Impressões</th></tr></thead><tbody>{data.pages.map((page, index) => <tr key={page.title} className="border-b border-gray-100 last:border-0"><td className="py-3 pr-5 font-medium text-[#203c50]"><span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0eb] text-xs font-bold text-[#ff6737]">{index + 1}</span>{page.title}</td><td className="py-3 text-right text-lg font-bold text-[#203c50]">{formatNumber(page.impressions)}</td></tr>)}</tbody></table></div></div>
        </div>

        <div className="card-premium border border-blue-200 bg-blue-50"><div className="flex items-start gap-3"><Bot className="mt-0.5 h-5 w-5 shrink-0 text-[#203c50]" /><p className="text-sm leading-relaxed text-[#203c50]"><strong>Leitura:</strong> a presença em IA generativa é majoritariamente brasileira e mobile. Os conteúdos sobre fossa rudimentar, prumada, soda e vaso sanitário concentram a maior parte das impressões e devem receber links internos para serviços relacionados em São Paulo.</p></div></div>
      </div>
    </section>
  );
}
