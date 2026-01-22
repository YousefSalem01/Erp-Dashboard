import { createBrowserRouter } from 'react-router-dom';
import { hrRoutes } from '@/modules/hr/routes/hrRoutes';

export const router = createBrowserRouter([
  ...hrRoutes,
  // Other module routes will be added here
]);
