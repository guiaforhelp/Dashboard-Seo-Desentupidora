import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  subtitle?: string;
}

export default function KPICard({
  label,
  value,
  icon,
  trend,
  trendValue,
  subtitle,
}: KPICardProps) {
  return (
    <div className="kpi-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="kpi-label">{label}</p>
          <div className="flex items-baseline gap-2 mt-3">
            <p 
              className="kpi-value"
              style={{
                color: '#28495f',
                fontSize: '37px'
              }}
            >
              {value}
            </p>
            {trend && trendValue && (
              <div className="flex items-center gap-1">
                {trend === 'up' && (
                  <div className="flex items-center gap-0.5">
                    <ArrowUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">{trendValue}</span>
                  </div>
                )}
                {trend === 'down' && (
                  <div className="flex items-center gap-0.5">
                    <ArrowDown className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-600">{trendValue}</span>
                  </div>
                )}
                {trend === 'neutral' && (
                  <span className="text-xs font-semibold text-gray-500">{trendValue}</span>
                )}
              </div>
            )}
          </div>
          {subtitle && <p className="text-xs text-gray-500 mt-2">{subtitle}</p>}
        </div>
        {icon && <div className="text-[#ff6737] text-3xl ml-4">{icon}</div>}
      </div>
    </div>
  );
}
