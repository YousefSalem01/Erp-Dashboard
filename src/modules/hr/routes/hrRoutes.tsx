import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const EmployeesPage = lazy(() => import('../pages/Employees/Employees'));

export const hrRoutes: RouteObject[] = [
  {
    path: '/hr',
    children: [
      {
        path: 'employees',
        element: <EmployeesPage />,
      },
    ],
  },
];
