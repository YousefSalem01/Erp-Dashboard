import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import HRLayout from '../layouts/HRLayout';
import NotFound from '@/components/NotFound/NotFound';

const HRDashboard = lazy(() => import('../pages/HRDashboard/HRDashboard'));
const EmployeesPage = lazy(() => import('../pages/Employees/Employees'));

export const hrRoutes: RouteObject[] = [
  {
    path: '/hr',
    element: <HRLayout />,
    children: [
      {
        index: true,
        element: <HRDashboard />,
      },
      {
        path: 'employees',
        element: <EmployeesPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
