import { Users, DollarSign, Package, FileText, Settings, BarChart3, ShoppingCart } from 'lucide-react';

export const modules = [
  {
    icon: Users,
    title: 'Human Resources',
    description: 'Manage employees, payroll, attendance, and recruitment',
    route: '/hr',
    colorClass: 'text-hr bg-hr/10',
  },
  {
    icon: DollarSign,
    title: 'Finance',
    description: 'Handle accounting, invoices, and financial reports',
    route: '/finance',
    colorClass: 'text-finance bg-finance/10',
  },
  {
    icon: Package,
    title: 'Inventory',
    description: 'Track stock, warehouses, and product management',
    route: '/inventory',
    colorClass: 'text-amber-500 bg-amber-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'Sales',
    description: 'Manage orders, customers, and sales pipeline',
    route: '/sales',
    colorClass: 'text-purple-500 bg-purple-500/10',
  },
  {
    icon: FileText,
    title: 'Documents',
    description: 'Store and organize company documents',
    route: '/documents',
    colorClass: 'text-cyan-500 bg-cyan-500/10',
  },
  {
    icon: BarChart3,
    title: 'Reports',
    description: 'View analytics and generate business reports',
    route: '/reports',
    colorClass: 'text-rose-500 bg-rose-500/10',
  },
  {
    icon: Settings,
    title: 'Settings',
    description: 'Configure system preferences and user access',
    route: '/settings',
    colorClass: 'text-slate-500 bg-slate-500/10',
  },
];
