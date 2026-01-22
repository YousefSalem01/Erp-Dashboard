import { Users, UserPlus, Calendar, Clock, DollarSign, FileText, Settings } from 'lucide-react';
import type { SidebarItem } from '@/components/Sidebar/Sidebar';

export const hrMenuItems: SidebarItem[] = [
  {
    id: 'employees',
    label: 'Employees',
    icon: Users,
    children: [
      { id: 'all-employees', label: 'All Employees', route: '/hr/employees' },
      { id: 'add-employee', label: 'Add Employee', route: '/hr/employees/new' },
      { id: 'departments', label: 'Departments', route: '/hr/departments' },
    ],
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    icon: UserPlus,
    children: [
      { id: 'job-postings', label: 'Job Postings', route: '/hr/recruitment/jobs' },
      { id: 'applications', label: 'Applications', route: '/hr/recruitment/applications' },
      { id: 'interviews', label: 'Interviews', route: '/hr/recruitment/interviews' },
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: Clock,
    children: [
      { id: 'daily-attendance', label: 'Daily Attendance', route: '/hr/attendance/daily' },
      { id: 'attendance-reports', label: 'Reports', route: '/hr/attendance/reports' },
    ],
  },
  {
    id: 'leave',
    label: 'Leave Management',
    icon: Calendar,
    children: [
      { id: 'leave-requests', label: 'Leave Requests', route: '/hr/leave/requests' },
      { id: 'leave-balance', label: 'Leave Balance', route: '/hr/leave/balance' },
      { id: 'holidays', label: 'Holidays', route: '/hr/leave/holidays' },
    ],
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: DollarSign,
    children: [
      { id: 'salary', label: 'Salary', route: '/hr/payroll/salary' },
      { id: 'payslips', label: 'Payslips', route: '/hr/payroll/payslips' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: FileText,
    route: '/hr/documents',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    route: '/hr/settings',
  },
];
