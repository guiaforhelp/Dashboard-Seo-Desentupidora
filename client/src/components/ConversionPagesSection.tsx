import { DashboardData } from '@/types/dashboard';

interface ConversionPagesSectionProps {
  data: DashboardData['ga4'];
}

/**
 * A coleta de 19 a 25/08/2026 não trouxe a relação de páginas de origem dos
 * eventos principais. O componente permanece disponível para futuras coletas,
 * mas não apresenta uma tabela sem fonte verificável.
 */
export default function ConversionPagesSection(_props: ConversionPagesSectionProps) {
  return null;
}
