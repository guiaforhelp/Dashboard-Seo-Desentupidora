import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function KPICard({
  label,
  value,
  icon,
  subtitle,
}: KPICardProps) {
  return (
    <div className="kpi-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="kpi-label">{label}</p>
          <p 
            className="kpi-value mt-3"
            style={{
              color: '#28495f',
              fontSize: '37px'
            }}
          >
            {value}
          </p>
          {subtitle && <p className="text-xs text-gray-500 mt-2">{subtitle}</p>}
        </div>
        {icon && <div className="text-[#ff6737] text-3xl ml-4">{icon}</div>}
      </div>
    </div>
  );
}
