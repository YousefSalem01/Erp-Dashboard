import React from 'react';
import { cn } from '@/utils/helpers';

interface HRMetricsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: number;
  className?: string;
}

export const HRMetricsCard: React.FC<HRMetricsCardProps> = ({
  title,
  value,
  icon,
  trend,
  className,
}) => {
  return (
    <div className={cn(
      'rounded-lg border bg-white p-6 shadow-[var(--shadow-card)]',
      className
    )}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {trend !== undefined && (
            <p className={cn(
              'mt-2 text-sm',
              trend >= 0 ? 'text-success' : 'text-error'
            )}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        {icon && <div className="text-hr">{icon}</div>}
      </div>
    </div>
  );
};
