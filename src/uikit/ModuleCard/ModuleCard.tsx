import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type LucideIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/helpers';

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  route: string;
  colorClass?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  icon: Icon,
  title,
  description,
  route,
  colorClass = 'text-hr bg-hr/10',
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-xl border-2 border-gray-200',
        'bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300',
        'hover:border-primary hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1'
      )}
    >
      {/* Icon Container */}
      <div className={cn('mb-4 inline-flex rounded-lg p-3', colorClass)}>
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>

      {/* Hover Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <ChevronRight className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
};
