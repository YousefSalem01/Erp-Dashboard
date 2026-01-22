import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/utils/helpers';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  route?: string;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  moduleColorClass?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  items, 
  moduleColorClass = 'bg-primary/10 text-primary' 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = item.route === location.pathname;
    const Icon = item.icon;

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            } else if (item.route) {
              navigate(item.route);
            }
          }}
          className={cn(
            'flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all cursor-pointer',
            level > 0 && 'ml-4',
            isActive
              ? moduleColorClass
              : 'text-gray-700 hover:bg-gray-100'
          )}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-4 w-4" />}
            <span>{item.label}</span>
          </div>
          {hasChildren && (
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform',
                isExpanded && 'rotate-180'
              )}
            />
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1 animate-[fadeIn_0.2s_ease-in-out]">
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 border-r bg-white p-4 h-[calc(100vh-4rem)]">
      <nav className="space-y-1">
        {items.map(item => renderItem(item))}
      </nav>
    </aside>
  );
};
